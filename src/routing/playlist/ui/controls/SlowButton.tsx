import { IconSparkles } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import {
    SongState,
    TLoadQueue,
    TQueue,
} from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { slowSongsApi } from '../../../../entities/song/new-model/slow-songs';
import { Button } from '../../../../shared/components/button';
import { Loading } from '../../../../shared/components/loading';
import { PlayingAnimation } from '../../../../shared/components/playingAnimation';
import Popover from '../../../../shared/components/popover';
import { $type, load } from './model';
import { $pendingQueueLoading } from '../../../../entities/song/new-model/song-state';

type Props = {
    primaryColor: string | undefined;
    queue: TQueue | TLoadQueue;
};

export const SlowButton = ({ queue, primaryColor }: Props) => {
    const [type, pendingQueueLoading] = useUnit([$type, $pendingQueueLoading]);
    const {
        queue: currentQueue,
        currentSongIndex,
        state,
    } = songModel.useSong();
    const isCurrent = currentQueue?.id === queue?.id;
    const isSlow = isCurrent && type === 'slow';
    const isSlowPlaying = isSlow && state === SongState.playing;
    const isLoading = isSlow && pendingQueueLoading.has(queue.id);
    const shouldLoad = currentQueue?.id !== queue.id && 'songIds' in queue;

    const handleClick = (e: Evt<'btn'>) => {
        e.preventDefault();
        e.stopPropagation();

        load('slow');
        const songsThatHaveSlow = shouldLoad
            ? queue.songIds
            : (queue as TQueue).songs.reduce((acc, song) => {
                  if (song.slowSrc) {
                      acc.push(song.id);
                  }

                  return acc;
              }, [] as string[]);

        if (type !== 'slow') {
            slowSongsApi.add(songsThatHaveSlow);
        }

        if (shouldLoad) {
            songModel.controls.loadSongsThenPlay({
                queue,
                currentSongIndex: 0,
            });
        } else {
            songModel.controls.playPauseQueue({
                queue: queue as TQueue,
                currentSongIndex: isCurrent ? currentSongIndex : 0,
            });
        }
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
                className={`slow-button ${isSlow ? 'primary' : ''}`}
                onClick={handleClick}
                disabled={isLoading}
            >
                {isLoading ? (
                    <Loading />
                ) : isSlowPlaying ? (
                    <PlayingAnimation playing={true} color={'#fff'} />
                ) : (
                    <IconSparkles size={22} />
                )}
            </Button>
        </Popover>
    );
};
