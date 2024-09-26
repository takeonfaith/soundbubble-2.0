import { TPageStore } from './types';

export const DEFAULT_USER_STORE = null;

export const DEFAULT_SIGN_UP_DATA = {
    fullName: '',
    email: '',
    photoURL: undefined,
    password: '',
};

export const DEFAULT_PAGE_STORE: TPageStore = {
    user: null,
    error: null,
    loading: false,
    songs: [],
    playlists: [],
    similarAuthors: [],
    similarAuthorsLoading: true,
    lastSongPlayed: null,
    friends: null,
};

export const MAX_SEARCH_HISTORY_QUANTITY = 10;
export const REMOVE_FROM_LIBRARY_TIMEOUT = 9000;
