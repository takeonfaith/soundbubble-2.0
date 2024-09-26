import { TSong } from '@song/model/types';
import {
    CreateUserCreditsType,
    FriendStatus,
    LoginCreditsType,
    TUser,
} from '@user/model/types';
import { getDataFromDoc } from 'database/lib/getDataFromDoc';
import { NextOrObserver, User } from 'firebase/auth';
import {
    arrayRemove,
    arrayUnion,
    getDocs,
    increment,
    limit,
    orderBy,
    query,
    where,
} from 'firebase/firestore';
import { Playlists, Songs } from '.';
import { TPlaylist } from '../../entities/playlist/model/types';
import { FB } from '../../firebase';
import { ERRORS } from '../../shared/constants';

export class Users {
    static ref = FB.get('users');

    static createUser({ email, password }: CreateUserCreditsType) {
        try {
            return FB.createUser(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    static async login({ email, password }: LoginCreditsType) {
        try {
            return FB.login(email, password);
        } catch (error) {
            console.error(error);
        }
    }

    static async logout() {
        try {
            return FB.logout();
        } catch (error) {
            console.error(error);
        }
    }

    static async getUserByUid(uid: string | undefined) {
        try {
            if (!uid)
                throw new Error(ERRORS.loginFailed('UID must be provided'));

            return FB.getById('users', uid);
        } catch (error) {
            throw new Error('Failed to get user by id: ' + uid);
        }
    }

    static async getUsersByUids(
        uids: string[] | undefined,
        sortByListners?: boolean
    ) {
        try {
            if (!uids || uids.length === 0) return [];

            const additionalParams = [];

            if (sortByListners) {
                additionalParams.push(
                    orderBy('numberOfListenersPerMonth', 'desc')
                );
            }
            const res = await FB.getByIds('users', uids, 'uid');
            console.log({ res });

            return res;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static onAuthStateChanged = async (func: NextOrObserver<User>) => {
        try {
            return FB.onAuthStateChanged(func);
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    static async getAuthorTopSongs(songs: string[], count = 3) {
        try {
            if (songs.length === 0) return [];

            const snapshot = await getDocs(
                query(
                    Songs.ref,
                    where('id', 'in', songs),
                    orderBy('listens', 'desc'),
                    limit(count)
                )
            );
            return getDataFromDoc<TSong>(snapshot);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getAuthorTopAlbums(albums: string[], count = 3) {
        try {
            if (albums.length === 0) return [];

            const snapshot = await getDocs(
                query(
                    Playlists.ref,
                    where('id', 'in', albums),
                    // orderBy('listens', 'desc'),
                    limit(count)
                )
            );

            return getDataFromDoc<TPlaylist>(snapshot);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getSimilarAuthorsBySongs(songs: TSong[]) {
        try {
            if (songs.length === 0) return [];

            const ids = [
                ...new Set(
                    songs.flatMap((song) =>
                        song.authors.map((author) => author.uid)
                    )
                ),
            ];

            return await this.getUsersByUids(ids, true);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async getTopAuthorsByListenings(topQuantity = 10) {
        try {
            const snapshot = await getDocs(
                query(
                    this.ref,
                    where('isAuthor', '==', true),
                    orderBy('numberOfListenersPerMonth', 'desc'),
                    limit(topQuantity)
                )
            );
            return getDataFromDoc<TUser>(snapshot);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async listenToUsersChanges(
        userIds: string[],
        callback: (users: TUser[]) => void
    ) {
        try {
            return await FB.listenTo(
                'users',
                callback,
                where('uid', 'in', userIds),
                orderBy('online', 'desc')
            );
        } catch (error) {
            throw new Error('Failed to listen to users changes');
        }
    }

    static async addSongToLibrary(userId: string, songId: string) {
        try {
            await FB.updateById('users', userId, {
                addedSongs: arrayUnion(songId),
            });
        } catch (error) {
            throw new Error((error as unknown as Error).message);
        }
    }

    static async removeSongFromLibrary(userId: string, songId: string) {
        try {
            await FB.updateById('users', userId, {
                addedSongs: arrayRemove(songId),
            });
        } catch (error) {
            throw new Error('Failed to remove song from library');
        }
    }

    static async updateLibrary(userId: string, songs: string[]) {
        try {
            await FB.updateById('users', userId, {
                addedSongs: songs,
            });
        } catch (error) {
            throw new Error(
                `Failed to update library, ${(error as Error).message}`
            );
        }
    }

    static async addAuthorToLibrary(userId: string, authorIds: string[]) {
        try {
            await FB.updateById('users', userId, {
                addedAuthors: arrayUnion(...authorIds),
            });

            const reqs = authorIds.map((id) => {
                return FB.updateById('users', id, {
                    subscribers: increment(1),
                });
            });

            await Promise.all(reqs);
        } catch (error) {
            throw new Error(
                `Failed to add author to library, ${(error as Error).message}`
            );
        }
    }

    static async removeAuthorFromLibrary(userId: string, authorIds: string[]) {
        try {
            await FB.updateById('users', userId, {
                addedAuthors: arrayRemove(...authorIds),
            });

            const reqs = authorIds.map((id) => {
                return FB.updateById('users', id, {
                    subscribers: increment(-1),
                });
            });

            await Promise.all(reqs);
        } catch (error) {
            throw new Error(
                `Failed to add author to library, ${(error as Error).message}`
            );
        }
    }

    static async friendRequest(userId: string, friendId: string) {
        try {
            await FB.updateById('users', userId, {
                friends: arrayUnion({
                    uid: friendId,
                    status: FriendStatus.requested,
                }),
            });

            await FB.updateById('users', friendId, {
                friends: arrayUnion({
                    uid: userId,
                    status: FriendStatus.awaiting,
                }),
            });
        } catch (error) {
            throw new Error(
                `Failed to add friend, ${(error as Error).message}`
            );
        }
    }

    static async updateUserOnline(userId: string, online: number) {
        try {
            await FB.updateById('users', userId, { online });
        } catch (error) {
            throw new Error('Failed to update user online status');
        }
    }
}
