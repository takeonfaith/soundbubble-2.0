import { Authors } from "@components/authors";
import { Cover } from "@components/cover";
import { Flex } from "@components/flex";
import { Loading } from "@components/loading";
import { LikeButton } from "@shared/components/likeButton";
import {
  IconDots,
  IconHeadphones,
  IconMusic,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled
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
  ({ song, playing, loading, index, noImage, onClick }: Props) => {
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
        <SongLeft>
          {!noImage && <SongCover color1={imageColors[0]}>
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
              </PauseOverlay>
            )}
            {loading && (
              <LoadingOverlay>
                <Loading />
              </LoadingOverlay>
            )}
            {!cover && <IconMusic />}
            <Cover src={cover} />
          </SongCover>}
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
        <Flex gap={4}>
          <LikeButton isLiked={false} likeColor={imageColors[1]} onClick={() => null} />
          <MoreInfoButton onClick={handleMore}>
            <IconDots />
          </MoreInfoButton>
        </Flex>
      </SongStyled>
    );
  }
);

SongItem.displayName = "SongItem";
