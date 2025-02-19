import { useUnit } from 'effector-react';
import {
    SongState,
    TLoadQueue,
    TQueue,
} from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { slowSongsApi } from '../../../../entities/song/new-model/slow-songs';
import { $pendingQueueLoading } from '../../../../entities/song/new-model/song-state';
import { Button } from '../../../../shared/components/button';
import { PlayPauseIcon } from '../../../../shared/components/playPauseIcon';
import { $type, load } from './model';
import { PlayingAnimation } from '../../../../shared/components/playingAnimation';
import styled from 'styled-components';
import { toastModel } from '../../../../layout/toast/model';
import { translate } from '../../../../i18n';

const PlayButtonStyled = styled(Button)`
    .playing-animation {
        opacity: 0;
        position: absolute;
        transition: 0.2s opacity;
    }

    .play-icon {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        transition: 0.2s opacity;
    }

    &.playing {
        .playing-animation {
            opacity: 1;
        }

        .play-icon {
            opacity: 0;
        }
    }

    @media (hover: hover) {
        &:hover {
            .playing-animation {
                opacity: 0;
            }

            .play-icon {
                opacity: 1;
            }
        }
    }
`;

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
    primaryColor: string | undefined;
    showPlayingAnimation?: boolean;
    short?: boolean;
    children?: (props: ButtonProps) => React.ReactNode;
};

export const PlayButton = ({
    queue,
    primaryColor,
    showPlayingAnimation,
    children,
    short = true,
}: Props) => {
    const [type, pendingQueue] = useUnit([$type, $pendingQueueLoading]);
    const { queue: currentQueue, state } = songModel.useSong();
    const isCurrent = currentQueue?.id === queue?.id && type === 'default';
    const isSlow = currentQueue?.id === queue?.id && type === 'slow';
    const shouldLoad = currentQueue?.id !== queue.id && 'songIds' in queue;
    const isLoading =
        type === 'default' && shouldLoad
            ? pendingQueue.has(queue.id)
            : isCurrent &&
              (state === SongState.loadingThenPlay ||
                  state === SongState.loading);
    const isPlaying = isCurrent && state === SongState.playing;

    const handlePlay = (e: Evt<'btn'>) => {
        e.stopPropagation();
        e.preventDefault();

        if (shouldLoad) {
            if (queue.songIds.length === 0) {
                toastModel.events.add({
                    type: 'info',
                    message: 'Playlist has no songs',
                    duration: 2000,
                });
                return;
            }

            songModel.controls.loadSongsThenPlay({
                queue,
                currentSongIndex: 0,
            });
        } else {
            songModel.controls.playPauseQueue({
                queue: queue as TQueue,
                currentSongIndex: 0,
            });
        }
        load('default');
        slowSongsApi.reset();
    };

    const props = {
        $height: '45px',
        $width: short ? '45px' : 'fit-content',
        style: {
            padding: short ? '0' : '0 20px',
            borderRadius: '30px',
            color: isSlow ? undefined : '#fff',
        },
        $primaryColor: primaryColor,
        className: `play-button ${isSlow ? '' : 'primary'} ${
            isPlaying && showPlayingAnimation ? 'playing' : ''
        }`,
        onClick: handlePlay,
        disabled: isLoading,
    };

    if (children) {
        return children(props);
    }
    return (
        <PlayButtonStyled {...props}>
            <div className="play-icon">
                <PlayPauseIcon
                    loading={isLoading}
                    playling={isPlaying}
                    size={20}
                />
                {!short && translate('play')}
            </div>
            {showPlayingAnimation && isPlaying && (
                <PlayingAnimation
                    playing={true}
                    color={primaryColor ? '#fff' : primaryColor ?? 'grey'}
                />
            )}
        </PlayButtonStyled>
    );
};
