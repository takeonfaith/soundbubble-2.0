import { useUnit } from 'effector-react';
import { $cache } from './cache';
import {
    $amITyping,
    $chats,
    $currentChat,
    currentChatIdApi,
    subscribeToChatsFx,
    updateIsTyping,
} from './chats';
import { createChat } from './create-chat';
import { loadHeavyMediaFx } from './heavy-media';
import {
    $canMoreBeLoaded,
    $currentChatMessages,
    $firstUnreadMessage,
    canMoreBeLoadedApi,
    initiallyLoadChatMessagesFx,
    loadNextMessages,
    paginationLoadMessagesFx,
} from './messages';
import { sendMessage } from './send-message';
import {
    $chatTotalUnreadCountMap,
    loadInitialUnreadCountFx,
    updateUnread,
} from './unread';
import {
    $isEditingMode,
    editChat,
    editChatFx,
    toggleIsEditing,
} from './chat-editing';
import { $wallpapers, loadWallpapers, loadWallpapersFx } from './wallpapers';
export * from './chats-update';

export const chatModel = {
    useChats: () => useUnit([$chats, subscribeToChatsFx.pending]),
    useUnread: () =>
        useUnit([$chatTotalUnreadCountMap, loadInitialUnreadCountFx.pending]),
    useCurrentChat: () => useUnit([$currentChat]),
    useTyping: () => useUnit([$amITyping]),
    useMessages: () =>
        useUnit([
            $currentChatMessages,
            initiallyLoadChatMessagesFx.pending,
            paginationLoadMessagesFx.pending,
            $canMoreBeLoaded,
            $firstUnreadMessage,
        ]),
    useCache: () => useUnit([$cache, loadHeavyMediaFx.pending]),
    useEditing: () => useUnit([$isEditingMode, editChatFx.pending]),
    useWallpapers: () => useUnit([$wallpapers, loadWallpapersFx.pending]),
    events: {
        sendMessage,
        createChat,
        updateIsTyping,
        loadNextMessages,
        updateUnread,
        editChat,
        toggleIsEditing,
        loadWallpapers,
        ...currentChatIdApi,
        ...canMoreBeLoadedApi,
    },
};
