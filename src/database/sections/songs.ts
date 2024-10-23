import { TQueue, TSong } from '@song/model/types';
import {
    arrayUnion,
    getDocs,
    increment,
    limit,
    orderBy,
    query,
    where,
} from 'firebase/firestore';
import { Users } from '.';
import { Database } from '..';
import { createLyricsObject } from '../../entities/song/lib/createLyricsObject';
import { createSongObject } from '../../entities/song/lib/createSongObject';
import { TUploadSongForm } from '../../features/addSongModal/model';
import { FB } from '../../firebase';
import { ERRORS } from '../../shared/constants';
import { asyncRequests } from '../../shared/funcs/asyncRequests';
import getUID from '../../shared/funcs/getUID';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { createDefaultSuggestion } from '../../entities/search/lib/createDefaultSuggestion';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';

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

            return FB.getById('songs', uid);
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

        console.log({ uids });

        return await FB.getByIds('songs', uids);
    };

    static async uploadSong(form: TUploadSongForm) {
        try {
            const {
                coverFile,
                songFile,
                name,
                lyrics,
                imageColors,
                duration,
                authors,
                moods,
                langs,
                releaseDate,
                genres,
            } = form;
            let songSrc = '';
            let cover = '';
            if (songFile) {
                songSrc = await FB.uploadFile('songs', songFile);
            }

            if (coverFile) {
                cover = await FB.uploadFile('songsImages', coverFile);
            }

            const id = getUID();
            const songLyrics = createLyricsObject(lyrics);

            const fullAuthors = await asyncRequests(authors, (a) => {
                return Database.Users.getUserByUid(a.uid);
            });

            const newSong = createSongObject({
                id,
                name,
                cover,
                songSrc,
                imageColors,
                duration,
                authors: fullAuthors.map(createAuthorObject),
                moods: moods.map((m) => m.fullName),
                langs: langs.map((l) => l.fullName),
                genres: genres.map((g) => g.fullName),
                releaseDate: releaseDate,
                hasLyrics: songLyrics !== null,
            });

            await FB.setById('songs', id, newSong);
            await asyncRequests(newSong.authors, (author) =>
                FB.updateById('users', author.uid, {
                    ownSongs: arrayUnion(id),
                })
            );
            await FB.setById('search', id, createDefaultSuggestion(newSong));

            if (songLyrics !== null) {
                await FB.setById('lyrics', newSong.id, {
                    id: newSong.id,
                    lyrics: songLyrics,
                });
            }
        } catch (error) {
            console.log(error);

            throw new Error(
                `Failed to upload song, ${(error as Error).message}`
            );
        }
    }

    static async addListening(queue: TQueue | null, currentSongIndex: number) {
        try {
            const song = queue?.songs[currentSongIndex];
            const isInPlaylist =
                queue?.url.includes('playlist') || queue?.url.includes('album');

            if (song) {
                await FB.updateById('songs', song.id, {
                    listens: increment(1),
                });

                await asyncRequests(song.authors, (author) => {
                    return FB.updateById('users', author.uid, {
                        numberOfListenersPerMonth: increment(1),
                    });
                });

                if (isInPlaylist) {
                    await FB.updateById('playlists', queue.id, {
                        listens: increment(1),
                    });
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    static async loadLyrics(songId: string) {
        try {
            const lyrics = await FB.getById('lyrics', songId);
            if (!lyrics) return [];

            return lyrics.lyrics;
        } catch (error) {
            console.error(error);
            throw new Error(ERRORS.operationFailed('Failed to load lyrics'));
        }
    }

    static async loadLastQueue(userId: string) {
        try {
            const queue = await FB.getById('lastQueue', userId);
            const songs = await FB.getByIds('songs', queue.songIds);
            console.log(queue, songs);

            return { queue, songs: songs ?? [] };
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
