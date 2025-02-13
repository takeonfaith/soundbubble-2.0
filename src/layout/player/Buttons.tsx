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
import { Popup } from '../newpopup';
import { SongMoreContextMenu } from '../../entities/song/ui/context-menu/SongMoreContextMenu';

type Props = {
    handleSlow: () => void;
    handleLyrics: (e: Evt<'btn'>) => void;
    handleShowQueue: (e: Evt<'btn'>) => void;
    currentSong: Nullable<TSong>;
    isSlowVersion: boolean;
};

export const Buttons = ({
    handleSlow,
    currentSong,
    isSlowVersion,
    handleShowQueue,
    handleLyrics,
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
            <Popup content={<SongMoreContextMenu song={currentSong} />}>
                <Button $width="42px" $height="42px" disabled={!currentSong}>
                    <IconDots size={20} />
                </Button>
            </Popup>
        </PlayerActionButtons>
    );
};
