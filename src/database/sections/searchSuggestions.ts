import { TUser } from "@user/model/types";
import { THint } from "features/searchWithHints/types";
import {
  QueryFilterConstraint,
  and,
  getDocs,
  limit,
  or,
  orderBy,
  query,
  where
} from "firebase/firestore";
import { Playlists, Songs, Users } from ".";
import { FB } from "../../firebase";
import { getDataFromDoc } from "../lib/getDataFromDoc";

type Place = "songs" | "users" | "playlists";

type Suggestion = {
  place: Place;
  rank: number;
  uid: string;
  variantsOfName: string[];
};

class PrivateSearchSuggestions {
  static ref = FB.get('search');
  static savedSuggestion: {
    place: Place;
    id: string;
    lastSearch: string;
  } | null = null;
  static lastSuggestions: Suggestion[] = [];
  static lastResult: (THint | null)[] = [];

  protected static async getAuthorsSong(songName: string, author?: TUser) {
    const orFilter: QueryFilterConstraint[] = [];

    const user = author ?? (await Users.getUserByUid(this.savedSuggestion!.id));

    if (!user) return [];

    if (user.ownSongs?.length !== 0) {
      orFilter.push(where("uid", "in", user.ownSongs));
    }

    if (user.ownPlaylists?.length !== 0) {
      orFilter.push(where("uid", "in", user.ownPlaylists));
    }

    const result = getDataFromDoc<Suggestion>(
      await getDocs(
        query(
          this.ref,
          and(
            where("variantsOfName", "array-contains", songName),
            or(...orFilter)
          ),
          orderBy("rank", "desc"),
          limit(3)
        )
      )
    );

    return result;
  }

  /**
   *
   * @param suggestions Подсказки которые были изначально
   * @param searchString Поисковый запрос
   * @returns Если пользователь ввел уточнение по типу <имя автора> <название песни>,
   * тогда эта функция вернеет тот трек, который имелся в виду
   */
  protected static async getFinalSuggestions(
    suggestions: Suggestion[],
    searchString: string
  ) {
    try {
      const firstSuggestion = suggestions[0];

      if (suggestions.length !== 0) {
        this.savedSuggestion = {
          place: firstSuggestion.place,
          id: firstSuggestion.uid,
          lastSearch: searchString,
        };
        return suggestions;
      }

      // console.log(this.savedSuggestion);

      const remainingSearchString = searchString.replace(
        this.savedSuggestion!.lastSearch,
        ""
      );

      if (this.savedSuggestion!.place === "users") {
        return await this.getAuthorsSong(remainingSearchString);
      }

      const userSuggestions = getDataFromDoc<Suggestion>(
        await getDocs(
          query(
            this.ref,
            where("variantsOfName", "array-contains", remainingSearchString),
            where("place", "==", "users")
          )
        )
      );

      const ids = userSuggestions.map((s) => s.uid);

      const users = getDataFromDoc<TUser>(
        await getDocs(query(Users.ref, where("uid", "in", ids)))
      );

      if (!users) return [];

      return (
        await Promise.all(
          users.map(
            async (user) =>
              await this.getAuthorsSong(this.savedSuggestion!.lastSearch, user)
          )
        )
      ).flatMap((s) => s);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  protected static async getSearch(searchString: string) {
    try {
      const snapshot = await getDocs(
        query(
          this.ref,
          where("variantsOfName", "array-contains", searchString),
          orderBy("rank", "desc"),
          limit(10)
        )
      );

      const suggestions = getDataFromDoc<Suggestion>(snapshot);

      return suggestions;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  protected static removeDuplicateSongs(hints: (THint | null)[]) {
    const uniqueHints: Record<string, boolean> = {};
    const result: THint[] = [];

    hints.forEach((hint) => {
      if (hint) {
        const hintId = "id" in hint ? hint.id : "uid" in hint ? hint.uid : null;

        if (hintId && !uniqueHints[hintId]) {
          result.push(hint);
          uniqueHints[hintId] = true;
        }
      }
    });

    return result;
  }

  protected static async getResult(suggestions: Suggestion[], shouldLoadAuthorTopTracks?: boolean) {
    const requests = {
      playlists: Playlists.getPlaylistByUid,
      songs: Songs.getSongByUid,
      users: Users.getUserByUid,
    };

    const shouldRequest =
      this.lastSuggestions.length !== suggestions.length ||
      this.lastSuggestions.findIndex(
        (el, index) => el.uid !== suggestions[index].uid
      ) !== -1;

    this.lastSuggestions = suggestions;

    if (!shouldRequest && this.lastResult.length !== 0) return this.lastResult;

    // console.log(shouldRequest, this.lastSuggestions);

    const searchSuggestions = suggestions.map(async (suggestion) => {
      return await requests[suggestion.place](suggestion.uid);
    });

    let result = (await Promise.all(searchSuggestions)).flatMap((s) => s);
    const first = result[0];

    if (!first || result.length === 0) return result;

    const isAuthor =
      "isAuthor" in first && first?.isAuthor && "ownSongs" in first;

    if (isAuthor && shouldLoadAuthorTopTracks) {
      const authorTopTracks = await Users.getAuthorTopSongs(
        first.ownSongs as string[]
      );

      const preresult: (THint | null)[] = [
        first,
        ...authorTopTracks,
        ...result,
      ];

      result = this.removeDuplicateSongs(preresult);
    }

    this.lastResult = result;

    return result;
  }
}

export class SearchSuggestions extends PrivateSearchSuggestions {
  static async getSearchSuggestions(searchString: string) {
    try {
      if (searchString.length === 0) return [];

      const initialSuggestions = await this.getSearch(searchString);

      const suggestions = await this.getFinalSuggestions(
        initialSuggestions,
        searchString
      );

      return await this.getResult(suggestions, true);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getTopSearches(topQuantity = 10) {
    try {
      const snapshot = await getDocs(
        query(this.ref, orderBy("rank", "desc"), limit(topQuantity))
      );
      return await this.getResult(getDataFromDoc<Suggestion>(snapshot), false)
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
