import { createApi, createStore } from 'effector';

export const $fullscreenPlayer = createStore(false);

export const fullscreenPlayerApi = createApi($fullscreenPlayer, {
    open: () => true,
    close: () => false,
});
