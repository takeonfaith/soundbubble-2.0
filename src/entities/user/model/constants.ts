import { TPageStore, TStore } from './types';

export const DEFAULT_STORE: TStore = {
    data: null,
    error: null,
    userPlaylists: [],
};

export const DEFAULT_PAGE_STORE: TPageStore = {
    user: null,
    error: null,
    loading: false,
    songs: [],
    playlists: [],
    similarAuthors: [],
    similarAuthorsLoading: true,
};

export const MAX_SEARCH_HISTORY_QUANTITY = 10;
