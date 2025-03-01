import { CloseButton } from '@components/closeButton';
import { songModel as songModelNew } from '@song/new-model';
import { useEffect, useState } from 'react';
import { FullScreenPlayerLeftSide } from './FullScreenPlayerLeftSide';
import { FullScreenPlayerRightSide } from './FullScreenPlayerRightSide';
import { FullScreenPlayerStyled } from './styles';
import { TRightSideType } from './types';

type Props = {
    open: boolean;
};

export const FullScreenFullScreenPlayer = ({ open }: Props) => {
    const { currentSong, queue } = songModelNew.useSong();
    const [animatedOpen, setAnimatedOpen] = useState(open);
    const [rightSideType, setRightSideType] = useState<TRightSideType>(null);

    const handleClose = () => {
        songModelNew.fullscreenPlayer.close();
    };

    useEffect(() => {
        if (open) {
            setAnimatedOpen(true);
        } else {
            setTimeout(() => {
                setAnimatedOpen(false);
            }, 200);
        }
    }, [open]);

    const handleClickControlButton = (type: TRightSideType) => {
        return () => {
            if (rightSideType === type) setRightSideType(null);
            else setRightSideType(type);
        };
    };

    useEffect(() => {
        if (!currentSong?.hasLyrics && rightSideType === 'lyrics') {
            setRightSideType(null);
        }
    }, [currentSong?.hasLyrics, rightSideType]);

    return (
        <FullScreenPlayerStyled
            className={open ? 'open' : 'close'}
            $colors={currentSong?.imageColors}
        >
            {animatedOpen && (
                <>
                    <CloseButton onClick={handleClose} />
                    <FullScreenPlayerLeftSide
                        type={rightSideType}
                        handleClickControlButton={handleClickControlButton}
                        hasQueue={(queue?.songs.length ?? 0) > 0}
                    />
                    <FullScreenPlayerRightSide type={rightSideType} />
                </>
            )}
        </FullScreenPlayerStyled>
    );
};
