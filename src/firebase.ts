import { initializeApp } from "firebase/app";
import { NextOrObserver, User, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, getDoc, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

type TCollections = "playlists" | "songs" | "users" | 'searchHistory' | 'search' | 'history' | 'chats' | 'chatWallpapers'

export class FB {
  static app = initializeApp(config);
  static auth = getAuth(this.app)
  static storage = getStorage(this.app)
  static firestore = initializeFirestore(this.app, {
    experimentalForceLongPolling: true,
  })

  static get(collectionType: TCollections) {
    return collection(this.firestore, collectionType)
  }

  static createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  static set(collectionType: TCollections) {

  }

  static login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  static logout() {
    return signOut(this.auth)
  }

  static onAuthStateChanged(func: NextOrObserver<User>) {
    return onAuthStateChanged(this.auth, func)
  }

  static async getById<T>(collectionType: TCollections, uid: string) {
    const ref = this.get(collectionType)
    const docRef = doc(ref, uid);
    const data = await getDoc(docRef);

    return data.data() as T;
  }

}
