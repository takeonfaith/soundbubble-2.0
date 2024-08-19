import { Flex } from "@components/flex";
import { secondsToTimeStr } from "@shared/funcs/secondsToTimeStr";
import { LoopMode, SongState } from "@song/model/types";
import {
  IconArrowsShuffle,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
  IconRepeat,
  IconRepeatOnce
} from "@tabler/icons-react";
import { useMemo } from "react";
import { PlayPauseIcon } from "../playPauseIcon";
import {
  ControlButton,
  CustomSlider,
  DurationText,
  MusicControlsStyled,
  SmallControlButton,
} from "./styles";

type Props = {
  state: SongState | null;
  colors: string[] | undefined;
  duration: number;
  currentTime: number;
  loopMode: LoopMode;
  shuffle: boolean;
  disableNextSongButton: boolean
  handleShuffle: () => void;
  handleLoopMode: () => void;
  onPlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  handleChangeTime: React.ChangeEventHandler<HTMLInputElement>;
  handleMouseUp: React.MouseEventHandler<HTMLInputElement>;
};

export const MusicControls = ({
  state,
  colors,
  duration,
  currentTime,
  loopMode,
  shuffle,
  disableNextSongButton,
  handleShuffle,
  handleLoopMode,
  onPlay,
  onNext,
  onPrev,
  handleChangeTime,
  handleMouseUp,
}: Props) => {
  const { getBackgroundSize, currentTimeStr, durationStr } = useMemo(
    () => ({
      getBackgroundSize: {
        backgroundSize: `calc(${((currentTime * 100) / duration)}% + 1px) 100%`,
      },
      currentTimeStr: secondsToTimeStr(currentTime),
      durationStr: secondsToTimeStr(duration),
    }),
    [duration, currentTime]
  );

  const buttonColor = colors?.[0]

  return (
    <MusicControlsStyled className="music-controls">
      <CustomSlider
        style={getBackgroundSize}
        color1={colors?.[0]}
        type="range"
        value={currentTime}
        max={duration}
        min={0}
        onChange={handleChangeTime}
        onMouseUp={handleMouseUp}
        className="song-slider"
      />
      <Flex jc="space-between" width="100%" className="duration-numbers">
        <DurationText>{currentTimeStr}</DurationText>
        <DurationText>{durationStr}</DurationText>
      </Flex>
      <Flex jc="space-between" width="100%" className="control-buttons">
        <SmallControlButton
          $color1={buttonColor}
          className={shuffle ? "queue-button selected" : "queue-button"}
          onClick={handleShuffle}
        >
          <IconArrowsShuffle />
        </SmallControlButton>
        <Flex gap={20} className="playback-buttons">
          <ControlButton className="control-button" onClick={onPrev}>
            <IconPlayerTrackPrevFilled className="prev-icon-2" />
            <IconPlayerTrackPrevFilled className="prev-icon-1" />
          </ControlButton>
          <ControlButton className="control-button play-pause" disabled={state === 'loading'} onClick={onPlay}>
            <PlayPauseIcon loading={state === 'loading'} playling={state === 'playing'} />
          </ControlButton>
          <ControlButton className="control-button" disabled={disableNextSongButton} onClick={onNext}>
            <IconPlayerTrackNextFilled className="next-icon-1" />
            <IconPlayerTrackNextFilled className="next-icon-2" />
          </ControlButton>
        </Flex>
        <SmallControlButton
          className={loopMode !== LoopMode.noloop ? "queue-button selected" : "queue-button"}
          onClick={handleLoopMode}
          $color1={buttonColor}
        >
          {loopMode === LoopMode.loopone && <IconRepeatOnce />}
          {loopMode !== LoopMode.loopone && <IconRepeat />}
        </SmallControlButton>
      </Flex>
    </MusicControlsStyled>
  );
};
