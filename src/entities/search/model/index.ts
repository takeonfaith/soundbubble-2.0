import { createEffect, createEvent, createStore, sample } from 'effector';
import { THint } from './types';
import { Database } from '../../../database';

export const $searchQuery = createStore<string>('');
export const $searchSuggestions = createStore<THint[]>([]);
export const $searchResult = createStore<THint[]>([]);

// TODO: Mb встроить сюда и searchHistory???
export const setSearchQuery = createEvent<string>();
export const getSuggestions = createEvent<string>();
export const setSuggestions = createEvent<THint[]>();
export const getSearchResult = createEvent<string>();

export const getSuggestionsFx = createEffect<string, THint[]>();
export const getResultFx = createEffect<string, THint[]>();

export const $isLoadingSuggestions = getSuggestionsFx.pending;
export const $isLoadingResult = getResultFx.pending;

//#region Query

// debounce?
sample({
    clock: setSearchQuery,
    fn: (query) => query,
    target: [$searchQuery, getSuggestions],
});

//#endregion

//#region Suggestion

sample({
    clock: setSuggestions,
    fn: (suggestions) => suggestions,
    target: $searchSuggestions,
});

sample({
    clock: getSuggestions,
    target: getSuggestionsFx,
});

getSuggestionsFx.use(async (value: string) => {
    try {
        const suggestions =
            await Database.SearchSuggestions.getSearchSuggestions(value);

        return suggestions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
});

sample({
    clock: getSuggestionsFx.doneData,
    fn: (suggestions) => suggestions,
    target: $searchSuggestions,
});

//#endregion

//#region Result

sample({
    clock: getSearchResult,
    target: getResultFx,
});

sample({
    clock: getResultFx.doneData,
    fn: (result) => result,
    target: $searchResult,
});

getResultFx.use(async (value: string) => {
    try {
        //TODO: change to own async function
        const suggestions =
            await Database.SearchSuggestions.getSearchResult(value);

        return suggestions;
    } catch (error) {
        throw new Error((error as Error).message);
    }
});

//#endregion
