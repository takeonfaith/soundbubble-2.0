import { songModel } from "@song/model";
import { IconDots, IconMaximize, IconShare3 } from "@tabler/icons-react";
import { Outlet } from "react-router";
import { styled } from "styled-components";
import { SongCover } from "../entities/song/ui/SongCover";
import { Authors } from "../shared/components/authors";
import { Button } from "../shared/components/button";
import { Flex } from "../shared/components/flex";
import { LikeButton } from "@features/likeButton";
import { MusicControls } from "../shared/components/musicControls";
import { FullScreenFullScreenPlayer } from "./fullScreenPlayer";
import { usePlayerMusicControls } from "./fullScreenPlayer/PlayerMusicControls";
import { InitialLoading } from "./initialLoading";
import { Modal } from "./modal";
import { Sidebar } from "./sidebar";
import { modalModel } from "./modal/model";
import { ShareModal } from "../features/shareModal";
import { Header } from "./header";

export const LayoutStyled = styled.div`
  height: calc(100dvh - 80px);
  display: flex;
`;

const PlayerStyled = styled.div<{ $background: string }>`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  transition: 0.5s background-color;
  background-color:  ${({ $background }) => $background};
  background-image: ${({ theme }) => `linear-gradient(${theme.colors.playerDarkening}, ${theme.colors.playerDarkening})`};
  position: absolute;
  left: 0;
  bottom: 0;
  gap: 50px;
  z-index: 10;

  .music-controls {
    flex-direction: row-reverse
  }

  .control-buttons {
    order: 3;
    width: fit-content;
    margin-bottom: 16px;
    
    .playback-buttons {
      gap: 0;
      
      .control-button {
        color: ${({ theme }) => theme.colors.textColor};
        transform: scale(0.7);
      }
    }
    
    .queue-button {
      color: ${({ theme }) => theme.colors.textColor};
      transform: scale(0.9);
      
      &.selected { 
        background: ${({ theme }) => theme.colors.hover};
      }
    }
  }

  .song-slider {
    order: 2;
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    height: 2px;
    width: 35%;

    &::-webkit-slider-thumb {
      width: 10px;
      height: 10px;
    }
  }

  .duration-numbers { 
    order: 1;
    position: absolute;
    left: 50%;
    bottom: 26px;
    transform: translateX(-50%);
    opacity: 0.6;
    font-size: 0.7rem;
    min-width: 70px;
    width: 35%;
    color: ${({ theme }) => theme.colors.textColor};


    & > * {
      font-size: 0.7rem;
      min-width: 36px;
      display: block;
    }

  }
`

const SongTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 200;
`

const SongStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 270px;
  max-width: 270px;
  overflow: hidden;
`

const Player = () => {
  const { currentSong } = songModel.useSong()
  const controls = usePlayerMusicControls()
  const handleOpenFullScreenPlayer = () => {
    songModel.fullscreen.open()
  }

  const handleShare = () => {
    modalModel.events.open({ title: `Share "${currentSong?.name}" with friends`, content: <ShareModal /> })
  }

  return (
    <PlayerStyled $background={currentSong?.imageColors[0] ?? 'darkgrey'}>
      <SongStyled>
        <SongCover color={currentSong?.imageColors[0] ?? 'grey'} src={currentSong?.cover} size={"40px"} />
        <Flex d="column" ai="flex-start">
          <SongTitle>{currentSong?.name ?? "Untitled"}</SongTitle>
          <Authors authors={currentSong?.authors} />
        </Flex>
      </SongStyled>
      <Flex gap={30} width="100%">
        <MusicControls {...controls} />
        <div style={{ minWidth: '270px', display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
          <LikeButton $width="42px" songId={currentSong?.id} likeColor={currentSong?.imageColors[0]} />
          <Button $width="42px" disabled={!currentSong} onClick={handleShare}>
            <IconShare3 size={20} />
          </Button>
          <Button $width="42px">
            <IconDots size={20} />
          </Button>
          <Button $width="42px" onClick={handleOpenFullScreenPlayer}>
            <IconMaximize />
          </Button>
        </div>
      </Flex>
    </PlayerStyled>
  );
}

const RightSide = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Layout = () => {
  const fullScreen = songModel.fullscreen.useFullScreen();
  return (
    <>
      <InitialLoading />
      <FullScreenFullScreenPlayer open={fullScreen} />
      <Modal />
      {/* <Popup /> */}
      <LayoutStyled>
        <Sidebar />
        <RightSide>
          {/* <Header /> */}
          <Outlet />
        </RightSide>
      </LayoutStyled>
      <Player />
    </>
  );
};
