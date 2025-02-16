import { createEffect, createEvent, createStore, sample } from 'effector';
import { convertToMap } from '../../shared/funcs/convertToMap';
import { THeavyMedia, TCache } from '../chat/model/types';
import { $friends } from '../user/model/friends';
import { $user } from '../user/model/user';
import { $addedAuthors } from '../user/model/library/authors';
import { $ownPlaylists } from '../user/model/library/playlists';
import { $library } from '../user/model/library/songs';

export const getNotInCacheFx = createEffect<
    THeavyMedia & { cache: TCache },
    THeavyMedia,
    Error
>();

export const saveInCache = createEvent<TCache>();

export const $cache = createStore<TCache>({});

sample({
    clock: [$user, $friends, $library, $addedAuthors, $ownPlaylists],
    source: {
        user: $user,
        friends: $friends,
        library: $library,
        addedAuthors: $addedAuthors,
        ownPlaylists: $ownPlaylists,
    },
    filter: ({ user }) => !!user,
    fn: ({ user, friends, library, ownPlaylists, addedAuthors }) => ({
        [user!.uid]: user!,
        ...convertToMap(friends),
        ...convertToMap(library),
        ...convertToMap(ownPlaylists),
        ...convertToMap(addedAuthors),
    }),
    target: saveInCache,
});

sample({
    clock: saveInCache,
    source: { cache: $cache, user: $user },
    fn: ({ cache }, newCache) => ({ ...cache, ...newCache }),
    target: $cache,
});

getNotInCacheFx.use(({ songIds, playlistIds, userIds, cache }) => {
    const newSongsIds = songIds.filter((id) => !cache[id]);
    const newPlaylistIds = playlistIds.filter((id) => !cache[id]);
    const newUserIds = userIds.filter((id) => !cache[id] && id);

    return {
        songIds: newSongsIds,
        playlistIds: newPlaylistIds,
        userIds: newUserIds,
    };
});
