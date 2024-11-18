import { createEffect, createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { $cache, getNotInCacheFx, saveInCache } from './cache';
import { TCache, THeavyMedia } from './types';

export const loadHeavyMediaFx = createEffect<THeavyMedia, TCache, Error>();

export const loadHeavyMedia = createEvent<THeavyMedia>();

sample({
    clock: loadHeavyMedia,
    source: { cache: $cache },
    filter: (_, { songIds, playlistIds, userIds }) =>
        songIds.length > 0 || playlistIds.length > 0 || userIds.length > 0,
    fn: ({ cache }, params) => ({
        cache,
        ...params,
    }),
    target: getNotInCacheFx,
});

sample({
    clock: getNotInCacheFx.doneData,
    target: loadHeavyMediaFx,
});

sample({
    clock: loadHeavyMediaFx.doneData,
    fn: (result) => result,
    target: saveInCache,
});

loadHeavyMediaFx.use(async ({ songIds, playlistIds, userIds }) => {
    const res = await Database.Chats.getHeavyMedia(
        songIds,
        playlistIds,
        userIds
    );

    return res;
});
