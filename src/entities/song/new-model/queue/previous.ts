import { createEvent, sample } from 'effector';
import { LoopMode } from '../../model/types';
import { $currentTime, currentTimeApi } from '../current-time';
import { $loopMode } from '../queue';
import {
    $currentSongIndex,
    $isOnlySongInQueue,
    pToEnd,
    queueApi,
} from './queue';

export const previous = createEvent();

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
        currentSongIndex: $currentSongIndex,
    },
    filter: ({ currentTime, currentSongIndex }) => {
        console.log(currentTime > 5 || currentSongIndex === 0);

        return currentTime > 5 || currentSongIndex === 0;
    },
    fn: () => 0,
    target: currentTimeApi.reset,
});
