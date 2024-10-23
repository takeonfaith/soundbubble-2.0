import {
    and,
    doc,
    getDocs,
    limit,
    or,
    orderBy,
    query,
    setDoc,
    where,
} from 'firebase/firestore';
import { TChat, TChatData, TMessage } from '../../entities/chat/model/types';
import { TEntity } from '../../entities/search/model/types';
import { FB } from '../../firebase';
import { asyncRequests } from '../../shared/funcs/asyncRequests';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { Playlists } from './playlists';
import { Songs } from './songs';
import { Users } from './users';
import { createChatObject } from '../../entities/chat/lib/createChatObject';

export class Chats {
    static ref = FB.get('newChats');
    static ownChatsQuery(userId: string) {
        return query(this.ref, where('participants', 'array-contains', userId));
    }

    static async getChatsByIds(userId: string, chatIds: string[]) {
        try {
            const chats = await FB.getByIds('newChats', chatIds);
            console.log(chats);

            const lastMessages: Record<string, TMessage> = {};
            const chatDataObject: TChatData = {};

            const unreadCount: Record<string, number> = {};

            // const reqs = chats.map(async (chat) => {
            //     const { messages, chatData } =
            //         await this.getChatMessagesByChatId(chat.id, 'desc', 1);
            //     chatDataObject = Object.assign(chatDataObject, chatData);
            //     lastMessages[chat.id] = messages[0];
            //     unreadCount[chat.id] = (messages[0]?.seenBy ?? [])?.includes(
            //         userId
            //     )
            //         ? 0
            //         : 1;
            // });

            // await Promise.all(reqs);

            return {
                chats: chats.sort(
                    (a, b) =>
                        lastMessages[b.id]?.sentTime -
                        lastMessages[a.id]?.sentTime
                ),
                chatDataObject,
                lastMessages,
                unreadCount,
            };
        } catch (error) {
            throw new Error('Failed to get chats by user id: ' + userId);
        }
    }

    static async getChatMessagesByChatId(
        chatId: string,
        order?: 'asc' | 'desc',
        limitNumber?: number
    ) {
        try {
            const c = [];
            if (limitNumber !== undefined) c.push(limit(limitNumber));

            const q = query(
                FB.getSubCollection('newChats', `${chatId}/messages`),
                orderBy('sentTime', order ?? 'asc'),
                ...c
            );
            const docs = await getDocs(q);
            const messages = getDataFromDoc<TMessage>(docs);

            const attachments = await asyncRequests(messages, (message) => {
                const playlistIds = [...message.attachedAlbums];

                if (message.playlistInvitation?.id) {
                    playlistIds.push(message.playlistInvitation?.id);
                }

                const shouldRequest =
                    playlistIds.length > 0 ||
                    message.attachedSongs.length > 0 ||
                    message.attachedAuthors.length > 0;

                const getAttachments = async (): Promise<TEntity[]> => {
                    const songs = await Songs.getSongsByUids(
                        message.attachedSongs
                    );
                    const playlists = await Playlists.getPlaylistsByUids(
                        playlistIds
                    );
                    const authors = await Users.getUsersByUids(
                        message.attachedAuthors
                    );

                    return [...songs, ...playlists, ...authors];
                };

                return shouldRequest ? getAttachments() : Promise.resolve(null);
            });

            const res = attachments.reduce((acc, r) => {
                r?.forEach((el) => {
                    acc['id' in el ? el.id : el.uid] = el;
                });

                return acc;
            }, {} as Record<string, TEntity>);
            console.log(res);

            return { messages, chatData: res };
        } catch (error) {
            throw new Error('Failed to get messages by chatId id: ' + chatId);
        }
    }

    static async sendMessage(chatId: string, message: TMessage) {
        try {
            const ref = doc(
                FB.firestore,
                `newChats/${chatId}/messages/${message.id}`
            );

            await setDoc(ref, message);

            FB.updateById('newChats', chatId, {
                lastMessage: message,
            });
        } catch (error) {
            throw new Error(
                'Failed to send message' + (error as Error).toString()
            );
        }
    }

    static async createChat(chat: TChat) {
        try {
            await FB.setById('newChats', chat.id, chat);
            return chat;
        } catch (error) {
            throw new Error(
                'Failed to create chat' + (error as Error).toString()
            );
        }
    }

    static async getChatByUserIds(senderId: string, receiverId: string) {
        try {
            const q = query(
                this.ref,
                and(
                    or(
                        where('participants', '==', [senderId, receiverId]),
                        where('participants', '==', [receiverId, senderId])
                    ),
                    where('chatName', '==', '')
                ),
                limit(1)
            );
            const docs = await getDocs(q);
            let chat = getDataFromDoc<TChat>(docs)[0];

            if (!chat) {
                chat = await this.createChat(
                    createChatObject([senderId, receiverId], {})
                );
            }

            return chat;
        } catch (error) {
            throw new Error(
                'Failed to get chat by user id, ' + (error as Error).toString()
            );
        }
    }

    static async sendMessageByUserId(
        senderId: string,
        receiverId: string,
        message: TMessage
    ) {
        try {
            const chat = await this.getChatByUserIds(senderId, receiverId);

            await this.sendMessage(chat.id, message);
        } catch (error) {
            throw new Error(
                'Failed to send message by user id' +
                    (error as Error).toString()
            );
        }
    }
}
