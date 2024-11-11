import { TEntity } from '../../search/model/types';

export enum LocalSendStatus {
    error,
    pending,
    sent,
    received,
}

export enum SendStatus {
    error,
    pending,
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
    inResponseToMessage: string;
    seenBy: string[];
    id: string;
    status?: SendStatus;
};

export type TChat = {
    id: string;
    typing: string[];
    wallpaper: string;
    participants: string[];
    chatName: string;
    chatImage: string;
    admins?: string[];
    lastMessage?: TMessage;
};

export type TCache = Record<string, TEntity>;

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
