import {
    and,
    arrayRemove,
    arrayUnion,
    collection,
    DocumentData,
    getCountFromServer,
    getDocs,
    limit,
    onSnapshot,
    or,
    orderBy,
    query,
    QueryDocumentSnapshot,
    startAfter,
    where,
} from 'firebase/firestore';
import { createChatObject } from '../../entities/chat/lib/createChatObject';
import { createMessageObject } from '../../entities/chat/lib/createMessageObject';
import { SYSTEM_MESSAGE_SENDER } from '../../entities/chat/lib/getLastMessageSender';
import {
    TChat,
    TCache,
    TMessage,
    TUnreadCount,
} from '../../entities/chat/model/types';
import { FB } from '../../firebase';
import { asyncRequests } from '../../shared/funcs/asyncRequests';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { convertToMap } from '../../shared/funcs/convertToMap';
import { TUser } from '../../entities/user/model/types';

export class Chats {
    static ref = FB.get('newChats');
    static lastVisible: QueryDocumentSnapshot<
        DocumentData,
        DocumentData
    > | null;
    static ownChatsQuery(userId: string) {
        return query(this.ref, where('participants', 'array-contains', userId));
    }

    static async getChatsByIds(userId: string, chatIds: string[]) {
        try {
            const chats = await FB.getByIds('newChats', chatIds);
            return chats;
        } catch (error) {
            throw new Error('Failed to get chats by user id: ' + userId);
        }
    }

    static async getChatMessagesByChatId(
        chatId: string,
        order?: 'asc' | 'desc',
        limitNumber?: number,
        paginate = false
    ) {
        try {
            const c = [];
            if (paginate && this.lastVisible) {
                c.push(startAfter(this.lastVisible));
            }

            if (limitNumber !== undefined) c.push(limit(limitNumber));

            const q = query(
                FB.getSubCollection('newChats', `${chatId}/messages`),
                orderBy('sentTime', order ?? 'asc'),
                ...c
            );

            const docs = await getDocs(q);
            const messages = getDataFromDoc<TMessage>(docs);

            this.lastVisible = docs.docs[docs.docs.length - 1];

            return messages.reverse();
        } catch (error) {
            throw new Error('Failed to get messages by chatId id: ' + chatId);
        }
    }

    static async getHeavyMedia(
        songIds: string[],
        playlistIds: string[],
        userIds: string[]
    ): Promise<TCache> {
        try {
            const songs = await FB.getByIds('songs', songIds);
            const playlists = await FB.getByIds('playlists', playlistIds);
            const users = await FB.getByIds('users', userIds);

            return {
                ...convertToMap(songs),
                ...convertToMap(playlists),
                ...convertToMap(users),
            };
        } catch (error) {
            throw new Error('Failed to get heavy media');
        }
    }

    static async sendMessage(
        chats: TChat[],
        getMessage: (chat: TChat) => TMessage
    ) {
        try {
            const send = async (chat: TChat) => {
                const message = getMessage(chat);
                delete message.status;

                await FB.setDeepByIds(
                    'newChats',
                    [chat.id, 'messages', message.id],
                    message
                );

                await FB.updateById('newChats', chat.id, {
                    lastMessage: message,
                });
            };

            await asyncRequests(chats, (chat) => {
                return send(chat);
            });
        } catch (error) {
            console.log(error);

            throw new Error(
                'Failed to send message' + (error as Error).toString()
            );
        }
    }

    static async createChat(chat: TChat): Promise<TChat> {
        try {
            if (chat.participants.length === 2) {
                const [senderId, receiverId] = chat.participants;

                const probableChat = await this.getChatByUserIds(
                    senderId,
                    receiverId
                );

                if (probableChat) return probableChat;
            }

            await FB.setById('newChats', chat.id, chat);
            // If chat is group chat, first message should be about creation
            if (chat.chatName.length !== 0) {
                await this.sendMessage([chat], () =>
                    createMessageObject({
                        sender: SYSTEM_MESSAGE_SENDER,
                        participants: chat.participants,
                        message: `Group ${chat.chatName} was created`,
                    })
                );
            }

            await asyncRequests(chat.participants, (userId) => {
                return FB.updateById('users', userId, {
                    chats: arrayUnion(chat.id),
                });
            });

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
            const chat = getDataFromDoc<TChat | null>(docs)[0];

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
            let chat = await this.getChatByUserIds(senderId, receiverId);

            if (!chat) {
                chat = await this.createChat(
                    createChatObject({
                        participants: [senderId, receiverId],
                    })
                );
            }

            await this.sendMessage([chat], () => message);
        } catch (error) {
            throw new Error(
                'Failed to send message by user id' +
                    (error as Error).toString()
            );
        }
    }

    static async subscribeToChatsWithUserId(
        userId: string,
        callback: (chats: TChat[]) => void
    ) {
        try {
            return await FB.listenTo(
                'newChats',
                callback,
                where('participants', 'array-contains', userId),
                orderBy('lastMessage.sentTime', 'desc')
            );
        } catch (error) {
            console.log('ERROROROROROR', error);

            throw new Error(
                'Failed to subscribe to chats with user id' +
                    (error as Error).toString()
            );
        }
    }

    static async updateIsTyping(
        userId: string,
        chatId: string,
        isTyping: boolean
    ) {
        try {
            await FB.updateById('newChats', chatId, {
                typing: isTyping ? arrayUnion(userId) : arrayRemove(userId),
            });
        } catch (error) {
            throw new Error(
                'Failed to update is typing status for chat' +
                    (error as Error).toString()
            );
        }
    }

    static async subscribeToChatMessagesWithChatId(
        chatId: string,
        userId: string,
        callback: (messages: TMessage[]) => void
    ) {
        try {
            const q = query(
                collection(FB.firestore, `newChats/${chatId}/messages`),
                where('sender', '!=', userId),
                orderBy('sentTime', 'desc'),
                limit(1)
            );

            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const messages = getDataFromDoc<TMessage>(querySnapshot);
                callback(messages);
            });

            return unsubscribe;
        } catch (error) {
            throw new Error(
                'Failed to subscribe to chat messages with chat id' +
                    (error as Error).toString()
            );
        }
    }

    static async loadInitialUnreadCount(chats: TChat[], user: TUser) {
        try {
            const getUnreadCount = async (chat: TChat) => {
                const q = query(
                    FB.getSubCollection('newChats', `${chat.id}/messages`),
                    where('unreadBy', 'array-contains', user.uid)
                );
                const snapshot = await getCountFromServer(q);

                return { count: snapshot.data().count, id: chat.id };
            };

            const arr = await asyncRequests(chats, (chat) => {
                return getUnreadCount(chat);
            });

            return arr.reduce((acc, { id, count }) => {
                if (count !== 0) {
                    acc[id] = count;
                }
                return acc;
            }, {} as TUnreadCount);
        } catch (error) {
            throw new Error(
                'Failed to load initial unread count for chat' +
                    (error as Error).toString()
            );
        }
    }

    static async readMessages(
        chatId: string,
        messageIds: string[],
        userId: string
    ) {
        try {
            const read = async (messageId: string) => {
                await FB.updateDeepByIds(
                    'newChats',
                    [chatId, 'messages', messageId],
                    {
                        unreadBy: arrayRemove(userId),
                    }
                );
            };

            await asyncRequests(messageIds, (messageId) => {
                return read(messageId);
            });
        } catch (error) {
            throw new Error(
                'Failed to mark messages as read' + (error as Error).toString()
            );
        }
    }
}
