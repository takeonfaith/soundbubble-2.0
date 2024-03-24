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

type Props = {
  playlist: TPlaylist;
};

export const PlaylistItem = ({ playlist }: Props) => {
  const { image, name, imageColors, authors, id } = playlist;

  // const handleClickPlay = () => {

  // }

  return (
    <PlaylistStyled to={`/playlist/${id}`} $color1={imageColors[0]}>
      <PlaylistCover src={image} color={imageColors[0]}>
        <ControlButton $color={imageColors[0]}>
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
