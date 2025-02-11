import { createApi, createStore } from 'effector';
import { useUnit } from 'effector-react';

const getInitialValue = (): boolean => {
    const storage = localStorage.getItem('collapsed');

    if (storage !== null) return JSON.parse(storage) as boolean;

    return false;
};

const $isCollapsed = createStore<boolean>(getInitialValue());

export const sidebarApi = createApi($isCollapsed, {
    toggle: (prev) => {
        localStorage.setItem('collapsed', `${!prev}`);
        return !prev;
    },
});

export const useSidebar = () => useUnit($isCollapsed);
