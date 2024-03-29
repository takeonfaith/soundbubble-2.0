import { CloseButton } from "@components/closeButton";
import { songModel } from "@song/model";
import { FullScreenPlayerLeftSide } from "./FullScreenPlayerLeftSide";
import { FullScreenPlayerRightSide } from "./FullScreenPlayerRightSide";
import { FullScreenPlayerStyled } from "./styles";
import { useEffect, useState } from "react";
import { TRightSideType } from "./types";

type Props = {
  open: boolean;
};

export const FullScreenFullScreenPlayer = ({ open }: Props) => {
  const { currentSong } = songModel.useSong();
  const { queue } = songModel.queue.useQueue()
  const [animatedOpen, setAnimatedOpen] = useState(open)
  const [rightSideType, setRightSideType] = useState<TRightSideType>(null)
  const hasLyrics = currentSong?.lyrics !== undefined && (currentSong?.lyrics.length ?? 0) > 0

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

  const handleClickControlButton = (type: TRightSideType) => {
    return () => {
      if (rightSideType === type) setRightSideType(null)
      else setRightSideType(type)
    }
  }

  useEffect(() => {
    if (!hasLyrics && rightSideType === 'lyrics') {
      setRightSideType(null)
    }
  }, [hasLyrics, rightSideType])

  return (
    <FullScreenPlayerStyled
      className={open ? "open" : "close"}
      $colors={currentSong?.imageColors}
    >
      {animatedOpen && <>
        <CloseButton onClick={handleClose} />
        <FullScreenPlayerLeftSide type={rightSideType} handleClickControlButton={handleClickControlButton} hasQueue={queue.songs.length > 0} hasLyrics={hasLyrics} />
        <FullScreenPlayerRightSide type={rightSideType} />
      </>}
    </FullScreenPlayerStyled>
  );
};
