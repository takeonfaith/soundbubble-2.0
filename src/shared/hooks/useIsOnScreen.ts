/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useMemo, useState } from 'react';

export const useIsOnScreen = (
    ref: RefObject<HTMLElement>,
    onInitialVisible?: () => void
) => {
    const [wasOnceRendered, setWasOnceRendered] = useState(false);
    const [isOnScreen, setIsOnScreen] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) => {
                setIsOnScreen(entry.isIntersecting);
                if (!wasOnceRendered) setWasOnceRendered(entry.isIntersecting);
            }),
        [ref]
    );

    useEffect(() => {
        if (isOnScreen && onInitialVisible) {
            onInitialVisible();
        }
    }, [isOnScreen, wasOnceRendered]);

    useEffect(() => {
        if (ref.current !== null) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [ref.current]);

    return isOnScreen;
};
