import { TEntity } from '../../search/model/types';

export enum LocalSendStatus {
    error = 'error',
    pending = 'pending',
    sent = 'sent',
    received = 'received',
}

export enum SendStatus {
    error = 'error',
    pending = 'pending',
}

export type TMessage = {
    attachedAlbums: string[];
    attachedAuthors: string[];
    attachedSongs: string[];
    playlistInvitation?: {
        id: string;
        accepted: boolean;
    };
    message: string;
    sentTime: number;
    sender: string;
    inResponseToMessage: string | null;
    seenBy?: string[];
    id: string;
    status?: SendStatus;
    unreadBy: string[];
    isRead?: boolean;
};

export type TChat = {
    id: string;
    typing: string[];
    wallpaper: string;
    participants: string[];
    chatName: string;
    chatImage: string;
    admins?: string[];
    lastMessage?: TMessage | null;
    updateTime?: number;
};

export type TUploadChat = Omit<Partial<TChat>, 'chatImage'> & {
    chatImage?: File | null;
};

export type TCache = Record<string, TEntity | TMessage[]>;

export type TGeneralChatData = {
    [chatId: string]: {
        lastMessage: TMessage;
        unreadCount: number;
    };
};

export type THeavyMedia = {
    songIds: string[];
    playlistIds: string[];
    userIds: string[];
};

export type TUnreadCount = Record<string, TUnread & { chatId: string }>;

export type TWallpaper = { id: string; image: string };

export type TUnread = {
    lastReadAt: number | null;
    unreadCount: number;
    userId: string;
};
