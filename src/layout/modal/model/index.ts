import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { throttle } from 'patronum';
import { TModal } from './types';
import { PAGE_TRANSITION_DURATION } from '../../../shared/components/pageStack/constants';

const open = createEvent<TModal>();
const back = createEvent();
const backThrottled = createEvent();
const setSlidingBack = createEvent();
const close = createEvent();

const $modalStore = createStore<TModal[]>([]);
const $slidingBack = createStore(false);

throttle(back, PAGE_TRANSITION_DURATION).watch(() => {
    backThrottled();
});

sample({
    clock: open,
    source: $modalStore,
    fn: (modals, newModal) => [...modals, newModal],
    target: $modalStore,
});

sample({
    clock: close,
    source: $modalStore,
    fn: () => [],
    target: $modalStore,
});

sample({
    clock: back,
    target: setSlidingBack,
});

sample({
    clock: setSlidingBack,
    source: $slidingBack,
    fn: (isSlidingBack) => !isSlidingBack,
    target: $slidingBack,
});

sample({
    clock: backThrottled,
    source: $modalStore,
    fn: (modals) => modals.slice(0, -1),
    target: [$modalStore, setSlidingBack],
});

export const modalModel = {
    useModal: () => {
        return useUnit([$modalStore, $slidingBack]);
    },
    events: {
        open,
        back,
        close,
    },
};
