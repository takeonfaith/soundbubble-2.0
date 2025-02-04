import { getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import {
    MAX_HISTORY_ITEMS_PER_LOAD,
    PERIOD_TIMES,
} from '../../entities/history/model/constants';
import { DeleteHistoryPeriod } from '../../entities/history/model/types';
import { FB } from '../../firebase';
import { Pagination } from '../../shared/effector/createPagination';
import { asyncRequests } from '../../shared/funcs/asyncRequests';
import getUID from '../../shared/funcs/getUID';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { Songs } from './songs';
import { TSong } from '../../entities/song/model/types';

export class History {
    static ref = FB.get('history');
    static pagination = new Pagination();

    static async deleteHistory(userId: string, period: DeleteHistoryPeriod) {
        try {
            const timestamp = Date.now() - PERIOD_TIMES[period];

            const q = query(
                FB.getSubCollection('users', `${userId}/history`),
                where('time', '>=', timestamp)
            );

            const docs = await getDocs(q);
            const history = docs.docs.map((d) => d.id);

            await FB.deleteDeepByIdsWithBatches(
                'users',
                [userId, 'history'],
                history
            );
        } catch (error) {
            console.error(error);
            throw new Error('Failed to delete history');
        }
    }

    static async getHistoryByUserId(userId: string) {
        try {
            this.pagination.initialize();

            const q = query(
                FB.getSubCollection('users', `${userId}/history`),
                orderBy('time', 'desc'),
                limit(MAX_HISTORY_ITEMS_PER_LOAD),
                ...this.pagination.constraints
            );

            const docs = await getDocs(q);
            const history = getDataFromDoc<{ time: number; songId: string }>(
                docs
            );

            const getSong = async (time: number, songId: string) => {
                const song = await Songs.getSongByUid(songId);
                if (!song) {
                    return {
                        time,
                        song: null,
                    };
                }

                return {
                    time,
                    song,
                };
            };

            const songObj = await asyncRequests(history, ({ time, songId }) => {
                return getSong(time, songId);
            });

            this.pagination.saveLastVisible(docs);

            // If in the future I will support deleted tracks
            // fix this place
            return songObj as { time: number; song: TSong }[];
        } catch (error) {
            throw new Error('Failed to get history for user');
        }
    }

    static async addSongToHistory(userId: string, songId: string) {
        try {
            await FB.setDeepByIds('users', [userId, 'history', getUID()], {
                songId,
                time: Date.now(),
            });
        } catch (error) {
            throw new Error('Failed to add song to history');
        }
    }
}
