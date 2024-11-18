import { sample } from 'effector';
import { $user } from '../../user/model';
import { insertChats, $chats, $currentChat } from './chats';
import { $chatTotalUnreadCountMap } from './unread';
import { insertChatsSorted } from '../lib/insertChatsSorted';

sample({
    clock: insertChats,
    source: {
        user: $user,
        currentChat: $currentChat,
        chats: $chats,
        chatTotalUnreadCountMap: $chatTotalUnreadCountMap,
    },
    filter: ({ user, currentChat, chats }, insertingChats) => {
        const first = insertingChats[0];
        const chatIndex = chats.findIndex((c) => c.id === first.id);
        console.log(
            !!user,
            chats[chatIndex]?.lastMessage?.sender !== user?.uid,
            !currentChat || first.id !== currentChat.id,
            chats[chatIndex]?.lastMessage?.id !== first.lastMessage?.id
        );

        return (
            !!user &&
            chats[chatIndex]?.lastMessage?.sender !== user.uid &&
            (!currentChat || first.id !== currentChat.id) &&
            chats[chatIndex]?.lastMessage?.id !== first.lastMessage?.id
        );
    },
    fn: ({ chatTotalUnreadCountMap }, chat) => {
        return {
            ...chatTotalUnreadCountMap,
            [chat[0].id]: chatTotalUnreadCountMap[chat[0].id] + 1,
        };
    },
    target: $chatTotalUnreadCountMap,
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
