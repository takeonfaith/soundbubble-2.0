import { songModel } from "@song/model";
import { Lyrics } from "./Lyrics";
import { Queue } from "./Queue";
import { RightSide } from "./styles";
import { TRightSideType } from "./types";

type Props = {
  type: TRightSideType
}

export const FullScreenPlayerRightSide = ({ type }: Props) => {
  // const { songs, name, icon, url } = songModel.queue.useQueue();
  const { queue } = songModel.queue.useQueue()
  const { lyrics, currentLyricIndex } = songModel.lyrics.useLyrics();
  const { state } = songModel.useSong()

  if (type === null) return null

  return (
    <RightSide className={type !== null ? 'visible' : ''}>
      {type === 'lyrics' && <Lyrics lyrics={lyrics} state={state} currentLyricIndex={currentLyricIndex} />}
      {type === 'queue' && <Queue queue={queue} />}
    </RightSide>
  );
};
