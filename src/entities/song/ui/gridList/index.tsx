import { SongItem } from '..';
import { useHandleSongPlay } from '../../../../shared/hooks/useHandleSongPlay';
import { songModel } from '../../model';
import { TSong } from '../../model/types';
import { GridSongListStyled } from './styles';

type Props = {
    songs: TSong[];
    listName: string | null;
    listIcon: string | undefined;
    listUrl: string | null;
};

export const GridSongList = (props: Props) => {
    const { songs } = props;
    const { currentSong, state, loaded } = songModel.useSong();
    const { handlePlay } = useHandleSongPlay(props);

    return (
        <GridSongListStyled>
            {songs.map((song, index) => {
                const isCurrent = song.id === currentSong?.id;

                return (
                    <SongItem
                        onClick={handlePlay}
                        index={index}
                        key={song.id + index}
                        song={song}
                        playing={isCurrent && state === 'playing'}
                        loading={isCurrent && state === 'loading'}
                        loaded={isCurrent && loaded}
                    />
                );
            })}
        </GridSongListStyled>
    );
};
