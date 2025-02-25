import { useState, useEffect } from 'react';
import {
    MOBILE_SCREEN,
    TABLET_SCREEN,
    SMALL_DESKTOP,
    MIDDLE_DESKTOP,
} from '../constants/screenSize';

type DeviceType =
    | 'mobile'
    | 'tablet'
    | 'small-desktop'
    | 'middle-desktop'
    | 'not-mobile';

const handleResize = () => {
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

const useDevice = () => {
    const [device, setDevice] = useState<DeviceType>(handleResize());

    useEffect(() => {
        addEventListener('resize', () => {
            setDevice(handleResize);
        }); // Listen for resize events

        return () => {
            removeEventListener('resize', () => {
                setDevice(handleResize);
            }); // Clean up event listener
        };
    }, []);

    return { isMobile: device === 'mobile', device };
};

export default useDevice;
