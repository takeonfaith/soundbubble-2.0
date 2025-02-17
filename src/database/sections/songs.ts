import { TAuthor, TLastQueue, TQueue, TSong } from '@song/model/types';
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
import { createDefaultSuggestion } from '../../entities/search/lib/createDefaultSuggestion';
import { createLyricsObject } from '../../entities/song/lib/createLyricsObject';
import { createSongObject } from '../../entities/song/lib/createSongObject';
import { shuffleArray } from '../../entities/song/lib/shuffleArray';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';
import { TUser } from '../../entities/user/model/types';
import { AddSongFormType } from '../../features/uploadSongModal/model';
import { FB } from '../../firebase';
import { Server } from '../../server';
import { ERRORS } from '../../shared/constants';
import { asyncRequests } from '../../shared/funcs/asyncRequests';
import getUID from '../../shared/funcs/getUID';
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
            const user = await Users.getUserById(userId);
            return this.getSongsByUids(user?.addedSongs ?? []);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static getSongByUid = async (
        uid: string | undefined
    ): Promise<TSong | null> => {
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
        uids: string[] | undefined,
        sortedByListens?: boolean,
        maxSongs?: number
    ): Promise<TSong[]> => {
        if (!uids || uids.length === 0) return [];

        if (sortedByListens || maxSongs) {
            const additionalContstraints = [];
            if (sortedByListens) {
                additionalContstraints.push(orderBy('listens', 'desc'));
            }
            if (maxSongs) {
                additionalContstraints.push(limit(maxSongs));
            }

            const q = query(
                FB.get('songs'),
                where('id', 'in', uids),
                ...additionalContstraints
            );
            const snapshot = await getDocs(q);

            return getDataFromDoc<TSong>(snapshot);
        }

        return await FB.getByIds('songs', uids);
    };

    static async uploadSong(form: AddSongFormType) {
        let songCreated = false;
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
                return Database.Users.getUserById(a.uid);
            });

            const newSong = createSongObject({
                id,
                name,
                cover,
                songSrc,
                imageColors,
                duration,
                authors: fullAuthors.map(createAuthorObject),
                moods: moods,
                langs: langs,
                genres: genres,
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

            songCreated = true;

            if (songLyrics !== null) {
                await FB.setById('lyrics', newSong.id, {
                    id: newSong.id,
                    lyrics: songLyrics,
                });
            }

            if (songFile) {
                await Server.uploadAudio(songFile, newSong.id);
            }
        } catch (error) {
            console.log(error);
            if (!songCreated) {
                throw new Error(
                    `Failed to upload song, ${(error as Error).message}`
                );
            }
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
            const songs = queue
                ? await FB.getByIds('songs', queue.songIds)
                : [];

            return { queue, songs: songs ?? [] };
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static async updateLastQueue(userId: string, newQueue: TLastQueue) {
        try {
            await FB.updateById('lastQueue', userId, newQueue);
            await FB.updateById('users', userId, {
                lastSongPlayed: newQueue.songIds[newQueue.currentSongIndex],
            });
        } catch (error) {
            console.error(error);
        }
    }

    static async getTopSongsBySongIds(ids: string[], topQuantity = 3) {
        try {
            const snapshot = await getDocs(
                query(
                    this.ref,
                    where('id', 'in', ids),
                    orderBy('listens', 'desc'),
                    limit(topQuantity)
                )
            );
            return getDataFromDoc<TSong>(snapshot);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getWave(authors: (TUser | TAuthor)[]): Promise<TSong[]> {
        try {
            const getTop3SongsFromAuthor = async (author: TUser) => {
                if (!author.ownSongs) return await Promise.resolve(null);

                return await this.getTopSongsBySongIds(author.ownSongs);
            };

            if (!('ownSongs' in authors[0])) {
                const res = await asyncRequests(authors, (author) => {
                    return Users.getAuthorSongsByAuthorId(author.uid, false, 3);
                });

                const dsa = res
                    .filter((r) => r !== null)
                    .flatMap((r) => r.songs);

                return shuffleArray(dsa);
            }

            if (authors.length < 3) {
                const songs = [
                    ...(await this.getTopSongs(20)),
                    ...(
                        await asyncRequests(
                            authors as TUser[],
                            getTop3SongsFromAuthor
                        )
                    )
                        .flat()
                        .filter((s) => s !== null),
                ];
                return shuffleArray(songs);
            }

            const songs = (
                await asyncRequests(authors as TUser[], getTop3SongsFromAuthor)
            )
                .flat()
                .filter((s) => s !== null);

            return shuffleArray(songs);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to get wave: ' + (error as Error).message);
            return [];
        }
    }
}
