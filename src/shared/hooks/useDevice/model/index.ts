import { createApi, createStore } from 'effector';

type DeviceType =
    | 'mobile'
    | 'tablet'
    | 'small-desktop'
    | 'middle-desktop'
    | 'not-mobile';

export const $device = createStore<DeviceType>('not-mobile');

export const $isMobileOrTablet = $device.map(
    (device) => device === 'mobile' || device === 'tablet'
);

export const deviceApi = createApi($device, {
    set: (_, device: DeviceType) => device,
});
