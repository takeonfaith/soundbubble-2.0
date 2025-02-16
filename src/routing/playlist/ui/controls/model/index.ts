import { createEvent, createStore, sample } from 'effector';

type ButtonType = 'default' | 'slow' | 'shuffle';

export const load = createEvent<ButtonType>();

export const $type = createStore<ButtonType>('default');

sample({
    clock: load,
    fn: (type) => type,
    target: $type,
});
