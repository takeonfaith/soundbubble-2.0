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
import {
    createDefaultSuggestion,
    getVariantsOfName,
} from '../../entities/search/lib/createDefaultSuggestion';
import { createUserObject } from '../../entities/user/lib/createUserObject';
import { CreateAuthorForm } from '../../entities/user/model/create-author';
import { FB } from '../../firebase';
import { ERRORS } from '../../shared/constants';
import { UpdatedUserFields } from '../../entities/user/model/edit-user';
import { asyncRequests } from '../../shared/funcs/asyncRequests';

export class Users {
    static ref = FB.get('users');

    static async createUser(user: TUser) {
        try {
            await FB.setById('users', user.uid, user);
            await FB.setById('search', user.uid, createDefaultSuggestion(user));
            if (user.addedAuthors) {
                await this.addAuthorToLibrary(
                    user.uid,
                    user.addedAuthors,
                    false
                );
            }
        } catch (error) {
            console.error(error);
            throw new Error(ERRORS.operationFailed('Failed to create user'));
        }
    }

    static async signUp(props: CreateUserCreditsType) {
        try {
            const {
                email,
                password,
                displayName,
                photoFile,
                imageColors,
                addedAuthors,
            } = props;
            console.log(props);

            const userCreds = await FB.createUser(email, password);

            let photoURL = '';
            if (photoFile) {
                photoURL = await FB.uploadFile('usersImages', photoFile);
            }
            const newUser = createUserObject({
                uid: userCreds.user.uid,
                displayName,
                photoURL,
                imageColors,
                addedAuthors,
            });

            await this.createUser(newUser);
            await FB.setById('history', newUser.uid, {
                history: [],
            });

            return newUser;
        } catch (error) {
            console.error(error);
            throw new Error((error as Error).message);
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

    static async getUserById(uid: string | undefined) {
        try {
            if (!uid)
                throw new Error(ERRORS.loginFailed('UID must be provided'));

            const res = await FB.getById('users', uid);
            console.log(res);

            return res;
        } catch (error) {
            console.log(error);

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
            const res = await FB.getByIds('users', uids);

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

    static async getTopAuthors(topQuantity = 10, by?: keyof TUser) {
        try {
            const snapshot = await getDocs(
                query(
                    this.ref,
                    where('isAuthor', '==', true),
                    orderBy(by ?? 'numberOfListenersPerMonth', 'desc'),
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

    static async addAuthorToLibrary(
        userId: string,
        authorIds: string[],
        updateUser = true
    ) {
        try {
            if (updateUser) {
                await FB.updateById('users', userId, {
                    addedAuthors: arrayUnion(...authorIds),
                });
            }

            await FB.updateByIdsWithBatches('users', authorIds, {
                subscribers: increment(1),
            });
        } catch (error) {
            throw new Error(
                `Failed to add author to library, ${(error as Error).message}`
            );
        }
    }

    static async removeAuthorFromLibrary(
        userId: string,
        authorIds: string[],
        updateUser = true
    ) {
        try {
            if (updateUser) {
                await FB.updateById('users', userId, {
                    addedAuthors: arrayRemove(...authorIds),
                });
            }

            await FB.updateByIdsWithBatches('users', authorIds, {
                subscribers: increment(-1),
            });
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

    static async acceptFriendRequest(userId: string, friendId: string) {
        try {
            await FB.updateById('users', userId, {
                friends: arrayUnion({
                    uid: friendId,
                    status: FriendStatus.added,
                }),
            });

            await FB.updateById('users', friendId, {
                friends: arrayUnion({
                    uid: userId,
                    status: FriendStatus.added,
                }),
            });
        } catch (error) {
            throw new Error(
                `Failed to accept friend request, ${(error as Error).message}`
            );
        }
    }

    static async rejectFriendRequest(userId: string, friendId: string) {
        try {
            await FB.updateById('users', userId, {
                friends: arrayRemove({
                    uid: friendId,
                    status: FriendStatus.requested,
                }),
            });

            await FB.updateById('users', friendId, {
                friends: arrayRemove({
                    uid: userId,
                    status: FriendStatus.awaiting,
                }),
            });
        } catch (error) {
            throw new Error(
                `Failed to accept friend request, ${(error as Error).message}`
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

    static async addPlaylistToLibrary(playlistId: string, userId: string) {
        try {
            await FB.updateById('users', userId, {
                addedPlaylists: arrayUnion(playlistId),
            });

            await FB.updateById('playlists', playlistId, {
                subscribers: increment(1),
            });
        } catch (error) {
            throw new Error('Failed to add playlist to library');
        }
    }

    static async removePlaylistFromLibrary(playlistId: string, userId: string) {
        try {
            await FB.updateById('users', userId, {
                addedPlaylists: arrayRemove(playlistId),
            });

            await FB.updateById('playlists', playlistId, {
                subscribers: increment(-1),
            });
        } catch (error) {
            throw new Error('Failed to remove playlist from library');
        }
    }

    static async updateOwnPlaylistsOrder(
        userId: string,
        playlistIds: string[]
    ) {
        try {
            await FB.updateById('users', userId, {
                ownPlaylists: playlistIds,
            });
        } catch (error) {
            throw new Error('Failed to update own playlists order');
        }
    }

    static async getUserPageById(userId: string, sortSongs = false) {
        try {
            const user = await this.getUserById(userId);

            if (!user) return null;

            const userSongs = user?.ownSongs?.length
                ? user?.ownSongs
                : user?.addedSongs ?? [];
            const userPlaylists = user?.ownPlaylists?.length
                ? user?.ownPlaylists
                : user?.addedPlaylists ?? [];

            const songs = await Songs.getSongsByUids(
                userSongs.reverse(),
                sortSongs
            );

            const playlists = await Playlists.getPlaylistsByUids(userPlaylists);

            const lastQueue = !user.isAuthor
                ? await Songs.loadLastQueue(user.uid)
                : null;

            const friends = await this.getUsersByUids(
                user.friends
                    ?.filter((u) => u.status === 'added')
                    .map((u) => u.uid)
            );

            return {
                user,
                songs,
                playlists,
                lastSongPlayed: lastQueue?.queue
                    ? lastQueue?.songs[lastQueue.queue.currentSongIndex]
                    : null,
                friends,
            };
        } catch (error) {
            console.log('Failed to get user page', error);

            throw new Error('Failed to get user page');
        }
    }

    static async createAuthor(props: CreateAuthorForm) {
        try {
            const { displayName, imageColors, photoFile } = props;
            let photoURL = '';
            if (photoFile) {
                photoURL = await FB.uploadFile('usersImages', photoFile);
            }

            const newUser = createUserObject({
                displayName,
                imageColors,
                photoURL,
                isAuthor: true,
                isVerified: true,
            });

            await this.createUser(newUser);

            return newUser;
        } catch (error) {
            console.log('Failed to create author', error);

            throw new Error('Failed to create author');
        }
    }

    static async editUser(user: TUser, update: UpdatedUserFields) {
        try {
            const { displayName, imageColors, photoFile } = update;
            let photoURL = '';
            if (photoFile) {
                photoURL = await FB.uploadFile('usersImages', photoFile);
            }

            if (photoFile === null) {
                await FB.deleteFile('usersImages', user.photoURL);
            }

            const finalUpdate: Partial<TUser> = {};

            if (displayName) finalUpdate.displayName = displayName;
            if (imageColors) finalUpdate.imageColors = imageColors;
            if (photoURL) finalUpdate.photoURL = photoURL;
            if (photoFile === null) finalUpdate.photoURL = '';

            console.log(finalUpdate);

            await FB.updateById('users', user.uid, finalUpdate);
            if (displayName) {
                await FB.updateById('search', user.uid, {
                    fullName: displayName,
                    variantsOfName: getVariantsOfName(displayName),
                });

                const updatePlaylistAuthors = async (playlistId: string) => {
                    const playlist = await FB.getById('playlists', playlistId);
                    const newPlaylistAuthors = playlist?.authors.map(
                        (author) => {
                            if (author.uid === user.uid) {
                                return {
                                    ...author,
                                    displayName: finalUpdate.displayName,
                                };
                            }

                            return author;
                        }
                    );

                    await FB.updateById('playlists', playlistId, {
                        authors: newPlaylistAuthors,
                    });
                };

                await asyncRequests(user.ownPlaylists, (playlistId) => {
                    return updatePlaylistAuthors(playlistId);
                });
            }

            return finalUpdate;
        } catch (error) {
            console.log('Failed to edit user', error);

            throw new Error('Failed to edit user');
        }
    }

    static async deleteAccount(user: TUser, userCreds: User) {
        try {
            if (userCreds) {
                const deleteOrUpdatePlaylist = async (playlistId: string) => {
                    const playlist = await FB.getById('playlists', playlistId);
                    if (!playlist) return Promise.resolve();

                    if (playlist?.authors.length === 1) {
                        return await Playlists.deletePlaylist(playlist);
                    }

                    return await Playlists.updatePlaylist(playlist, {
                        authors: playlist.authors.filter(
                            (author) => author.uid !== user.uid
                        ),
                        authorIds: playlist.authorIds.filter(
                            (id) => id !== user.uid
                        ),
                    });
                };

                await asyncRequests(user.ownPlaylists, (playlistId) => {
                    return deleteOrUpdatePlaylist(playlistId);
                });

                if (user.photoURL.length) {
                    await FB.deleteFile('usersImages', user.photoURL);
                }

                if (user.addedAuthors) {
                    await this.removeAuthorFromLibrary(
                        user.uid,
                        user.addedAuthors,
                        false
                    );
                }

                await FB.deleteById('users', userCreds.uid);
                await FB.deleteById('search', userCreds.uid);

                await FB.deleteAccount(userCreds);
            }
        } catch (error) {
            console.log('Failed to delete user', error);
            throw new Error('Failed to delete user');
        }
    }

    static async checkIfEmailIsTaken(email: string) {
        try {
            return await FB.checkIfEmailIsTaken(email);
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    static async resetPassword(email: string) {
        try {
            await FB.resetPassword(email);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to reset password');
        }
    }
}
