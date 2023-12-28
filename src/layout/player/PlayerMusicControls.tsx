import { MusicControls } from "@components/musicControls";
import { songModel } from "@song/model";

export const PlayerMusicControls = () => {
  const { currentSong, state } = songModel.useSong();
  const { currentTime, duration } = songModel.playblack.usePlayback();
  const { next, previous, play } = songModel.useControls();
  const { loop } = songModel.queue.useQueue();

  const handlePlay = () => play();

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

  const handleShuffle = () => {};

  return (
    <MusicControls
      currentTime={currentTime}
      duration={duration}
      colors={currentSong?.imageColors}
      state={state}
      loopMode={loop}
      shuffle={true}
      handleShuffle={handleShuffle}
      handleLoopMode={handleLoopMode}
      onPlay={handlePlay}
      onPrev={previous}
      onNext={next}
      handleMouseUp={handleMouseUp}
      handleChangeTime={handleChangeTime}
    />
  );
};
