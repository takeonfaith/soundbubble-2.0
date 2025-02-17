import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { createPendingEffectsStore } from '../../../shared/effector/createPendingEffects';
import { shuffleArray } from '../lib/shuffleArray';
import { LoopMode, SongState, TLoadQueue, TQueue, TSong } from '../model/types';
import { $loadedPercent, currentTimeApi } from './current-time';
import {
    $currentSong,
    $isLastSongInQueue,
    $loopMode,
    $queue,
    $shuffleMode,
    addAfterCurrentSongInQueue,
    addToTheEndOfQueue,
    next,
    queueApi,
} from './queue';
import { initialize } from './queue/init';
import { createQueueObject } from '../lib/createQueueObject';

type PlayProps = {
    queue: TQueue;
    currentSongIndex: number;
};

type TLoadSongsThenPlay = {
    queue: TLoadQueue;
    currentSongIndex: number;
    sort?: boolean;
};

export const loadSongsFx = createEffect<TLoadSongsThenPlay, TSong[]>();

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

export const $pendingQueueLoading = createPendingEffectsStore({
    effects: [loadSongsFx],
    getId: ({ queue }) => [queue.id],
});

sample({
    clock: shufflePlayPause,
    fn: () => true,
    target: $shuffleMode,
});

sample({
    clock: playPauseQueue,
    fn: () => false,
    target: $shuffleMode,
});

sample({
    clock: playPauseQueue,
    source: { queue: $queue, currentSong: $currentSong },
    filter: (
        { queue: currentQueue, currentSong },
        { queue, currentSongIndex }
    ) =>
        !currentQueue ||
        currentQueue.id !== queue.id ||
        currentSong?.id !== queue.songs[currentSongIndex].id,
    fn: (_, props) => props,
    target: [initialize, currentTimeApi.reset, loadAndPlay],
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
    clock: [load, loadAndPlay],
    source: { queue: $queue, pendingQueueLoading: $pendingQueueLoading },
    filter: ({ queue }) => !!queue,
    fn: ({ queue, pendingQueueLoading }) => {
        const newPending = new Set(pendingQueueLoading);
        newPending.add(queue!.id);
        return newPending;
    },
    target: $pendingQueueLoading,
});

sample({
    clock: loaded,
    source: { queue: $queue, pendingQueueLoading: $pendingQueueLoading },
    filter: ({ queue }) => !!queue,
    fn: ({ queue, pendingQueueLoading }) => {
        const newPending = new Set(pendingQueueLoading);
        newPending.delete(queue!.id);
        return newPending;
    },
    target: $pendingQueueLoading,
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
    clock: [
        queueApi.pNext,
        queueApi.pPrevious,
        queueApi.pToStart,
        currentTimeApi.reset,
    ],
    source: $songState,
    filter: (songState) => songState === SongState.playing,
    target: loadAndPlay,
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

sample({
    clock: [addAfterCurrentSongInQueue, addToTheEndOfQueue],
    source: { queue: $queue },
    filter: ({ queue }) => !queue,
    fn: (_, song) => {
        const queue = createQueueObject({
            songs: [song],
            name: song.name,
            url: `/song/${song.id}`,
            id: song.id,
            imageUrl: song.cover,
        });

        return { queue, currentSongIndex: 0 };
    },
    target: [playPauseQueue],
});

loadSongsFx.use(async ({ queue, sort }) => {
    return await Database.Songs.getSongsByUids(queue.songIds, sort);
});
