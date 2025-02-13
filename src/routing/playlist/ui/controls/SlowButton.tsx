import { IconSparkles } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { SongState, TQueue } from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { slowSongsApi } from '../../../../entities/song/new-model/slow-songs';
import { Button } from '../../../../shared/components/button';
import { Loading } from '../../../../shared/components/loading';
import { PlayingAnimation } from '../../../../shared/components/playingAnimation';
import Popover from '../../../../shared/components/popover';
import { $type, load } from './model';

type Props = {
    state: SongState | null;
    primaryColor: string | undefined;
    queue: TQueue;
};

export const SlowButton = ({ queue, state, primaryColor }: Props) => {
    const type = useUnit($type);
    const { queue: currentQueue, currentSongIndex } = songModel.useSong();
    const isCurrent = currentQueue?.id === queue?.id;
    const isSlow = isCurrent && type === 'slow';
    const isSlowPlaying = isSlow && state === SongState.playing;
    const isLoading =
        isSlow &&
        (state === SongState.loading || state === SongState.loadingThenPlay);

    const handleClick = () => {
        load('slow');

        const songsThatHaveSlow = queue.songs.reduce((acc, song) => {
            if (song.slowSrc) {
                acc.push(song.id);
            }

            return acc;
        }, [] as string[]);

        if (type !== 'slow') {
            slowSongsApi.add(songsThatHaveSlow);
        }

        songModel.controls.playPauseQueue({
            queue,
            currentSongIndex: isCurrent ? currentSongIndex : 0,
        });
    };

    return (
        <Popover
            content={isSlowPlaying ? 'Pause slow version' : 'Play slow version'}
        >
            <Button
                style={{
                    color: isSlow ? '#fff' : undefined,
                    borderRadius: '100%',
                }}
                $width="45px"
                $height="45px"
                $primaryColor={primaryColor}
                className={isSlow ? 'primary' : ''}
                onClick={handleClick}
                disabled={isLoading}
            >
                {isLoading ? (
                    <Loading />
                ) : isSlowPlaying ? (
                    <PlayingAnimation playing={true} color={'#fff'} />
                ) : (
                    <IconSparkles />
                )}
            </Button>
        </Popover>
    );
};
