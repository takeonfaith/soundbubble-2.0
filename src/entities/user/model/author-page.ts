import { createEffect, createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { TPlaylist } from '../../playlist/model/types';
import { TSong } from '../../song/model/types';
import { TUser } from './types';

type GetPageProps = {
    userId: string;
    allSongs?: boolean;
};

type LoadedPageData = {
    user: TUser;
    songs: TSong[];
    playlists: TPlaylist[];
} | null;

export const loadSimilarAuthorsFx = createEffect<TSong[], TUser[]>();
export const loadUserPageFx = createEffectWithToast<
    GetPageProps,
    LoadedPageData
>('', 'Failed to load author page');
const loadAllAuthorSongsFx = createEffectWithToast<GetPageProps, TSong[]>(
    '',
    'Failed to load all songs'
);

export const getAuthorPageById = createEvent<GetPageProps>();
export const loadSimilarAuthors = createEvent<TSong[]>();
export const resetUserPage = createEvent();

export const $pageUser = createStore<TUser | null>(null).reset(resetUserPage);
const $topSongs = createStore<TSong[]>([]);
const $allSongs = createStore<TSong[]>([]);
const $albums = createStore<TPlaylist[]>([]);
const $similarAuthors = createStore<TUser[]>([]);

sample({
    clock: getAuthorPageById,
    source: { loading: loadUserPageFx.pending, user: $pageUser },
    filter: ({ loading, user }, { userId }) =>
        !loading && (!user || user.uid !== userId),
    fn: (_, props) => ({ userId: props.userId }),
    target: loadUserPageFx,
});

sample({
    clock: getAuthorPageById,
    filter: ({ allSongs }) => !!allSongs,
    fn: (p) => p,
    target: loadAllAuthorSongsFx,
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
    target: $albums,
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
    clock: loadAllAuthorSongsFx.doneData,
    fn: (allSongs) => allSongs,
    target: $allSongs,
});

loadUserPageFx.use(async ({ userId }) => {
    const props = await Database.Users.getAuthorPageById(userId, true);

    return props;
});

loadSimilarAuthorsFx.use(async (songs) => {
    try {
        const authors = await Database.Users.getSimilarAuthorsBySongs(songs);
        return authors;
    } catch (error) {
        throw new Error('Failed to load similar authors');
    }
});

loadAllAuthorSongsFx.use(async ({ userId }) => {
    console.log('loadAllAuthorSongs');

    const allSongs = await Database.Users.getAllAuthorSongs(userId);

    return allSongs;
});

export const authorPage = {
    useAuthorPage: () => useUnit([$pageUser, loadUserPageFx.pending]),
    useTopSongs: () => useUnit([$topSongs]),
    useAllSongs: () => useUnit([$allSongs, loadAllAuthorSongsFx.pending]),
    useAlbums: () => useUnit([$albums]),
    useSimilarAuthors: () =>
        useUnit([$similarAuthors, loadSimilarAuthorsFx.pending]),
};
