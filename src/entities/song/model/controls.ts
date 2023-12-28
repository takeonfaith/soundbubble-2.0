import { useUnit } from "effector-react";
import { $songStore, load, pause, play } from ".";
import { PREVIOUS_TRACK_THRESHOLD } from "./constants";
import { $playback, setLastRangeValue } from "./playback";
import { next, previous } from "./queue";
import { TQueueStore } from "./types";
import { setCurrentLyricIndex } from "./lyrics";

export const useControls = () => {
  const { loaded, state, currentSong } = useUnit($songStore);
  const { currentTime } = useUnit($playback);

  return {
    play: (song = currentSong, queue?: TQueueStore) => {
      if (!song) return null;

      if (!loaded || song?.id !== currentSong?.id) {
        return load({ song, queue });
      }

      if (state === "playing") {
        return pause();
      }

      return play();
    },
    next: () => next(),
    previous: () => {
      if (currentTime < PREVIOUS_TRACK_THRESHOLD) {
        previous();
        return;
      }

      setLastRangeValue(0);
      setCurrentLyricIndex(0);
    },
  };
};
