import React from "react";

export type TAuthor = {
  uid: string;
  displayName: string;
  photoURL: string;
};

export type TLyric = { text: string; startTime: number };

export type TSong = {
  name: string;
  id: string;
  releaseDate: string;
  songSrc: string;
  lyrics: TLyric[];
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
};

export type TPlaybackStore = {
  currentTime: number;
  duration: number;
  isSliding: boolean;
  lastRangeValue: number | null;
};

export enum LoopMode {
  noloop,
  loopall,
  loopone,
}

export type TQueueStore = {
  songs: TSong[];
  currentSongIndex: number | null;
  name: string | null;
  url: string | null;
  icon: React.ReactNode;
  willGoToPrevTrack?: boolean;
  shuffle: boolean;
};

export type TLyricsStore = {
  lyrics: TLyric[];
  currentLyricIndex: number;
};
