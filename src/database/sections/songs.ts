import { TSong } from '@song/model/types';
import { getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { Users } from '.';
import { FB } from '../../firebase';
import { ERRORS } from '../../shared/constants';
import { getDataFromDoc } from '../lib/getDataFromDoc';

export class Songs {
    static ref = FB.get('songs');

    static async getAllSongs() {
        try {
            const snapshot = await getDocs(this.ref);
            return getDataFromDoc<TSong>(snapshot);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getTopSongs(topQuantity = 10) {
        try {
            const snapshot = await getDocs(
                query(this.ref, orderBy('listens', 'desc'), limit(topQuantity))
            );
            return getDataFromDoc<TSong>(snapshot);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getSongsByUserId(userId: string) {
        try {
            const user = await Users.getUserByUid(userId);
            return this.getSongsByUids(user?.addedSongs ?? []);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static getSongByUid = async (uid: string | undefined): Promise<TSong> => {
        try {
            if (!uid) {
                throw new Error(ERRORS.operationFailed('UID must be provided'));
            }

            return FB.getById<TSong>('songs', uid);
        } catch (error) {
            throw new Error('Failed to get song by uid ' + uid);
        }
    };

    static getSongsByUids = async (
        uids: string[],
        sortedByListens?: boolean
    ): Promise<TSong[]> => {
        if (uids.length === 0) return [];

        if (sortedByListens) {
            const additionalContstraints = [];
            additionalContstraints.push(orderBy('listens', 'desc'));
            const q = query(
                FB.get('songs'),
                where('id', 'in', uids),
                ...additionalContstraints
            );
            const snapshot = await getDocs(q);

            return getDataFromDoc<TSong>(snapshot);
        }

        const songs = uids.map((id) => this.getSongByUid(id));

        return Promise.all(songs);
    };
}
