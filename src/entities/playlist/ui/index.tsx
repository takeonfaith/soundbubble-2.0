import { Cover } from "@components/cover";
import { TPlaylist } from "../model/types";
import {
  PlaylistCover,
  PlaylistStyled,
  PalylistTitle,
  PalylistAuthors,
} from "./styles";
import { Authors } from "@components/authors";
import { Flex } from "@components/flex";

type Props = {
  playlist: TPlaylist;
};

export const PlaylistItem = ({ playlist }: Props) => {
  const { image, name, imageColors, authors } = playlist;

  return (
    <PlaylistStyled $color1={imageColors[0]}>
      <PlaylistCover $color1={imageColors[0]}>
        <Cover src={image} />
      </PlaylistCover>
      <Flex d="column" gap={2} ai="flex-start">
        <PalylistTitle>{name}</PalylistTitle>
        <Authors authors={authors} />
      </Flex>
    </PlaylistStyled>
  );
};
