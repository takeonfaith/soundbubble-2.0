import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { $searchHistory, $user, setSearchHistory } from '../../user/model';
import { TEntity, TPlace, TSuggestion } from './types';
import { TExtendedSuggestion } from '../../../features/searchWithHints/types';

type GetResultProps = {
    query: string;
    place?: TPlace;
    suggestion?: TExtendedSuggestion | null;
};

export const getResultFx = createEffect(
    async ({ query, suggestion, place }: GetResultProps) => {
        try {
            const suggestions =
                await Database.SearchSuggestions.getSearchResult(query, place);

            if (suggestion) {
                await Database.SearchSuggestions.addRankToSuggestion(
                    suggestion.uid
                );
            }

            return suggestions;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
);

export const $searchQuery = createStore<string>('');
export const $searchSuggestions = createStore<TSuggestion[]>([]);
export const $searchResult = createStore<TEntity[]>([]).reset(getResultFx.fail);

// TODO: Mb встроить сюда и searchHistory???
export const setSearchQuery = createEvent<string>();
export const getSuggestions = createEvent<string>();
export const setSuggestions = createEvent<TSuggestion[]>();
export const getSearchResult = createEvent<GetResultProps>();

export const getSuggestionsFx = createEffect<
    { value: string; history: TExtendedSuggestion[] },
    TSuggestion[]
>();

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
const $userId = $user.map((u) => u.data?.uid);

sample({
    clock: getSuggestions,
    source: $history,
    fn: (history, value) => ({ value, history }),
    target: getSuggestionsFx,
});

getSuggestionsFx.use(
    async ({
        value,
        history,
    }: {
        value: string;
        history: TExtendedSuggestion[];
    }) => {
        try {
            if (value.length === 0) return [];
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
    target: getResultFx,
});

sample({
    clock: getSearchResult,
    source: {
        userId: $userId,
    },
    filter: (_, { suggestion }) => !!suggestion,
    fn: ({ userId }, { suggestion }) => ({
        userId,
        suggestion,
    }),
    target: setSearchHistory,
});

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
