import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { Database } from '../../../database';
import { TEntity } from '../../search/model/types';
import { $user, logout } from '../../user/model';
import { TChat, TChatData, TMessage } from './types';

const getChatsFx = createEffect(
    async ({ userId, chatIds }: { userId: string; chatIds: string[] }) => {
        try {
            const data = await Database.Chats.getChatsByIds(userId, chatIds);

            return data;
        } catch (error) {
            console.log(error);

            throw new Error((error as Error).message);
        }
    }
);

// TODO: оптимизировать, удалив дубликаты, чтобы не делать лишних запросов
const getChatDataFx = createEffect(
    async ({
        chats,
        chatDataObject,
    }: {
        chats: TChat[];
        chatDataObject: Record<string, TEntity>;
    }) => {
        try {
            const allParticipants = chats
                .flatMap((chat) => chat.participants)
                .filter((user) => !chatDataObject[user]);

            const participants = allParticipants.map((userId) => {
                return Database.Users.getUserByUid(userId);
            });

            const res: TEntity[] = (
                await Promise.all([...participants])
            ).flatMap((s) => s);

            return res.reduce(
                (acc, el) => {
                    acc['id' in el ? el.id : el.uid] = el;
                    return acc;
                },
                { ...chatDataObject } as TChatData
            );
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
);

const getCurrentChatMessagesFx = createEffect(
    async ({ chatId }: { chatId: string; messages: TMessage[] }) => {
        try {
            const data = await Database.Chats.getChatMessagesByChatId(chatId);

            return { ...data, messages: data.messages };
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
);

const sendMessageFx = createEffect(
    async ({ chatId, message }: { chatId: string; message: TMessage }) => {
        try {
            // await new Promise((res, rej) => setTimeout(() => res('sa'), 1000));
            await Database.Chats.sendMessage(chatId, message);
            console.log('error never appeared');
        } catch (error) {
            console.log(error);

            throw new Error((error as Error).message);
        }
    }
);

const getTotalUnreadCount = createEvent<TChat[]>();
const setCurrentChatId = createEvent<string | undefined | null>();
const setChatData = createEvent<TChatData>();
const loadPreviousMessages = createEvent();
const sendMessage = createEvent<{ chatId: string; message: TMessage }>();
const updateLastMessage = createEvent<{
    message: TMessage | undefined;
    chatId: string | undefined | null;
}>();
const sortChats = createEvent();
const seenMessage = createEvent<string>();

const $chats = createStore<TChat[]>([]);
const $currentChatId = createStore<string | undefined | null>('');
const $currentChatMessages = createStore<TMessage[]>([]);
const $unreadCounts = createStore<Record<string, number>>({});
const $totalUnreadCount = createStore(0);
const $chatData = createStore<TChatData>({});
const $lastMessage = createStore<{ [chatId: string]: TMessage }>({});
const $firstUnreadMessageId = createStore<string | null>(null);

$chats.reset(logout);
$chatData.reset(logout);
$totalUnreadCount.reset(logout);
$currentChatId.reset(logout);
$currentChatMessages.reset(logout);
$unreadCounts.reset(logout);
$chatData.reset(logout);
$lastMessage.reset(logout);
$firstUnreadMessageId.reset(logout);

const chatGate = createGate();

const $userId = $user.map((user) => user?.data?.uid ?? null);

const getUnreadCount = (unreadCounts: Record<string, number>) => {
    return Object.keys(unreadCounts).reduce((acc, key) => {
        acc += unreadCounts[key];
        return acc;
    }, 0);
};

const $addedChats = $user.map((user) => user?.data?.chats);

sample({
    clock: [chatGate.open, $userId],
    source: {
        gateStatus: chatGate.status,
        userId: $userId,
        chats: $chats,
        addedChats: $addedChats,
    },
    filter: ({ chats, userId, gateStatus, addedChats }) =>
        gateStatus &&
        userId !== null &&
        chats.length === 0 &&
        (addedChats?.length ?? 0) > 0,
    fn: ({ userId, addedChats }) => ({
        userId: userId as string,
        chatIds: addedChats as string[],
    }),
    target: getChatsFx,
});

sample({
    clock: getChatsFx.doneData,
    fn: ({ chats }) => chats,
    target: [$chats, getTotalUnreadCount],
});

sample({
    clock: seenMessage,
    source: { messages: $currentChatMessages, userId: $userId },
    filter: ({ userId }) => !!userId,
    fn: ({ messages, userId }, messageId) => {
        const newMessages = [...messages];

        return newMessages.map((message) => {
            if (message.id === messageId) {
                message.seenBy.push(userId as string);
            }

            return message;
        });
    },
    target: $currentChatMessages,
});

sample({
    clock: getChatsFx.doneData,
    fn: ({ lastMessages }) => lastMessages,
    target: $lastMessage,
});

sample({
    clock: getChatsFx.doneData,
    fn: (data) => data,
    target: getChatDataFx,
});

sample({
    clock: getChatsFx.doneData,
    fn: ({ unreadCount }) => unreadCount,
    target: [$unreadCounts, getTotalUnreadCount],
});

sample({
    clock: getTotalUnreadCount,
    source: $unreadCounts,
    fn: getUnreadCount,
    target: $totalUnreadCount,
});

sample({
    clock: getChatDataFx.doneData,
    target: $chatData,
});

sample({
    clock: sendMessage,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fn: ({ chatId, message: { status, ...message } }) => {
        return { chatId, message };
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
    clock: sendMessageFx.failData,
    source: $currentChatMessages,
    fn: (store): TMessage[] => {
        console.log('sending failed message');

        return store.map((message) => {
            if (message.status === 'pending') {
                return { ...message, status: 'error' };
            }

            return message;
        });
    },
    target: $currentChatMessages,
});

sample({
    clock: sendMessageFx.done,
    source: $currentChatMessages,
    fn: (store, { params }) => {
        return store.map((storeMessage) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { status, ...messageWithoutStatus } = storeMessage;

            if (params.message.id === storeMessage.id) {
                return messageWithoutStatus;
            }

            return storeMessage;
        });
    },
    target: $currentChatMessages,
});

sample({
    clock: $currentChatMessages.updates,
    source: $currentChatId,
    fn: (chatId, messages) => ({ chatId, message: messages.at(-1) }),
    target: updateLastMessage,
});

sample({
    clock: updateLastMessage,
    source: $lastMessage,
    filter: (_, { chatId, message }) => !!message && !!chatId,
    fn: (lastMessage, { chatId, message }) => ({
        ...lastMessage,
        [chatId!]: message!,
    }),
    target: $lastMessage,
});

sample({
    clock: $lastMessage,
    target: sortChats,
});

sample({
    clock: sortChats,
    source: { chats: $chats, lastMessages: $lastMessage },
    fn: ({ chats, lastMessages }) => {
        return chats.sort(
            (a, b) => lastMessages[b.id]?.sentTime - lastMessages[a.id]?.sentTime
        );
    },
    target: $chats,
});

sample({
    clock: setCurrentChatId,
    fn: (id) => id,
    target: $currentChatId,
});

sample({
    clock: setChatData,
    source: $chatData,
    fn: (store, data) => ({ ...store, ...data }),
    target: $chatData,
});

sample({
    clock: $currentChatId,
    filter: (chatId) => chatId?.length !== 0,
    fn: (chatId) => ({
        chatId: chatId!,
        messages: [] as TMessage[],
    }),
    target: getCurrentChatMessagesFx,
});

sample({
    clock: getCurrentChatMessagesFx.doneData,
    fn: ({ chatData }) => chatData,
    target: setChatData,
});

sample({
    clock: getCurrentChatMessagesFx.doneData,
    fn: ({ messages }) => messages,
    target: [$currentChatMessages],
});

sample({
    clock: getCurrentChatMessagesFx.doneData,
    source: { currentMessages: $currentChatMessages, userId: $userId },
    filter: ({ userId, currentMessages }) =>
        !!userId && !!currentMessages.length,
    fn: ({ currentMessages, userId }) =>
        currentMessages.find((m) => !m.seenBy.includes(userId as string))?.id ??
        null,
    target: $firstUnreadMessageId,
});

export const chatModel = {
    useChats: () =>
        useUnit({
            chats: $chats,
            loadingChats: getChatsFx.pending,
            currentChatId: $currentChatId,
            currentChatMessages: $currentChatMessages,
            currentChatMessagesLoading: getCurrentChatMessagesFx.pending,
            chatData: $chatData,
            loadingChatData: getChatDataFx.pending,
            lastMessage: $lastMessage,
            unreadCounts: $unreadCounts,
            firstUnreadMessageId: $firstUnreadMessageId,
        }),
    useLoadChats: () => useGate(chatGate),
    useChatUnreadCount: () => useUnit($totalUnreadCount),
    events: {
        setCurrentChatId,
        loadPreviousMessages,
        sendMessage,
        seenMessage,
    },
};
