import { Authors } from "@components/authors";
import { Cover } from "@components/cover";
import { Flex } from "@components/flex";
import { songModel } from "@song/model";
import { IconMusic } from "@tabler/icons-react";
import { PlayerMusicControls } from "./PlayerMusicControls";
import {
  CoverWrapper,
  LeftSide,
  PlayerCover,
  PlayerTitle,
  PlayerWrapper
} from "./styles";
import { LikeButton } from "../../shared/components/likeButton";

type SongCover = {
  imageColors: string[] | undefined;
  cover: string | undefined;
};

const SongCover = ({ imageColors, cover }: SongCover) => {
  return (
    <PlayerCover className={"song-cover"} $color1={imageColors?.[0]}>
      {!cover && <IconMusic />}
      <Cover src={cover} />
    </PlayerCover>
  );
};


export const FullScreenPlayerLeftSide = () => {
  const { currentSong } = songModel.useSong();

  const onAuthorClick = () => songModel.fullscreen.close();

  return (
    <LeftSide>
      <PlayerWrapper>
        <CoverWrapper>
          <SongCover
            imageColors={currentSong?.imageColors}
            cover={currentSong?.cover}
          />
        </CoverWrapper>
        <Flex d="column" gap={2}>
          <Flex width="100%" gap={10}>
            <PlayerTitle>{currentSong?.name ?? "Untitled"}</PlayerTitle>
            <LikeButton isLiked onClick={() => null} likeColor={currentSong?.imageColors[1]} />
          </Flex>
          <Authors
            authors={currentSong?.authors}
            onAuthorClick={onAuthorClick}
          />
        </Flex>
        <PlayerMusicControls />
      </PlayerWrapper>
    </LeftSide>
  );
};
