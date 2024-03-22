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
import { PlayPauseIcon } from "../play-pause-icon";
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
        backgroundSize: `${(currentTime * 100) / duration + 1}% 100%`,
      },
      currentTimeStr: secondsToTimeStr(currentTime),
      durationStr: secondsToTimeStr(duration),
    }),
    [duration, currentTime]
  );

  return (
    <MusicControlsStyled>
      <CustomSlider
        style={getBackgroundSize}
        color1={colors?.[0]}
        type="range"
        value={currentTime}
        max={duration}
        min={0}
        onChange={handleChangeTime}
        onMouseUp={handleMouseUp}
      />
      <Flex jc="space-between" width="100%">
        <DurationText>{currentTimeStr}</DurationText>
        <DurationText>{durationStr}</DurationText>
      </Flex>
      <Flex jc="space-between" width="100%">
        <SmallControlButton
          $color1={colors?.[1]}
          className={shuffle ? "selected" : ""}
          onClick={handleShuffle}
        >
          <IconArrowsShuffle />
        </SmallControlButton>
        <Flex gap={20}>
          <ControlButton onClick={onPrev}>
            <IconPlayerTrackPrevFilled className="prev-icon-2" />
            <IconPlayerTrackPrevFilled className="prev-icon-1" />
          </ControlButton>
          <ControlButton disabled={state === 'loading'} onClick={onPlay}>
            <PlayPauseIcon loading={state === 'loading'} playling={state === 'playing'} />
          </ControlButton>
          <ControlButton disabled={disableNextSongButton} onClick={onNext}>
            <IconPlayerTrackNextFilled className="next-icon-1" />
            <IconPlayerTrackNextFilled className="next-icon-2" />
          </ControlButton>
        </Flex>
        <SmallControlButton
          className={loopMode !== LoopMode.noloop ? "selected" : ""}
          onClick={handleLoopMode}
          $color1={colors?.[1]}
        >
          {loopMode === LoopMode.loopone && <IconRepeatOnce />}
          {loopMode !== LoopMode.loopone && <IconRepeat />}
        </SmallControlButton>
      </Flex>
    </MusicControlsStyled>
  );
};
