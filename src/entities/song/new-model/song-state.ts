import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { LoopMode, SongState, TLoadQueue, TQueue, TSong } from '../model/types';
import { $loadedPercent, currentTimeApi } from './current-time';
import {
    $currentSong,
    $currentSongIndex,
    $isLastSongInQueue,
    $loopMode,
    $queue,
    next,
    previous,
} from './queue';
import { shuffleArray } from '../lib/shuffleArray';
import { $queueCorrectSongs, $shuffleMode } from './shuffle';

type PlayProps = {
    queue: TQueue;
    currentSongIndex: number;
};

type TLoadSongsThenPlay = {
    queue: TLoadQueue;
    currentSongIndex: number;
};

const loadSongsFx = createEffect<TLoadSongsThenPlay, TSong[]>();

export const $songState = createStore<SongState | null>(null);

export const playPauseQueue = createEvent<PlayProps>();
export const togglePlayPause = createEvent();

export const shufflePlayPause = createEvent<{ queue: TQueue }>();

export const play = createEvent();
export const pause = createEvent();
export const stop = createEvent();

export const load = createEvent();
export const loaded = createEvent();

export const loadAndPlay = createEvent();

export const loadSongsThenShuffle = createEvent<TLoadSongsThenPlay>();
export const loadSongsThenPlay = createEvent<TLoadSongsThenPlay>();

const initialize = createEvent<PlayProps>();

sample({
    clock: shufflePlayPause,
    fn: () => true,
    target: $shuffleMode,
});

sample({
    clock: initialize,
    source: $shuffleMode,
    filter: (shuffleMode) => shuffleMode,
    fn: (_, { queue }) => queue.songs,
    target: $queueCorrectSongs,
});

sample({
    clock: initialize,
    source: $shuffleMode,
    fn: (shuffleMode, { queue, currentSongIndex }) => {
        const currentSong = queue.songs[currentSongIndex];
        console.log(queue.songs, currentSongIndex);

        const songs = shuffleMode
            ? currentSongIndex === 0
                ? shuffleArray(queue.songs)
                : [
                      currentSong!,
                      ...shuffleArray(queue!.songs).filter(
                          (s) => s.id !== currentSong!.id
                      ),
                  ]
            : queue.songs;

        return { ...queue, songs };
    },
    target: $queue,
});

sample({
    clock: initialize,
    source: $shuffleMode,
    fn: (shuffleMode, { currentSongIndex }) =>
        shuffleMode ? 0 : currentSongIndex,
    target: $currentSongIndex,
});

sample({
    clock: playPauseQueue,
    fn: () => false,
    target: $shuffleMode,
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
        queue,
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
    clock: $currentSong,
    fn: () => 0,
    target: $loadedPercent,
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
    clock: loadSongsThenShuffle,
    filter: ({ queue }) => {
        console.log('queue', queue);

        return queue.songIds.length > 0;
    },
    fn: ({ queue, ...props }) => ({
        queue: { ...queue, songIds: shuffleArray(queue.songIds) },
        ...props,
    }),
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
