import { createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { TPlaylist } from '../../../entities/playlist/model/types';
import { TLastQueue, TSong } from '../../../entities/song/model/types';
import { TUser } from '../../../entities/user/model/types';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';

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
export const $addedSongs = createStore<TSong[]>([]);
export const $allSongs = createStore<TSong[]>([]);
export const $playlists = createStore<TPlaylist[]>([]);
export const $lastSongPlayed = createStore<TSong | null>(null);
export const $friends = createStore<TUser[]>([]);

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
    target: $addedSongs,
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
