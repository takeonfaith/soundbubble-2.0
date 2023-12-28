import { Loading } from "@components/loading";
import { songModel } from "@song/model";
import { TQueueStore, TSong } from "@song/model/types";
import { SongItem } from "..";
import { SongsVerticalListStyled, Title, Titles } from "./styles";
import { Flex } from "@components/flex";

type Props = {
  songs: TSong[];
  /**
   * If true, will set queue when clicked on song, if not, ignores it
   */
  listName: string | null;
  listIcon: React.ReactNode;
  listUrl: string | null;
};

export const VerticalSongsList = (props: Props) => {
  const { currentSong, state, loaded } = songModel.useSong();
  const { songs } = props;
  const { play } = songModel.useControls();

  const handlePlay = (song: TSong, index: number) => {
    const queue: TQueueStore | undefined = {
      currentSongIndex: index,
      name: props.listName,
      icon: props.listIcon,
      url: props.listUrl,
      songs: props.songs,
      shuffle: false,
    };

    play(song, queue);
  };

  return (
    <SongsVerticalListStyled>
      {!!songs.length && (
        <Titles>
          <Title></Title>
          <Title>Name</Title>
          <Title>Author</Title>
          <Title>Listenings</Title>
        </Titles>
      )}
      {!songs.length && (
        <Flex width="100%" jc="center">
          <Loading />
        </Flex>
      )}
      {songs.map((song, index) => {
        const isCurrent = song.id === currentSong?.id;

        return (
          <SongItem
            onClick={handlePlay}
            index={index}
            key={song.id + index}
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
