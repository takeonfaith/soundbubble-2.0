import { songModel } from "@song/model";
import { TSong } from "@song/model/types";
import { SongItem } from "..";
import { SongsVerticalListStyled } from "./styles";

type Props = {
  songs: TSong[];
};

export const VerticalSongsList = ({ songs }: Props) => {
  const { currentSong, state, loaded } = songModel.useSong();

  return (
    <SongsVerticalListStyled>
      {songs.map((song) => {
        const isCurrent = song.id === currentSong?.id;

        return (
          <SongItem
            song={song}
            playing={isCurrent && state === "playing"}
            loading={isCurrent && state === "loading"}
            loaded={isCurrent && loaded}
          />
        );
      })}
    </SongsVerticalListStyled>
  );
};
