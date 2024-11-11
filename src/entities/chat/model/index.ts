import { useUnit } from 'effector-react';
import { $cache } from './cache';
import {
    $chats,
    $currentChat,
    addingUsersToChatFx,
    currentChatIdApi,
    subscribeToChatsFx,
    updateIsTyping,
} from './chats';
import { createChat } from './create-chat';
import {
    $canMoreBeLoaded,
    $currentChatMessages,
    canMoreBeLoadedApi,
    initiallyLoadChatMessagesFx,
    loadNextMessages,
    paginationLoadMessagesFx,
} from './messages';
import { sendMessage } from './send-message';
import { loadHeavyMediaFx } from './heavy-media';

export const chatModel = {
    useChats: () => useUnit([$chats, subscribeToChatsFx.pending]),
    useCurrentChat: () => useUnit([$currentChat, addingUsersToChatFx.pending]),
    useMessages: () =>
        useUnit([
            $currentChatMessages,
            initiallyLoadChatMessagesFx.pending,
            paginationLoadMessagesFx.pending,
            $canMoreBeLoaded,
        ]),
    useCache: () => useUnit([$cache, loadHeavyMediaFx.pending]),
    events: {
        sendMessage,
        createChat,
        updateIsTyping,
        loadNextMessages,
        ...currentChatIdApi,
        ...canMoreBeLoadedApi,
    },
};
