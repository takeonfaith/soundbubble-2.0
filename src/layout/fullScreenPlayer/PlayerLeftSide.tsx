import { Authors } from "@components/authors";
import { Cover } from "@components/cover";
import { Flex } from "@components/flex";
import { songModel } from "@song/model";
import { LikeButton } from "@song/ui/styles";
import { IconHeart, IconMusic } from "@tabler/icons-react";
import { PlayerMusicControls } from "./PlayerMusicControls";
import { LeftSide, PlayerCover, PlayerTitle, PlayerWrapper } from "./styles";

export const PlayerLeftSide = () => {
  const { currentSong } = songModel.useSong();

  const onAuthorClick = () => songModel.fullscreen.close();

  console.count("PlayerLeftSide");

  return (
    <LeftSide>
      <PlayerWrapper>
        <PlayerCover $color1={currentSong?.imageColors[0]}>
          {!currentSong?.cover && <IconMusic />}
          <Cover src={currentSong?.cover} />
        </PlayerCover>
        <Flex d="column" gap={2}>
          <Flex width="100%" gap={10}>
            <PlayerTitle>{currentSong?.name ?? "Untitled"}</PlayerTitle>
            <LikeButton>
              <IconHeart />
            </LikeButton>
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
