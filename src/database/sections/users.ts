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

  static getUserByUid = async (uid: string | undefined) => {
    try {
      if (!uid) throw new Error(ERRORS.loginFailed("UID must be provided"))

      return FB.getById<TUser>('users', uid);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

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
}
