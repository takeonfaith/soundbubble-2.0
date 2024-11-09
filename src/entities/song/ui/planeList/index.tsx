import { SongItem } from '..';
import { SongState, TQueue, TSong } from '../../model/types';
import { songModel } from '../../new-model';

type Props = {
    queue: TQueue | null;
    showSerialNumber?: number;
    isEditing?: boolean;
    onRemove?: (song: TSong) => void;
};

export const PlaneSongList = (props: Props) => {
    const { currentSong, state } = songModel.useSong();
    const { queue, showSerialNumber, isEditing, onRemove } = props;

    if (!queue) return null;

    const { songs } = queue;

    const handlePlay = (_: TSong, __: Evt<'div'>, currentSongIndex: number) => {
        songModel.controls.play({
            queue,
            currentSongIndex,
        });
    };

    return (
        <>
            {songs.map((song, index) => {
                const isCurrent = song.id === currentSong?.id;

                return (
                    <SongItem
                        onClick={handlePlay}
                        showSerialNumber={showSerialNumber}
                        index={index}
                        key={song.id + index}
                        song={song}
                        isEditing={isEditing}
                        onRemove={onRemove}
                        playing={isCurrent && state === SongState.playing}
                        loading={
                            isCurrent &&
                            (state === SongState.loading ||
                                state === SongState.loadingThenPlay)
                        }
                    />
                );
            })}
        </>
    );
};
