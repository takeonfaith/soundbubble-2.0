import { FirebaseOptions, initializeApp } from 'firebase/app';
import {
    NextOrObserver,
    User,
    createUserWithEmailAndPassword,
    deleteUser,
    fetchSignInMethodsForEmail,
    getAuth,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    DocumentData,
    QueryCompositeFilterConstraint,
    QueryOrderByConstraint,
    UpdateData,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
    writeBatch,
} from 'firebase/firestore';
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from 'firebase/storage';
import { getDataFromDoc } from './database/lib/getDataFromDoc';
import {
    TChat,
    TMessage,
    TUnread,
    TWallpaper,
} from './entities/chat/model/types';
import { TPlaylist } from './entities/playlist/model/types';
import { TSuggestion } from './entities/search/model/types';
import { TLastQueue, TLyric, TSong } from './entities/song/model/types';
import { TSearchHistory, TUser } from './entities/user/model/types';
import { asyncRequests } from './shared/funcs/asyncRequests';
import getUID from './shared/funcs/getUID';

const {
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
    VITE_FIREBASE_APP_ID,
    VITE_MEASUREMENT_ID,
} = import.meta.env;

const config: FirebaseOptions = {
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: VITE_FIREBASE_AUTH_DOMAIN,
    projectId: VITE_FIREBASE_PROJECT_ID,
    storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: VITE_FIREBASE_APP_ID,
    measurementId: VITE_MEASUREMENT_ID,
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
    | 'newChats'
    | 'lyrics'
    | 'lastQueue'
    | 'newUsers';

export type TDeepCollections = 'newChats/messages';

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
    : T extends 'lyrics'
    ? { id: string; lyrics: TLyric[] }
    : T extends 'lastQueue'
    ? TLastQueue
    : T extends 'chatWallpapers'
    ? TWallpaper
    : T extends 'newUsers'
    ? TUser
    : never;

type TSubcollection<T extends TCollections> = T extends 'newChats'
    ? 'messages' | 'unread'
    : T extends 'users'
    ?
          | 'friends'
          | 'friendRequests'
          | 'friendAwaiting'
          | 'ownPlaylists'
          | 'ownSongs'
          | 'addedPlaylists'
          | 'addedAuthors'
          | 'addedSongs'
          | 'lastQueue'
          | 'chats'
          | 'history'
    : never;

type TSubcollectionDataType<
    K extends TCollections,
    T extends TSubcollection<K>
> = T extends 'messages'
    ? TMessage
    : T extends 'unread'
    ? TUnread
    : T extends 'friends'
    ? { id: string; time: number }
    : T extends 'history'
    ? { songId: string; time: number }
    : T extends 'friendRequests'
    ? { id: string; time: number }
    : T extends 'friendAwaiting'
    ? { id: string; time: number }
    : T extends 'ownPlaylists'
    ? { id: string; time: number }
    : never;

type TStorageFolder =
    | 'chatCovers'
    | 'chatWallpapers'
    | 'songs'
    | 'songsImages'
    | 'usersImages';

type DataType<T extends TCollections> = UpdateData<TCollectionType<T>>;

type DeepDataType<
    K extends TCollections,
    T extends TSubcollection<K>
> = UpdateData<TSubcollectionDataType<K, T>>;

export class FB {
    static app = initializeApp(config);
    static auth = getAuth();
    static storage = getStorage();
    static firestore = getFirestore();

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
        const docRef = doc(this.get(collectionType), id);

        return await updateDoc<DocumentData, DocumentData>(docRef, data);
    }

    static async updateDeepByIds<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>, string],
        data: DeepDataType<T, TSubcollection<T>>
    ): Promise<void> {
        const ref = doc(this.get(collectionType), ...path);

        await updateDoc<DocumentData, DocumentData>(ref, data);
    }

    static async setDeepByIds<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>, string],
        data: DeepDataType<T, TSubcollection<T>>,
        merge?: boolean
    ): Promise<void> {
        const ref = doc(this.get(collectionType), ...path);

        await setDoc<DocumentData, DocumentData>(ref, data, { merge });
    }

    static async getById<T extends TCollections>(
        collectionType: T,
        id: string,
        onError?: (err: Error) => void
    ): Promise<TCollectionType<T> | null> {
        try {
            const ref = this.get(collectionType);
            const docRef = doc(ref, id);
            const data = await getDoc(docRef);

            return data.data() as TCollectionType<T>;
        } catch (error) {
            if (onError) {
                onError(error as Error);
            }

            console.error(error);
            return null;
        }
    }

    static async getAll<T extends TCollections>(collectionType: T) {
        const querySnapshot = await getDocs(this.get(collectionType));

        return getDataFromDoc<TCollectionType<T>>(querySnapshot);
    }

    static async getDeepById<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>, string]
    ) {
        const ref = doc(this.get(collectionType), ...path);
        const data = await getDoc(ref);

        return data.data() as TSubcollectionDataType<T, TSubcollection<T>>;
    }

    static async getDeepByIds<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>],
        ids: string[]
    ) {
        const res = await asyncRequests(ids, (id) => {
            return FB.getDeepById(collectionType, [...path, id]);
        });

        return res.filter((r) => r !== null) as TSubcollectionDataType<
            T,
            TSubcollection<T>
        >[];
    }

    static async getDeepAll<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>]
    ) {
        const ref = collection(this.firestore, collectionType, ...path);
        const querySnapshot = await getDocs(ref);

        return getDataFromDoc<TSubcollectionDataType<T, TSubcollection<T>>>(
            querySnapshot
        );
    }

    static async getByIds<T extends TCollections>(
        collectionType: T,
        ids: string[]
    ): Promise<TCollectionType<T>[]> {
        const res = await asyncRequests(ids, (id) => {
            return FB.getById(collectionType, id);
        });

        return res.filter((r) => r !== null);
    }

    static async deleteById<T extends TCollections>(
        collectionType: T,
        id: string
    ) {
        const ref = this.get(collectionType);
        const docRef = doc(ref, id);

        return await deleteDoc(docRef);
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

    static async listenTo<T extends TCollections>(
        collectionType: T,
        callback: (elements: TCollectionType<T>[]) => void,
        constraint: QueryCompositeFilterConstraint,
        orderBy?: QueryOrderByConstraint,
        limitNumber?: number
    ) {
        const c = [];
        if (orderBy) c.push(orderBy);
        if (limitNumber) c.push(limit(limitNumber));

        const q = query(this.get(collectionType), constraint, ...c);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = getDataFromDoc<TCollectionType<T>>(querySnapshot);

            callback(data);
        });

        return unsubscribe;
    }

    /**
     *
     * @param folder
     * @param file
     * @returns Path to new image in DB
     */
    static async uploadFile(folder: TStorageFolder, file: File) {
        const [name, ext] = file.name.split('.');

        const imageRef = ref(
            this.storage,
            `${folder}/${name + getUID() + '.' + ext}`
        );
        await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);

        return downloadURL;
    }

    /**
     *
     * @param folder Папка из предложенных
     * @param path Путь целиком, какой указан в поле. Внутри происходит логика вычленения реального названия
     */
    static async deleteFile(folder: TStorageFolder, path: string) {
        if (path && path.length > 0) {
            const name = path.split(folder + '%2F')[1];
            const [realName] = name.split('?');
            const fileRef = ref(this.storage, `${folder}/${realName.replace('%20', ' ')}`);

            await deleteObject(fileRef);
        }
    }

    static async resetPassword(email: string) {
        return await sendPasswordResetEmail(this.auth, email);
    }

    static async setByIdsWithBatches<T extends TCollections>(
        collectionType: T,
        ids: string[],
        data: (id: string) => DataType<T>
    ): Promise<boolean> {
        try {
            const batch = writeBatch(this.firestore);

            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const ref = doc(this.get(collectionType), id);

                batch.set(ref, data(id));
            }

            await batch.commit();
            return true;
        } catch (error) {
            return false;
        }
    }
    static async deleteByIdsWithBatches<T extends TCollections>(
        collectionType: T,
        ids: string[]
    ): Promise<boolean> {
        try {
            const batch = writeBatch(this.firestore);

            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const ref = doc(this.get(collectionType), id);

                batch.delete(ref);
            }

            await batch.commit();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async setDeepByIdsWithBatches<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>],
        ids: string[],
        data: (id: string) => TSubcollectionDataType<T, TSubcollection<T>>,
        merge?: boolean
    ): Promise<boolean> {
        try {
            const batch = writeBatch(this.firestore);

            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const ref = doc(this.firestore, collectionType, ...path, id);

                batch.set(ref, data(id), { merge });
            }

            await batch.commit();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async deleteDeepByIdsWithBatches<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>],
        ids: string[]
    ): Promise<boolean> {
        try {
            const batch = writeBatch(this.firestore);

            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const ref = doc(this.firestore, collectionType, ...path, id);

                batch.delete(ref);
            }

            await batch.commit();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async updateByIdsWithBatches<T extends TCollections>(
        collectionType: T,
        ids: string[],
        data: DataType<T>
    ): Promise<boolean> {
        try {
            const batch = writeBatch(this.firestore);

            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const ref = doc(this.get(collectionType), id);

                batch.update(ref, data);
            }

            await batch.commit();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async updateDeepByIdsWithBatches<T extends TCollections>(
        collectionType: T,
        path: [string, TSubcollection<T>],
        ids: string[],
        data: DeepDataType<T, TSubcollection<T>>
    ): Promise<boolean> {
        try {
            const batch = writeBatch(this.firestore);

            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                const ref = doc(this.firestore, collectionType, ...path, id);

                batch.update(ref, data);
            }

            await batch.commit();
            return true;
        } catch (error) {
            return false;
        }
    }

    static async deleteAccount(userCreds: User) {
        try {
            if (userCreds) {
                await this.auth.signOut();
                await deleteUser(userCreds);
                return true;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    static async checkIfEmailIsTaken(email: string) {
        try {
            const providers = await fetchSignInMethodsForEmail(
                this.auth,
                email
            );

            return providers.length > 0;
        } catch (error) {
            console.error(error);
            throw new Error(`Failed to get user by email: ${error}`);
        }
    }
}

// const setNewUsers = async () => {
//     const allUsers = await FB.getAll('users');

//     const setUser = async (user: TUser) => {
//         const historyIds = await FB.getById('history', user.uid);
//         const hIds = historyIds?.history ?? [];
//         const ids = hIds.map(() => getUID()) ?? [];

//         if (user.isAuthor) return null;

//         console.log({ user: user.displayName, ids, hIds });

//         const batch = writeBatch(FB.firestore);

//         for (let i = 0; i < ids.length; i++) {
//             const id = ids[i];
//             const ref = doc(FB.firestore, 'users', user.uid, 'history', id);

//             batch.set(ref, {
//                 songId: hIds[i],
//                 time: Date.now(),
//             });
//         }

//         await batch.commit();
//     };

//     await asyncRequests(allUsers, (user) => {
//         return setUser(user);
//     });

//     console.log(
//         'ura!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
//     );
// };

// setNewUsers();
