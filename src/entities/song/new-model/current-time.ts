import { createApi, createEvent, createStore, sample } from 'effector';

export const setLastRangeValue = createEvent<number>();

export const $currentTime = createStore<number>(0);
// Is needed for changing the audio currentTime in AppAudio
export const $lastTime = createStore<number>(-1);
export const $isSliding = createStore(false);

export const slidingApi = createApi($isSliding, {
    setIsSliding: (_, val: boolean) => val,
});

export const currentTimeApi = createApi($currentTime, {
    reset: () => 0,
    set: (_, value: number) => value,
    add: (time, val: number) => time + val,
});

sample({
    clock: setLastRangeValue,
    target: $lastTime,
});

sample({
    clock: currentTimeApi.reset,
    fn: () => 0,
    target: $lastTime,
});

sample({
    clock: currentTimeApi.add,
    source: $currentTime,
    fn: (time) => time,
    target: $lastTime,
});

// sample({
//     clock: currentTimeApi.set,
//     fn: () => -1,
//     target: $lastTime,
// });
