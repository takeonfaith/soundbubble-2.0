// Add listeting

import { createEffect, createEvent, sample } from 'effector';
import { debounce } from 'patronum';
import {
    $currentSong,
    $currentSongIndex,
    $queue,
    previous,
    next,
} from './queue';
import { SongState, TQueue } from '../model/types';
import { Database } from '../../../database';
import { $songState, play, shufflePlayPause } from './song-state';

const addListeningFx = createEffect<
    { queue: TQueue | null; currentSongIndex: number },
    Promise<void>
>();

const triggerAddListeting = createEvent();

const $currentSongDuration = $currentSong.map((song) => {
    if (!song) return 0;

    return (song.duration / 2) * 1000;
});

const addListening = debounce(triggerAddListeting, $currentSongDuration);

// Trigger add listeting on this events
sample({
    clock: [play, shufflePlayPause, previous, next],
    target: triggerAddListeting,
});

sample({
    clock: addListening,
    source: {
        state: $songState,
        currentSong: $currentSong,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ state, currentSong }) =>
        !!currentSong && state === SongState.playing,
    fn: ({ currentSongIndex, queue }) => ({ queue, currentSongIndex }),
    target: addListeningFx,
});

addListeningFx.use(async ({ queue, currentSongIndex }) => {
    await Database.Songs.addListening(queue, currentSongIndex);
});
