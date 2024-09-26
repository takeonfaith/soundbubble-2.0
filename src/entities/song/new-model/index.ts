import {
    combine,
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { useUnit } from 'effector-react';
import { throttle } from 'patronum';
import { Database } from '../../../database';
import { shuffleSongs } from '../lib/shuffleSongs';
import { LoopMode, SongState, TQueue, TSong } from '../model/types';

type TNextFrom = 'from_next_button' | 'from_end_track';

const addListeningFx = createEffect<TSong, Promise<void>>();

const play = createEvent<{ queue?: TQueue; currentSongIndex?: number }>();
const pause = createEvent();
const stop = createEvent();

const shufflePlay = createEvent<{ queue?: TQueue }>();

const addListening = createEvent<TSong>();

const initalize = createEvent<{ queue: TQueue; currentSongIndex: number }>();

const load = createEvent<TSong>();
const loaded = createEvent();

const next = createEvent<TNextFrom>();
const previous = createEvent();

const $queue = createStore<TQueue | null>(null);
const $currentSongIndex = createStore<number>(0);
const $shuffleMode = createStore<boolean>(false);
const $loopMode = createStore<LoopMode>(
    (localStorage.getItem('loopMode') as LoopMode | null) ?? LoopMode.noloop
);

const $songState = createStore<SongState | null>(null);
const $currentTime = createStore<number>(0);
// Is needed for changing the audio currentTime in AppAudio
const $lastTime = createStore<number>(-1);

const $currentSong = combine(
    $queue,
    $currentSongIndex,
    (queue, currentSongIndex) => queue?.songs[currentSongIndex]
);

const $currentSongDuration = $currentSong.map(
    (song) => ((song?.duration ?? 0) / 5) * 1000
);

$currentSongDuration.watch((duration) => {
    console.log({ duration });
});

const currentTimeApi = createApi($currentTime, {
    reset: () => 0,
    set: (_, value: number) => value,
});

const { toggleLoopMode } = createApi($loopMode, {
    toggleLoopMode: (loopMode) => {
        if (loopMode === LoopMode.noloop) return LoopMode.loopall;

        if (loopMode === LoopMode.loopall) return LoopMode.loopone;

        return LoopMode.noloop;
    },
});

const { toggleShuffleMode } = createApi($shuffleMode, {
    toggleShuffleMode: (shuffleMode) => {
        return !shuffleMode;
    },
});

sample({
    clock: addListening,
    fn: (song) => song,
    target: addListeningFx,
});

sample({
    clock: currentTimeApi.reset,
    fn: () => 0,
    target: $lastTime,
});

sample({
    clock: currentTimeApi.set,
    fn: () => -1,
    target: $lastTime,
});

const queueApi = createApi($currentSongIndex, {
    // primitives
    pNext: (index) => index + 1,
    pPrevious: (index) => index - 1,
    pToStart: () => 0,
});

const pToEnd = createEvent();

sample({
    clock: pToEnd,
    source: $queue,
    fn: (queue) => (queue?.songs.length ?? 1) - 1,
    target: $currentSongIndex,
});

// #region Play

sample({
    clock: initalize,
    fn: ({ currentSongIndex }) => currentSongIndex,
    target: $currentSongIndex,
});

sample({
    clock: initalize,
    fn: ({ queue }) => queue,
    target: $queue,
});

// If song chaged, load
sample({
    clock: play,
    source: { currentSong: $currentSong },
    filter: ({ currentSong }, { queue, currentSongIndex }) => {
        return (
            !currentSong ||
            (!!queue &&
                currentSongIndex !== undefined &&
                currentSong.id !== queue.songs[currentSongIndex].id)
        );
    },
    fn: (_, { queue, currentSongIndex }) => {
        return {
            currentSongIndex: currentSongIndex as number,
            queue: queue as TQueue,
        };
    },
    target: initalize,
});

sample({
    clock: shufflePlay,
    source: $queue,
    filter: (q, { queue }) => !!(queue ?? q),
    fn: (q, { queue }) => {
        const finalQueue = queue ?? q;
        return {
            currentSongIndex: 0,
            queue: {
                ...finalQueue,
                songs: shuffleSongs(finalQueue?.songs as TSong[]),
            } as TQueue,
        };
    },
    target: initalize,
});

sample({
    clock: play,
    source: $songState,
    filter: (state) => state === SongState.playing,
    target: pause,
});

sample({
    clock: play,
    source: $songState,
    filter: (state) => state === SongState.pause,
    fn: () => SongState.playing,
    target: $songState,
});

// #region Pause

const { unsubscribe } = throttle(load, 3000).watch((song) => {
    if (song) {
        console.log('new listening added', song);
        addListening(song);
    }
});

sample({
    clock: pause,
    fn: () => {
        return SongState.pause;
    },
    target: $songState,
});

// #endregion

// #region Load

sample({
    clock: $currentSong,
    filter: Boolean,
    fn: (song) => song,
    target: load,
});

sample({
    clock: load,
    fn: () => SongState.loading,
    target: $songState,
});

sample({
    clock: loaded,
    fn: () => SongState.playing,
    target: $songState,
});

//#endregion

// #region Next

// End of queue, stop at the last track
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }) =>
        loopMode === LoopMode.noloop &&
        (queue?.songs.length ?? 1) - 1 === currentSongIndex,
    fn: () => {
        console.log('i was here');
    },
    target: stop,
});

// // End of queue, loopall mode, go to start
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }) =>
        loopMode === LoopMode.loopall &&
        (queue?.songs.length ?? 1) - 1 === currentSongIndex,
    target: queueApi.pToStart,
});

// Next track if from button
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }, nextFrom) =>
        loopMode === LoopMode.loopone &&
        nextFrom === 'from_next_button' &&
        (queue?.songs.length ?? 1) - 1 > currentSongIndex,
    target: queueApi.pNext,
});

// Next track
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }) =>
        loopMode !== LoopMode.loopone &&
        (queue?.songs.length ?? 1) - 1 > currentSongIndex,
    target: queueApi.pNext,
});

// Start track from beginning if loopMode === LoopMode.loopone
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ loopMode, queue, currentSongIndex }, nextFrom) =>
        loopMode === LoopMode.loopone &&
        nextFrom === 'from_end_track' &&
        (queue?.songs.length ?? 1) - 1 > currentSongIndex,
    target: previous,
});

// #endregion

// #region Previous

// Start of queue, go to the end of queue
sample({
    clock: previous,
    source: {
        loopMode: $loopMode,
        currentSongIndex: $currentSongIndex,
        currentTime: $currentTime,
    },
    filter: ({ loopMode, currentSongIndex, currentTime }) =>
        currentTime <= 5 &&
        currentSongIndex === 0 &&
        loopMode === LoopMode.loopall,
    target: pToEnd,
});

// Previous track
sample({
    clock: previous,
    source: {
        currentTime: $currentTime,
        currentSongIndex: $currentSongIndex,
        loopMode: $loopMode,
    },
    filter: ({ currentTime, currentSongIndex, loopMode }) => {
        return (
            currentTime <= 5 &&
            currentSongIndex !== 0 &&
            loopMode !== LoopMode.loopone
        );
    },
    target: queueApi.pPrevious,
});

// Start track from the beginning if currentTime is more than 5 sec
sample({
    clock: previous,
    source: {
        currentTime: $currentTime,
    },
    filter: ({ currentTime }) => {
        console.log('reset song');

        return currentTime > 5;
    },
    target: currentTimeApi.reset,
});

// #endregion

// #region Stop track

sample({
    clock: stop,
    fn: () => 0,
    target: $lastTime,
});

sample({
    clock: stop,
    target: pause,
});

sample({
    clock: stop,
    target: queueApi.pToStart,
});

// #endregion

addListeningFx.use(async (song) => {
    console.log('addListeningFx');

    Database.Songs.addListening(song);
});

// TODO: Разбить на разные unit'ы, а то триггерит ненужный ререндер
export const songModel = {
    useSong: () =>
        useUnit({
            loopMode: $loopMode,
            currentSong: $currentSong,
            queue: $queue,
            state: $songState,
            lastTime: $lastTime,
            currentSongIndex: $currentSongIndex,
            shuffleMode: $shuffleMode,
        }),
    useCurrentTime: () => useUnit($currentTime),
    controls: {
        play,
        shufflePlay,
        pause,
        stop,
    },
    state: {
        load,
        loaded,
    },
    queue: {
        next,
        previous,
        toggleLoopMode,
        toggleShuffleMode,
    },
    playback: {
        setCurrentTime: currentTimeApi.set,
    },
};
