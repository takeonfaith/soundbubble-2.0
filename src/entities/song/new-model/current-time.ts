import { createApi, createEvent, createStore, sample } from 'effector';
import { indicatorModel } from '../../../layout/indicator/model';
import { $queue } from './queue/';

export const setLastRangeValue = createEvent<number>();
const add = createEvent<number>();
const set = createEvent<number>();
const reset = createEvent<number>();
const showIndicator = createEvent<number>();

export const $currentTime = createStore<number>(0).reset(reset);
export const $isSliding = createStore(false);
export const $loadedPercent = createStore(0);

export const slidingApi = createApi($isSliding, {
    setIsSliding: (_, val: boolean) => val,
});

export const loadedPercentApi = createApi($loadedPercent, {
    set: (_, val: number) => val,
});

export const currentTimeApi = {
    add,
    set,
    reset,
};

sample({
    clock: add,
    source: { currentTime: $currentTime, queue: $queue },
    filter: ({ queue }) => !!queue,
    fn: ({ currentTime }, val) => currentTime + val,
    target: [$currentTime, showIndicator],
});

sample({
    clock: set,
    source: $queue,
    filter: (queue) => !!queue,
    fn: (_, val) => val,
    target: $currentTime,
});

showIndicator.watch((val) => {
    if (val > 0) {
        indicatorModel.show({ content: '+15 seconds' });
    } else {
        indicatorModel.show({ content: '-15 seconds' });
    }
});
