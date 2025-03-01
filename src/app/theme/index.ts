import { createEffect, createEvent, createStore, sample } from 'effector';
import { ETheme } from './types';
import { useUnit } from 'effector-react';
import { THEMES } from './constants';

const DEFAULT_THEME = ETheme.dark;

const localStorageTheme = () => {
    const local = localStorage.getItem('theme') as ETheme | undefined;

    if (local) {
        return ETheme[local];
    } else {
        return DEFAULT_THEME;
    }
};

const $theme = createStore<ETheme>(localStorageTheme());

const saveThemeToLocalStorageFx = createEffect((theme: ETheme) => {
    localStorage.setItem('theme', theme);
});

export const toggleTheme = createEvent();
export const setTheme = createEvent<ETheme>();

sample({
    clock: toggleTheme,
    source: $theme,
    fn: (theme) => (theme === ETheme.light ? ETheme.dark : ETheme.light),
    target: [$theme, saveThemeToLocalStorageFx],
});

sample({
    clock: setTheme,
    source: $theme,
    fn: (_, value) => value,
    target: [$theme, saveThemeToLocalStorageFx],
});

export const useTheme = () => {
    const theme = useUnit($theme);
    return { theme, themeParams: THEMES[theme] };
};
