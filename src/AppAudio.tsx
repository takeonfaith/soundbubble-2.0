import { isDefined } from "@shared/funcs/isDefined";
import { songModel } from "@song/model";
import React, { useEffect, useRef } from "react";
import { LoopMode } from "./entities/song/model/types";

const useAppAudio = () => {
  const { state } = songModel.useSong();
  const { loop, queue } = songModel.queue.useQueue()
  const { lastRangeValue, isSliding } = songModel.playblack.usePlayback();
  const { next, previous } = songModel.useControls()
  const audioRef = useRef<HTMLAudioElement>(null);



  const handleOnCanPlay: React.ReactEventHandler<HTMLAudioElement> = (e) => {
    songModel.events.loaded();
    songModel.playblack.setDuration(e.currentTarget.duration);
    songModel.playblack.setLastRangeValue(null);
  };

  const handlePlaying: React.ReactEventHandler<HTMLAudioElement> = (e) => {
    if (!isSliding) {
      songModel.playblack.setCurrentTime(e.currentTarget.currentTime);
      songModel.lyrics.nextCurrentLyric(e.currentTarget.currentTime);
    }
  };

  const handleEnded = () => {
    console.log('ended');
    if (loop === LoopMode.noloop && queue.currentSongIndex === queue.songs.length - 1) {
      previous()
      return
    }
    next()
  };

  useEffect(() => {
    // console.log(audioRef.current, +lastRangeValue, !isNaN(lastRangeValue ?? 0));

    if (
      audioRef.current &&
      isDefined(lastRangeValue) &&
      !isNaN(lastRangeValue ?? 0)
    ) {
      audioRef.current.currentTime = +lastRangeValue;
    }
  }, [lastRangeValue]);

  useEffect(() => {
    if (audioRef.current) {
      if (state === "playing") {
        audioRef.current.play();
      } else {
        audioRef.current?.pause();
      }
    }
  }, [state]);

  return {
    audioRef,
    loop,
    handleEnded,
    handlePlaying,
    handleOnCanPlay,
  };
};

export const AppAudio = () => {
  const { audioRef, loop, handleOnCanPlay, handlePlaying, handleEnded } =
    useAppAudio();
  const { currentSong } = songModel.useSong();

  return (
    <audio
      onEnded={handleEnded}
      src={currentSong?.songSrc}
      loop={loop === LoopMode.loopone}
      ref={audioRef}
      onTimeUpdate={handlePlaying}
      onCanPlay={handleOnCanPlay}
    />
  );
};
