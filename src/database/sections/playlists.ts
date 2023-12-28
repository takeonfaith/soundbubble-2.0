import { firestore } from "../../firebase";

import { TPlaylist } from "@playlist/model/types";
import { collection, doc, getDoc } from "firebase/firestore";

export class Playlists {
  static ref = collection(firestore, "playlists");

  static getPlaylistByUid = async (uid: string) => {
    const docRef = doc(this.ref, uid);
    const data = await getDoc(docRef);
    return data.data() as TPlaylist;
  };
}
