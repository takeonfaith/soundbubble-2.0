import { createEvent, createStore, sample } from 'effector';
import { LoopMode, TNextFrom } from '../../model/types';
import { queueApi, $isLastSongInQueue, $isOnlySongInQueue } from './queue';
import { $loopMode } from './loop-mode';
import { previous } from './previous';

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

export const next = createEvent<TNextFrom>();

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
            (loopMode === LoopMode.loopone && nextFrom === 'from_end_track');
        console.log('shouldLoopOne', shouldLoopOne);
        
        return shouldLoopOne;
    },
    target: previous,
});
