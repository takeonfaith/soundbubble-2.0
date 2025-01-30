import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { TPlaylist } from '../../playlist/model/types';
import { TLastQueue, TSong } from '../../song/model/types';
import { TUser } from './types';

type GetPageProps = {
    userId: string;
    allSongs?: boolean;
};

type LoadedPageData = {
    user: TUser;
    songs: TSong[];
    friends: TUser[];
    lastQueue: {
        queue: TLastQueue | null;
        songs: TSong[];
    } | null;
    playlists: TPlaylist[];
} | null;

export const loadSimilarAuthorsFx = createEffect<TSong[], TUser[]>();
export const loadUserPageFx = createEffectWithToast<
    GetPageProps,
    LoadedPageData
>('', 'Failed to load author page');
const loadAllUserSongsFx = createEffectWithToast<GetPageProps, TSong[]>(
    '',
    'Failed to load all songs'
);

export const getUserPageById = createEvent<GetPageProps>();
export const loadSimilarAuthors = createEvent<TSong[]>();
export const resetUserPage = createEvent();

export const $pageUser = createStore<TUser | null>(null).reset(resetUserPage);
const $topSongs = createStore<TSong[]>([]);
const $allSongs = createStore<TSong[]>([]);
const $playlists = createStore<TPlaylist[]>([]);
const $similarAuthors = createStore<TUser[]>([]);
const $lastSongPlayed = createStore<TSong | null>(null);
const $friends = createStore<TUser[]>([]);

sample({
    clock: getUserPageById,
    source: { loading: loadUserPageFx.pending, user: $pageUser },
    filter: ({ loading, user }, { userId }) =>
        !loading && (!user || user.uid !== userId),
    fn: (_, props) => ({ userId: props.userId }),
    target: loadUserPageFx,
});

sample({
    clock: getUserPageById,
    source: loadAllUserSongsFx.pending,
    filter: (loading, { allSongs }) => !!allSongs && !loading,
    fn: (_, p) => p,
    target: loadAllUserSongsFx,
});

sample({
    clock: loadUserPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.user,
    target: $pageUser,
});

sample({
    clock: loadUserPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.songs,
    target: $topSongs,
});

sample({
    clock: loadUserPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.playlists,
    target: $playlists,
});

sample({
    clock: loadUserPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.friends,
    target: $friends,
});

sample({
    clock: loadUserPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.lastQueue?.songs[0] ?? null,
    target: $lastSongPlayed,
});

sample({
    clock: loadUserPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.playlists,
    target: $playlists,
});

sample({
    clock: loadSimilarAuthors,
    target: loadSimilarAuthorsFx,
});

sample({
    clock: loadSimilarAuthorsFx.doneData,
    fn: (similarAuthors) => similarAuthors,
    target: $similarAuthors,
});

sample({
    clock: loadAllUserSongsFx.doneData,
    fn: (allSongs) => allSongs,
    target: $allSongs,
});

loadUserPageFx.use(async ({ userId }) => {
    const props = await Database.Users.getUserPageById(userId);

    return props;
});

loadAllUserSongsFx.use(async ({ userId }) => {
    console.log('loadAllAuthorSongs');

    const allSongs = await Database.Users.getAllAuthorSongs(userId);

    return allSongs;
});

export const userPage = {
    useUserData: () => useUnit([$pageUser, loadUserPageFx.pending]),
    useTopSongs: () => useUnit([$topSongs]),
    useAllSongs: () => useUnit([$allSongs, loadAllUserSongsFx.pending]),
    useLastSongPlayed: () => useUnit([$lastSongPlayed]),
    usePlaylists: () => useUnit([$playlists]),
    useFriends: () => useUnit([$friends]),
    useSimilarAuthors: () =>
        useUnit([$similarAuthors, loadSimilarAuthorsFx.pending]),
};
