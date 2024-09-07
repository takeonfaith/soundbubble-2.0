import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { DEFAULT_TOAST_DURATION } from './constants';
import { throttle } from 'patronum';
import { TToast } from './types';

const DEFAULT_TOAST_STORE: TToast = {
    message: '',
    duration: DEFAULT_TOAST_DURATION,
    isShow: false,
    showTimer: false,
    type: 'info',
    reason: undefined,
};

const show = createEvent<
    Omit<TToast, 'isShow' | 'duration'> & { duration?: number }
>();
const showThottled = createEvent();
const hide = createEvent();
const $toast = createStore<TToast>(DEFAULT_TOAST_STORE);

const $duration = $toast.map((s) => s.duration + 1000);

throttle(showThottled, $duration).watch(() => {
    hide();
});

sample({
    clock: show,
    source: $toast,
    fn: (_, newStore) => ({
        ...newStore,
        duration: newStore.duration ?? DEFAULT_TOAST_DURATION,
        isShow: true,
    }),
    target: [$toast, showThottled],
});

sample({
    clock: hide,
    source: $toast,
    fn: (store) => ({ ...store, isShow: false }),
    target: $toast,
});

export const toastModel = {
    useToast: () => useUnit($toast),
    events: {
        show,
        hide,
    },
};
