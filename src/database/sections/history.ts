import { arrayUnion } from 'firebase/firestore';
import { FB } from '../../firebase';
import { Songs } from './songs';

export class History {
    static ref = FB.get('history');

    static async getHistoryByUserId(userId: string) {
        try {
            const historyIds = await FB.getById('history', userId);

            const ids = new Set(historyIds.history);

            const songs = await Songs.getSongsByUids(Array.from(ids));
            return songs.reverse();
        } catch (error) {
            throw new Error('Failed to get history for user');
        }
    }

    static async addSongToHistory(userId: string, songId: string) {
        try {
            await FB.updateById('history', userId, {
                history: arrayUnion(songId),
            });
        } catch (error) {
            throw new Error('Failed to add song to history');
        }
    }
}
