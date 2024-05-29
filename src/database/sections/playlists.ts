import { FB } from '../../firebase';

import { TPlaylist } from '@playlist/model/types';
import { getDocs, query, where } from 'firebase/firestore';
import { ERRORS } from '../../shared/constants';
import { getDataFromDoc } from '../lib/getDataFromDoc';

export class Playlists {
    static ref = FB.get('playlists');

    static getPlaylistByUid = async (uid: string) => {
        try {
            if (!uid) {
                throw new Error(ERRORS.operationFailed('UID must be provided'));
            }

            return FB.getById<TPlaylist>('playlists', uid);
        } catch (error) {
            throw new Error('Failed to get playlist by uid ' + uid);
        }
    };

    static getPlaylistsByUids = async (uids: string[]) => {
        if (uids.length === 0) return [];

        const q = query(FB.get('playlists'), where('id', 'in', uids));
        const snapshot = await getDocs(q);

        return getDataFromDoc<TPlaylist>(snapshot);
    };
}
