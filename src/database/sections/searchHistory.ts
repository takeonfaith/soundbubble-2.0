import { TSuggestion } from '../../entities/search/model/types';
import { TSearchHistory } from '../../entities/user/model/types';
import { TExtendedSuggestion } from '../../features/searchWithHints/types';
import { FB } from '../../firebase';

export class SearchHistory {
    static ref = FB.get('history');

    static async getSearchHistory(
        userId: string | undefined
    ): Promise<TSuggestion[]> {
        try {
            if (!userId)
                throw new Error('userId is required in getSearchHistory');

            const historyIds = (
                (await FB.getById('searchHistory', userId))?.history ?? []
            ).map((h) => h.id);

            const res = await FB.getByIds('search', historyIds);

            return res;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async addEntityToSearchHistory(
        history: TExtendedSuggestion[],
        userId: string,
        suggestion: TSuggestion
    ) {
        try {
            const { uid, place } = suggestion;

            const newHistoryItem: TSearchHistory = {
                id: uid,
                type: place,
            };

            const newHistory = [
                newHistoryItem,
                ...history.map((h) => ({ id: h.uid, type: h.place })),
            ];

            console.log(newHistory);

            await FB.updateById('searchHistory', userId, {
                history: newHistory,
            });
        } catch (error) {
            console.error(error);
            throw new Error('Failed to add entity to search history');
        }
    }
}
