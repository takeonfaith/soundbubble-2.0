import { Timestamp } from 'firebase/firestore';
import { TPlaylist } from '../../playlist/model/types';
import { TPlace } from '../../search/model/types';
import { TSong } from '../../song/model/types';

export type TUser = {
    uid: string;
    displayName: string;
    ownSongs?: string[];
    ownPlaylists: string[];
    addedAuthors?: string[];
    addedPlaylists: string[];
    addedSongs?: string[];
    friends?: { uid: string; status: FriendStatus }[];
    imageColors: string[];
    isVerified: boolean;
    isAdmin?: boolean;
    isAuthor?: boolean;
    lastQueue: {
        image: string;
        name: string;
        songsList: string[];
        source: string;
    };
    lastSongPlayed: string;
    numberOfListenersPerMonth: number;
    online: number;
    photoURL: string;
    subscribers: number;
    regDate: Timestamp;
    chats?: string[];
};

export type LoginCreditsType = {
    email: string;
    password: string;
};

export type CreateUserCreditsType = LoginCreditsType & {
    name: string;
};

export type TStore = {
    data: TUser | null;
    error: Error | null;
    userPlaylists: TPlaylist[];
};

export type TPageStore = {
    user: TUser | null;
    error: string | null;
    loading: boolean;
    songs: TSong[];
    playlists: TPlaylist[];
    similarAuthors: TUser[];
    similarAuthorsLoading: boolean;
    lastSongPlayed?: TSong | null;
    friends?: TUser[] | null;
};

export type TSearchHistory = { id: string; type: TPlace };

export enum FriendStatus {
    added = 'added',
    awaiting = 'awaiting',
    requested = 'requested',
}
