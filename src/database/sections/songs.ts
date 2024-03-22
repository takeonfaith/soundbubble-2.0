import { TSong } from "@song/model/types";
import {
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where
} from "firebase/firestore";
import { FB } from "../../firebase";
import { getDataFromDoc } from "../lib/getDataFromDoc";
import { Users } from ".";

export class Songs {
  static ref = FB.get('songs')

  static async getAllSongs() {
    try {
      const snapshot = await getDocs(this.ref);
      return getDataFromDoc<TSong>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getTopSongs(topQuantity = 10) {
    try {
      const snapshot = await getDocs(
        query(this.ref, orderBy("listens", "desc"), limit(topQuantity))
      );
      return getDataFromDoc<TSong>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getSongsByUserId(userId: string) {
    try {
      const user = await Users.getUserByUid(userId);
      return this.getSongsByUids(user?.addedSongs ?? []);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static getSongByUid = async (uid: string): Promise<TSong> => {
    const docRef = doc(this.ref, uid);
    const data = await getDoc(docRef);
    return data.data() as TSong;
  };

  static getSongsByUids = async (uids: string[], sortedByListens?: boolean): Promise<TSong[]> => {
    if (uids.length === 0) return []

    const additionalContstraints = []

    if (sortedByListens) additionalContstraints.push(orderBy('listens', 'desc'))

    const q = query(FB.get('songs'), where('id', 'in', uids), ...additionalContstraints)
    const snapshot = await getDocs(q)

    return getDataFromDoc<TSong>(snapshot)
  };
}
