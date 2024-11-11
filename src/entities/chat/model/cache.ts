import { createEffect, createEvent, createStore, sample } from 'effector';
import { $user } from '../../user/model';
import { TCache, THeavyMedia } from './types';

export const getNotInCacheFx = createEffect<
    THeavyMedia & { cache: TCache },
    THeavyMedia,
    Error
>();

export const saveInCache = createEvent<TCache>();

export const $cache = createStore<TCache>({});

sample({
    clock: $user,
    filter: Boolean,
    fn: (user) => ({ [user.uid]: user }),
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
