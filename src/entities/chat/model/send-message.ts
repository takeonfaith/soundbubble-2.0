import { createEffect, createEvent, sample } from 'effector';
import { toastModel } from '../../../layout/toast/model';
import { SendStatus, TMessage } from './types';
import { Database } from '../../../database';
import { $currentChatMessages } from './messages';

type SendMessageProps = {
    chatIds: string[];
    message: TMessage;
    showToast?: boolean;
    onSuccess?: (message: TMessage) => void;
};

export const sendMessageFx = createEffect<
    SendMessageProps,
    { chatIds: string[]; message: TMessage },
    Error
>();

export const sendMessage = createEvent<{
    chatIds: string[];
    message: TMessage;
    showToast?: boolean;
    onSuccess?: (message: TMessage) => void;
}>();

sample({
    clock: sendMessage,
    fn: ({
        chatIds,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        message: { status, ...message },
        showToast,
        onSuccess,
    }) => {
        return { chatIds, message, showToast, onSuccess };
    },
    target: [sendMessageFx],
});

sample({
    clock: sendMessage,
    source: $currentChatMessages,
    fn: (store, { message }) => [...store, message],
    target: $currentChatMessages,
});

sample({
    clock: sendMessageFx.done,
    source: $currentChatMessages,
    fn: (messages, { params }) => {
        const newMessages = [...messages];
        for (let index = messages.length - 1; index > 0; index--) {
            const message = messages[index];
            console.log(message, params.message);

            if (message.id === params.message.id) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { status, ...messageWithoutPendingStatus } = message;
                newMessages[index] = messageWithoutPendingStatus;
                break;
            }
        }
        console.log(newMessages);

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

sendMessageFx.use(async ({ chatIds, message, onSuccess }) => {
    try {
        await Database.Chats.sendMessage(chatIds, message);
        onSuccess?.(message);
        return { chatIds, message };
    } catch (error) {
        throw new Error((error as Error).message);
    }
});
