import { createStore, createApi, sample } from 'effector';
import { shuffleArray } from '../lib/shuffleArray';
import { TSong, TQueue } from '../model/types';
import { $queue, $currentSong, $currentSongIndex } from './queue';

export const $shuffleMode = createStore<boolean>(
    Boolean(JSON.parse(localStorage.getItem('shuffle') ?? 'false'))
);

// Storing original queue songs so that when user click
// on shuffle it is possible to reverse it
export const $queueCorrectSongs = createStore<TSong[]>([]);

export const { toggleShuffleMode } = createApi($shuffleMode, {
    toggleShuffleMode: (shuffleMode) => {
        localStorage.setItem('shuffle', (!shuffleMode).toString());
        return !shuffleMode;
    },
});

// Saving original queue songs
sample({
    clock: $shuffleMode,
    source: { queue: $queue, shuffleMode: $shuffleMode },
    filter: ({ queue, shuffleMode }) => !!queue?.songs.length && shuffleMode,
    fn: ({ queue }) => queue!.songs,
    target: $queueCorrectSongs,
});

$queueCorrectSongs.watch((s) => console.log(s));

// When shuffle turned on, replace songs with shuffled ones
sample({
    clock: $shuffleMode,
    source: { queue: $queue, currentSong: $currentSong },
    filter: ({ queue }, shuffleMode) => {
        return shuffleMode && !!queue && queue.songs.length > 0;
    },
    fn: ({ queue, currentSong }) => {
        const songs = [
            currentSong!,
            ...shuffleArray(queue!.songs).filter(
                (s) => s.id !== currentSong!.id
            ),
        ];

        return {
            ...queue,
            songs,
        } as TQueue;
    },
    target: $queue,
});

// When shuffle turned on, current songs is always first in queue
sample({
    clock: $shuffleMode,
    source: { queue: $queue },
    filter: ({ queue }, shuffleMode) => {
        return shuffleMode && !!queue && queue.songs.length > 0;
    },
    fn: () => 0,
    target: $currentSongIndex,
});

// When shuffle turned off, find real index of
// current song
sample({
    clock: $shuffleMode,
    source: {
        currentSong: $currentSong,
        queueCorrectSongs: $queueCorrectSongs,
    },
    filter: ({ currentSong }, shuffleMode) => {
        return !shuffleMode && !!currentSong;
    },
    fn: ({ currentSong, queueCorrectSongs }) =>
        queueCorrectSongs?.findIndex((s) => s.id === currentSong!.id) ?? 0,
    target: $currentSongIndex,
});

// When shuffle turned off, replace songs with original songs
sample({
    clock: $shuffleMode,
    source: { queueCorrectSongs: $queueCorrectSongs, queue: $queue },
    filter: ({ queueCorrectSongs }, shuffleMode) => {
        return !shuffleMode && queueCorrectSongs.length > 0;
    },
    fn: ({ queueCorrectSongs, queue }) =>
        ({
            ...queue,
            songs: queueCorrectSongs,
        } as TQueue),
    target: $queue,
});

// When shuffle turned off, reset queueCorrectSongs
sample({
    clock: $shuffleMode,
    filter: (shuffleMode) => {
        return !shuffleMode;
    },
    fn: () => [],
    target: $queueCorrectSongs,
});
