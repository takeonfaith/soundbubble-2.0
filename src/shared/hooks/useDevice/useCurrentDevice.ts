import { useCallback, useLayoutEffect } from 'react';
import {
    MIDDLE_DESKTOP,
    MOBILE_SCREEN,
    SMALL_DESKTOP,
    TABLET_SCREEN,
} from '../../constants/screenSize';
import { deviceApi } from './model';

const handleMedia = () => {
    if (matchMedia(MOBILE_SCREEN).matches) {
        return 'mobile';
    } else if (matchMedia(TABLET_SCREEN).matches) {
        return 'tablet';
    } else if (matchMedia(SMALL_DESKTOP).matches) {
        return 'small-desktop';
    } else if (matchMedia(MIDDLE_DESKTOP).matches) {
        return 'middle-desktop';
    } else {
        return 'not-mobile';
    }
};

const useCurrentDevice = () => {
    const handleResize = useCallback(() => {
        deviceApi.set(handleMedia());
    }, []);

    useLayoutEffect(() => {
        handleResize();

        addEventListener('resize', handleResize); // Listen for resize events

        return () => {
            removeEventListener('resize', handleResize); // Clean up event listener
        };
    }, [handleResize]);
};

export default useCurrentDevice;
