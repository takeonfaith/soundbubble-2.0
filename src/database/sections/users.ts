import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginCreditsType, TUser } from "@user/model/types";
import { getDataFromDoc } from "database/lib/getDataFromDoc";
import { TSong } from "@song/model/types";
import { Songs } from ".";

export class Users {
  static ref = collection(firestore, "users");

  static login({ email, password }: LoginCreditsType) {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  static getUserByUid = async (uid: string) => {
    try {
      const docRef = doc(this.ref, uid);
      const data = await getDoc(docRef);

      return data.data() as TUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  static async getAuthorTopSongs(songs: string[], count = 3) {
    try {
      if (songs.length === 0) return [];

      const snapshot = await getDocs(
        query(
          Songs.ref,
          where("id", "in", songs),
          orderBy("listens", "desc"),
          limit(count)
        )
      );
      return getDataFromDoc<TSong>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
