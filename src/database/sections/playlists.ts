import { FB } from "../../firebase";

import { TPlaylist } from "@playlist/model/types";
import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { getDataFromDoc } from "../lib/getDataFromDoc";

export class Playlists {
  static ref = FB.get('playlists');

  static getPlaylistByUid = async (uid: string) => {
    const docRef = doc(this.ref, uid);
    const data = await getDoc(docRef);
    return data.data() as TPlaylist;
  };

  static getPlaylistsByUids = async (uids: string[]) => {
    if (uids.length === 0) return []

    const q = query(FB.get('playlists'), where('id', 'in', uids))
    const snapshot = await getDocs(q)

    return getDataFromDoc<TPlaylist>(snapshot)
  };
}
