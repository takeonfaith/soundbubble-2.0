import { MusicControls } from "@components/musicControls";
import { songModel } from "@song/model";
import { useCallback, useEffect } from "react";
import { LoopMode } from "../../entities/song/model/types";

export const usePlayerMusicControls = () => {
  const { currentSong, state } = songModel.useSong();
  const { currentTime, duration } = songModel.playblack.usePlayback();
  const { queue, loop } = songModel.queue.useQueue()
  const { next, previous, play } = songModel.useControls();
  const disableNextSongButton = queue.songs.length < 2 || loop === LoopMode.noloop && queue.currentSongIndex === queue.songs.length - 1

  const handlePlay = useCallback(() => play(), [play]);

  const handleChangeTime: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    songModel.playblack.setIsSliding(true);
    songModel.playblack.setCurrentTime(+e.target.value);
  };

  const handleMouseUp: React.MouseEventHandler<HTMLInputElement> = (e) => {
    songModel.playblack.setIsSliding(false);
    songModel.playblack.setLastRangeValue(+e.currentTarget.value);
    songModel.lyrics.calculateCurrentLyric(+e.currentTarget.value);
  };

  const handleLoopMode = () => {
    songModel.queue.changeLoopMode();
  };

  const handleShuffle = () => { };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // console.log(event.key);

    if (event.key === 'Space') {
      handlePlay()
    }

  }, [handlePlay])

  useEffect(() => {
    addEventListener('keydown', handleKeyDown)

    return () => removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return {
    currentTime,
    duration,
    colors: currentSong?.imageColors,
    state,
    loopMode: loop,
    shuffle: true,
    disableNextSongButton,
    handleShuffle,
    handleLoopMode,
    onPlay: handlePlay,
    onPrev: previous,
    onNext: next,
    handleMouseUp,
    handleChangeTime,
  }
}

export const PlayerMusicControls = () => {
  const controls = usePlayerMusicControls()

  return (
    <MusicControls {...controls} />
  );
};
