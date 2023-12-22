import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase";
import { LoginCreditsType } from "../entities/user/model/types";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { TSong } from "@song/model/types";

export const getDataFromDoc = <T>(
  snapshot: QuerySnapshot<DocumentData, DocumentData>
) => {
  return snapshot.docs.map((doc) => doc.data()) as T[];
};

export class Database {
  static songsRef = collection(firestore, "songs");

  static login({ email, password }: LoginCreditsType) {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  static async getAllSongs() {
    try {
      const snapshot = await getDocs(this.songsRef);
      return getDataFromDoc<TSong>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getTop10Songs() {
    try {
      const snapshot = await getDocs(
        query(this.songsRef, orderBy("listens", "desc"), limit(50))
      );
      return getDataFromDoc<TSong>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
