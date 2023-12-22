import { songModel } from "@song/model";
import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routing/AppRouter";
import styled from "styled-components";

const AppStyled = styled.div`
  height: 100dvh;
  background: ${({ theme }) => theme.colors.pageBackground};
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.pageBackground};
  padding: 16px;
`;

const useAppAudio = () => {
  const { state } = songModel.useSong();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOnCanPlay: React.ReactEventHandler<HTMLAudioElement> = () => {
    songModel.events.loaded();
    songModel.events.play();
  };

  useEffect(() => {
    if (audioRef.current) {
      if (state === "playing") {
        audioRef.current.play();
      } else {
        audioRef.current?.pause();
      }
    }
  }, [state]);

  return {
    audioRef,
    handleOnCanPlay,
  };
};

function App() {
  const { audioRef, handleOnCanPlay } = useAppAudio();
  const { currentSong } = songModel.useSong();

  return (
    <BrowserRouter>
      <audio
        src={currentSong?.songSrc}
        ref={audioRef}
        onCanPlay={handleOnCanPlay}
      />
      <AppStyled>
        <AppRouter />
      </AppStyled>
    </BrowserRouter>
  );
}

export default App;
