import { IconArrowsShuffle } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { TLoadQueue, TQueue } from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { $pendingQueueLoading } from '../../../../entities/song/new-model/song-state';
import { Button } from '../../../../shared/components/button';
import { Loading } from '../../../../shared/components/loading';
import Popover from '../../../../shared/components/popover';
import { $type, load } from './model';

type Props = {
    queue: TQueue | TLoadQueue;
};

export const ShuffleButton = ({ queue }: Props) => {
    const [type, pendingQueue] = useUnit([$type, $pendingQueueLoading]);
    const { queue: currentQueue } = songModel.useSong();
    const shouldLoad = currentQueue?.id !== queue.id && 'songIds' in queue;

    const isLoading = type === 'shuffle' && pendingQueue.has(queue.id);

    const handleClick = (e: Evt<'btn'>) => {
        e.preventDefault();
        e.stopPropagation();
        load('shuffle');
        if (shouldLoad) {
            songModel.controls.loadSongsThenShuffle({
                queue,
                currentSongIndex: 0,
            });
        } else {
            songModel.controls.shufflePlayPause({ queue: queue as TQueue });
        }
    };

    return (
        <Popover content="Shuffle">
            <Button
                $width="45px"
                $height="45px"
                className={`shuffle-button`}
                style={{ borderRadius: '30px' }}
                onClick={handleClick}
            >
                {isLoading ? <Loading /> : <IconArrowsShuffle size={20} />}
            </Button>
        </Popover>
    );
};
