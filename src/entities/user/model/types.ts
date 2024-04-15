import { TPlaylist } from "../../playlist/model/types";
import { TSong } from "../../song/model/types";

export type TUser = {
  uid: string;
  displayName: string;
  ownSongs?: string[];
  ownPlaylists: string[];
  addedAuthors?: string[];
  addedPlaylists: string[];
  addedSongs?: string[];
  friends?: string[];
  imageColors: string[]
  isVerified: boolean
  isAdmin?: boolean
  isAuthor?: boolean
  lastQueue: {
    image: string;
    name: string;
    songsList: string[];
    source: string
  };
  lastSongPlayed: string
  numberOfListenersPerMonth: number
  online: number;
  photoURL: string
  subscribers: number
};

export type LoginCreditsType = {
  email: string;
  password: string;
};

export type CreateUserCreditsType = LoginCreditsType & {
  name: string;
}

export type TStore = {
  data: TUser | null;
  error: Error | null;
  loggining?: boolean;
  library: TSong[]
  loadingLibrary: boolean
  userPlaylists: TPlaylist[]
};

export type TPageStore = {
  user: TUser | null,
  error: string | null,
  loading: boolean,
  songs: TSong[],
  playlists: TPlaylist[],
  similarAuthors: TUser[]
  similarAuthorsLoading: boolean
}