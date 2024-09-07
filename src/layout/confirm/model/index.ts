import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { DARK_THEME } from '../../../shared/constants/theme';

const DEFAULT_STORE = {
    text: '',
    onAccept: () => null,
    onReject: () => null,
    isOpen: false,
    icon: null,
};

type TConfirmStore = {
    text: string;
    subtext?: string;
    onAccept: () => void;
    onReject?: () => void;
    isOpen?: boolean;
    icon?: React.ReactNode | null;
    iconColor?: keyof typeof DARK_THEME.scheme;
};

const open = createEvent<Omit<TConfirmStore, 'isOpen'>>();
const close = createEvent();

const $confirm = createStore<TConfirmStore>(DEFAULT_STORE);

sample({
    clock: open,
    source: $confirm,
    fn: (_, newStore) => ({
        ...newStore,
        isOpen: true,
    }),
    target: $confirm,
});

sample({
    clock: close,
    source: $confirm,
    fn: () => DEFAULT_STORE,
    target: $confirm,
});

export const confirmModel = {
    useConfirm: () => useUnit($confirm),
    events: {
        open,
        close,
    },
};
