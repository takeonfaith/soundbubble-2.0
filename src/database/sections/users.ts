import { TSong } from "@song/model/types";
import { CreateUserCreditsType, LoginCreditsType, TUser } from "@user/model/types";
import { getDataFromDoc } from "database/lib/getDataFromDoc";
import {
  getDocs,
  limit,
  orderBy,
  query,
  where
} from "firebase/firestore";
import { Songs } from ".";
import { FB } from "../../firebase";
import { ERRORS } from "../../shared/constants";
import { NextOrObserver, User } from "firebase/auth";

export class Users {
  static ref = FB.get("users");

  static createUser({ email, password }: CreateUserCreditsType) {
    try {
      return FB.createUser(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  static async login({ email, password }: LoginCreditsType) {
    try {
      return FB.login(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  static async logout() {
    try {
      return FB.logout();
    } catch (error) {
      console.error(error);
    }
  }

  static async getUserByUid(uid: string | undefined) {
    try {
      if (!uid) throw new Error(ERRORS.loginFailed("UID must be provided"))

      return FB.getById<TUser>('users', uid);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async getUsersByUids(uids: string[], sortByListners?: boolean) {
    try {
      if (uids.length === 0) return []

      const additionalParams = []

      if (sortByListners) {
        additionalParams.push(orderBy("numberOfListenersPerMonth", "desc"))
      }

      const snapshot = await getDocs(
        query(this.ref, where('uid', 'in', uids), ...additionalParams)
      )

      return getDataFromDoc<TUser>(snapshot)
    } catch (error) {
      console.error(error);
      return []
    }
  }

  static onAuthStateChanged = async (func: NextOrObserver<User>) => {
    try {
      return FB.onAuthStateChanged(func)
    } catch (error) {
      console.error(error);
      return null;
    }
  }

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

  static async getSimilarAuthorsBySongs(songs: TSong[]) {
    try {
      if (songs.length === 0) return []

      const ids = [...new Set(songs.flatMap((song) => song.authors.map((author) => author.uid)))]

      return await this.getUsersByUids(ids, true)
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getTopAuthorsByListenings(topQuantity = 10) {
    try {
      const snapshot = await getDocs(
        query(this.ref, where('isAuthor', '==', true), orderBy("numberOfListenersPerMonth", "desc"), limit(topQuantity))
      );
      return getDataFromDoc<TUser>(snapshot);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
