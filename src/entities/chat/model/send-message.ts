import { createEffect, createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { $currentChat, insertChats } from './chats';
import { $currentChatMessages, $firstUnreadMessage } from './messages';
import { SendStatus, TChat, TMessage } from './types';

type SendMessageProps = {
    chats: TChat[];
    message: (chat: TChat) => TMessage;
    showToast?: boolean;
    onSuccess?: (message: (chat: TChat) => TMessage) => void;
};

export const sendMessageFx = createEffect<
    SendMessageProps,
    Pick<SendMessageProps, 'chats' | 'message'>,
    Error
>();

export const sendMessage = createEvent<SendMessageProps>();

sample({
    clock: sendMessage,
    fn: ({ chats, message, showToast, onSuccess }) => {
        return { chats, message, showToast, onSuccess };
    },
    target: [sendMessageFx],
});

sample({
    clock: sendMessage,
    source: {
        currentChatMessages: $currentChatMessages,
        currentChat: $currentChat,
    },
    filter: ({ currentChat }) => !!currentChat,
    fn: ({ currentChatMessages, currentChat }, { message }) => [
        ...currentChatMessages,
        message(currentChat!),
    ],
    target: $currentChatMessages,
});

// sort chats locally when message is sending
sample({
    clock: sendMessage,
    fn: ({ message, chats }) => {
        const newChats = chats.map((ch) => {
            const lastMessage = message(ch!);

            return { ...ch, lastMessage };
        }) as TChat[];

        return newChats;
    },
    target: insertChats,
});

// Reset unread message whem you send a message
sample({
    clock: sendMessage,
    source: {
        firstUnreadMessage: $firstUnreadMessage,
        currentChat: $currentChat,
    },
    filter: ({ currentChat, firstUnreadMessage }) =>
        !!firstUnreadMessage && !!currentChat,
    fn: () => null,
    target: $firstUnreadMessage,
});

// sort chats locally when message is sent
sample({
    clock: sendMessageFx.done,
    source: {
        currentChatMessages: $currentChatMessages,
        currentChat: $currentChat,
    },
    fn: (_, { params: { message, chats } }) => {
        const newChats = chats.map((ch) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { status, ...lastMessage } = message(ch!);

            return { ...ch, lastMessage };
        }) as TChat[];

        return newChats;
    },
    target: insertChats,
});

sample({
    clock: sendMessageFx.done,
    source: {
        currentChatMessages: $currentChatMessages,
        currentChat: $currentChat,
    },
    filter: ({ currentChat }) => !!currentChat,
    fn: ({ currentChatMessages, currentChat }, { params }) => {
        const newMessages = [...currentChatMessages];

        for (let index = currentChatMessages.length - 1; index >= 0; index--) {
            const message = currentChatMessages[index];
            console.log(message.id, params.message(currentChat!).id);

            if (message.id === params.message(currentChat!).id) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { status, ...messageWithoutPendingStatus } = message;
                newMessages[index] = messageWithoutPendingStatus;
                break;
            }
        }

        return newMessages;
    },
    target: $currentChatMessages,
});

sample({
    clock: sendMessageFx.failData,
    source: $currentChatMessages,
    fn: (store): TMessage[] => {
        console.log('sending failed message');

        return store.map((message) => {
            if (message.status === SendStatus.pending) {
                return { ...message, status: SendStatus.error };
            }

            return message;
        });
    },
    target: $currentChatMessages,
});

sendMessageFx.done.watch(({ params }) => {
    if (params.showToast) {
        toastModel.events.add({
            type: 'success',
            message: 'Message sent',
        });
    }
});

sendMessageFx.failData.watch((err) => {
    toastModel.events.add({
        type: 'error',
        reason: err.message,
        message: 'Failed to send message',
    });
});

sendMessageFx.use(async ({ chats, message, onSuccess }) => {
    try {
        await Database.Chats.sendMessage(chats, message);
        onSuccess?.(message);
        return { chats, message };
    } catch (error) {
        throw new Error((error as Error).message);
    }
});
