import { Authors } from "@components/authors";
import { Cover } from "@components/cover";
import { Flex } from "@components/flex";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { TPlaylist } from "../model/types";
import {
  ControlButton,
  PalylistTitle,
  PlaylistCover,
  PlaylistStyled,
} from "./styles";
import { PlayPauseIcon } from "../../../shared/components/play-pause-icon";
import { playlistModel } from "../model";

type Props = {
  playlist: TPlaylist;
};

export const PlaylistItem = ({ playlist }: Props) => {
  const { image, name, imageColors, authors, id } = playlist;

  const handleClickPlay = () => {
    
  }

  return (
    <PlaylistStyled to={`/playlist/${id}`} $color1={imageColors[0]}>
      <PlaylistCover $color1={imageColors[0]}>
        <Cover src={image} />
        <ControlButton $color={imageColors[0]} onClick={ }>
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
