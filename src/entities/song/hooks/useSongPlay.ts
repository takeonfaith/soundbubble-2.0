import { SongState, TQueue, TSong } from '../model/types';
import { songModel } from '../new-model';

type Props = {
    queue: TQueue | null;
    showSerialNumber?: number;
    isEditing?: boolean;
    onRemove?: (song: TSong) => void;
};

export const useSongPlay = (props: Props) => {
    const { currentSong, state, queue: currentQueue } = songModel.useSong();
    const { queue, showSerialNumber, isEditing, onRemove } = props;

    const handlePlay = (_: TSong, __: Evt<'div'>, currentSongIndex: number) => {
        if (queue) {
            songModel.controls.playPauseQueue({
                queue,
                currentSongIndex,
            });
        }
    };

    const getLoading = (song: TSong) => {
        const isCurrent =
            song.id === currentSong?.id && queue?.id === currentQueue?.id;

        return (
            isCurrent &&
            (state === SongState.loading || state === SongState.loadingThenPlay)
        );
    };

    const getPlaying = (song: TSong) => {
        const isCurrent =
            song.id === currentSong?.id && queue?.id === currentQueue?.id;

        return isCurrent && state === SongState.playing;
    };

    return {
        onClick: handlePlay,
        getLoading,
        getPlaying,
        showSerialNumber,
        isEditing,
        onRemove,
    };
};
