import { CloseButton } from "@components/closeButton";
import { songModel } from "@song/model";
import { PlayerLeftSide } from "./PlayerLeftSide";
import { PlayerRightSide } from "./PlayerRightSide";
import { PlayerStyled } from "./styles";

export const Player = () => {
  const { currentSong } = songModel.useSong();

  const handleClose = () => {
    songModel.fullscreen.close();
  };

  return (
    <PlayerStyled $colors={currentSong?.imageColors}>
      <CloseButton onClick={handleClose} />
      <PlayerLeftSide />
      <PlayerRightSide />
    </PlayerStyled>
  );
};
