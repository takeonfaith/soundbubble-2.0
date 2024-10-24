import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate, useGate, useUnit } from 'effector-react';
import { User } from 'firebase/auth';
import { interval, throttle } from 'patronum';
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
    DEFAULT_USER_STORE,
    MAX_SEARCH_HISTORY_QUANTITY,
    REMOVE_FROM_LIBRARY_TIMEOUT,
} from './constants';
import {
    CreateUserCreditsType,
    LoginCreditsType,
    TPageStore,
    TUser,
} from './types';
import { TIME_IN_MS } from '../../../shared/constants/time';
import { userIsLoggedIn } from '../../chat/lib/userIsLoggedIn';

const loginFx = createEffect(async (credits: LoginCreditsType) => {
    return tryWrapper(async () => {
        const { email, password } = credits;
        if (!email || !password)
            throw new Error(ERRORS.loginFailed('Не указана почта или пароль'));

        await Database.Users.login(credits);
    }, 'operationFailed');
});

const logoutFx = createEffect(() => {
    return tryWrapper(async () => {
        await Database.Users.logout();
    }, 'operationFailed');
});

const loadLibraryFx = createEffect(async (store: TUser) => {
    return tryWrapper<TSong[]>(async () => {
        const addedSongs = store?.addedSongs?.reverse() ?? [];
        const result = await Database.Songs.getSongsByUids(addedSongs);

        return result;
    }, 'operationFailed');
});

const loadOwnPlaylistsFx = createEffect(async (store: TUser) => {
    try {
        if (!store) throw new Error('Failed to load added playlists');

        const ownPlaylists = await Playlists.getPlaylistsByUids(
            store.ownPlaylists
        );

        return ownPlaylists;
    } catch (error) {
        throw new Error('Failed to load added playlists');
    }
});

const loadAddedPlaylistsFx = createEffect(async (store: TUser) => {
    try {
        if (!store) throw new Error('Failed to load added playlists');

        const addedPlaylists = await Playlists.getPlaylistsByUids(
            store.addedPlaylists
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
const loadFriendsFx = createEffect(async (store: TUser) => {
    try {
        const friends =
            store?.friends
                ?.filter((friend) => friend.status === 'added')
                .map((friend) => friend.uid) ?? [];

        await Database.Users.listenToUsersChanges(friends, updateFriends);
    } catch (error) {
        throw new Error('Failed to load user friends');
    }
});

const loadLastSongPlayedFx = createEffect(async (store: TUser) => {
    try {
        const lastSongId = store?.lastSongPlayed;
        if (!lastSongId) return null;

        const lastSongPlayed = await Database.Songs.getSongByUid(lastSongId);
        return lastSongPlayed;
    } catch (error) {
        throw new Error('Failed to load last song played');
    }
});

const loadAddedAuthorsFx = createEffect(async (store: TUser) => {
    try {
        const authors = store?.addedAuthors ?? [];

        const users = await Database.Users.getUsersByUids(authors);

        return users;
    } catch (error) {
        throw new Error('Failed to load user added authors');
    }
});

const loadUserSearchHistoryFx = createEffect(
    async (store: TUser): Promise<TExtendedSuggestion[]> => {
        try {
            const userId = store?.uid;

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

const loadUserDataFx = createEffect(async (user: User | null) => {
    if (!user) return null;

    return await Database.Users.getUserByUid(user.uid);
});

loadUserDataFx.failData.watch((err) => {
    toastModel.events.show({
        type: 'error',
        message: 'Failed to load your data',
        reason: err.message,
        duration: 20000,
    });
});

const updateUserOnlineFx = createEffect(async (user: TUser | null) => {
    console.log('updated online', user);
    if (!user) return;

    await Database.Users.updateUserOnline(user.uid, Date.now());
});

const login = createEvent<LoginCreditsType>();
export const logout = createEvent();
const createUser = createEvent<CreateUserCreditsType>();
export const setUser = createEvent<TUser>();
const getUserPage = createEvent<string>();
const loadSimilarAuthors = createEvent<TSong[]>();
const resetUserPage = createEvent();
const updateFriends = createEvent<TUser[]>();
const loadUserData = createEvent<User | null>();

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
export const removeOwnPlaylistFromLibrary = createEvent<TPlaylist>();
export const setSearchHistory = createEvent<SetSearchHistoryProps>();
const updateSignUpFormData = createEvent<{
    key: keyof typeof DEFAULT_SIGN_UP_DATA;
    value: string;
}>();

const userGate = createGate();

export const $user = createStore<TUser | null>(DEFAULT_USER_STORE);
$user.reset(logout);

const $userSignUpFormData = createStore(DEFAULT_SIGN_UP_DATA);
$userSignUpFormData.reset(logout);

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

const { tick } = interval({
    timeout: 5 * TIME_IN_MS.minute,
    start: setUser,
    stop: logout,
});

sample({
    clock: [setUser, tick],
    filter: userIsLoggedIn,
    source: $user,
    fn: (user) => user,
    target: updateUserOnlineFx,
});

sample({
    clock: updateSignUpFormData,
    source: $userSignUpFormData,
    fn: (store, { key, value }) => ({ ...store, [key]: value }),
    target: $userSignUpFormData,
});

sample({
    clock: loadUserData,
    target: loadUserDataFx,
});

sample({
    clock: loadUserDataFx.doneData,
    filter: Boolean,
    target: setUser,
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
    clock: updateFriends,
    fn: (friends) => friends,
    target: $friends,
});

sample({
    clock: setUser,
    fn: (user) => user,
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
    clock: addOwnPlaylistToLibrary,
    source: $ownPlaylists,
    fn: (store, playlist) => [playlist, ...store],
    target: $ownPlaylists,
});

sample({
    clock: removeOwnPlaylistFromLibrary,
    source: $ownPlaylists,
    fn: (currentPlaylist, playlist) =>
        currentPlaylist.filter((p) => p.id !== playlist.id),
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
const toggleSongLiked = createEvent<{ song: TSong; isLiked: boolean }>();
const revertRemove = createEvent();
const resetCopiedLibrary = createEvent();

const $copiedLibrary = createStore<TSong[]>([]).reset(resetCopiedLibrary);

sample({
    clock: toggleSongLiked,
    filter: ({ isLiked }) => isLiked,
    fn: ({ song }) => song,
    target: removeSongFromLibrary,
});

sample({
    clock: toggleSongLiked,
    filter: ({ isLiked }) => !isLiked,
    fn: ({ song }) => song,
    target: addSongToLibrary,
});

sample({
    clock: addSongToLibrary,
    source: { user: $user },
    fn: ({ user }, song) => ({
        userId: user?.uid,
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
    fn: ({ user }, song) => ({ userId: user?.uid, songId: song.id }),
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

const { unsubscribe } = throttle(
    removeSongFromLibraryFx.doneData,
    REMOVE_FROM_LIBRARY_TIMEOUT
).watch(() => {
    resetCopiedLibrary();
});

sample({
    clock: revertRemove,
    source: { user: $user, oldLibrary: $copiedLibrary },
    fn: ({ user, oldLibrary }) => {
        unsubscribe();

        return {
            userId: user?.uid,
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
        userId: user?.uid,
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
    fn: ({ user }, props) => ({ userId: user?.uid, ...props }),
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

// #region Add own playlist to library

// #endregion

// #region Add to friends
const friendRequestFx = createEffect<
    { userId: string; friendId: string },
    Promise<void>
>();

const friendRequest = createEvent<string>();

sample({
    clock: friendRequest,
    source: { user: $user },
    filter: ({ user }) => !!user,
    fn: ({ user }, friendId) => ({
        userId: user?.uid as string,
        friendId,
    }),
    target: friendRequestFx,
});

// sample({
//     clock: friendRequestFx.done,
//     source: $user,
//     fn: (user) => ({
//         userId: user?.data?.uid as string,
//         friendId: friendRequestFx.doneData.friendId,
//     }),
//     target: ,
// })

friendRequestFx.use(async ({ userId, friendId }) => {
    await Database.Users.friendRequest(userId, friendId);
});

friendRequestFx.done.watch(() => {
    toastModel.events.show({
        message: 'Friendship request sent',
        type: 'success',
    });
});

friendRequestFx.failData.watch((err) => {
    toastModel.events.show({
        message: 'Failed to send friend request',
        type: 'error',
        reason: err.message,
        duration: 10000,
    });
});
// #end region

// #region Add other playlist to library

type TToggleOtherPlaylistAction = {
    playlist: TPlaylist;
    isLiked: boolean;
    showToast: boolean;
};

type TEffectOtherPlaylistAction = Omit<
    TToggleOtherPlaylistAction,
    'isLiked'
> & {
    userId: string;
};

const dislikeOtherPlaylist =
    createEvent<Omit<TToggleOtherPlaylistAction, 'isLiked'>>();

const likeOtherPlaylist =
    createEvent<Omit<TToggleOtherPlaylistAction, 'isLiked'>>();

const toggleOtherPlaylistLiked = createEvent<TToggleOtherPlaylistAction>();

export const addPlaylistFx = createEffect<
    TEffectOtherPlaylistAction,
    TPlaylist,
    Error
>();

export const removePlaylistFx = createEffect<
    TEffectOtherPlaylistAction,
    TPlaylist,
    Error
>();

toggleOtherPlaylistLiked.watch(({ playlist, isLiked, showToast }) => {
    if (isLiked) {
        confirmModel.events.open({
            text: `Are you sure you want to remove ${playlist.name} from library?`,
            onAccept: () => dislikeOtherPlaylist({ playlist, showToast }),
        });
    } else {
        likeOtherPlaylist({ playlist, showToast });
    }
});

sample({
    clock: likeOtherPlaylist,
    source: $user,
    fn: (user, props) =>
        ({ userId: user?.uid, ...props } as TEffectOtherPlaylistAction),
    target: addPlaylistFx,
});

sample({
    clock: dislikeOtherPlaylist,
    source: $user,
    fn: (user, props) =>
        ({ userId: user?.uid, ...props } as TEffectOtherPlaylistAction),
    target: removePlaylistFx,
});

addPlaylistFx.use(async ({ playlist, userId }) => {
    await Database.Users.addPlaylistToLibrary(playlist.id, userId);
    return playlist;
});

removePlaylistFx.use(async ({ playlist, userId }) => {
    await Database.Users.removePlaylistFromLibrary(playlist.id, userId);

    return playlist;
});

sample({
    clock: addPlaylistFx.doneData,
    source: $addedPlaylists,
    fn: (currentPlaylists, newPlaylist) => [newPlaylist, ...currentPlaylists],
    target: $addedPlaylists,
});

sample({
    clock: removePlaylistFx.doneData,
    source: $addedPlaylists,
    fn: (currentPlaylists, newPlaylist) =>
        currentPlaylists.filter((p) => p.id !== newPlaylist.id),
    target: $addedPlaylists,
});

removePlaylistFx.done.watch(({ params: { showToast } }) => {
    if (showToast) {
        toastModel.events.show({
            message: 'Playlist removed from library',
            type: 'info',
            duration: 5000,
        });
    }
});

addPlaylistFx.done.watch(({ params: { showToast } }) => {
    if (showToast) {
        toastModel.events.show({
            message: 'Playlist added to library',
            type: 'success',
            duration: 3000,
        });
    }
});

addPlaylistFx.failData.watch((err) => {
    toastModel.events.show({
        message: 'Failed to add playlist to library',
        type: 'error',
        reason: err.message,
        duration: 8000,
    });
});

removePlaylistFx.failData.watch((err) => {
    toastModel.events.show({
        message: 'Failed to remove playlist from library',
        type: 'error',
        reason: err.message,
        duration: 8000,
    });
});

// #endregion

// #region Update own playlist
export const updateOwnPlaylist = createEvent<TPlaylist>();

sample({
    clock: updateOwnPlaylist,
    source: $ownPlaylists,
    fn: (playlists, playlist) => {
        console.log('updateOwnPlaylist');

        const index = playlists.findIndex((p) => p.id === playlist.id);
        if (index !== -1) {
            return [
                ...playlists.slice(0, index),
                playlist,
                ...playlists.slice(index + 1),
            ];
        }
        return playlists;
    },
    target: $ownPlaylists,
});
// #endregion

export const userModel = {
    useUser: () => useUnit([$user, loadUserDataFx.pending, loginFx.pending]),
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
        getUserPage,
        resetUserPage,
        updateFriends,
        addOwnPlaylistToLibrary,
        toggleSongLiked,
        toggleAuthorLiked,
        toggleOtherPlaylistLiked,
        friendRequest,
        loadUserData,
    },
    gates: {
        useLoadUser: () => useGate(userGate),
    },
};
