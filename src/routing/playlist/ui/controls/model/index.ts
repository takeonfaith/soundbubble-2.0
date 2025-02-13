import { createEvent, createStore, sample } from 'effector';

type ButtonType = 'default' | 'slow' | 'shuffle';

export const load = createEvent<ButtonType>();

export const $type = createStore<ButtonType | null>(null);

sample({
    clock: load,
    fn: (type) => type,
    target: $type,
});
