import { Authors } from "@components/authors";
import { Flex } from "@components/flex";
import { Songs } from "../../../database/sections";
import { PlayPauseIcon } from "../../../shared/components/playPauseIcon";
import { songModel } from "../../song/model";
import { TQueueStore, TSong } from "../../song/model/types";
import { TOrientation } from "../../user/types";
import { TPlaylist } from "../model/types";
import { PlaylistCover } from "./PlaylistCover";
import {
  ControlButton,
  PalylistTitle,
  PlaylistStyled,
} from "./styles";
import { LikeButton } from "../../../features/likeButton";

type Props = {
  playlist: TPlaylist;
  orientation?: TOrientation
};

export const PlaylistItem = ({ playlist, orientation = 'vertical' }: Props) => {
  const { image, name, imageColors, authors, id, songs } = playlist;
  const { play } = songModel.useControls();

  const handlePlay = (songs: TSong[], index: number) => {
    const queue: TQueueStore | undefined = {
      currentSongIndex: index,
      name,
      icon: image,
      url: `/playlist/${id}`,
      songs: songs,
      shuffle: false,
    };

    play(songs[0], queue);
  };

  const handleLoadPlaylistSongs = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Songs.getSongsByUids(songs).then((songs) => {
      handlePlay(songs, 0)
    })
  }

  return (
    <PlaylistStyled $orientation={orientation} to={`/playlist/${id}`} $color1={imageColors[0]} onClick={e => e.stopPropagation()}>
      <PlaylistCover borderRadius={orientation === 'vertical' ? undefined : '3px'} size="var(--size)" src={image} color={imageColors[0]}>
        <ControlButton $orientation={orientation} $color={imageColors[0]} onClick={handleLoadPlaylistSongs}>
          <PlayPauseIcon loading={false} playling={false} size={18} />
        </ControlButton>
      </PlaylistCover>
      <Flex width="100%" jc="space-between">
        <Flex d="column" width="100%" gap={2} ai="flex-start">
          <PalylistTitle>{name}</PalylistTitle>
          {orientation === 'vertical' ? <Authors authors={authors} /> : null}
        </Flex>
        <LikeButton $width="48px" songId={id} likeColor={imageColors[0]} />
      </Flex>
    </PlaylistStyled>
  );
};
