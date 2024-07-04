import { createEffect, createEvent, createStore, sample } from 'effector';
import { TEntity } from './types';
import { Database } from '../../../database';
import { $searchHistory } from '../../user/model';

export const $searchQuery = createStore<string>('');
export const $searchSuggestions = createStore<TEntity[]>([]);
export const $searchResult = createStore<TEntity[]>([]);

// TODO: Mb встроить сюда и searchHistory???
export const setSearchQuery = createEvent<string>();
export const getSuggestions = createEvent<string>();
export const setSuggestions = createEvent<TEntity[]>();
export const getSearchResult = createEvent<string>();

export const getSuggestionsFx = createEffect<
    { value: string; history: TEntity[] },
    TEntity[]
>();
export const getResultFx = createEffect<string, TEntity[]>(
    async (value: string) => {
        try {
            const suggestions =
                await Database.SearchSuggestions.getSearchResult(value);

            return suggestions;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
);
getResultFx.watch(console.log);
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

const $history = $searchHistory.map((s) => s);

sample({
    clock: getSuggestions,
    source: $history,
    fn: (history, value) => ({ value, history }),
    target: getSuggestionsFx,
});

getSuggestionsFx.use(
    async ({ value, history }: { value: string; history: TEntity[] }) => {
        try {
            const suggestions =
                await Database.SearchSuggestions.getSearchSuggestions(
                    value,
                    history
                );

            return suggestions;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
);

sample({
    clock: getSuggestionsFx.doneData,
    fn: (suggestions) => suggestions,
    target: $searchSuggestions,
});

//#endregion

//#region Result

sample({
    clock: getSearchResult,
    target: $searchQuery,
})

sample({
    clock: $searchQuery,
    target: getResultFx,  
})
// sample({
//     clock: getSearchResult,
//     source: $searchQuery,
//     filter: (newQuery, oldQuery) => {
//         console.log(newQuery, oldQuery);

//         return newQuery !== oldQuery;
//     },
//     target: getResultFx,
// });

sample({
    clock: getResultFx.doneData,
    fn: (result) => result,
    target: $searchResult,
});

// getResultFx.use(async (value: string) => {
//     try {
//         const suggestions = await Database.SearchSuggestions.getSearchResult(
//             value
//         );

//         return suggestions;
//     } catch (error) {
//         throw new Error((error as Error).message);
//     }
// });

//#endregion
