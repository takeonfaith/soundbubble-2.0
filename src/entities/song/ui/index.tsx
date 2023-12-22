import { Loading } from "@components/loading";
import { songModel } from "@song/model";
import {
  IconDotsVertical,
  IconHeadphones,
  IconMusic,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { memo } from "react";
import { TSong } from "../model/types";
import {
  Listens,
  LoadingOverlay,
  MoreInfoButton,
  PauseOverlay,
  PlayButton,
  PlayOverlay,
  SongCover,
  SongInfo,
  SongLeft,
  SongName,
  SongNameAndListens,
  SongStyled,
} from "./styles";
import { Cover } from "@components/cover";
import { Authors } from "@components/authors";

type Props = {
  song: TSong;
  playing: boolean;
  loading: boolean;
  loaded: boolean;
};

export const SongItem = memo(({ song, playing, loading, loaded }: Props) => {
  const { name, authors, imageColors, cover, listens } = song;

  const handlePlay = () => {
    if (loaded) {
      if (playing) {
        return songModel.events.pause();
      }

      return songModel.events.play();
    }

    return songModel.events.load(song);
  };

  const handleMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <SongStyled
      onClick={handlePlay}
      tabIndex={0}
      role="button"
      aria-pressed="false"
    >
      <SongLeft>
        <SongCover color1={imageColors[0]}>
          {!loading && !playing && (
            <PlayOverlay>
              <PlayButton>
                <IconPlayerPlayFilled />
              </PlayButton>
            </PlayOverlay>
          )}
          {!loading && playing && (
            <PauseOverlay>
              <PlayButton>
                <IconPlayerPauseFilled />
              </PlayButton>
            </PauseOverlay>
          )}
          {loading && (
            <LoadingOverlay>
              <Loading />
            </LoadingOverlay>
          )}
          {!cover && <IconMusic />}
          <Cover src={cover} />
        </SongCover>
        <SongInfo>
          <SongNameAndListens>
            <SongName>{name}</SongName>
            <Listens>
              {listens}
              <IconHeadphones />
            </Listens>
          </SongNameAndListens>
          <Authors authors={authors} />
        </SongInfo>
      </SongLeft>
      <MoreInfoButton onClick={handleMore}>
        <IconDotsVertical />
      </MoreInfoButton>
    </SongStyled>
  );
});

SongItem.displayName = "SongItem";
