import { getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { TSong } from '../../entities/song/model/types';
import { Pagination } from '../../shared/effector/pagination';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { Songs } from './songs';
import { Users } from './users';
import { TUser } from '../../entities/user/model/types';
import { TPlaylist } from '../../entities/playlist/model/types';
import { Playlists } from './playlists';

export class Trends {
    static songPagination = new Pagination();
    static authorsPagination = new Pagination();
    static albumsPagination = new Pagination();

    static async getTrendingSongs(topQuantity: number) {
        try {
            this.songPagination.initialize();

            const q = query(
                Songs.ref,
                orderBy('listens', 'desc'),
                limit(topQuantity),
                ...this.songPagination.constraints
            );

            const docs = await getDocs(q);

            this.songPagination.saveLastVisible(docs);
            const res = getDataFromDoc<TSong>(docs);

            return res;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getTrendingAuthors(topQuantity: number) {
        try {
            this.authorsPagination.initialize();

            const q = query(
                Users.ref,
                orderBy('numberOfListenersPerMonth', 'desc'),
                where('isAuthor', '==', true),
                limit(topQuantity),
                ...this.authorsPagination.constraints
            );

            const docs = await getDocs(q);

            this.authorsPagination.saveLastVisible(docs);
            const res = getDataFromDoc<TUser>(docs);

            return res;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getTrendingAlbums(topQuantity: number) {
        try {
            this.albumsPagination.initialize();

            const q = query(
                Playlists.ref,
                orderBy('listens', 'desc'),
                where('isAlbum', '==', true),
                limit(topQuantity),
                ...this.albumsPagination.constraints
            );

            const docs = await getDocs(q);

            this.albumsPagination.saveLastVisible(docs);
            const res = getDataFromDoc<TPlaylist>(docs);

            return res;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
