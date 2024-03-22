import { CloseButton } from "@components/closeButton";
import { songModel } from "@song/model";
import { FullScreenPlayerLeftSide } from "./FullScreenPlayerLeftSide";
import { FullScreenPlayerRightSide } from "./FullScreenPlayerRightSide";
import { FullScreenPlayerStyled } from "./styles";
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
};

export const FullScreenFullScreenPlayer = ({ open }: Props) => {
  const { currentSong } = songModel.useSong();
  const [animatedOpen, setAnimatedOpen] = useState(open)

  const handleClose = () => {
    songModel.fullscreen.close();
  };

  useEffect(() => {
    if (open) {
      setAnimatedOpen(true);
    } else {
      setTimeout(() => {
        setAnimatedOpen(false)
      }, 200)
    }
  }, [open])



  return (
    <FullScreenPlayerStyled
      className={open ? "open" : "close"}
      $colors={currentSong?.imageColors}
    >
      {animatedOpen && <>
        <CloseButton onClick={handleClose} />
        <FullScreenPlayerLeftSide />
        <FullScreenPlayerRightSide />
      </>}
    </FullScreenPlayerStyled>
  );
};
