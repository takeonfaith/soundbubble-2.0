import { TSearchHistory } from '../../entities/user/model/types';
import { FB } from '../../firebase';
import { Playlists } from './playlists';
import { Songs } from './songs';
import { Users } from './users';

export class SearchHistory {
    static ref = FB.get('history');

    static async getSearchHistory(userId: string | undefined) {
        try {
            if (!userId)
                throw new Error('userId is required in getSearchHistory');

            const requests = {
                playlists: Playlists.getPlaylistByUid,
                songs: Songs.getSongByUid,
                users: Users.getUserByUid,
            };

            const data = await FB.getById<{ history: TSearchHistory[] }>(
                'searchHistory',
                userId
            );

            const searchHistory = data.history.slice(0, 10).map(async (el) => {
                return await requests[el.type](el.id);
            });

            return Promise.all(searchHistory);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
