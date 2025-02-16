import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { TSuggestion } from '../../search/model/types';
import { getDataFromEffect } from '../../../shared/effector/getDataFromEffect';
import { TUser } from '../../user/model/types';
import { MAX_SEARCH_HISTORY_QUANTITY } from './constants';
import { $user } from '../../user/model/user';

type SetSearchHistoryProps = {
    suggestion: TSuggestion;
};

export const loadUserSearchHistoryFx = createEffect<TUser, TSuggestion[]>();

export const setSearchHistoryFx = createEffect<
    SetSearchHistoryProps & { history: TSuggestion[]; userId: string },
    void
>();

export const setSearchHistory = createEvent<SetSearchHistoryProps>();

export const $searchHistory = createStore<TSuggestion[]>([]);

sample({
    clock: setSearchHistoryFx.done,
    source: $searchHistory,
    filter: (store, { params }) =>
        !!params.suggestion &&
        !store.find((s) => s.uid === params.suggestion?.uid),
    fn: (store, { params }): TSuggestion[] =>
        [params.suggestion!, ...store].slice(0, MAX_SEARCH_HISTORY_QUANTITY),
    target: $searchHistory,
});

sample({
    clock: setSearchHistory,
    source: { history: $searchHistory, user: $user },
    filter: ({ user, history }, { suggestion }) => {
        const found = history.find((s) => s.uid === suggestion.uid);
        return !!user && !found;
    },
    fn: ({ user, history }, searchHistory) => ({
        history,
        userId: user!.uid,
        ...searchHistory,
    }),
    target: setSearchHistoryFx,
});

getDataFromEffect(loadUserSearchHistoryFx, $searchHistory);

loadUserSearchHistoryFx.use(async (user) => {
    return await Database.SearchHistory.getSearchHistory(user.uid);
});

setSearchHistoryFx.use(async ({ history, userId, suggestion }) => {
    await Database.SearchHistory.addEntityToSearchHistory(
        history.slice(0, MAX_SEARCH_HISTORY_QUANTITY - 1),
        userId,
        suggestion
    );
});
