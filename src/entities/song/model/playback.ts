import { createEvent, createStore, sample } from "effector";
import { TPlaybackStore } from "./types";
import { PLAYBACK_DEFAULT_STORE } from "./constants";
import { useUnit } from "effector-react";

export const setCurrentTime = createEvent<number>();
export const setDuration = createEvent<number>();
export const setLastRangeValue = createEvent<number | null>();
export const setIsSliding = createEvent<boolean>();

export const $playback = createStore<TPlaybackStore>(PLAYBACK_DEFAULT_STORE);

sample({
  clock: setCurrentTime,
  source: $playback,
  fn: (store, currentTime) => ({ ...store, currentTime }),
  target: $playback,
});

sample({
  clock: setDuration,
  source: $playback,
  fn: (store, duration) => ({ ...store, duration }),
  target: $playback,
});

sample({
  clock: setLastRangeValue,
  source: $playback,
  fn: (store, lastRangeValue) => {
    console.log({ lastRangeValue });

    return { ...store, lastRangeValue };
  },
  target: $playback,
});

sample({
  clock: setIsSliding,
  source: $playback,
  fn: (store, isSliding) => ({ ...store, isSliding }),
  target: $playback,
});

export const usePlayback = () => {
  return useUnit($playback);
};
