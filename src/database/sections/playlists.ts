import { FB } from '../../firebase';

import { TPlaylist, TUploadPlaylist } from '@playlist/model/types';
import {
    and,
    arrayRemove,
    arrayUnion,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from 'firebase/firestore';
import { createMessageObject } from '../../entities/chat/lib/createMessageObject';
import {
    createDefaultSuggestion,
    getVariantsOfName,
} from '../../entities/search/lib/createDefaultSuggestion';
import { TSong } from '../../entities/song/model/types';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';
import { TUser } from '../../entities/user/model/types';
import { ERRORS } from '../../shared/constants';
import { asyncRequests } from '../../shared/funcs/asyncRequests';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { Chats } from './chats';
import { shuffleArray } from '../../entities/song/lib/shuffleArray';
import getUID from '../../shared/funcs/getUID';

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
        try {
            if (uids.length === 0) return [];

            return (await FB.getByIds('playlists', uids)).reverse();
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    static async addSongsToPlaylists(songs: TSong[], playlists: TPlaylist[]) {
        try {
            if (!songs.length) throw new Error('Song id not specified');

            if (!playlists.length)
                throw new Error('Playlist ids not specified');

            const songIds = songs.map((song) => song.id);
            const playlistIds = playlists.map((playlist) => playlist.id);

            await asyncRequests(playlistIds, (id) => {
                return FB.updateById('playlists', id, {
                    songs: arrayUnion(...songIds),
                    lastEditedTime: Date.now(),
                });
            });
        } catch (error) {
            throw new Error(
                `Failed to add song to playlists ${songs.map(
                    (s) => s.name
                )}, ${playlists.map((p) => p.name)}, ${error}`
            );
        }
    }

    static async createPlaylist(playlist: TUploadPlaylist) {
        try {
            const image = playlist.image
                ? await FB.uploadFile('songsImages', playlist.image as File)
                : '';

            const uploadedPlaylist: TPlaylist = { ...playlist, image };

            await FB.setById('playlists', playlist.id, uploadedPlaylist);

            await asyncRequests(uploadedPlaylist.authors, (author) => {
                return FB.updateById('users', author.uid, {
                    ownPlaylists: arrayUnion(uploadedPlaylist.id),
                });
            });

            if (!playlist.isPrivate) {
                await FB.setById(
                    'search',
                    uploadedPlaylist.id,
                    createDefaultSuggestion(uploadedPlaylist)
                );
            }

            return uploadedPlaylist;
        } catch (error) {
            throw new Error(`Failed to create playlist, error: ${error}`);
        }
    }

    static async deletePlaylist(playlist: TPlaylist) {
        try {
            if (!playlist) throw new Error('Playlist is not specified');

            await FB.deleteById('playlists', playlist.id);
            await FB.deleteById('search', playlist.id);

            await FB.deleteFile('songsImages', playlist.image);
            await asyncRequests(playlist.authors, (author) => {
                return FB.updateById('users', author.uid, {
                    ownPlaylists: arrayRemove(playlist.id),
                });
            });
        } catch (error) {
            throw new Error(
                `Failed to delete playlist ${playlist.name}, ${error}`
            );
        }
    }

    static async updatePlaylist(
        playlist: TPlaylist,
        update: Partial<TUploadPlaylist>
    ) {
        try {
            if (!playlist) throw new Error('Playlist is not specified');

            let imageUrl = '';

            if (
                'image' in update &&
                update.image &&
                imageUrl !== update.image
            ) {
                imageUrl = await FB.uploadFile(
                    'songsImages',
                    update.image as File
                );
                await FB.deleteFile('songsImages', playlist.image);
            }

            if (update.image === null) {
                await FB.deleteFile('songsImages', playlist.image);
            }

            const { image, ...updateWithoutImage } = update;

            const whatToUpdate: Partial<TPlaylist> = { ...updateWithoutImage };
            console.log(update);

            if (image !== undefined) {
                whatToUpdate.image = imageUrl;
            }

            await FB.updateById('playlists', playlist.id, whatToUpdate);

            if ('name' in update && update.name !== playlist.name) {
                const variantsOfName = getVariantsOfName(update.name);

                if (playlist.isPrivate === false) {
                    await FB.updateById('search', playlist.id, {
                        variantsOfName,
                        fullName: update.name,
                    });
                }
            }

            if (
                'isPrivate' in update &&
                update.isPrivate !== playlist.isPrivate
            ) {
                if (update.isPrivate) {
                    await FB.deleteById('search', playlist.id);
                } else {
                    const search = createDefaultSuggestion(playlist);
                    await FB.setById('search', playlist.id, search);
                }
            }

            return { ...playlist, ...whatToUpdate } as TPlaylist;
        } catch (error) {
            console.log(`Failed to update playlist ${playlist.id}, ${error}`);

            throw new Error(
                `Failed to update playlist ${playlist.id}, ${error}`
            );
        }
    }

    static async sendPlaylistInvitation(
        senderId: string,
        playlist: TPlaylist,
        participants: TUser[]
    ) {
        try {
            if (!participants.length)
                throw new Error('Participants not specified');

            await asyncRequests(participants, async (participant) => {
                const id = getUID();
                const message = createMessageObject({
                    id,
                    sender: senderId,
                    message: 'Invitation to playlist',
                    participants: participants.map((p) => p.uid),
                    playlistInvitation: {
                        id: playlist.id,
                        accepted: false,
                    },
                });

                delete message.status;

                return Chats.sendMessageByUserId(
                    senderId,
                    participant.uid,
                    message
                );
            });
        } catch (error) {
            console.error(error);
            throw new Error('Failed to send participant requests');
        }
    }

    static async acceptInvitation(
        user: TUser,
        chatId: string,
        messageId: string,
        playlist: TPlaylist
    ) {
        try {
            if (!playlist) throw new Error('Playlist is not specified');

            await FB.updateById('users', user.uid, {
                ownPlaylists: arrayUnion(playlist.id),
            });

            await FB.updateById('playlists', playlist.id, {
                authors: arrayUnion(createAuthorObject(user)),
                authorIds: arrayUnion(user.uid),
            });

            const playlistInvitation = {
                accepted: true,
                id: playlist.id,
            };

            await FB.updateDeepByIds(
                'newChats',
                [chatId, 'messages', messageId],
                {
                    playlistInvitation,
                }
            );

            await FB.updateById('newChats', chatId, {
                lastMessage: {
                    playlistInvitation,
                },
            });
        } catch (error) {
            throw new Error(
                `Failed to accept playlist invitation, error: ${error}`
            );
        }
    }

    static async getTopAlbums(quantity = 20, by?: keyof TPlaylist) {
        try {
            const snapshot = await getDocs(
                query(
                    this.ref,
                    and(where('isAlbum', '==', true)),
                    orderBy(by ?? 'listens', 'desc'),
                    limit(quantity)
                )
            );

            const res = getDataFromDoc<TPlaylist>(snapshot);

            return res;
        } catch (error) {
            console.log('Failed to get top playlists, error:' + error);

            throw new Error('Failed to get top playlists, error:' + error);
        }
    }

    static async getPlaylistSongsSuggestions(playlistSongs: TSong[]) {
        try {
            const users = await FB.getByIds(
                'users',
                playlistSongs.flatMap((song) => song.authors.map((a) => a.uid))
            );

            console.log(users);

            const authorSongs = Array.from(
                new Set(
                    users.reduce((acc, val) => {
                        if (val.ownSongs?.length) {
                            acc.push(...val.ownSongs);
                        }
                        return acc;
                    }, [] as string[])
                )
            ).slice(0, 30);

            if (authorSongs.length === 0) return [];

            const snapshot = await getDocs(
                query(
                    FB.get('songs'),
                    where('id', 'in', authorSongs),
                    orderBy('listens', 'desc'),
                    limit(10)
                )
            );
            const finalSongs = getDataFromDoc<TSong>(snapshot).filter(
                (song) => !playlistSongs.map((s) => s.id).includes(song.id)
            );

            return shuffleArray(finalSongs).slice(0, 5);
        } catch (error) {
            throw new Error(
                'Failed to get playlist song suggestions, error:' + error
            );
        }
    }

    static async removeSongsFromPlaylists(
        songs: TSong[],
        playlists: TPlaylist[]
    ) {
        try {
            const removeSongs = async (p: TPlaylist) => {
                await FB.updateById('playlists', p.id, {
                    songs: arrayRemove(...songs.map((s) => s.id)),
                    lastEditedTime: Date.now(),
                });
            };

            await asyncRequests(playlists, removeSongs);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to remove songs from playlists');
        }
    }
}
