import { Cover } from "@components/cover";
import { TPlaylist } from "../model/types";
import {
  PlaylistCover,
  PlaylistStyled,
  PalylistTitle,
  PalylistAuthors,
} from "./styles";

type Props = {
  playlist: TPlaylist;
};

export const PlaylistItem = ({ playlist }: Props) => {
  const { image, name, imageColors, authors } = playlist;

  return (
    <PlaylistStyled>
      <PlaylistCover $color1={imageColors[0]}>
        <Cover src={image} />
      </PlaylistCover>
      <PalylistTitle>{name}</PalylistTitle>
      <PalylistAuthors>
        {authors.map((authors) => authors.displayName)}
      </PalylistAuthors>
    </PlaylistStyled>
  );
};
