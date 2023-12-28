import { createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";
import { LYRICS_DEFAULT_STORE } from "./constants";
import { TLyric, TLyricsStore } from "./types";

const handleCalculateLyric = (
  store: TLyricsStore,
  currentTime: number
): TLyricsStore => {
  const { lyrics } = store;

  const found = lyrics.findIndex((_, index, arr) => {
    return (arr[index + 1]?.startTime ?? -Infinity) > currentTime;
  });

  if (found === store.currentLyricIndex) return store;

  return { ...store, currentLyricIndex: found };
};

const handleNextCurrentLyric = (store: TLyricsStore, currentTime: number) => {
  const { lyrics, currentLyricIndex } = store;

  if (!lyrics.length || isNaN(lyrics[0].startTime)) return store;

  if (lyrics[currentLyricIndex + 1].startTime < currentTime) {
    return { ...store, currentLyricIndex: currentLyricIndex + 1 };
  }

  return store;
};

export const calculateCurrentLyric = createEvent<number>();
export const nextCurrentLyric = createEvent<number>();
export const setLyrics = createEvent<TLyric[]>();
export const setCurrentLyricIndex = createEvent<number>();

const $lyrics = createStore<TLyricsStore>(LYRICS_DEFAULT_STORE);

sample({
  clock: calculateCurrentLyric,
  source: $lyrics,
  fn: handleCalculateLyric,
  target: $lyrics,
});

sample({
  clock: nextCurrentLyric,
  source: $lyrics,
  fn: handleNextCurrentLyric,
  target: $lyrics,
});

sample({
  clock: setLyrics,
  source: $lyrics,
  fn: (store, lyrics) => ({ ...store, lyrics }),
  target: $lyrics,
});

sample({
  clock: setCurrentLyricIndex,
  source: $lyrics,
  fn: (store, currentLyricIndex) => ({ ...store, currentLyricIndex }),
  target: $lyrics,
});

export const useLyrics = () => {
  return useUnit($lyrics);
};
