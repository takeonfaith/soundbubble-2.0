import { Authors } from "@components/authors";
import { Loading } from "@components/loading";
import { LikeButton } from "@shared/components/likeButton";
import {
  IconDots,
  IconHeadphones,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled
} from "@tabler/icons-react";
import { memo } from "react";
import { TSong } from "../model/types";
import { SongCover } from "./SongCover";
import {
  Listens,
  LoadingOverlay,
  MoreInfoButton,
  PauseOverlay,
  PlayButton,
  PlayOverlay,
  SongButtons,
  SongInfo,
  SongLeft,
  SongName,
  SongNameAndListens,
  SongStyled,
} from "./styles";
import { PlayingAnimation } from "../../../shared/components/playingAnimation";

type Props = {
  song: TSong;
  playing: boolean;
  loading: boolean;
  loaded: boolean;
  index: number;
  onClick: (song: TSong, index: number) => void;
  noImage?: boolean;
};

export const SongItem = memo(
  ({ song, playing, loading, index, onClick }: Props) => {
    const { name, authors, imageColors, cover, listens } = song;

    const handleMore: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
    };

    const handleClick = () => onClick(song, index);

    return (
      <SongStyled
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-pressed="false"
        playing={playing}
      >
        <SongLeft $color1={imageColors[0]}>
          <SongCover size="35px" src={cover} color={imageColors[0]}>
            {!loading && !playing && (
              <PlayOverlay>
                <PlayButton>
                  <IconPlayerPlayFilled className="action-icon" />
                </PlayButton>
              </PlayOverlay>
            )}
            {!loading && playing && (
              <PauseOverlay>
                <PlayButton>
                  <IconPlayerPauseFilled className="action-icon" />
                </PlayButton>
                <PlayingAnimation color={imageColors[1]} playing />
              </PauseOverlay>
            )}
            {loading && (
              <LoadingOverlay>
                <Loading />
              </LoadingOverlay>
            )}
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
        <Listens className="outside">
          {listens}
          <IconHeadphones />
        </Listens>
        <SongButtons>
          <LikeButton isLiked={false} likeColor={imageColors[1]} onClick={() => null} />
          <MoreInfoButton onClick={handleMore}>
            <IconDots />
          </MoreInfoButton>
        </SongButtons>
      </SongStyled>
    );
  }
);

SongItem.displayName = "SongItem";
