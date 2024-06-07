import { THint } from '../../search/model/types';

export type TMessage = {
    attachedAlbums: string[];
    attachedAuthors: string[];
    attachedSongs: string[];
    message: string;
    sentTime: number;
    sender: string;
    inResponseToMessage: string;
    seenBy: string[];
    id: string;
    status?: 'pending' | 'error'
};

export type TChat = {
    id: string;
    typing: string[];
    wallpaper: string;
    participants: string[];
    chatName: string;
    chatImage: string;
};

export type TChatData = Record<string, THint>;

export type TGeneralChatData = {
    [chatId: string]: {
        lastMessage: TMessage;
        unreadCount: number;
    };
};
