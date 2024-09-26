import { createApi, createStore } from 'effector';
import { useUnit } from 'effector-react';

const $fullScreen = createStore<boolean>(false);

export const { open, close } = createApi($fullScreen, {
    open: () => true,
    close: () => false,
});

export const useFullScreen = () => {
    return useUnit($fullScreen);
};
