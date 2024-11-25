import { sample } from 'effector';
import { $user } from '../../user/model/user';
import { insertChats, $chats, $currentChat } from './chats';
import { insertChatsSorted } from '../lib/insertChatsSorted';
import { $unreadCountMap } from './unread';
import { updateDeepObject } from '../../../shared/funcs/updateDeepObject';

sample({
    clock: insertChats,
    source: {
        user: $user,
        currentChat: $currentChat,
        chats: $chats,
        chatTotalUnreadCountMap: $unreadCountMap,
    },
    filter: ({ user, currentChat, chats }, insertingChats) => {
        const first = insertingChats[0];
        const chatIndex = chats.findIndex((c) => c.id === first.id);

        return (
            !!user &&
            chats[chatIndex]?.lastMessage?.sender !== user.uid &&
            (!currentChat || first.id !== currentChat.id) &&
            chats[chatIndex]?.lastMessage?.id !== first.lastMessage?.id
        );
    },
    fn: ({ chatTotalUnreadCountMap }, chat) => {
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
