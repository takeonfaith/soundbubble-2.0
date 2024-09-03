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
    collection,
    doc,
    getDoc,
    initializeFirestore,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDataFromDoc } from './database/lib/getDataFromDoc';
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
        data: DataType<T>
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

function getAudioDuration(audioUrl: string) {
    return new Promise<number>((resolve, reject) => {
        const audio = new Audio(audioUrl);

        // Event listener for when metadata has loaded
        audio.addEventListener('loadedmetadata', () => {
            const duration = audio.duration;
            resolve(duration); // Resolve the promise with the duration
        });

        // Error event listener
        audio.addEventListener('error', (e) => {
            reject(`Error occurred while loading audio: ${e.message}`);
        });

        // Initiate the loading of the audio file by setting its src
        audio.src = audioUrl;
    });
}

// const addDuration = async () => {
//     console.log('aaddDuration');

//     const allSongs = await getDocs(FB.get('songs'));
//     console.log(allSongs);

//     const songs = getDataFromDoc<TSong>(allSongs);
//     console.log(songs);
//     const data = songs.map((s) => {
//         return getAudioDuration(s.songSrc);
//     });

//     console.log(data);
//     const res = await Promise.all(data);

//     console.log(res);

//     const update = songs.map((s, i) => {
//         return FB.updateById('songs', s.id, {
//             duration: res[i],
//         });
//     });

//     Promise.all(update).then(() => {
//         console.log('SUCCESSFUL!!!!!!!');
//     });
// };

// addDuration();
