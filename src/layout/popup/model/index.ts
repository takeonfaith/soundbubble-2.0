import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { POPUP_WIDTH } from '../constants';

type TStore = {
    isOpen: boolean;
    content: React.ReactNode;
    x: number;
    y: number;
    origin: string;
    height: number;
    width: number;
};

const DEFAULT_STORE: TStore = {
    content: null,
    isOpen: false,
    x: 0,
    y: 0,
    height: 0,
    width: POPUP_WIDTH,
    origin: 'center',
};

const calculatePosition = (
    x: number,
    y: number,
    width: number,
    height: number,
    menuHeight: number,
    menuWidth: number
) => {
    let Y, X;
    let posX,
        posY = 0;

    if (x + menuWidth > window.innerWidth) {
        X = 'right';
        posX = x - menuWidth;
    } else {
        posX = x - width;
        X = 'left';
    }

    if (y + menuHeight > window.innerHeight - 100) {
        Y = 'bottom';
        posY = y - menuHeight - 4;
    } else {
        Y = 'top';
        posY = y + height + 4;
    }

    return { posX: posX + width, posY, origin: `${Y} ${X}` };
};

const open = createEvent<{
    content: React.ReactNode;
    height: number;
    width?: number;
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>;
}>();
const close = createEvent();

const $popup = createStore<TStore>(DEFAULT_STORE);

sample({
    clock: open,
    source: $popup,
    fn: (
        store,
        { content, width: menuWidth = POPUP_WIDTH, height: menuHeight, e }
    ) => {
        const props = e.currentTarget.getBoundingClientRect();
        const { left: x, top: y, width: elWidth, height: elHeight } = props;

        const { posX, posY, origin } = calculatePosition(
            x,
            y,
            elWidth,
            elHeight,
            menuHeight,
            menuWidth ?? store.width
        );

        return {
            content,
            x: posX,
            y: posY,
            origin,
            height: menuHeight,
            width: menuWidth ?? store.width,
            isOpen: !store.isOpen,
        };
    },
    target: $popup,
});

sample({
    clock: close,
    source: $popup,
    fn: (store) => ({ ...store, content: null, isOpen: false }),
    target: $popup,
});

export const popupModel = {
    usePopup: () => {
        return useUnit($popup);
    },
    events: {
        open,
        close,
    },
};
