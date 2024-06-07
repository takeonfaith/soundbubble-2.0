import { initializeApp } from 'firebase/app';
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
    QueryFieldFilterConstraint,
    QueryOrderByConstraint,
    collection,
    doc,
    getDoc,
    initializeFirestore,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDataFromDoc } from './database/lib/getDataFromDoc';
import { TPlaylist } from './entities/playlist/model/types';
import { TSong } from './entities/song/model/types';
import { TSearchHistory, TUser } from './entities/user/model/types';

const config = {
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
    : never;

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
        const ref = await this.get(collectionType);
        const docRef = doc(ref, id);
        return await setDoc(docRef, data);
    }

    static async updateById<T extends TCollections>(
        collectionType: T,
        id: string,
        data: Partial<Record<keyof TCollectionType<T>, any>>
    ) {
        const ref = await this.get(collectionType);
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
}

console.log({ app: FB });

// const createSeparateMessagesCollection = async () => {
//     const chats = query(FB.get('chats'));
//     const querySnapshot = await getDocs(chats);
//     const data = getDataFromDoc<F>(querySnapshot);
//     const allMessages = data.reduce((acc, chat) => {
//         chat.messages.forEach((message) => acc.push({ id: chat.id, message }));
//         return acc;
//     }, [] as Array<{ id: string; message: TMessage }>);

//     const requests = allMessages.map(async (m) => {
//         const messageId = getUID();
//         const sentTime = new Date(
//             m.message.sentTime instanceof Object
//                 ? m.message.sentTime.toMillis()
//                 : m.message.sentTime
//         ).getTime();

//         return await setDoc(
//             doc(FB.firestore, `newChats/${m.id}/messages/${messageId}`),
//             { ...m.message, id: messageId, sentTime }
//         );
//     });

//     Promise.all(requests).then((res) => {
//         console.log('data changed successfully');
//     });
// };

// createSeparateMessagesCollection();
