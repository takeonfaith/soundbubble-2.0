import {
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { Database } from '../../../database';
import { toastModel } from '../../../layout/toast/model';
import { TUser } from '../../user/model/types';
import { createQueueObject } from '../lib/createQueueObject';
import { TAuthor, TQueue } from '../model/types';
import { load, playPauseQueue, togglePlayPause } from './song-state';
import { slowSongsApi } from './slow-songs';
import { $queue } from './queue';
import { $addedAuthors } from '../../user/model/library/authors';

export const playWaveFx = createEffect<
    { authors: TUser[] | TAuthor[] },
    TQueue
>();

export const playWave = createEvent<{ authors: TAuthor[] } | void>();

export const $isSlowWave = createStore(false);

export const { toggleSlow } = createApi($isSlowWave, {
    toggleSlow: (slow) => !slow,
});

sample({
    clock: playWave,
    source: { authors: $addedAuthors, queue: $queue },
    filter: ({ queue }) => !queue || queue.url !== '/discover',
    fn: ({ authors }, local) => ({
        authors:
            local !== null && typeof local === 'object'
                ? local.authors
                : authors,
    }),
    target: playWaveFx,
});

sample({
    clock: playWaveFx,
    target: load,
});

sample({
    clock: playWave,
    source: { queue: $queue },
    filter: ({ queue }) => !!queue && queue.url === '/discover',
    target: [togglePlayPause],
});

sample({
    clock: playWaveFx.doneData,
    source: $isSlowWave,
    filter: (isSlow) => isSlow,
    fn: (_, queue) => queue.songs.map((s) => s.id),
    target: slowSongsApi.add,
});

sample({
    clock: $isSlowWave,
    source: $queue,
    filter: (queue, isSlow) => !isSlow && !!queue && queue.url === '/discover',
    fn: (queue) => queue!.songs.map((s) => s.id),
    target: slowSongsApi.reset,
});

sample({
    clock: $isSlowWave,
    source: $queue,
    filter: (queue, isSlow) => !!queue && queue.url === '/discover' && isSlow,
    fn: (queue) => queue!.songs.map((s) => s.id),
    target: slowSongsApi.add,
});

sample({
    clock: playWaveFx.doneData,
    fn: (queue) => ({ currentSongIndex: 0, queue }),
    target: playPauseQueue,
});

playWaveFx.use(async ({ authors }) => {
    const songs = await Database.Songs.getWave(authors);
    return createQueueObject({
        name: 'Wave',
        songs: songs,
        url: '/discover',
    });
});

playWaveFx.failData.watch(() => {
    toastModel.events.add({
        type: 'error',
        message: 'Failed to play wave',
        duration: 10000,
        reason: 'Failed to fetch wave data',
    });
});
