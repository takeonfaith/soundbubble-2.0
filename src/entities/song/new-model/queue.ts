import { combine, createApi, createEvent, createStore, sample } from 'effector';
import { LoopMode, TNextFrom, TQueue } from '../model/types';
import { $currentTime, currentTimeApi } from './current-time';

export const next = createEvent<TNextFrom>();
export const previous = createEvent();
const pToEnd = createEvent();

export const $shuffleMode = createStore<boolean>(false);
export const $loopMode = createStore<LoopMode>(
    (localStorage.getItem('loopMode') as LoopMode | null) ?? LoopMode.noloop
);

export const { toggleLoopMode } = createApi($loopMode, {
    toggleLoopMode: (loopMode) => {
        if (loopMode === LoopMode.noloop) return LoopMode.loopall;

        if (loopMode === LoopMode.loopall) return LoopMode.loopone;

        return LoopMode.noloop;
    },
});

export const { toggleShuffleMode } = createApi($shuffleMode, {
    toggleShuffleMode: (shuffleMode) => {
        return !shuffleMode;
    },
});

export const $queue = createStore<TQueue | null>(null);
export const $currentSongIndex = createStore<number>(0);

export const queueApi = createApi($currentSongIndex, {
    // primitives
    pNext: (index) => index + 1,
    pPrevious: (index) => index - 1,
    pToStart: () => -1,
});

export const $currentSong = combine(
    $queue,
    $currentSongIndex,
    (queue, currentSongIndex) => queue?.songs[currentSongIndex],
    { skipVoid: false }
);

sample({
    clock: pToEnd,
    source: $queue,
    fn: (queue) => (queue?.songs.length ?? 1) - 1,
    target: $currentSongIndex,
});

// End of queue, stop at the last track

const filterNext = (
    {
        loopMode,
        queue,
        currentSongIndex,
    }: { loopMode: LoopMode; queue: TQueue | null; currentSongIndex: number },
    nextFrom: TNextFrom
) => {
    const isEither =
        loopMode !== LoopMode.loopone ||
        (loopMode === LoopMode.loopone && nextFrom === 'from_next_button');

    console.log(isEither && (queue?.songs.length ?? 1) - 1 > currentSongIndex);

    return isEither && (queue?.songs.length ?? 1) - 1 > currentSongIndex;
};

// // End of queue, loopall mode, go to start
sample({
    clock: next,
    source: { currentSongIndex: $currentSongIndex, queue: $queue },
    filter: ({ currentSongIndex, queue }) => {
        const res = (queue?.songs.length ?? 1) - 1 === currentSongIndex;

        return res;
    },
    target: queueApi.pToStart,
});

// Next track
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        queue: $queue,
        currentSongIndex: $currentSongIndex,
    },
    filter: filterNext,
    target: queueApi.pNext,
});

// Start track from beginning if loopMode === LoopMode.loopone
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
    },
    filter: ({ loopMode }, nextFrom) =>
        loopMode === LoopMode.loopone && nextFrom === 'from_end_track',
    fn: () => {
        console.log(
            'Start track from beginning if loopMode === LoopMode.loopone'
        );
    },
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
