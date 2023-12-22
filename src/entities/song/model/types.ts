export type TAuthor = {
  uid: string;
  displayName: string;
};

export type TSong = {
  name: string;
  id: string;
  releaseDate: string;
  songSrc: string;
  lyrics: { text: string; startTime: number }[];
  listens: number;
  cover: string;
  authors: TAuthor[];
  imageColors: string[];
};

export type SongState = "playing" | "pause" | "loading";

export type TStore = {
  currentSong: TSong | null;
  state: SongState | null;
  loaded: boolean;
  fullScreen: boolean;
  currentLyric: number | null;
  queue: TSong[];
};
