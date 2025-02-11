import { createApi, createEvent, createStore } from 'effector';

export const setLastRangeValue = createEvent<number>();

export const $currentTime = createStore<number>(0);
export const $isSliding = createStore(false);
export const $loadedPercent = createStore(0);

export const slidingApi = createApi($isSliding, {
    setIsSliding: (_, val: boolean) => val,
});

export const loadedPercentApi = createApi($loadedPercent, {
    set: (_, val: number) => val,
});

export const currentTimeApi = createApi($currentTime, {
    reset: () => 0,
    set: (_, value: number) => value,
    add: (time, val: number) => time + val,
});
