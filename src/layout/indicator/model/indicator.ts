import { createEvent, createStore, sample } from 'effector';
import { debounce } from 'patronum';
import { DISAPPEAR_TIME } from './constants';

type IndicatorProps = {
    content: React.ReactNode;
};

export const show = createEvent<IndicatorProps>();
export const remove = createEvent();

const hide = debounce(show, DISAPPEAR_TIME);
export const $content = createStore<React.ReactNode>(null);

sample({
    clock: show,
    fn: ({ content }) => content,
    target: $content,
});

sample({
    clock: hide,
    target: remove,
});

sample({
    clock: remove,
    fn: () => null,
    target: $content,
});
