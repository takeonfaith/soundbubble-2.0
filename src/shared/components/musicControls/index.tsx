import { Flex } from "@components/flex";
import { Loading } from "@components/loading";
import { secondsToTimeStr } from "@shared/funcs/secondsToTimeStr";
import { LoopMode, SongState } from "@song/model/types";
import {
  IconArrowsShuffle,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
  IconRepeat,
  IconRepeatOnce,
} from "@tabler/icons-react";
import { useMemo } from "react";
import {
  ControlButton,
  SmallControlButton,
  CustomSlider,
  DurationText,
  MusicControlsStyled,
} from "./styles";

type Props = {
  state: SongState | null;
  colors: string[] | undefined;
  duration: number;
  currentTime: number;
  loopMode: LoopMode;
  shuffle: boolean;
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
          $color1={colors?.[0]}
          className={shuffle ? "selected" : ""}
          onClick={handleShuffle}
        >
          <IconArrowsShuffle />
        </SmallControlButton>
        <Flex gap={20}>
          <ControlButton onClick={onPrev}>
            <IconPlayerTrackPrevFilled />
          </ControlButton>
          <ControlButton onClick={onPlay}>
            {state === "loading" ? (
              <Loading />
            ) : state === "playing" ? (
              <IconPlayerPauseFilled />
            ) : (
              <IconPlayerPlayFilled />
            )}
          </ControlButton>
          <ControlButton onClick={onNext}>
            <IconPlayerTrackNextFilled />
          </ControlButton>
        </Flex>
        <SmallControlButton
          className={loopMode !== LoopMode.noloop ? "selected" : ""}
          onClick={handleLoopMode}
          $color1={colors?.[0]}
        >
          {loopMode === LoopMode.loopone && <IconRepeatOnce />}
          {loopMode !== LoopMode.loopone && <IconRepeat />}
        </SmallControlButton>
      </Flex>
    </MusicControlsStyled>
  );
};
