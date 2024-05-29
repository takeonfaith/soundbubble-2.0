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
import { Subtext } from "../../../shared/components/subtext";
import { useState } from "react";
import { PlayingAnimation } from "../../../shared/components/playingAnimation";

type Props = {
  playlist: TPlaylist;
  orientation?: TOrientation
};

export const PlaylistItem = ({ playlist, orientation = 'vertical' }: Props) => {
  const { image, name, imageColors, authors, id, songs, isAlbum } = playlist;
  const { play } = songModel.useControls();
  const { state } = songModel.useSong()
  const { queue } = songModel.queue.useQueue()
  const [loading, setLoading] = useState(false)
  const url = `/playlist/${id}`
  const isCurrentPlaying = state === 'playing' && queue.url === url

  const handlePlay = (songs: TSong[], index: number) => {
    const queue: TQueueStore | undefined = {
      currentSongIndex: index,
      name,
      icon: image,
      url,
      songs: songs,
      shuffle: false,
    };

    play(songs[0], queue);
  };

  const handleLoadPlaylistSongs = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true)
    Songs.getSongsByUids(songs).then((songs) => {
      handlePlay(songs, 0)
      setLoading(false)
    })
  }

  return (
    <PlaylistStyled $orientation={orientation} className={isCurrentPlaying ? 'playing' : ''} to={`/playlist/${id}`} $color1={imageColors[0]} onClick={e => e.stopPropagation()}>
      <ControlButton $orientation={orientation} $color={imageColors[0]} onClick={handleLoadPlaylistSongs}>
        {isCurrentPlaying ? <PlayingAnimation playing color={imageColors[1]} /> : <PlayPauseIcon loading={loading} playling={false} size={18} />}
      </ControlButton>
      <PlaylistCover size={undefined} borderRadius={orientation === 'vertical' ? undefined : '3px'} src={image} color={imageColors[0]} isAlbum={isAlbum} />
      <Flex width="100%" jc="space-between">
        <Flex d="column" width="100%" gap={0} ai="flex-start">
          <PalylistTitle>{name}</PalylistTitle>
          {orientation === 'vertical' ? <Authors authors={authors} /> : <Flex width="100%" gap={4}>
            <Subtext style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{isAlbum ? 'Album' : "Playlist"} /</Subtext>
            <Authors width="fit-content" authors={authors} />
          </Flex>}
        </Flex>
      </Flex>
    </PlaylistStyled>
  );
};
