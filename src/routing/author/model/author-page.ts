import { createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { TPlaylist } from '../../../entities/playlist/model/types';
import { TSong } from '../../../entities/song/model/types';
import { TUser } from '../../../entities/user/model/types';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';

type GetPageProps = {
    userId: string;
    allSongs?: boolean;
};

type LoadedPageData = {
    user: TUser;
    songs: TSong[];
    playlists: TPlaylist[];
    similarAuthors: TUser[];
} | null;

export const loadAuthorPageFx = createEffectWithToast<
    GetPageProps,
    LoadedPageData
>('', 'Failed to load author page');
export const loadAllAuthorSongsFx = createEffectWithToast<
    GetPageProps,
    TSong[]
>('', 'Failed to load all songs');

export const getAuthorPageById = createEvent<GetPageProps>();
export const resetUserPage = createEvent();

export const $pageAuthor = createStore<TUser | null>(null).reset(resetUserPage);
export const $topSongs = createStore<TSong[]>([]);
export const $allSongs = createStore<TSong[]>([]);
export const $albums = createStore<TPlaylist[]>([]);
export const $similarAuthors = createStore<TUser[]>([]);

sample({
    clock: getAuthorPageById,
    source: { loading: loadAuthorPageFx.pending, user: $pageAuthor },
    filter: ({ loading, user }, { userId }) =>
        !loading && (!user || user.uid !== userId),
    fn: (_, props) => ({ userId: props.userId }),
    target: loadAuthorPageFx,
});

sample({
    clock: getAuthorPageById,
    filter: ({ allSongs }) => !!allSongs,
    fn: (p) => p,
    target: loadAllAuthorSongsFx,
});

sample({
    clock: loadAuthorPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.user,
    target: $pageAuthor,
});

sample({
    clock: loadAuthorPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.songs,
    target: $topSongs,
});

sample({
    clock: loadAuthorPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.playlists,
    target: $albums,
});

sample({
    clock: loadAuthorPageFx.doneData,
    filter: Boolean,
    fn: (data) => data.similarAuthors,
    target: $similarAuthors,
});

sample({
    clock: loadAllAuthorSongsFx.doneData,
    fn: (allSongs) => allSongs,
    target: $allSongs,
});

loadAuthorPageFx.use(async ({ userId }) => {
    const props = await Database.Users.getAuthorPageById(userId, true);

    return props;
});

loadAllAuthorSongsFx.use(async ({ userId }) => {
    console.log('loadAllAuthorSongs');

    const allSongs = await Database.Users.getAllAuthorSongs(userId);

    return allSongs;
});
