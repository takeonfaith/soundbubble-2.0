import { getDocs, query, where } from 'firebase/firestore';
import { TPlace, TSuggestion } from '../../entities/search/model/types';
import { TSearchHistory } from '../../entities/user/model/types';
import { FB } from '../../firebase';
import { getDataFromDoc } from '../lib/getDataFromDoc';

export class SearchHistory {
    static ref = FB.get('history');

    static async getSearchHistory(userId: string | undefined) {
        try {
            if (!userId)
                throw new Error('userId is required in getSearchHistory');

            const historyIds = (await FB.getById('searchHistory', userId))
                .history;

            const q = query(
                FB.get('search'),
                where(
                    'uid',
                    'in',
                    historyIds.map((h) => h.id)
                )
            );

            const docs = await getDocs(q);

            const result = getDataFromDoc<TSuggestion>(docs);

            return result.reverse();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async addEntityToSearchHistory(
        history: TSuggestion[],
        userId: string | undefined,
        id: string | null | undefined,
        type: TPlace | undefined
    ) {
        try {
            if (!userId) throw new Error('userId is required');
            if (!id) throw new Error('uid is required');
            if (!type) throw new Error('place is required');

            if (history.find((s) => s.uid === id)) return;

            const newHistoryItem: TSearchHistory = {
                id,
                type,
            };

            const newHistory = [
                newHistoryItem,
                ...history.map((h) => ({ id: h.uid, type: h.place })),
            ];

            await FB.updateById('searchHistory', userId, {
                history: newHistory,
            });
        } catch (error) {
            console.error(error);
            throw new Error('Failed to add entity to search history');
        }
    }
}
