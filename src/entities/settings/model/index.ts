import { createEvent, createStore, sample } from 'effector';
import { DEFAULT_SETTINGS } from './constants';
import { useUnit } from 'effector-react';
import { updateDeepObject } from '../../../shared/funcs/updateDeepObject';

const updateSettings = createEvent<{
    path: Paths<typeof DEFAULT_SETTINGS>;
    value: unknown;
}>();

const $settings = createStore(DEFAULT_SETTINGS);

sample({
    clock: updateSettings,
    source: $settings,
    fn: (settings, { path, value }) => {
        return updateDeepObject(settings, path, value);
    },
    target: $settings,
});

export const settingsModel = {
    useSettings: () => useUnit([$settings]),
    events: {
        updateSettings,
    },
};
