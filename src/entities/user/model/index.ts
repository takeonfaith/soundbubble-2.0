import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { throttle } from 'patronum';
import { Database } from '../../../database';
import { Playlists, Users } from '../../../database/sections';
import { TExtendedSuggestion } from '../../../features/searchWithHints/types';
import { confirmModel } from '../../../layout/confirm/model';
import { toastModel } from '../../../layout/toast/model';
import { ERRORS } from '../../../shared/constants';
import { errorEffect } from '../../../shared/effector/errorEffect';
import { getDataFromEffect } from '../../../shared/effector/getDataFromEffect';
import { loadingEffect } from '../../../shared/effector/loadingEffect';
import { filterOneArrayWithAnother } from '../../../shared/funcs/filterOneArrayWithAnother';
import { tryWrapper } from '../../../shared/funcs/trywrapper';
import { TPlaylist } from '../../playlist/model/types';
import { getAuthorsToString } from '../../song/lib/getAuthorsToString';
import { TSong } from '../../song/model/types';
import {
    DEFAULT_PAGE_STORE,
    DEFAULT_SIGN_UP_DATA,
    DEFAULT_STORE,
    MAX_SEARCH_HISTORY_QUANTITY,
    REMOVE_FROM_LIBRARY_TIMEOUT,
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

        const userSongs = user?.ownSongs?.length
            ? user?.ownSongs
            : user?.addedSongs ?? [];
        const userPlaylists = user?.ownPlaylists?.length
            ? user?.ownPlaylists
            : user?.addedPlaylists ?? [];

        const songs = await Database.Songs.getSongsByUids(userSongs, true);
        const playlists = await Database.Playlists.getPlaylistsByUids(
            userPlaylists
        );
        const lastSongPlayed =
            !user.isAuthor && user.lastSongPlayed
                ? await Database.Songs.getSongByUid(user.lastSongPlayed)
                : null;

        const friends = await Database.Users.getUsersByUids(
            user.friends?.filter((u) => u.status === 'added').map((u) => u.uid)
        );

        return { user, songs, playlists, lastSongPlayed, friends };
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
    async (store: TStore): Promise<TExtendedSuggestion[]> => {
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
    suggestion?: TExtendedSuggestion | null;
};

const setSearchHistoryFx = createEffect(
    async ({
        history,
        userId,
        suggestion,
    }: SetSearchHistoryProps & { history: TExtendedSuggestion[] }) => {
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

const addAuthorsToLibrary = createEvent<{
    authors: TUser[];
    showToast: boolean;
}>();
const removeAuthorsFromLibrary = createEvent<{
    authors: TUser[];
    showToast: boolean;
}>();
const toggleAuthorLiked = createEvent<{
    authors: TUser[];
    isLiked: boolean;
    showToast: boolean;
}>();

export const addOwnPlaylistToLibrary = createEvent<TPlaylist>();
export const setSearchHistory = createEvent<SetSearchHistoryProps>();
const updateSignUpFormData = createEvent<{
    key: keyof typeof DEFAULT_SIGN_UP_DATA;
    value: string;
}>();

const userGate = createGate();

export const $user = createStore<TStore>(DEFAULT_STORE);
$user.reset(logout);

const $userSignUpFormData = createStore(DEFAULT_SIGN_UP_DATA);
$userSignUpFormData.reset(logout);

const $isLoadingUser = createStore<boolean>(true);

export const $library = createStore<TSong[]>([]);
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

export const $searchHistory = createStore<TExtendedSuggestion[]>([]);
$searchHistory.reset(logout);

const $userPage =
    createStore<TPageStore>(DEFAULT_PAGE_STORE).reset(resetUserPage);
$userPage.reset(logout);

const $addedAuthors = createStore<TUser[]>([]);

sample({
    clock: updateSignUpFormData,
    source: $userSignUpFormData,
    fn: (store, { key, value }) => ({ ...store, [key]: value }),
    target: $userSignUpFormData,
});

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
    fn: (store) => ({ ...store, error: null }),
    target: $user,
});

sample({
    clock: loginFx.doneData,
    source: $user,
    fn: (store) => ({ ...store }),
    target: $user,
});

sample({
    clock: loginFx.failData,
    source: $user,
    fn: (store, error) => ({ ...store, error }),
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
    fn: (store, data) => ({ ...store, data }),
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
    clock: addOwnPlaylistToLibrary,
    source: $ownPlaylists,
    fn: (store, playlist) => {
        console.log(playlist);

        return [playlist, ...store];
    },
    target: $ownPlaylists,
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
    fn: (store, { params }): TExtendedSuggestion[] =>
        [params.suggestion!, ...store].slice(0, MAX_SEARCH_HISTORY_QUANTITY),
    target: $searchHistory,
});

sample({
    clock: setSearchHistory,
    source: $searchHistory,
    fn: (store, searchHistory) => ({ history: store, ...searchHistory }),
    target: setSearchHistoryFx,
});

// #region Add song and remove from library

export const addSongToLibraryFx = createEffect(
    async ({ userId, song }: { userId: string | undefined; song: TSong }) => {
        if (!userId) return;

        await Database.Users.addSongToLibrary(userId, song.id);
    }
);

export const removeSongFromLibraryFx = createEffect(
    async ({
        userId,
        songId,
    }: {
        userId: string | undefined;
        songId: string;
    }) => {
        if (!userId) return;

        await Database.Users.removeSongFromLibrary(userId, songId);
    }
);

const updateLibraryFx = createEffect(
    async ({
        userId,
        songs,
    }: {
        userId: string | undefined;
        songs: string[];
    }) => {
        if (!userId) return;

        await Database.Users.updateLibrary(userId, songs);
    }
);

removeSongFromLibraryFx.doneData.watch(() => {
    toastModel.events.show({
        message: 'Removed from Liked',
        type: 'info',
        action: {
            text: 'Undo',
            onClick: () => {
                revertRemove();
            },
        },
        showTimer: true,
        duration: REMOVE_FROM_LIBRARY_TIMEOUT,
    });
});

removeSongFromLibraryFx.failData.watch((err) => {
    toastModel.events.show({
        message: `Failed to remove song from Liked. Reason: ${err.message}`,
        type: 'error',
        duration: 8000,
    });
});

addSongToLibraryFx.doneData.watch(() => {
    toastModel.events.show({
        message: 'Song added to Liked',
        type: 'success',
        duration: 5000,
    });
});

addSongToLibraryFx.failData.watch((err) => {
    toastModel.events.show({
        message: `Failed to add song to Liked. Reason: ${err.message}`,
        type: 'error',
        duration: 8000,
    });
});

const addSongToLibrary = createEvent<TSong>();
const removeSongFromLibrary = createEvent<TSong>();
const toggleLikeSong = createEvent<{ song: TSong; isLiked: boolean }>();
const revertRemove = createEvent();
const resetCopiedLibrary = createEvent();

const $copiedLibrary = createStore<TSong[]>([]).reset(resetCopiedLibrary);

sample({
    clock: toggleLikeSong,
    filter: ({ isLiked }) => isLiked,
    fn: ({ song }) => song,
    target: removeSongFromLibrary,
});

sample({
    clock: toggleLikeSong,
    filter: ({ isLiked }) => !isLiked,
    fn: ({ song }) => song,
    target: addSongToLibrary,
});

sample({
    clock: addSongToLibrary,
    source: { user: $user },
    fn: ({ user }, song) => ({
        userId: user?.data?.uid,
        song: song,
        authors: song.authors,
    }),
    target: [addSongToLibraryFx],
});

sample({
    clock: addSongToLibraryFx.done,
    source: $library,
    fn: (library, { params }) => {
        return [params.song, ...library];
    },
    target: $library,
});

sample({
    clock: addSongToLibraryFx.done,
    fn: ({ params }) => ({
        authors: params.song.authors.map((a) => ({
            ...a,
            isAuthor: true,
        })) as TUser[],
        showToast: false,
    }),
    target: addAuthorsToLibrary,
});

sample({
    clock: removeSongFromLibrary,
    source: $library,
    fn: (library) => library,
    target: $copiedLibrary,
});

sample({
    clock: removeSongFromLibrary,
    source: { user: $user },
    fn: ({ user }, song) => ({ userId: user?.data?.uid, songId: song.id }),
    target: removeSongFromLibraryFx,
});

sample({
    clock: removeSongFromLibraryFx.done,
    source: $library,
    fn: (library, { params: { songId } }) => {
        return library.filter((s) => s.id !== songId);
    },
    target: $library,
});

const throttled = throttle(
    removeSongFromLibraryFx.doneData,
    REMOVE_FROM_LIBRARY_TIMEOUT
).watch(() => {
    resetCopiedLibrary();
});

sample({
    clock: revertRemove,
    source: { user: $user, oldLibrary: $copiedLibrary },
    fn: ({ user, oldLibrary }) => {
        throttled.unsubscribe();

        return {
            userId: user.data?.uid,
            songs: oldLibrary.map((s) => s.id).reverse(),
        };
    },
    target: [updateLibraryFx],
});

sample({
    clock: updateLibraryFx.doneData,
    source: $copiedLibrary,
    fn: (copiedLibrary) => copiedLibrary,
    target: [$library, resetCopiedLibrary],
});
// #endregion

// #region Add author to library

type TAuthorEffectProps = {
    userId: string | undefined;
    authors: TUser[];
    showToast?: boolean;
};

export const addAuthorsToLibraryFx = createEffect<
    TAuthorEffectProps,
    Promise<void>,
    Error
>();
export const removeAuthorsFromLibraryFx = createEffect<
    TAuthorEffectProps,
    Promise<void>,
    Error
>();

toggleAuthorLiked.watch(({ authors, isLiked, showToast }) => {
    if (isLiked) {
        confirmModel.events.open({
            text: `Are you sure you want to unfollow ${getAuthorsToString(
                authors
            )}?`,
            onAccept: () => removeAuthorsFromLibrary({ authors, showToast }),
        });
    } else {
        addAuthorsToLibrary({ authors, showToast });
    }
});

sample({
    clock: addAuthorsToLibrary,
    source: { user: $user, addedAuthors: $addedAuthors },
    fn: ({ user, addedAuthors }, { showToast, authors }) => ({
        userId: user?.data?.uid,
        showToast,
        authors: filterOneArrayWithAnother(
            authors,
            addedAuthors,
            (item) => item.uid,
            (arr) => arr.map((i) => i.uid)
        ),
    }),
    target: addAuthorsToLibraryFx,
});

sample({
    clock: addAuthorsToLibraryFx.done,
    source: $addedAuthors,
    fn: (addedAuthors, { params: { authors } }) => [
        ...filterOneArrayWithAnother(
            authors,
            addedAuthors,
            (a) => a.uid,
            (arr) => arr.map((a) => a.uid)
        ),
        ...addedAuthors,
    ],
    target: $addedAuthors,
});

sample({
    clock: removeAuthorsFromLibrary,
    source: { user: $user },
    fn: ({ user }, props) => ({ userId: user?.data?.uid, ...props }),
    target: removeAuthorsFromLibraryFx,
});

sample({
    clock: removeAuthorsFromLibraryFx.done,
    source: $addedAuthors,
    fn: (addedAuthors, { params: { authors } }) =>
        filterOneArrayWithAnother(
            addedAuthors,
            authors,
            (u) => u.uid,
            (arr) => arr.map((a) => a.uid)
        ),
    target: $addedAuthors,
});

addAuthorsToLibraryFx.use(async ({ userId, authors }) => {
    if (!userId) return;

    await Database.Users.addAuthorToLibrary(
        userId,
        authors.map((a) => a.uid)
    );
});

// --- Notifications ---

addAuthorsToLibraryFx.done.watch(({ params: { showToast } }) => {
    if (showToast) {
        toastModel.events.show({
            message: 'Author added to Liked',
            type: 'success',
            duration: 3000,
        });
    }
});

addAuthorsToLibraryFx.fail.watch(({ params: { showToast }, error }) => {
    if (showToast) {
        toastModel.events.show({
            message: `Failed to add author to Liked`,
            reason: error.message,
            type: 'error',
            duration: 8000,
        });
    }
});

removeAuthorsFromLibraryFx.use(async ({ userId, authors }) => {
    if (!userId) return;

    await Database.Users.removeAuthorFromLibrary(
        userId,
        authors.map((a) => a.uid)
    );
});

// --- Notifications ---

removeAuthorsFromLibraryFx.done.watch(({ params: { showToast } }) => {
    if (showToast) {
        toastModel.events.show({
            message: 'Author removed from Liked',
            type: 'info',
            duration: 5000,
        });
    }
});

removeAuthorsFromLibraryFx.fail.watch(({ params: { showToast }, error }) => {
    if (showToast) {
        toastModel.events.show({
            message: `Failed to remove author from Liked`,
            reason: error.message,
            type: 'error',
            duration: 8000,
        });
    }
});

// #endregion

export const userModel = {
    useUser: () => useUnit([$user, $isLoadingUser, loginFx.pending]),
    useSongLibrary: () => useUnit([$library, loadLibraryFx.pending]),
    useOwnPlaylists: () => useUnit([$ownPlaylists, loadOwnPlaylistsFx.pending]),
    useAddedPlaylists: () =>
        useUnit([$addedPlaylists, loadAddedPlaylistsFx.pending]),
    useAddedAuthors: () => useUnit([$addedAuthors, loadAddedAuthorsFx.pending]),
    useSearchHistory: () => useUnit($searchHistory),
    useUserPage: () => useUnit([$userPage, loadUserPageFx.pending]),
    useFriends: () => useUnit([$friends, loadFriendsFx.pending]),
    events: {
        login,
        logout,
        loadSimilarAuthors,
        createUser,
        setUser,
        setLoggining,
        getUserPage,
        resetUserPage,
        updateFriends,
        setIsLoadingUsers,
        addOwnPlaylistToLibrary,
        toggleLikeSong,
        toggleAuthorLiked,
    },
    gates: {
        useLoadUser: () => useGate(userGate),
    },
};
