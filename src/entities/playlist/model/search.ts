import { createStore, createApi } from 'effector';

export const $search = createStore<{ isSearching: boolean; value: string }>({
    isSearching: false,
    value: '',
});

export const isSearchingApi = createApi($search, {
    updateIsSearching: (store, val: boolean) => {
        return { ...store, isSearching: val };
    },
    updateSearchValue: (store, val: string) => ({ ...store, value: val }),
});
