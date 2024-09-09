import {
    doc,
    getDocs,
    limit,
    orderBy,
    query,
    setDoc,
    where,
} from 'firebase/firestore';
import { TChatData, TMessage } from '../../entities/chat/model/types';
import { TEntity } from '../../entities/search/model/types';
import { FB } from '../../firebase';
import { getDataFromDoc } from '../lib/getDataFromDoc';
import { Playlists } from './playlists';
import { Songs } from './songs';
import { Users } from './users';

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
            let chatDataObject: TChatData = {};

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

            const requests = messages.map(async (message) => {
                return [
                    ...(await Songs.getSongsByUids(message.attachedSongs)),
                    ...(await Playlists.getPlaylistsByUids(
                        message.attachedAlbums
                    )),
                    ...(await Users.getUsersByUids(message.attachedAuthors)),
                ];
            });

            const res = (await Promise.all(requests)).reduce((acc, r) => {
                r.forEach((el) => {
                    acc['id' in el ? el.id : el.uid] = el;
                });

                return acc;
            }, {} as Record<string, TEntity>);

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

            return await setDoc(ref, message);
        } catch (error) {
            throw new Error(
                'Failed to send message' + (error as Error).toString()
            );
        }
    }
}
