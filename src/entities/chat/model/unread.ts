import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { $user } from '../../user/model';
import { TUser } from '../../user/model/types';
import { $chats, $currentChat } from './chats';
import { TChat, TMessage, TUnreadCount } from './types';
import { $currentChatMessages } from './messages';
import { debounce } from 'patronum';

type LoadInitialUnreadCountProps = { chats: TChat[]; user: TUser };

const loadInitialUnreadCountFx = createEffect<
    LoadInitialUnreadCountProps,
    TUnreadCount,
    Error
>();

const readMessagesFx = createEffect<
    { chatId: string; messageIds: string[]; userId: string },
    void,
    Error
>();

export const updateUnread = createEvent<string>();
export const updateUnreadMessages = createEvent();

const $messagesToRead = createStore<string[]>([]);

debounce(updateUnread, 2000).watch(() => {
    updateUnreadMessages();
});

export const $chatTotalUnreadCountMap = createStore<TUnreadCount>({});

sample({
    clock: [$chats, $user],
    source: { user: $user, chats: $chats },
    filter: ({ user, chats }) => chats.length > 0 && !!user,
    fn: ({ user, chats }) => ({ chats, user: user! }),
    target: loadInitialUnreadCountFx,
});

sample({
    clock: loadInitialUnreadCountFx.doneData,
    target: $chatTotalUnreadCountMap,
});

// sample({
//     clock: updateUnread,
//     source: { messages: $currentChatMessages, user: $user },
//     filter: ({ user }) => !!user,
//     fn: ({ user, messages }, id) => {
//         return messages.map((m) => {
//             if (m.id === id)
//                 return {
//                     ...m,
//                     unreadBy: m?.unreadBy?.filter((u) => u !== user!.uid) ?? [],
//                 };
//         }) as TMessage[];
//     },
//     target: $currentChatMessages,
// });

// sample({
//     clock: updateUnread,
//     source: {
//         currentChat: $currentChat,
//         chatTotalUnreadCountMap: $chatTotalUnreadCountMap,
//     },
//     filter: ({ currentChat, chatTotalUnreadCountMap }) => {
//         return !!currentChat && chatTotalUnreadCountMap[currentChat.id] > 0;
//     },
//     fn: ({ chatTotalUnreadCountMap, currentChat }) => ({
//         ...chatTotalUnreadCountMap,
//         [currentChat!.id]: chatTotalUnreadCountMap[currentChat!.id] - 1,
//     }),
//     target: $chatTotalUnreadCountMap,
// });

// sample({
//     clock: updateUnread,
//     source: {
//         messagesToRead: $messagesToRead,
//         currentChat: $currentChat,
//         user: $user,
//     },
//     filter: ({ user, currentChat }) => !!user && !!currentChat,
//     fn: ({ messagesToRead }, id) => [...messagesToRead, id],
//     target: $messagesToRead,
// });

// sample({
//     clock: updateUnreadMessages,
//     source: {
//         messagesToRead: $messagesToRead,
//         currentChat: $currentChat,
//         user: $user,
//     },
//     filter: ({ user, currentChat }) => !!user && !!currentChat,
//     fn: ({ currentChat, user, messagesToRead }) => ({
//         chatId: currentChat!.id,
//         userId: user!.uid,
//         messageIds: messagesToRead,
//     }),
//     target: readMessagesFx,
// });

loadInitialUnreadCountFx.use(async ({ chats, user }) => {
    const totalUnreadCount = await Database.Chats.loadInitialUnreadCount(
        chats,
        user
    );

    return totalUnreadCount;
});

readMessagesFx.use(async ({ messageIds, chatId, userId }) => {
    await Database.Chats.readMessages(chatId, messageIds, userId);
});
