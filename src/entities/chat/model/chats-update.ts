import { sample } from 'effector';
import { updateDeepObject } from '../../../shared/funcs/updateDeepObject';
import { $user } from '../../user/model/user';
import { insertChatsSorted } from '../lib/insertChatsSorted';
import { notOnlyTyping } from '../lib/notOnlyTyping';
import { $cache, saveInCache } from '../../cache';
import { showNotificationFx } from './chat-notifications';
import { $chats, $currentChat, insertChats } from './chats';
import { $unreadCountMap } from './unread';
import { loadHeavyMedia } from './heavy-media';
import { TMessage } from './types';

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

// Load media when chats are updated
sample({
    clock: insertChats,
    filter: (chats) => {
        return !!chats[0].lastMessage;
    },
    fn: (chats) => {
        const chat = chats[0];

        return {
            songIds: [chat.lastMessage!.attachedSongs[0]],
            playlistIds: [chat.lastMessage!.attachedAlbums[0]],
            userIds: [chat.lastMessage!.attachedAuthors[0]],
        };
    },
    target: loadHeavyMedia,
});

// Cache new messages
sample({
    clock: insertChats,
    source: $cache,
    filter: (cache, chats) => {
        const chat = chats[0];

        return !!cache[chat.id] && !!chat.lastMessage;
    },
    fn: (cache, chats) => {
        const chat = chats[0];
        const lastMessage = chat.lastMessage!;

        const newChatMessages = [...(cache[chat.id] as TMessage[])];
        if (newChatMessages.at(-1)?.id === lastMessage.id) {
            newChatMessages.splice(newChatMessages.length - 1, 1, lastMessage);
        } else {
            newChatMessages.push(lastMessage);
        }

        return { [chat.id]: newChatMessages };
    },
    target: saveInCache,
});
