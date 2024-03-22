import { TPageStore, TStore } from "./types";

export const DEFAULT_STORE: TStore = {
  data: null,
  error: null,
  loggining: false,
  library: [],
  loadingLibrary: false
};

export const DEFAULT_PAGE_STORE: TPageStore = {
  user: null,
  error: null,
  loading: false,
  songs: [],
  playlists: [],
}