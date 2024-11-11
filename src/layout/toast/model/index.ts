import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { throttle } from 'patronum';
import getUID from '../../../shared/funcs/getUID';
import {
    DEFAULT_TOAST_ANIMATION_DURATION,
    DEFAULT_TOAST_DURATION,
    MAX_TOASTS,
} from './constants';
import { TExternalToast, TToast } from './types';

const add = createEvent<TExternalToast>();
const hide = createEvent<string>();
const hideLast = createEvent();
const clear = createEvent<string>();
const clearLast = createEvent();
const showThottled = createEvent();

const $toasts = createStore<TToast[]>([]);

throttle(hide, DEFAULT_TOAST_ANIMATION_DURATION).watch((toastId) => {
    clear(toastId);
});

sample({
    clock: add,
    source: $toasts,
    filter: (toasts) => toasts.length >= MAX_TOASTS,
    target: hideLast,
});

sample({
    clock: add,
    source: $toasts,
    fn: (toasts, newToast) => {
        const toastId = getUID();
        const toastDuration =
            newToast.duration ?? DEFAULT_TOAST_DURATION + 1000;
        const newToastObject: TToast = {
            id: toastId,
            isShow: true,
            hideTimeout: setTimeout(() => {
                hide(toastId);
            }, toastDuration),
            duration: toastDuration,
            ...newToast,
        };

        return [newToastObject, ...toasts];
    },
    target: [$toasts, showThottled],
});

sample({
    clock: hide,
    source: $toasts,
    filter: (toasts) => toasts.length > 0,
    fn: (toasts, id) => {
        return toasts.map((t) => {
            if (t.id === id) {
                clearTimeout(t.hideTimeout);
                return { ...t, isShow: false };
            }
            return t;
        });
    },
    target: $toasts,
});

sample({
    clock: hideLast,
    source: $toasts,
    filter: (toasts) => toasts.length > 0,
    fn: (toasts) => {
        const lastToastId = toasts[toasts.length - 1].id;
        return lastToastId;
    },
    target: hide,
});

sample({
    clock: clear,
    source: $toasts,
    fn: (toasts, id) => {
        return toasts.filter((t) => t.id !== id);
    },
    target: $toasts,
});

sample({
    clock: clearLast,
    source: $toasts,
    fn: (toasts) => {
        const newToasts = [...toasts];
        newToasts.pop();
        return newToasts;
    },
    target: $toasts,
});

export const toastModel = {
    useToast: () => useUnit($toasts),
    events: {
        add,
        clear,
        hide,
    },
};
