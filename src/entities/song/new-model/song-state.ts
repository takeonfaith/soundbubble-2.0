import { createEffect, createEvent, createStore, sample } from 'effector';
import { LoopMode, SongState, TLoadQueue, TQueue, TSong } from '../model/types';
import { currentTimeApi } from './current-time';
import {
    $currentSong,
    $currentSongIndex,
    $loopMode,
    $isLastSongInQueue,
    $queue,
    next,
    previous,
} from './queue';
import { historyModel } from '../../history/model';
import { shuffleArray } from '../lib/shuffleArray';
import { Database } from '../../../database';

type PlayProps = {
    queue: TQueue;
    currentSongIndex: number;
};

type TLoadSongsThenPlay = {
    queue: TLoadQueue;
    currentSongIndex: number;
};

const loadSongsFx = createEffect<TLoadSongsThenPlay, TSong[]>();

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

export const loadSongsThenPlay = createEvent<TLoadSongsThenPlay>();

const initialize = createEvent<PlayProps>();

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
    clock: shufflePlayPause,
    fn: ({ queue }) => ({
        queue: { ...queue, songs: shuffleArray(queue.songs) },
        currentSongIndex: 0,
    }),
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
    source: $currentSong,
    filter: Boolean,
    fn: (song) => song,
    target: historyModel.events.addToHistory,
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

sample({
    clock: stop,
    target: pause,
});

sample({
    clock: stop,
    target: currentTimeApi.reset,
});

sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        isLastSongInQueue: $isLastSongInQueue,
    },
    filter: ({ loopMode, isLastSongInQueue }, nextFrom) => {
        const res =
            isLastSongInQueue &&
            loopMode === LoopMode.noloop &&
            nextFrom !== 'from_next_button';

        return res;
    },
    target: stop,
});

sample({
    clock: loadSongsThenPlay,
    target: loadSongsFx,
});

sample({
    clock: loadSongsFx.done,
    fn: ({ params: { queue, currentSongIndex }, result }) => ({
        queue: { ...queue, songs: result },
        currentSongIndex,
    }),
    target: [initialize, loadAndPlay],
});

loadSongsFx.use(async ({ queue }) => {
    return await Database.Songs.getSongsByUids(queue.songIds);
});
