import {
    IconDots,
    IconPlaylist,
    IconQuote,
    IconSparkles,
} from '@tabler/icons-react';
import { TSong } from '../../entities/song/model/types';
import { VolumeButton } from '../../features/volumeButton';
import { Button } from '../../shared/components/button';
import { PlayerActionButtons, SlowVersionButton } from './styles';

type Props = {
    handleSlow: () => void;
    handleLyrics: (e: Evt<'btn'>) => void;
    handleMore: (e: Evt<'btn'>) => void;
    handleShowQueue: (e: Evt<'btn'>) => void;
    currentSong: Nullable<TSong>;
    isSlowVersion: boolean;
};

export const Buttonts = ({
    handleSlow,
    currentSong,
    isSlowVersion,
    handleShowQueue,
    handleLyrics,
    handleMore,
}: Props) => {
    return (
        <PlayerActionButtons onClick={(e) => e.stopPropagation()}>
            <VolumeButton />
            <SlowVersionButton
                $width="42px"
                $height="42px"
                disabled={!currentSong || !currentSong.slowSrc}
                $color={currentSong?.imageColors[0]}
                onClick={handleSlow}
                className={`${isSlowVersion ? 'slow' : ''} order3`}
            >
                <IconSparkles size={20} />
            </SlowVersionButton>
            <Button
                $width="42px"
                $height="42px"
                disabled={!currentSong}
                onClick={handleShowQueue}
                className="order2"
            >
                <IconPlaylist size={20} />
            </Button>
            <Button
                $width="42px"
                $height="42px"
                disabled={!currentSong?.hasLyrics}
                onClick={handleLyrics}
                className="order1"
            >
                <IconQuote size={20} />
            </Button>
            <Button
                $width="42px"
                $height="42px"
                onClick={handleMore}
                disabled={!currentSong}
            >
                <IconDots size={20} />
            </Button>
        </PlayerActionButtons>
    );
};
