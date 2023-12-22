import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";
import {
  ControlButton,
  MusicControlsStyled,
  CustomSlider,
  DurationText,
} from "./styles";
import { SongState } from "@song/model/types";
import { Loading } from "@components/loading";
import { Flex } from "@components/flex";
import { useState } from "react";
import { secondsToTimeStr } from "@shared/funcs/secondsToTimeStr";

type Props = {
  state: SongState | null;
  onPlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  colors: string[] | undefined;
  duration: number | undefined;
};

export const MusicControls = ({
  state,
  colors,
  duration = 10,
  onPlay,
  onNext,
  onPrev,
}: Props) => {
  const [value, setValue] = useState(0);
  const getBackgroundSize = {
    backgroundSize: `${(value * 100) / duration}% 100%`,
  };

  return (
    <MusicControlsStyled>
      <CustomSlider
        style={getBackgroundSize}
        color1={colors?.[0]}
        type="range"
        value={value}
        max={duration}
        min={0}
        onChange={(e) => setValue(+e.target.value)}
      />
      <Flex jc="space-between" width="100%">
        <DurationText>{secondsToTimeStr(value)}</DurationText>
        <DurationText>{secondsToTimeStr(duration)}</DurationText>
      </Flex>
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
    </MusicControlsStyled>
  );
};
