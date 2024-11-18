import { createEffect, createEvent, createStore, sample } from 'effector';
import { debounce } from 'patronum';
import { Database } from '../../../database';
import { $user, logout } from '../../user/model';
import { TUser } from '../../user/model/types';
import { $currentChat, initialChatLoadFx } from './chats';
import { TChat, TMessage, TUnreadCount } from './types';
import { $currentChatMessages } from './messages';
import { READ_MESSAGES_COOLDOWN } from './constants';

type LoadInitialUnreadCountProps = { chats: TChat[]; user: TUser };

export const loadInitialUnreadCountFx = createEffect<
    LoadInitialUnreadCountProps,
    TUnreadCount,
    Error
>();

const readMessagesFx = createEffect<
    { chat: TChat; messageIds: string[]; userId: string },
    void,
    Error
>();

export const updateUnread = createEvent<string>();
export const updateUnreadMessages = createEvent();

const $messagesToRead = createStore<string[]>([]);

debounce(updateUnread, READ_MESSAGES_COOLDOWN).watch(() => {
    console.log('updateUnread delayed');
    updateUnreadMessages();
});

export const $chatTotalUnreadCountMap = createStore<TUnreadCount>({});

$chatTotalUnreadCountMap.reset(logout);

sample({
    clock: initialChatLoadFx.doneData,
    source: { user: $user },
    filter: ({ user }, chats) => chats.length > 0 && !!user,
    fn: ({ user }, chats) => ({ chats, user: user! }),
    target: loadInitialUnreadCountFx,
});

sample({
    clock: loadInitialUnreadCountFx.doneData,
    target: $chatTotalUnreadCountMap,
});

sample({
    clock: updateUnread,
    source: { messages: $currentChatMessages, user: $user },
    filter: ({ user, messages }) => !!messages.length && !!user,
    fn: ({ user, messages }, id) => {
        return messages.map((m) => {
            if (m.id === id) {
                return {
                    ...m,
                    unreadBy: m?.unreadBy
                        ? m?.unreadBy?.filter((u) => u !== user!.uid)
                        : [],
                    isRead: true,
                };
            } else return m;
        }) as TMessage[];
    },
    target: $currentChatMessages,
});

sample({
    clock: updateUnread,
    source: {
        currentChat: $currentChat,
        chatTotalUnreadCountMap: $chatTotalUnreadCountMap,
    },
    filter: ({ currentChat, chatTotalUnreadCountMap }) => {
        return !!currentChat && chatTotalUnreadCountMap[currentChat.id] > 0;
    },
    fn: ({ chatTotalUnreadCountMap, currentChat }) => {
        const res = {
            ...chatTotalUnreadCountMap,
            [currentChat!.id]: chatTotalUnreadCountMap[currentChat!.id] - 1,
        };

        if (!res[currentChat!.id]) {
            delete res[currentChat!.id];
        }

        return res;
    },
    target: $chatTotalUnreadCountMap,
});

sample({
    clock: updateUnread,
    source: {
        messagesToRead: $messagesToRead,
        currentChat: $currentChat,
        user: $user,
    },
    filter: ({ user, currentChat }) => !!user && !!currentChat,
    fn: ({ messagesToRead }, id) => [...messagesToRead, id],
    target: $messagesToRead,
});

sample({
    clock: updateUnreadMessages,
    source: {
        messagesToRead: $messagesToRead,
        currentChat: $currentChat,
        user: $user,
    },
    filter: ({ user, currentChat, messagesToRead }) =>
        !!user && !!currentChat && messagesToRead.length > 0,
    fn: ({ currentChat, user, messagesToRead }) => ({
        chat: currentChat!,
        userId: user!.uid,
        messageIds: messagesToRead,
    }),
    target: readMessagesFx,
});

sample({
    clock: readMessagesFx.doneData,
    fn: () => [],
    target: $messagesToRead,
});

loadInitialUnreadCountFx.use(async ({ chats, user }) => {
    // const totalUnreadCount = await Database.Chats.loadInitialUnreadCount(
    //     chats,
    //     user
    // );

    // return totalUnreadCount;
});

readMessagesFx.use(async ({ messageIds, chat, userId }) => {
    console.log(messageIds);

    await Database.Chats.readMessages(chat, messageIds, userId);
});
