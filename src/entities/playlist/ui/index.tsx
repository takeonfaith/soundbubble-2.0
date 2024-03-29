import { Authors } from "@components/authors";
import { Flex } from "@components/flex";
import { PlayPauseIcon } from "../../../shared/components/play-pause-icon";
import { TPlaylist } from "../model/types";
import { PlaylistCover } from "./PlaylistCover";
import {
  ControlButton,
  PalylistTitle,
  PlaylistStyled,
} from "./styles";
import { TOrientation } from "../../user/types";

type Props = {
  playlist: TPlaylist;
  orientation?: TOrientation
};

export const PlaylistItem = ({ playlist, orientation = 'vertical' }: Props) => {
  const { image, name, imageColors, authors, id } = playlist;
  // const handleClickPlay = () => {

  // }

  return (
    <PlaylistStyled $orientation={orientation} to={`/playlist/${id}`} $color1={imageColors[0]}>
      <PlaylistCover borderRadius={orientation === 'vertical' ? undefined : '3px'} size="var(--size)" src={image} color={imageColors[0]}>
        <ControlButton $orientation={orientation} $color={imageColors[0]}>
          <PlayPauseIcon loading={false} playling={false} size={18} />
        </ControlButton>
      </PlaylistCover>
      <Flex d="column" width="100%" gap={2} ai="flex-start">
        <PalylistTitle>{name}</PalylistTitle>
        <Authors authors={authors} />
      </Flex>
    </PlaylistStyled>
  );
};
