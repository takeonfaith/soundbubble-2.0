import { createEvent, createStore, createWatch, sample } from "effector";
import { useUnit } from "effector-react";
import { DEFAULT_STORE } from "./constants";
import { TQueueStore, TSong, TStore } from "./types";
import { changeLoopMode, next, previous, setQueue, useQueue } from "./queue";
import {
  setCurrentTime,
  setDuration,
  setIsSliding,
  setLastRangeValue,
  usePlayback,
} from "./playback";
import { useControls } from "./controls";
import { close, open, useFullScreen } from "./fullscreen";
import {
  calculateCurrentLyric,
  nextCurrentLyric,
  setCurrentLyricIndex,
  setLyrics,
  useLyrics,
} from "./lyrics";

export const play = createEvent();
export const load = createEvent<{
  song: TSong | null;
  queue: TQueueStore | undefined;
}>();
const loaded = createEvent();
export const pause = createEvent();

// const $currentSongStore = createStore(null);

export const $songStore = createStore<TStore>(DEFAULT_STORE);

sample({
  clock: play,
  source: $songStore,
  fn: (old): TStore => ({ ...old, state: "playing" }),
  target: $songStore,
});

sample({
  clock: pause,
  source: $songStore,
  fn: (old): TStore => ({ ...old, state: "pause" }),
  target: $songStore,
});

sample({
  clock: loaded,
  source: $songStore,
  fn: (old): TStore => ({
    ...old,
    loaded: true,
  }),
  target: [$songStore, play],
});

sample({
  clock: load,
  target: setQueue,
});

createWatch({
  unit: $songStore,
  fn: ({ currentSong, state }) => {
    if (currentSong && currentSong.lyrics && state === "loading") {
      console.log("reset");

      setLyrics(currentSong.lyrics);
      setCurrentLyricIndex(0);
    }
  },
});

sample({
  clock: load,
  source: $songStore,
  fn: (old, { song }): TStore => ({
    ...old,
    state: "loading",
    loaded: false,
    currentSong: song,
  }),
  target: $songStore,
});

export const songModel = {
  useSong: () => {
    return useUnit($songStore);
  },
  useControls,
  queue: {
    useQueue,
    next,
    previous,
    changeLoopMode,
  },
  playblack: {
    usePlayback,
    setCurrentTime,
    setDuration,
    setLastRangeValue,
    setIsSliding,
  },
  fullscreen: {
    useFullScreen,
    open,
    close,
  },
  lyrics: {
    useLyrics,
    calculateCurrentLyric,
    nextCurrentLyric,
    setLyrics,
  },
  events: {
    loaded,
    play,
  },
};
