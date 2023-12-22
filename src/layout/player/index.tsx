import { Cover } from "@components/cover";
import { songModel } from "@song/model";
import {
  PlayerCover,
  PlayerStyled,
  LeftSide,
  PlayerWrapper,
  PlayerTitle,
  RightSide,
  Lyrics,
  Lyric,
  SmallButton,
} from "./styles";
import { IconBlockquote, IconList, IconMusic } from "@tabler/icons-react";
import { CloseButton } from "@components/closeButton";
import { Authors } from "@components/authors";
import { Flex } from "@components/flex";
import { MusicControls } from "@components/musicControls";

export const Player = () => {
  const { currentSong, state, loaded } = songModel.useSong();

  const handleClose = () => {
    songModel.events.closeFullScreen();
  };

  // TODO: Перенести эту логику в эффектор, она тут не нужна
  const handlePlay = () => {
    if (loaded) {
      if (state === "playing") {
        return songModel.events.pause();
      }

      return songModel.events.play();
    }

    if (currentSong) {
      return songModel.events.load(currentSong);
    }
  };

  const handleNext = () => songModel.events.next();
  const handlePrev = () => songModel.events.previous();

  return (
    <PlayerStyled $colors={currentSong?.imageColors}>
      <CloseButton onClick={handleClose} />
      <LeftSide>
        <PlayerWrapper>
          <PlayerCover $color1={currentSong?.imageColors[0]}>
            {!currentSong?.cover && <IconMusic />}
            <Cover src={currentSong?.cover} />
          </PlayerCover>
          <Flex d="column">
            <PlayerTitle>{currentSong?.name ?? "Untitled"}</PlayerTitle>
            <Authors authors={currentSong?.authors} />
          </Flex>
          <MusicControls
            duration={100}
            colors={currentSong?.imageColors}
            state={state}
            onPlay={handlePlay}
            onPrev={handlePrev}
            onNext={handleNext}
          />
          <Flex width="100%" jc="space-around">
            <SmallButton>
              <IconBlockquote />
            </SmallButton>
            <SmallButton>
              <IconList />
            </SmallButton>
          </Flex>
        </PlayerWrapper>
      </LeftSide>
      <RightSide>
        <Lyrics>
          {currentSong?.lyrics.map((lyric) => {
            if (!lyric.text) return null;

            return <Lyric>{lyric.text}</Lyric>;
          })}
        </Lyrics>
      </RightSide>
    </PlayerStyled>
  );
};
