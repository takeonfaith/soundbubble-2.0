import { createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";
import { DEFAULT_STORE } from "./constants";
import { TSong, TStore } from "./types";

const load = createEvent<TSong>();
const play = createEvent();
const pause = createEvent();
const loaded = createEvent();
const openFullScreen = createEvent();
const closeFullScreen = createEvent();
const next = createEvent();
const previous = createEvent();

const $songStore = createStore<TStore>(DEFAULT_STORE);

sample({
  clock: load,
  source: $songStore,
  fn: (old, currentSong): TStore => ({
    ...old,
    state: "loading",
    loaded: false,
    currentSong,
  }),
  target: $songStore,
});

sample({
  clock: play,
  source: $songStore,
  fn: (old): TStore => ({
    ...old,
    state: "playing",
  }),
  target: $songStore,
});

sample({
  clock: pause,
  source: $songStore,
  fn: (old): TStore => ({
    ...old,
    state: "pause",
  }),
  target: $songStore,
});

sample({
  clock: loaded,
  source: $songStore,
  fn: (old): TStore => ({
    ...old,
    loaded: true,
  }),
  target: $songStore,
});

sample({
  clock: openFullScreen,
  source: $songStore,
  fn: (old): TStore => ({
    ...old,
    fullScreen: true,
  }),
  target: $songStore,
});

sample({
  clock: closeFullScreen,
  source: $songStore,
  fn: (old): TStore => ({
    ...old,
    fullScreen: false,
  }),
  target: $songStore,
});

export const songModel = {
  useSong: () => {
    return useUnit($songStore);
  },
  events: {
    load,
    pause,
    loaded,
    play,
    next,
    previous,
    openFullScreen,
    closeFullScreen,
  },
};
