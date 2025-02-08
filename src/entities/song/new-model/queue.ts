import {
    combine,
    createApi,
    createEffect,
    createEvent,
    createStore,
    sample,
} from 'effector';
import { Database } from '../../../database';
import { logout } from '../../user/model/user';
import { createQueueObject } from '../lib/createQueueObject';
import { LoopMode, TLastQueue, TNextFrom, TQueue, TSong } from '../model/types';
import { $currentTime, currentTimeApi } from './current-time';

const loadLastQueueFx = createEffect<
    string,
    { queue: TLastQueue | null; songs: TSong[] } | null
>();

export const next = createEvent<TNextFrom>();
export const previous = createEvent();
const pToEnd = createEvent();
export const addToQueue = createEvent<TQueue>();

export const $loopMode = createStore<LoopMode>(
    +(localStorage.getItem('loopMode') ?? 0) as LoopMode
);

export const { toggleLoopMode } = createApi($loopMode, {
    toggleLoopMode: (loopMode) => {
        let mode: number;
        if (loopMode === LoopMode.noloop) mode = LoopMode.loopall;
        else if (loopMode === LoopMode.loopall) mode = LoopMode.loopone;
        else mode = LoopMode.noloop;

        localStorage.setItem('loopMode', mode.toString());
        return mode;
    },
});

export const $queue = createStore<TQueue | null>(null).reset(logout);
export const $currentSongIndex = createStore<number>(0).reset(logout);
export const $isLastSongInQueue = combine(
    $queue,
    $currentSongIndex,
    (queue, currentSongIndex) => {
        if (!queue?.songs.length) return false;

        return queue.songs.length - 1 === currentSongIndex;
    }
);

export const $isOnlySongInQueue = $queue.map(
    (queue) => queue?.songs.length === 1
);

export const queueApi = createApi($currentSongIndex, {
    // primitives
    pNext: (index) => index + 1,
    pPrevious: (index) => index - 1,
    pToStart: () => 0,
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
    filter: (queue) => !!queue && queue.songs.length > 0,
    fn: (queue) => queue!.songs.length - 1,
    target: $currentSongIndex,
});

// End of queue, stop at the last track

const filterNext = (
    {
        loopMode,
        isLastSongInQueue,
        restarted,
        isOnlySongInQueue,
    }: {
        loopMode: LoopMode;
        isLastSongInQueue: boolean;
        restarted: boolean;
        isOnlySongInQueue: boolean;
    },
    nextFrom: TNextFrom
) => {
    const isEither =
        !isOnlySongInQueue &&
        !restarted &&
        (loopMode !== LoopMode.loopone || nextFrom === 'from_next_button');

    console.log(isEither && !isLastSongInQueue);

    return isEither && !isLastSongInQueue;
};

// Weird trick that is needed so that two nexts don't
// fire up one after another in the end of queue
// causing queue starting from second song
const restarted = createStore(false)
    .on(next, () => false)
    .on(queueApi.pToStart, () => true);

// End of queue, loopall mode, go to start of queue
sample({
    clock: next,
    source: {
        isLastSongInQueue: $isLastSongInQueue,
        loopMode: $loopMode,
        isOnlySongInQueue: $isOnlySongInQueue,
    },
    filter: ({ isLastSongInQueue, loopMode, isOnlySongInQueue }, nextFrom) => {
        if (isOnlySongInQueue) return false;

        const shouldGoToStartOfQueue =
            isLastSongInQueue &&
            (loopMode === LoopMode.loopall || nextFrom === 'from_next_button');

        return shouldGoToStartOfQueue;
    },
    target: queueApi.pToStart,
});

// Next track
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        isLastSongInQueue: $isLastSongInQueue,
        restarted,
        isOnlySongInQueue: $isOnlySongInQueue,
    },
    filter: filterNext,
    target: queueApi.pNext,
});

// Start track from beginning if loopMode === LoopMode.loopone or
// One track in queue, loopall mode, go to start of track
sample({
    clock: next,
    source: {
        loopMode: $loopMode,
        isOnlySongInQueue: $isOnlySongInQueue,
    },
    filter: ({ loopMode, isOnlySongInQueue }, nextFrom) => {
        const shouldLoopOne =
            (isOnlySongInQueue && loopMode !== LoopMode.noloop) ||
            (loopMode !== LoopMode.loopone && nextFrom === 'from_end_track');
        console.log(shouldLoopOne);

        return shouldLoopOne;
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
        isOnlySongInQueue: $isOnlySongInQueue,
    },
    filter: ({ loopMode, currentSongIndex, currentTime, isOnlySongInQueue }) =>
        !isOnlySongInQueue &&
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
        isOnlySongInQueue: $isOnlySongInQueue,
    },
    filter: ({
        currentTime,
        currentSongIndex,
        loopMode,
        isOnlySongInQueue,
    }) => {
        return (
            !isOnlySongInQueue &&
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
        isOnlySongInQueue: $isOnlySongInQueue,
    },
    filter: ({ currentTime }) => {
        return currentTime > 5;
    },
    target: currentTimeApi.reset,
});

// #endregion

sample({
    clock: addToQueue,
    source: $queue,
    fn: (queue, newQueue) => {
        const finalQueue = queue ?? newQueue;
        return {
            ...finalQueue,
            songs: [...(queue?.songs ?? []), ...newQueue.songs],
        } as TQueue;
    },
    target: $queue,
});

sample({
    clock: loadLastQueueFx.doneData,
    filter: (props) => !!props && !!props.queue,
    fn: (props) => ({
        ...createQueueObject(props!.queue!),
        songs: props!.songs,
    }),
    target: $queue,
});

loadLastQueueFx.use(async (userId) => {
    return await Database.Songs.loadLastQueue(userId);
});
