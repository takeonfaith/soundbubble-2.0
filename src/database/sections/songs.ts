import { TSong } from "@song/model/types";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import { getDataFromDoc } from "../lib/getDataFromDoc";

export class Songs {
  static ref = collection(firestore, "songs");

  static async getAllSongs() {
    try {
      const snapshot = await getDocs(this.ref);
      return getDataFromDoc<TSong>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getTop10Songs() {
    try {
      const snapshot = await getDocs(
        query(this.ref, orderBy("listens", "desc"), limit(40))
      );
      return getDataFromDoc<TSong>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static getSongByUid = async (uid: string) => {
    const docRef = doc(this.ref, uid);
    const data = await getDoc(docRef);
    return data.data() as TSong;
  };
}
