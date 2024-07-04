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

            const data = await FB.getById('searchHistory', userId);

            const searchHistory = data.history.slice(0, 10).map((el) => {
                return requests[el.type](el.id);
            });

            return await Promise.all(searchHistory);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
