import { createStore, createApi, sample } from 'effector';

export const $currentTime = createStore<number>(0);
// Is needed for changing the audio currentTime in AppAudio
export const $lastTime = createStore<number>(-1);

export const currentTimeApi = createApi($currentTime, {
    reset: () => 0,
    set: (_, value: number) => value,
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
