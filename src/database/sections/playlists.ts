import { FB } from '../../firebase';

import { TPlaylist, TUploadPlaylist } from '@playlist/model/types';
import { arrayUnion, getDocs, query, where } from 'firebase/firestore';
import { createDefaultSuggestion } from '../../entities/search/lib/createDefaultSuggestion';
import { ERRORS } from '../../shared/constants';
import { getDataFromDoc } from '../lib/getDataFromDoc';

export class Playlists {
    static ref = FB.get('playlists');

    static getPlaylistByUid = async (uid: string) => {
        try {
            if (!uid) {
                throw new Error(ERRORS.operationFailed('UID must be provided'));
            }

            return FB.getById('playlists', uid);
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

    static async addSongToPlaylists(songId: string, playlistIds: string[]) {
        try {
            if (!songId) throw new Error('Song id not specified');
            if (!playlistIds.length)
                throw new Error('Playlist ids not specified');

            const requests = playlistIds.map((id) => {
                return FB.updateById('playlists', id, {
                    songs: arrayUnion(songId),
                });
            });

            return Promise.all(requests);
        } catch (error) {
            throw new Error(
                `Failed to add song to playlists ${songId}, ${playlistIds}, ${error}`
            );
        }
    }

    static async createPlaylist(playlist: TUploadPlaylist) {
        try {
            const image = playlist.image
                ? await FB.uploadFile('songsImages', playlist.image)
                : '';

            console.log(image);

            const uploadedPlaylist: TPlaylist = { ...playlist, image };

            console.log(uploadedPlaylist);

            await FB.setById('playlists', playlist.id, uploadedPlaylist);
            const requests = uploadedPlaylist.authors.map((author) => {
                return FB.updateById('users', author.uid, {
                    ownPlaylists: arrayUnion(uploadedPlaylist.id),
                });
            });
            await Promise.all(requests);
            await FB.setById(
                'search',
                uploadedPlaylist.id,
                createDefaultSuggestion(uploadedPlaylist)
            );

            return uploadedPlaylist;
        } catch (error) {
            throw new Error('Failed to create playlist');
        }
    }
}
