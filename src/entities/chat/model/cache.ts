import { createEffect, createEvent, createStore, sample } from 'effector';
import { $friends, $library, $user } from '../../user/model';
import { TCache, THeavyMedia } from './types';
import { convertToMap } from '../../../shared/funcs/convertToMap';

export const getNotInCacheFx = createEffect<
    THeavyMedia & { cache: TCache },
    THeavyMedia,
    Error
>();

export const saveInCache = createEvent<TCache>();

export const $cache = createStore<TCache>({});

sample({
    clock: [$user, $friends, $library],
    source: { user: $user, friends: $friends, library: $library },
    filter: ({ user }) => !!user,
    fn: ({ user, friends, library }) => ({
        [user!.uid]: user!,
        ...convertToMap(friends),
        ...convertToMap(library),
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
