import { useUnit } from 'effector-react';
import { $cache } from '../../cache';
import {
    $isEditingMode,
    editChat,
    editChatFx,
    toggleIsEditing,
} from './chat-editing';
import {
    $chats,
    $currentChat,
    currentChatIdApi,
    subscribeToChatsFx,
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
    $maxSeenAtInCurrentChat,
    $unreadCountMap,
    $userLastReadAt,
    loadInitialUnreadCountFx,
    updateUnread,
} from './unread';
import { $wallpapers, loadWallpapers, loadWallpapersFx } from './wallpapers';
import { $amITyping, updateIsTyping } from './typing';
export * from './chats-update';

export const chatModel = {
    useChats: () => useUnit([$chats, subscribeToChatsFx.pending]),
    useUnread: () =>
        useUnit([
            $unreadCountMap,
            $maxSeenAtInCurrentChat,
            $userLastReadAt,
            loadInitialUnreadCountFx.pending,
        ]),
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
        editChat,
        toggleIsEditing,
        loadWallpapers,
        updateUnread,
        ...currentChatIdApi,
        ...canMoreBeLoadedApi,
    },
};
