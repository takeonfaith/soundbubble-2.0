import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
    NextOrObserver,
    User,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    DocumentData,
    FieldValue,
    QueryFieldFilterConstraint,
    QueryOrderByConstraint,
    QuerySnapshot,
    collection,
    doc,
    getDoc,
    getDocs,
    initializeFirestore,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
    where,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDataFromDoc } from './database/lib/getDataFromDoc';
import { TChat } from './entities/chat/model/types';
import { TPlaylist } from './entities/playlist/model/types';
import { TSuggestion } from './entities/search/model/types';
import { TSong } from './entities/song/model/types';
import { TSearchHistory, TUser } from './entities/user/model/types';
import getUID from './shared/funcs/getUID';

const config: FirebaseOptions = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export type TCollections =
    | 'playlists'
    | 'songs'
    | 'users'
    | 'searchHistory'
    | 'search'
    | 'history'
    | 'chats'
    | 'messages'
    | 'chatWallpapers'
    | 'newChats';

type TCollectionType<T extends TCollections> = T extends 'songs'
    ? TSong
    : T extends 'playlists'
    ? TPlaylist
    : T extends 'users'
    ? TUser
    : T extends 'history'
    ? { history: string[] }
    : T extends 'searchHistory'
    ? { history: TSearchHistory[] }
    : T extends 'search'
    ? TSuggestion
    : T extends 'newChats'
    ? TChat
    : never;

type TStorageFolder =
    | 'chatCovers'
    | 'chatWallpapers'
    | 'songs'
    | 'songsImages'
    | 'usersImages';

type DataType<T extends TCollections> =
    | Partial<TCollectionType<T>>
    | Partial<{
          [key in keyof TCollectionType<T>]: FieldValue;
      }>;

const MAX_FIRESTORE_IN_QUERY_LIMIT = 30;

export class FB {
    static app = initializeApp(config);
    static auth = getAuth(this.app);
    static storage = getStorage(this.app);
    static firestore = initializeFirestore(this.app, {
        experimentalForceLongPolling: false,
    });

    static get(collectionType: TCollections) {
        return collection(this.firestore, collectionType);
    }

    static getSubCollection(collectionType: TCollections, path: string) {
        return collection(FB.firestore, `${collectionType}/${path}`);
    }

    static async createUser(email: string, password: string) {
        return await createUserWithEmailAndPassword(this.auth, email, password);
    }

    static async setById<T extends TCollections>(
        collectionType: T,
        id: string,
        data: TCollectionType<T>
    ) {
        const ref = this.get(collectionType);
        const docRef = doc(ref, id);
        return await setDoc(docRef, data);
    }

    static async updateById<T extends TCollections>(
        collectionType: T,
        id: string,
        data: DataType<T>
    ) {
        const ref = this.get(collectionType);
        const docRef = doc(ref, id);

        return await updateDoc<DocumentData, DocumentData>(docRef, data);
    }

    static async login(email: string, password: string) {
        return await signInWithEmailAndPassword(this.auth, email, password);
    }

    static async logout() {
        return await signOut(this.auth);
    }

    static onAuthStateChanged(func: NextOrObserver<User>) {
        return onAuthStateChanged(this.auth, func);
    }

    static async getById<T extends TCollections>(
        collectionType: T,
        id: string
    ) {
        const ref = this.get(collectionType);
        const docRef = doc(ref, id);
        const data = await getDoc(docRef);

        return data.data() as TCollectionType<T>;
    }

    static async getByIds<T extends TCollections>(
        collectionType: T,
        ids: string[],
        key = 'id'
    ): Promise<TCollectionType<T>[]> {
        const ref = this.get(collectionType);
        const uids = [...ids];
        const batches: Promise<QuerySnapshot<DocumentData, DocumentData>>[] =
            [];

        while (uids.length) {
            // firestore limits batches to 30
            const batch = uids.splice(0, MAX_FIRESTORE_IN_QUERY_LIMIT);

            // add the batch request to to a queue
            const q = query(ref, where(key, 'in', [...batch]));

            batches.push(getDocs(q));
        }

        const result = await Promise.all(batches).then((content) => {
            return content
                .map((doc) => getDataFromDoc<TCollectionType<T>>(doc))
                .flat();
        });

        return result;
    }

    static async listenTo<T extends TCollections>(
        collectionType: T,
        callback: (elements: TCollectionType<T>[]) => void,
        constraint: QueryFieldFilterConstraint,
        orderBy?: QueryOrderByConstraint
    ) {
        const c = [];
        if (orderBy) c.push(orderBy);
        const q = query(this.get(collectionType), constraint, ...c);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = getDataFromDoc<TCollectionType<T>>(querySnapshot);
            console.log('changed data');

            callback(data);
        });

        return unsubscribe;
    }

    static async uploadFile(
        folder: TStorageFolder,
        file: File
    ): Promise<string> {
        const imageRef = ref(this.storage, `${folder}/${file.name + getUID()}`);
        await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);

        return downloadURL;
    }
}

// // add last message field to chats
// const addLastMessage = async () => {
//     const snapshot = await getDocs(FB.get('newChats'));

//     const allChats = getDataFromDoc<TChat>(snapshot);
//     const lastMessagesSnapshots = allChats.map(async (chat) => {
//         const q = query(
//             FB.getSubCollection('newChats', `${chat.id}/messages`),
//             orderBy('sentTime', 'desc'),
//             limit(1)
//         );
//         const docs = await getDocs(q);
//         return { docs, chatId: chat.id };
//     });

//     const res = await Promise.all(lastMessagesSnapshots).then((messages) => {
//         return messages.map((m) => ({
//             messages: getDataFromDoc<TMessage>(m.docs).flat(),
//             chatId: m.chatId,
//         }));
//     });

//     asyncRequests(allChats, (chat) => {
//         return FB.updateById('newChats', chat.id, {
//             lastMessage: res.find(({ chatId }) => chatId === chat.id)
//                 ?.messages[0],
//         });
//     });
// };

// addLastMessage();
