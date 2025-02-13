import { useUnit } from 'effector-react';
import {
    SongState,
    TLoadQueue,
    TQueue,
} from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { slowSongsApi } from '../../../../entities/song/new-model/slow-songs';
import { Button } from '../../../../shared/components/button';
import { PlayPauseIcon } from '../../../../shared/components/playPauseIcon';
import { $type, load } from './model';

type ButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    $background?: string;
    $width?: string;
    $height?: string;
    $align?: 'left' | 'right' | 'center';
    $primaryColor?: string;
};

type Props = {
    queue: TQueue | TLoadQueue;
    state: SongState | null;
    primaryColor: string | undefined;
    children?: (props: ButtonProps) => React.ReactNode;
};

export const PlayButton = ({ queue, state, primaryColor, children }: Props) => {
    const type = useUnit($type);
    const { queue: currentQueue } = songModel.useSong();
    const isCurrent = currentQueue?.id === queue?.id && type === 'default';
    const isSlow = currentQueue?.id === queue?.id && type === 'slow';
    const isLoading =
        isCurrent &&
        (state === SongState.loading || state === SongState.loadingThenPlay);
    const isPlaying = isCurrent && state === SongState.playing;
    const shouldLoad = currentQueue?.id !== queue.id && 'songIds' in queue;

    const handlePlay = (e: Evt<'btn'>) => {
        e.stopPropagation();
        e.preventDefault();

        load('default');
        if (shouldLoad) {
            songModel.controls.loadSongsThenPlay({
                queue,
                currentSongIndex: 0,
            });
        } else {
            songModel.controls.playPauseQueue({
                queue,
                currentSongIndex: 0,
            });
        }

        slowSongsApi.reset();
    };

    const props = {
        $height: '45px',
        $width: '45px',
        style: {
            borderRadius: '30px',
            color: isSlow ? undefined : '#fff',
        },
        $primaryColor: primaryColor,
        className: `play-button ${isSlow ? '' : 'primary'}`,
        onClick: handlePlay,
        disabled: isLoading,
    };

    if (children) {
        return children(props);
    }
    return (
        <Button {...props}>
            <PlayPauseIcon loading={isLoading} playling={isPlaying} size={18} />
        </Button>
    );
};
