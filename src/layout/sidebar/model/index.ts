import { createApi, createStore } from 'effector';
import { useUnit } from 'effector-react';

const getInitialValue = () => {
    const storage = localStorage.getItem('collapsed');

    if (storage !== null) return JSON.parse(storage);

    return false;
};

const $isCollapsed = createStore(getInitialValue());

export const sidebarApi = createApi($isCollapsed, {
    toggle: (prev) => {
        localStorage.setItem('collapsed', `${!prev}`);
        return !prev;
    },
});

export const useSidebar = () => useUnit($isCollapsed);
