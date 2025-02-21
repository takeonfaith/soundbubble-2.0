import { createApi, createEvent, createStore, sample } from 'effector';
import { LoopMode } from '../../model/types';
import { $currentTime } from '../current-time';
import { $loopMode } from './loop-mode';
import { $currentSong } from './queue';

const MINIMUM_DIFF_BETWEEN_START_AND_END_IN_S = 5;
type TSegment = [number, number];

export const resetLoopSegment = createEvent();

export const $loopSegment = createStore<TSegment | null>(null);

export const loopSegmentApi = createApi($loopSegment, {
    set: (_, [start, end]: number[]) => {
        if (end - start < MINIMUM_DIFF_BETWEEN_START_AND_END_IN_S)
            return [start, start + MINIMUM_DIFF_BETWEEN_START_AND_END_IN_S];

        return [start, end];
    },
});

sample({
    clock: $loopMode,
    filter: (loopMode) => loopMode !== LoopMode.loopsegment,
    target: resetLoopSegment,
});

sample({
    clock: $currentSong,
    filter: (currentSong) => !!currentSong,
    target: resetLoopSegment,
});

sample({
    clock: $currentTime,
    source: { loopSegment: $loopSegment, loopMode: $loopMode },
    filter: ({ loopMode, loopSegment }, currentTime) =>
        loopMode === LoopMode.loopsegment &&
        currentTime >= loopSegment![1] - 0.5,
    fn: ({ loopSegment }) => loopSegment![0],
    target: $currentTime,
});
