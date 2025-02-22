import { createEffect, createEvent, createStore, sample } from 'effector';
import { Unsubscribe } from 'firebase/firestore';
import { debounce } from 'patronum';
import { Database } from '../../../database';
import { updateDeepObject } from '../../../shared/funcs/updateDeepObject';
import { $user } from '../../user/model/user';
import { $currentChat, $currentChatId, initialChatLoadFx } from './chats';
import { READ_MESSAGES_COOLDOWN } from './constants';
import { initiallyLoadChatMessagesFx } from './messages';
import { sendMessage } from './send-message';
import { TUnreadCount } from './types';

let unsubscribe: Unsubscribe | null = null;

export const loadInitialUnreadCountFx = createEffect<
    { chatIds: string[]; userId: string },
    TUnreadCount
>();
const subscribeToCurrentChatUnreadFx = createEffect<
    {
        chatId: string;
        userId: string;
    },
    void
>();

const updateLastReadAtFx = createEffect<
    {
        chatId: string;
        userId: string;
        lastReadAt: number;
        messagesReadCount: number;
    },
    void
>();

const updateMaxSeenAt = createEvent<number[]>();
export const updateUnread = createEvent<number>();

export const $userLastReadAt = createStore<number>(Infinity);
export const $messagesReadCount = createStore(0);
export const $unreadCountMap = createStore<TUnreadCount>({});
export const $maxSeenAtInCurrentChat = createStore<number | null>(null);

// Read messages with a delay so that it doesn't spam the server
// while reading a bunch of unread messages
const updateLastReadAt = debounce(updateUnread, READ_MESSAGES_COOLDOWN);

$currentChatId.watch(() => {
    unsubscribe?.();
});

sample({
    clock: $currentChat,
    fn: () => 0,
    target: $messagesReadCount,
});

sample({
    clock: updateUnread,
    source: $messagesReadCount,
    fn: (count) => count + 1,
    target: $messagesReadCount,
});

sample({
    clock: updateUnread,
    source: { currentChat: $currentChat, unreadCountMap: $unreadCountMap },
    filter: ({ currentChat, unreadCountMap }) =>
        !!currentChat && unreadCountMap[currentChat.id]?.unreadCount > 0,
    fn: ({ currentChat, unreadCountMap }) => {
        return updateDeepObject(
            unreadCountMap,
            `${currentChat!.id}.unreadCount`,
            unreadCountMap[currentChat!.id].unreadCount - 1
        );
    },
    target: $unreadCountMap,
});

sample({
    clock: updateUnread,
    source: $userLastReadAt,
    fn: (userLastReadAt, sentTime) => {
        return Math.max(userLastReadAt ?? 0, sentTime);
    },
    target: $userLastReadAt,
});

sample({
    clock: initialChatLoadFx.doneData,
    source: $user,
    filter: (user) => !!user,
    fn: (user, chats) => ({
        userId: user!.uid,
        chatIds: chats.map((c) => c.id),
    }),
    target: loadInitialUnreadCountFx,
});

sample({
    clock: loadInitialUnreadCountFx.doneData,
    target: $unreadCountMap,
});

sample({
    clock: initiallyLoadChatMessagesFx.done,
    source: $unreadCountMap,
    fn: (unreadCountMap, { params: { chatId } }) => {
        if (chatId) {
            const res = unreadCountMap[chatId]?.lastReadAt ?? 0;
            console.log(unreadCountMap, chatId, res);

            return res;
        }

        return Infinity;
    },
    target: $userLastReadAt,
});

sample({
    clock: sendMessage,
    source: $currentChat,
    filter: (currentChat) => !!currentChat,
    fn: (currentChat, { message }) => {
        const res = message(currentChat!).sentTime;

        return res;
    },
    target: $userLastReadAt,
});

sample({
    clock: updateMaxSeenAt,
    fn: (statuses) => Math.max(...statuses),
    target: $maxSeenAtInCurrentChat,
});

sample({
    clock: initiallyLoadChatMessagesFx.done,
    fn: ({ params }) => params,
    target: subscribeToCurrentChatUnreadFx,
});

sample({
    clock: updateLastReadAt,
    source: {
        user: $user,
        userLastReadAt: $userLastReadAt,
        currentChat: $currentChat,
        messagesReadCount: $messagesReadCount,
    },
    filter: ({ currentChat, user, userLastReadAt }) =>
        !!currentChat && !!user && !!userLastReadAt,
    fn: ({ currentChat, user, userLastReadAt, messagesReadCount }) => ({
        chatId: currentChat!.id,
        userId: user!.uid,
        lastReadAt: userLastReadAt!,
        messagesReadCount,
    }),
    target: updateLastReadAtFx,
});

sample({
    clock: updateLastReadAtFx.doneData,
    fn: () => 0,
    target: $messagesReadCount,
});

$messagesReadCount.watch((s) => console.log(s));

loadInitialUnreadCountFx.use(async ({ chatIds, userId }) => {
    const res = await Database.Chats.loadInitialUnreadCount(chatIds, userId);

    return res;
});

updateLastReadAtFx.use(
    async ({ chatId, userId, lastReadAt, messagesReadCount }) => {
        console.log('read messages', messagesReadCount, new Date(lastReadAt));

        await Database.Chats.readMessages(
            chatId,
            userId,
            lastReadAt,
            messagesReadCount
        );
    }
);

subscribeToCurrentChatUnreadFx.use(async ({ chatId, userId }) => {
    unsubscribe = await Database.Chats.subscribeToCurrentChatUnread(
        chatId,
        userId,
        (statuses) => {
            updateMaxSeenAt(statuses.map((status) => status.lastReadAt ?? 0));
        }
    );
});
