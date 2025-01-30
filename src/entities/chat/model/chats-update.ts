import { sample } from 'effector';
import { updateDeepObject } from '../../../shared/funcs/updateDeepObject';
import { $user } from '../../user/model/user';
import { insertChatsSorted } from '../lib/insertChatsSorted';
import { notOnlyTyping } from '../lib/notOnlyTyping';
import { $cache } from './cache';
import { showNotificationFx } from './chat-notifications';
import { $chats, $currentChat, insertChats } from './chats';
import { $unreadCountMap } from './unread';

sample({
    clock: insertChats,
    source: {
        user: $user,
        currentChat: $currentChat,
        chats: $chats,
        chatTotalUnreadCountMap: $unreadCountMap,
    },
    filter: notOnlyTyping,
    fn: ({ chatTotalUnreadCountMap }, chat) => {
        console.log({ chat });

        return updateDeepObject(
            chatTotalUnreadCountMap,
            `${chat[0].id}.unreadCount`,
            chatTotalUnreadCountMap[chat[0].id].unreadCount + 1
        );
    },
    target: $unreadCountMap,
});

sample({
    clock: insertChats,
    source: {
        user: $user,
        currentChat: $currentChat,
        chats: $chats,
        chatTotalUnreadCountMap: $unreadCountMap,
        cache: $cache,
    },
    filter: notOnlyTyping,
    fn: ({ cache }, chats) => {
        return { chat: chats[0], cache };
    },
    target: showNotificationFx,
});

sample({
    clock: insertChats,
    source: { user: $user, chats: $chats },
    filter: ({ user }) => !!user,
    fn: ({ chats }, updatedChats) => {
        const newChats = [...chats].filter(
            (ch) => !updatedChats.find((c) => c.id === ch.id)
        );

        return insertChatsSorted(newChats, updatedChats);
    },
    target: $chats,
});
