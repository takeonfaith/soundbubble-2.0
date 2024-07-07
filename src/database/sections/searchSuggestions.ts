import {
    getDocs,
    increment,
    limit,
    orderBy,
    query,
    where,
} from 'firebase/firestore';
import { Database } from '..';
import {
    TEntity,
    TPlace,
    TSuggestion,
} from '../../entities/search/model/types';
import { MAX_SEARCH_HISTORY_QUANTITY } from '../../entities/user/model/constants';
import { TUser } from '../../entities/user/model/types';
import { getEntityId } from '../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../features/searchWithHints/lib/getEntityType';
import { FB } from '../../firebase';
import { filterOneArrayWithAnother } from '../../shared/funcs/filterOneArrayWithAnother';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { uniqueArrayObjectsByField } from '../../shared/funcs/uniqueArrayObjectsByFields';

export class SearchSuggestions {
    static ref = FB.get('search');

    static async getTopAuthorSongs(songIds: string[] | undefined) {
        try {
            if (!songIds?.length) return [];

            const songs = await Database.Songs.getSongsByUids(songIds, true);
            return songs;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static getEntitiesReqs(suggestions: TSuggestion[]) {
        const requests: Record<TPlace, (uid: string) => Promise<TEntity>> = {
            users: Database.Users.getUserByUid,
            playlists: Database.Playlists.getPlaylistByUid,
            songs: Database.Songs.getSongByUid,
        };

        return suggestions.map((suggestion) => {
            return requests[suggestion.place](suggestion.uid);
        });
    }

    static async getSearchSuggestions(
        queryStr: string,
        history: TSuggestion[]
    ) {
        try {
            const q = query(
                this.ref,
                where(
                    'variantsOfName',
                    'array-contains',
                    normalizeString(queryStr)
                ),
                orderBy('rank', 'desc'),
                limit(MAX_SEARCH_HISTORY_QUANTITY)
            );
            const snapshot = await getDocs(q);
            const dirtySuggestions = filterOneArrayWithAnother(
                getDataFromDoc<TSuggestion>(snapshot),
                history,
                (item) => item.fullName,
                (arr) => arr.map((item) => item.fullName)
            );

            return uniqueArrayObjectsByField(dirtySuggestions, 'fullName');
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async getSearchResult(queryStr: string) {
        try {
            // TODO: оптимизировать так, чтобы не делать запрос к suggestions повторно
            const q = query(
                this.ref,
                where(
                    'variantsOfName',
                    'array-contains',
                    normalizeString(queryStr)
                ),
                orderBy('rank', 'desc')
            );

            const snapshot = await getDocs(q);
            const dirtySuggestions = filterOneArrayWithAnother(
                getDataFromDoc<TSuggestion>(snapshot),
                [],
                (item) => item.uid,
                (arr) => arr.map((item) => getEntityId(item))
            );

            const reqs = this.getEntitiesReqs(dirtySuggestions);

            let cleanSuggestions: TEntity[] = await Promise.all(reqs);

            if (getEntityType(cleanSuggestions[0]) === 'author') {
                const topAuthorSongs = await this.getTopAuthorSongs(
                    (cleanSuggestions[0] as TUser).ownSongs?.slice(0, 6)
                );

                cleanSuggestions = [
                    ...cleanSuggestions.slice(0, 1),
                    ...topAuthorSongs,
                    ...cleanSuggestions.slice(1, cleanSuggestions.length),
                ];
            }

            return cleanSuggestions;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }

    static async addRankToSuggestion(id: string) {
        try {
            return await FB.updateById('search', id, { rank: increment(1) });
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}
