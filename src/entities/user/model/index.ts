import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { Database } from '../../../database';
import { Playlists, Users } from '../../../database/sections';
import { ERRORS } from '../../../shared/constants';
import { errorEffect } from '../../../shared/effector/errorEffect';
import { getDataFromEffect } from '../../../shared/effector/getDataFromEffect';
import { loadingEffect } from '../../../shared/effector/loadingEffect';
import { tryWrapper } from '../../../shared/funcs/trywrapper';
import { TPlaylist } from '../../playlist/model/types';
import { TSuggestion } from '../../search/model/types';
import { TSong } from '../../song/model/types';
import {
    DEFAULT_PAGE_STORE,
    DEFAULT_STORE,
    MAX_SEARCH_HISTORY_QUANTITY,
} from './constants';
import {
    CreateUserCreditsType,
    LoginCreditsType,
    TPageStore,
    TStore,
    TUser,
} from './types';

const loginFx = createEffect(
    async (credits: LoginCreditsType): Promise<TUser | null> => {
        return tryWrapper(async () => {
            const { email, password } = credits;
            if (!email || !password)
                throw new Error(
                    ERRORS.loginFailed('Не указана почта или пароль')
                );

            await Database.Users.login(credits);
        }, 'operationFailed');
    }
);

const logoutFx = createEffect(() => {
    return tryWrapper(async () => {
        await Database.Users.logout();
    }, 'operationFailed');
});

const loadLibraryFx = createEffect(async (store: TStore) => {
    return tryWrapper<TSong[]>(async () => {
        const addedSongs = store.data?.addedSongs?.reverse() ?? [];
        const result = await Database.Songs.getSongsByUids(addedSongs);

        return result;
    }, 'operationFailed');
});

const loadOwnPlaylistsFx = createEffect(async (store: TStore) => {
    try {
        if (!store.data) throw new Error('Failed to load added playlists');

        const ownPlaylists = await Playlists.getPlaylistsByUids(
            store.data.ownPlaylists
        );

        return ownPlaylists;
    } catch (error) {
        throw new Error('Failed to load added playlists');
    }
});

const loadAddedPlaylistsFx = createEffect(async (store: TStore) => {
    try {
        if (!store.data) throw new Error('Failed to load added playlists');

        const addedPlaylists = await Playlists.getPlaylistsByUids(
            store.data.addedPlaylists
        );

        return addedPlaylists;
    } catch (error) {
        throw new Error('Failed to load added playlists');
    }
});

const loadUserPageFx = createEffect(async (userId: string) => {
    try {
        const user = await Database.Users.getUserByUid(userId);
        const songs = await Database.Songs.getSongsByUids(
            user?.ownSongs ?? [],
            true
        );
        const playlists = await Database.Playlists.getPlaylistsByUids(
            user?.ownPlaylists ?? []
        );
        return { user, songs, playlists };
    } catch (error) {
        throw new Error("Failed to get user's page info");
    }
});

const loadSimilarAuthorsFx = createEffect(async (songs: TSong[]) => {
    try {
        const authors = await Users.getSimilarAuthorsBySongs(songs);
        return authors;
    } catch (error) {
        throw new Error('Failed to load similar authors');
    }
});

// TODO: отписка на logout
const loadFriendsFx = createEffect(async (store: TStore) => {
    try {
        const friends =
            store.data?.friends
                ?.filter((friend) => friend.status === 'added')
                .map((friend) => friend.uid) ?? [];

        await Database.Users.listenToUsersChanges(friends, updateFriends);
    } catch (error) {
        throw new Error('Failed to load user friends');
    }
});

const loadLastSongPlayedFx = createEffect(async (store: TStore) => {
    try {
        const lastSongId = store.data?.lastSongPlayed;
        if (!lastSongId) return null;

        const lastSongPlayed = await Database.Songs.getSongByUid(lastSongId);
        return lastSongPlayed;
    } catch (error) {
        throw new Error('Failed to load last song played');
    }
});

const loadAddedAuthorsFx = createEffect(async (store: TStore) => {
    try {
        const authors = store.data?.addedAuthors ?? [];

        const users = await Database.Users.getUsersByUids(authors);

        return users;
    } catch (error) {
        throw new Error('Failed to load user added authors');
    }
});

const loadUserSearchHistoryFx = createEffect(
    async (store: TStore): Promise<TSuggestion[]> => {
        try {
            const userId = store.data?.uid;

            return await Database.SearchHistory.getSearchHistory(userId);
        } catch (error) {
            throw new Error('Failed to load search history');
        }
    }
);

type SetSearchHistoryProps = {
    userId: string | undefined;
    suggestion?: TSuggestion | null;
};

const setSearchHistoryFx = createEffect(
    async ({
        history,
        userId,
        suggestion,
    }: SetSearchHistoryProps & { history: TSuggestion[] }) => {
        await Database.SearchHistory.addEntityToSearchHistory(
            history.slice(0, MAX_SEARCH_HISTORY_QUANTITY - 1),
            userId,
            suggestion?.uid,
            suggestion?.place
        );
    }
);

const login = createEvent<LoginCreditsType>();
export const logout = createEvent();
const createUser = createEvent<CreateUserCreditsType>();
const setUser = createEvent<TUser>();
const setLoggining = createEvent<boolean>();
const getUserPage = createEvent<string>();
const loadSimilarAuthors = createEvent<TSong[]>();
const resetUserPage = createEvent();
const updateFriends = createEvent<TUser[]>();
const setIsLoadingUsers = createEvent<boolean>();
const addSongToLibrary = createEvent<TSong>();
export const setSearchHistory = createEvent<SetSearchHistoryProps>();

const userGate = createGate();

export const $user = createStore<TStore>(DEFAULT_STORE);
$user.reset(logout);

const $isLoadingUser = createStore<boolean>(true);

const $library = createStore<TSong[]>([]);
$library.reset(logout);

const $lastSongPlayed = createStore<TSong | null>(null);
$lastSongPlayed.reset(logout);

const $lastQueue = createStore<TSong[]>([]);
$lastQueue.reset(logout);

const $ownPlaylists = createStore<TPlaylist[]>([]);
$ownPlaylists.reset(logout);

const $addedPlaylists = createStore<TPlaylist[]>([]);
$addedPlaylists.reset(logout);

const $friends = createStore<TUser[]>([]);
$friends.reset(logout);

export const $searchHistory = createStore<TSuggestion[]>([]);
$searchHistory.reset(logout);

const $userPage =
    createStore<TPageStore>(DEFAULT_PAGE_STORE).reset(resetUserPage);
$userPage.reset(logout);

const $addedAuthors = createStore<TUser[]>([]);

sample({
    clock: setIsLoadingUsers,
    target: $isLoadingUser,
});

sample({
    clock: login,
    target: loginFx,
});

sample({
    clock: logout,
    target: logoutFx,
});

sample({
    clock: login,
    source: $user,
    fn: (store) => ({ ...store, loggining: true }),
    target: $user,
});

sample({
    clock: loginFx.doneData,
    source: $user,
    fn: (store) => ({ ...store, loggining: false }),
    target: $user,
});

sample({
    clock: loginFx.failData,
    source: $user,
    fn: (store, error) => ({ ...store, error, loggining: false }),
    target: $user,
});

sample({
    clock: updateFriends,
    fn: (friends) => friends,
    target: $friends,
});

sample({
    clock: setUser,
    source: $user,
    fn: (store, data) => ({ ...store, data, loggining: false }),
    target: [
        $user,
        loadLibraryFx,
        loadOwnPlaylistsFx,
        loadAddedPlaylistsFx,
        loadAddedAuthorsFx,
        loadUserSearchHistoryFx,
        loadFriendsFx,
        loadLastSongPlayedFx,
    ],
});

getDataFromEffect(loadLibraryFx, $library);
getDataFromEffect(loadOwnPlaylistsFx, $ownPlaylists);
getDataFromEffect(loadLastSongPlayedFx, $lastSongPlayed);
getDataFromEffect(loadAddedPlaylistsFx, $addedPlaylists);
getDataFromEffect(loadAddedAuthorsFx, $addedAuthors);
getDataFromEffect(loadUserSearchHistoryFx, $searchHistory);

sample({
    clock: setLoggining,
    source: $user,
    fn: (store, logginining) => ({ ...store, logginining }),
    target: $user,
});

sample({
    clock: getUserPage,
    target: loadUserPageFx,
});

loadingEffect(loadUserPageFx, $userPage, 'loading');
errorEffect(loadUserPageFx, $userPage);

sample({
    clock: loadUserPageFx.doneData,
    source: $userPage,
    fn: (store, data) => ({ ...store, ...data, similarAuthors: [] }),
    target: $userPage,
});

sample({
    clock: loadSimilarAuthors,
    target: loadSimilarAuthorsFx,
});

loadingEffect(loadSimilarAuthorsFx, $userPage, 'similarAuthorsLoading');

sample({
    clock: loadSimilarAuthorsFx.doneData,
    source: $userPage,
    fn: (store, similarAuthors) => ({ ...store, similarAuthors }),
    target: $userPage,
});

sample({
    clock: setSearchHistoryFx.done,
    source: $searchHistory,
    filter: (store, { params }) =>
        !!params.suggestion &&
        !store.find((s) => s.uid === params.suggestion?.uid),
    fn: (store, { params }): TSuggestion[] =>
        [params.suggestion!, ...store].slice(0, MAX_SEARCH_HISTORY_QUANTITY),
    target: $searchHistory,
});

sample({
    clock: setSearchHistory,
    source: $searchHistory,
    fn: (store, searchHistory) => ({ history: store, ...searchHistory }),
    target: setSearchHistoryFx,
});

sample({
    clock: addSongToLibrary,
    source: $library,
    fn: (library, song) => {
        console.log(library.find((s) => s.id === song.id));
        
        if (library.find((s) => s.id === song.id)) {
            return library.filter((s) => s.id !== song.id);
        }

        return [song, ...library];
    },
    target: $library,
});

export const userModel = {
    useUser: () => useUnit([$user, $isLoadingUser]),
    useSongLibrary: () => useUnit([$library, loadLibraryFx.pending]),
    useOwnPlaylists: () => useUnit([$ownPlaylists, loadOwnPlaylistsFx.pending]),
    useAddedPlaylists: () =>
        useUnit([$addedPlaylists, loadAddedPlaylistsFx.pending]),
    useAddedAuthors: () => useUnit([$addedAuthors, loadAddedAuthorsFx.pending]),
    useSearchHistory: () => useUnit($searchHistory),
    useUserPage: () => useUnit($userPage),
    useFriends: () => useUnit([$friends, loadFriendsFx.pending]),
    events: {
        login,
        logout,
        loadSimilarAuthors,
        createUser,
        setUser,
        setLoggining,
        loadUserPageFx,
        resetUserPage,
        updateFriends,
        setIsLoadingUsers,
        addSongToLibrary,
    },
    gates: {
        useLoadUser: () => useGate(userGate),
    },
};
