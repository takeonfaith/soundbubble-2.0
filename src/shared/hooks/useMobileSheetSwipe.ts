import { useEffect, useState } from 'react';
import useMouseDelta from 'use-mouse-delta';

const SWIPE_TRANSITION_TIME = 400;

const getStyle = (
    controlledDeltaY: number,
    deltaY: number,
    baseHeight: string
) => {
    const style = {
        transform: `translateY(${controlledDeltaY}px)`,
        height:
            deltaY < 0
                ? `calc(${baseHeight} + ${Math.min(-deltaY, 50)}px)`
                : baseHeight,
        transition: `${
            controlledDeltaY === 1000 || deltaY === 0
                ? `${SWIPE_TRANSITION_TIME}ms transform, 0.2s height`
                : 'none'
        }`,
    };

    return controlledDeltaY !== 0 || deltaY !== 0 ? style : undefined;
};

export const useMobileSheetSwipe = (
    onClose: () => void,
    baseHeight: string
) => {
    const { deltaY, isMouseDown } = useMouseDelta('touch');
    const [controlledDeltaY, setControlledDeltaY] = useState(0);
    const style = getStyle(controlledDeltaY, deltaY, baseHeight);

    useEffect(() => {
        if (deltaY === 0) {
            setControlledDeltaY((prev) => (prev !== 1000 ? 0 : prev));
        }

        setControlledDeltaY((prev) =>
            prev !== 1000 && deltaY > 0 ? deltaY : prev
        );
    }, [deltaY, isMouseDown, onClose]);

    const onTouchEnd = () => {
        if (deltaY > 150 && isMouseDown) {
            setControlledDeltaY(1000);
            setTimeout(() => {
                onClose();
                setControlledDeltaY(0);
            }, SWIPE_TRANSITION_TIME);
        }
    };

    return { style, onTouchEnd };
};
