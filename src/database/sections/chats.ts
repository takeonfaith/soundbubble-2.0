import {
    and,
    arrayRemove,
    arrayUnion,
    collection,
    DocumentData,
    getDocs,
    increment,
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
    TCache,
    TChat,
    TMessage,
    TUnread,
    TUnreadCount,
    TUploadChat,
} from '../../entities/chat/model/types';
import { TUser } from '../../entities/user/model/types';
import { FB } from '../../firebase';
import { asyncRequests } from '../../shared/funcs/asyncRequests';
import { convertToMap } from '../../shared/funcs/convertToMap';
import getUID from '../../shared/funcs/getUID';
import { getDataFromDoc } from '../lib/getDataFromDoc';

export class Chats {
    static ref = FB.get('newChats');
    static lastVisible: QueryDocumentSnapshot<
        DocumentData,
        DocumentData
    > | null;
    static ownChatsQuery(userId: string) {
        return [
            where('participants', 'array-contains', userId),
            orderBy('lastMessage.sentTime', 'desc'),
        ];
    }

    static async getChatsByIds(userId: string) {
        try {
            const q = query(this.ref, ...this.ownChatsQuery(userId));
            const snapshot = await getDocs(q);
            return getDataFromDoc<TChat>(snapshot);
        } catch (error) {
            throw new Error('Failed to get chats by user id: ' + userId);
        }
    }

    static async getFirstUnreadDocument(chatId: string, userId: string) {
        try {
            const res = (await FB.getDeepById('newChats', [
                chatId,
                'unread',
                userId,
            ])) as TUnread;

            if (!res) return null;

            const q = query(
                FB.getSubCollection('newChats', `${chatId}/messages`),
                where('sentTime', '>', res.lastReadAt),
                orderBy('sentTime', 'asc'),
                limit(1)
            );

            return await getDocs(q);
        } catch (error) {
            console.log(error);
            throw new Error('Failed to get first unread message: ' + chatId);
        }
    }

    static async getChatMessagesByChatId(
        chatId: string,
        userId: string,
        order?: 'asc' | 'desc',
        limitNumber?: number,
        paginate = false
    ) {
        try {
            const c = [];

            if (limitNumber !== undefined) c.push(limit(limitNumber));

            const firstUnreadDocument = !paginate
                ? await this.getFirstUnreadDocument(chatId, userId)
                : undefined;

            // if no unread messages load as normal
            if (!firstUnreadDocument?.docs[0]?.data()) {
                console.log(paginate && !!this.lastVisible?.data());

                if (paginate && !!this.lastVisible?.data()) {
                    c.push(startAfter(this.lastVisible));
                }

                if (paginate && !this.lastVisible?.data())
                    return { messages: [], firstUnreadMessage: null };

                const q = query(
                    FB.getSubCollection('newChats', `${chatId}/messages`),
                    orderBy('sentTime', order ?? 'asc'),
                    ...c
                );

                const docs = await getDocs(q);
                const messages = getDataFromDoc<TMessage>(docs);

                this.lastVisible = docs.docs[docs.docs.length - 1];

                return {
                    messages: messages.reverse(),
                    firstUnreadMessage: null,
                };
            }

            const prevQuery = query(
                FB.getSubCollection('newChats', `${chatId}/messages`),
                orderBy('sentTime', 'desc'),
                startAfter(
                    firstUnreadDocument.docs[
                        firstUnreadDocument.docs.length - 1
                    ]
                ),
                limit(10)
            );
            const prevDocs = await getDocs(prevQuery);
            this.lastVisible = prevDocs.docs[prevDocs.docs.length - 1];

            const previousMessages =
                getDataFromDoc<TMessage>(prevDocs).reverse();

            const nextQuery = query(
                FB.getSubCollection('newChats', `${chatId}/messages`),
                orderBy('sentTime', 'asc'),
                startAfter(
                    firstUnreadDocument.docs[
                        firstUnreadDocument.docs.length - 1
                    ]
                )
            );

            const nextMessages = getDataFromDoc<TMessage>(
                await getDocs(nextQuery)
            );

            const firstUnreadMessage =
                firstUnreadDocument.docs[0].data() as TMessage;

            const messages = [
                ...previousMessages,
                firstUnreadMessage,
                ...nextMessages,
            ];

            return {
                messages,
                firstUnreadMessage,
            };
        } catch (error) {
            console.log('some error', error);

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
                    updateTime: Date.now(),
                });

                await FB.updateDeepByIds(
                    'newChats',
                    [chat.id, 'unread', message.sender],
                    {
                        lastReadAt: message.sentTime,
                    }
                );

                const notYou = chat.participants.filter(
                    (p) => p !== message.sender
                );

                const isSuccessfull = await FB.updateByIdsWithBatches(
                    'newChats',
                    [chat.id, 'unread'],
                    notYou,
                    {
                        unreadCount: increment(1),
                    }
                );

                console.log('isSuccessfull', isSuccessfull);

                if (!isSuccessfull) {
                    await FB.setByIdsWithBatches(
                        'newChats',
                        [chat.id, 'unread'],
                        notYou,
                        (userId) => ({
                            unreadCount: 1,
                            lastReadAt: null,
                            userId,
                        })
                    );
                }
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
            const isGroupChat = chat.chatName.length !== 0;

            if (!isGroupChat) {
                const [senderId, receiverId] = chat.participants;

                const probableChat = await this.getChatByUserIds(
                    senderId,
                    receiverId
                );

                if (probableChat) return probableChat;
            }

            await FB.setById('newChats', chat.id, chat);
            const messageId = getUID();

            // If chat is group chat, first message should be about creation
            if (isGroupChat) {
                await this.sendMessage([chat], () =>
                    createMessageObject({
                        id: messageId,
                        sender: SYSTEM_MESSAGE_SENDER,
                        participants: chat.participants,
                        message: `Group ${chat.chatName} was created`,
                    })
                );
            }

            const updateUser = async (userId: string) => {
                await FB.updateById('users', userId, {
                    chats: arrayUnion(chat.id),
                });
            };

            await asyncRequests(chat.participants, (userId) => {
                return updateUser(userId);
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
                and(
                    where('participants', 'array-contains', userId),
                    where('lastMessage.sender', '!=', userId)
                ),
                orderBy('updateTime', 'desc'),
                1
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
                updateTime: Date.now(),
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
        callback: (messages: TMessage[]) => void
    ) {
        try {
            const q = query(
                collection(FB.firestore, `newChats/${chatId}/messages`),
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

    static async loadInitialUnreadCount(chatIds: string[], userId: string) {
        try {
            const getUnreadCount = async (chatId: string) => {
                const unread = ((await FB.getDeepById('newChats', [
                    chatId,
                    'unread',
                    userId,
                ])) ?? null) as TUnread;

                if (unread) {
                    return { ...unread, chatId };
                } else return null;
            };

            const arr = await asyncRequests(chatIds, (chatId) => {
                return getUnreadCount(chatId);
            });

            return arr.reduce((acc, props) => {
                if (props !== null) {
                    acc[props.chatId] = props;
                }
                return acc;
            }, {} as TUnreadCount);
        } catch (error) {
            console.log(error);

            throw new Error(
                'Failed to load initial unread count for chat' +
                    (error as Error).toString()
            );
        }
    }

    static async readMessages(
        chatId: string,
        userId: string,
        lastReadAt: number,
        messagesReadCount: number
    ) {
        try {
            console.log('read messages', messagesReadCount, lastReadAt);

            await FB.updateDeepByIds('newChats', [chatId, 'unread', userId], {
                lastReadAt,
                unreadCount: increment(-messagesReadCount),
            });
        } catch (error) {
            throw new Error(
                'Failed to mark messages as read' + (error as Error).toString()
            );
        }
    }

    static async editChat(
        oldChat: TChat,
        newChat: TUploadChat,
        cache: TCache
    ): Promise<TChat> {
        try {
            let newImageUrl: string | undefined = oldChat.chatImage;
            let message;

            if ('chatImage' in newChat && newChat.chatImage) {
                newImageUrl =
                    (await FB.uploadFile('chatCovers', newChat.chatImage)) ??
                    oldChat.chatImage;

                if (oldChat.chatImage) {
                    await FB.deleteFile('chatCovers', oldChat.chatImage);
                }

                message = 'Group image was changed';
            }

            if ('chatImage' in newChat && !newChat.chatImage) {
                await FB.deleteFile('chatCovers', oldChat.chatImage);
                newImageUrl = '';
                message = 'Group image was removed';
            }

            const finalChat: Partial<TChat> = {
                ...newChat,
                chatImage: newImageUrl,
            };

            if (newImageUrl === oldChat.chatImage) {
                delete finalChat.chatImage;
            }

            await FB.updateById('newChats', oldChat.id, finalChat);

            if (
                'chatName' in newChat &&
                oldChat.chatName !== newChat.chatName
            ) {
                message = `Chat name changed from "${oldChat.chatName}" to "${newChat.chatName}"`;
            }

            if ('participants' in newChat && newChat.participants) {
                if (oldChat.participants.length < newChat.participants.length) {
                    const newPeoplesNames = newChat.participants
                        .filter((nP) => !oldChat.participants.includes(nP))
                        .map((id) => (cache[id] as TUser).displayName)
                        .join(', ');

                    message = `${newPeoplesNames} entered the chat`;
                } else {
                    const removedPeoplesNames = oldChat.participants
                        .filter((nP) => !newChat.participants?.includes(nP))
                        .map((id) => (cache[id] as TUser).displayName)
                        .join(', ');

                    message = `${removedPeoplesNames} left the chat`;
                }
            }

            if (message) {
                const id = getUID();
                console.log(message);

                await this.sendMessage([oldChat], () => {
                    return createMessageObject({
                        id,
                        sender: SYSTEM_MESSAGE_SENDER,
                        participants:
                            'participants' in newChat
                                ? newChat.participants ?? []
                                : oldChat.participants,
                        message,
                    });
                });
            }

            return { ...oldChat, ...finalChat };
        } catch (error) {
            console.log(error);
            throw new Error(
                'Failed to edit chat' + (error as Error).toString()
            );
        }
    }

    static async loadWallpapers() {
        try {
            const wallpapers = await FB.getAll('chatWallpapers');
            return wallpapers;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to load wallpapers');
        }
    }

    static async subscribeToCurrentChatUnread(
        chatId: string,
        userId: string,
        callback: (statuses: TUnread[]) => void
    ) {
        try {
            const q = query(
                collection(FB.firestore, `newChats/${chatId}/unread`),
                where('userId', '!=', userId)
            );

            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const statuses = getDataFromDoc<TUnread>(querySnapshot);
                console.log('tut podpiska', userId, statuses);

                callback(statuses);
            });

            return unsubscribe;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to subscribe to current chat unread');
        }
    }
}
