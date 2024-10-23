import { FB } from '../../firebase';

import { TPlaylist, TUploadPlaylist } from '@playlist/model/types';
import { arrayRemove, arrayUnion } from 'firebase/firestore';
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
import { Chats } from './chats';

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

        return (await FB.getByIds('playlists', uids)).reverse();
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

            let imageUrl = playlist.image;

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

            const whatToUpdate: Partial<TPlaylist> =
                imageUrl !== playlist.image
                    ? { ...update, image: imageUrl }
                    : (update as TPlaylist);

            await FB.updateById('playlists', playlist.id, whatToUpdate);

            if ('name' in update && update.name !== playlist.name) {
                const variantsOfName = getVariantsOfName(update.name);

                if (
                    playlist.isPrivate === false &&
                    update.isPrivate === false
                ) {
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
                const message = createMessageObject(senderId, {
                    message: 'Invitation to playlist',
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
}
