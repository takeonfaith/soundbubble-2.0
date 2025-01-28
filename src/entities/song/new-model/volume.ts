import { createApi, createStore } from 'effector';

export const $volume = createStore(1);
export const $isMuted = createStore(false);

export const volumeApi = createApi($volume, {
    update: (_, val: number) => val,
    increase: (vol, val: number) =>
        val > 0 ? Math.min(1, vol + val) : Math.max(0, vol + val),
});

export const isMutedApi = createApi($isMuted, {
    toggle: (isMuted) => !isMuted,
});
