import { FB } from '../../firebase';
import { Songs } from './songs';

export class History {
    static ref = FB.get('history');

    static async getHistoryByUserId(userId: string) {
        try {
            const historyIds = await FB.getById<{ history: string[] }>(
                'history',
                userId
            );

				const ids = new Set(historyIds.history)

            const songs = await Songs.getSongsByUids(Array.from(ids));
            return songs;
        } catch (error) {
            throw new Error('Failed to get history for user');
        }
    }
}
