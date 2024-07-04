import { getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { FB } from '../../firebase';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { Database } from '..';
import { TEntity } from '../../entities/search/model/types';
import { filterOneArrayWithAnother } from '../../shared/funcs/filterOneArrayWithAnother';
import { getEntityId } from '../../features/searchWithHints/lib/getDividedEntity';
import { TUser } from '../../entities/user/model/types';

export type Place = 'songs' | 'users' | 'playlists';

type Suggestion = {
    place: Place;
    rank: number;
    uid: string;
    variantsOfName: string[];
};

export class SearchSuggestions {
    static ref = FB.get('search');

    static async getTopAuthorSongs(songIds: string[] | undefined) {
        try {
            if (!songIds?.length) return [];

            const songs = await Database.Songs.getSongsByUids(songIds, true);
            return songs;
        } catch (error) {
            throw new Error(error);
        }
    }

    static getEntitiesReqs(suggestions: Suggestion[]) {
        const requests: Record<Place, (uid: string) => Promise<TEntity>> = {
            users: Database.Users.getUserByUid,
            playlists: Database.Playlists.getPlaylistByUid,
            songs: Database.Songs.getSongByUid,
        };

        return suggestions.map((suggestion) => {
            return requests[suggestion.place](suggestion.uid);
        });
    }

    static async getSearchSuggestions(queryStr: string, history: TEntity[]) {
        try {
            const q = query(
                this.ref,
                where(
                    'variantsOfName',
                    'array-contains',
                    normalizeString(queryStr)
                ),
                orderBy('rank', 'desc'),
                limit(10)
            );
            const snapshot = await getDocs(q);
            const dirtySuggestions = filterOneArrayWithAnother(
                getDataFromDoc<Suggestion>(snapshot),
                history,
                (item) => item.uid,
                (arr) => arr.map((item) => getEntityId(item))
            );

            const reqs = this.getEntitiesReqs(dirtySuggestions);

            if (dirtySuggestions.length === 0) return [];

            const cleanSuggestions: TEntity[] = await Promise.all(reqs);

            return cleanSuggestions;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getSearchResult(queryStr: string) {
        try {
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
                getDataFromDoc<Suggestion>(snapshot),
                [],
                (item) => item.uid,
                (arr) => arr.map((item) => getEntityId(item))
            );

            const reqs = this.getEntitiesReqs(dirtySuggestions);

            let cleanSuggestions: TEntity[] = await Promise.all(reqs);

            if (dirtySuggestions[0].place === 'users') {
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
            throw new Error(error);
        }
    }
}
