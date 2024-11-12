import { createApi, createStore } from 'effector';

export const $volume = createStore(1);
export const $isMuted = createStore(false);

export const volumeApi = createApi($volume, {
    update: (_, val: number) => val,
});

export const isMutedApi = createApi($isMuted, {
    toggle: (isMuted) => !isMuted,
});
