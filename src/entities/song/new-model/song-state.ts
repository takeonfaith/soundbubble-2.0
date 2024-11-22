import { createEvent, createStore, sample } from 'effector';
import { SongState, TQueue } from '../model/types';
import {
    $currentSong,
    $currentSongIndex,
    $queue,
    next,
    previous,
} from './queue';

type PlayProps = {
    queue: TQueue;
    currentSongIndex: number;
};

export const playPauseQueue = createEvent<PlayProps>();
export const togglePlayPause = createEvent();

export const shufflePlayPause = createEvent<{ queue: TQueue }>();

export const $songState = createStore<SongState | null>(null);

export const play = createEvent();
export const shuffle = createEvent();
export const pause = createEvent();
export const stop = createEvent();

export const load = createEvent();
export const loaded = createEvent();

export const loadAndPlay = createEvent();
export const loadAndShuffle = createEvent();

const initialize = createEvent<PlayProps>();

$currentSongIndex.watch((queue) => {
    console.log({ queue });
});

sample({
    clock: initialize,
    fn: ({ queue }) => queue,
    target: $queue,
});

sample({
    clock: initialize,
    fn: ({ currentSongIndex }) => currentSongIndex,
    target: $currentSongIndex,
});

sample({
    clock: playPauseQueue,
    source: $currentSong,
    filter: (currentSong, { queue, currentSongIndex }) =>
        !currentSong || currentSong.id !== queue.songs[currentSongIndex].id,
    fn: (_, props) => props,
    target: [initialize, loadAndPlay],
});

sample({
    clock: [next, previous],
    source: $songState,
    filter: (songState) => songState === SongState.playing,
    target: loadAndPlay,
});

sample({
    clock: load,
    fn: () => SongState.loading,
    target: $songState,
});

sample({
    clock: loadAndPlay,
    fn: () => SongState.loadingThenPlay,
    target: $songState,
});

sample({
    clock: loaded,
    source: $songState,
    filter: (songState) => songState === SongState.loadingThenPlay,
    target: play,
});

sample({
    clock: loaded,
    source: $songState,
    filter: (songState) => songState === SongState.loading,
    fn: () => SongState.loaded,
    target: $songState,
});

sample({
    clock: [playPauseQueue, togglePlayPause],
    source: $songState,
    filter: (songState) => {
        return songState === SongState.loaded || songState === SongState.pause;
    },
    target: play,
});

sample({
    clock: [playPauseQueue, togglePlayPause],
    source: $songState,
    filter: (songState) => {
        return songState === SongState.playing;
    },
    target: pause,
});

sample({
    clock: play,
    fn: () => SongState.playing,
    target: $songState,
});

sample({
    clock: pause,
    fn: () => SongState.pause,
    target: $songState,
});
