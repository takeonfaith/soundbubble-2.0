import { SongItem } from '..';
import { useHandleSongPlay } from '../../../../shared/hooks/useHandleSongPlay';
import { songModel } from '../../model';
import { TSong } from '../../model/types';

type Props = {
    songs: TSong[];
    listName: string | null;
    listIcon: string | undefined;
    listUrl: string | null;
};

export const PlaneSongList = (props: Props) => {
    const { currentSong, state, loaded } = songModel.useSong();
    const { songs } = props;
    const { handlePlay } = useHandleSongPlay(props);

    return (
        <>
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
        </>
    );
};
