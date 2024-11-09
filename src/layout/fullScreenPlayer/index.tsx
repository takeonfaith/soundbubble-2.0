import { CloseButton } from '@components/closeButton';
import { songModel as songModelNew } from '@song/new-model';
import { songModel } from '@song/model';
import { FullScreenPlayerLeftSide } from './FullScreenPlayerLeftSide';
import { FullScreenPlayerRightSide } from './FullScreenPlayerRightSide';
import { FullScreenPlayerStyled } from './styles';
import { useEffect, useState } from 'react';
import { TRightSideType } from './types';
import { useMobileSheetSwipe } from '../../shared/hooks/useMobileSheetSwipe';

type Props = {
    open: boolean;
};

export const FullScreenFullScreenPlayer = ({ open }: Props) => {
    const { currentSong, queue } = songModelNew.useSong();
    const [animatedOpen, setAnimatedOpen] = useState(open);
    const [rightSideType, setRightSideType] = useState<TRightSideType>(null);
    const { style, onTouchEnd } = useMobileSheetSwipe(
        songModel.fullscreen.close,
        '100dvh'
    );

    const handleClose = () => {
        songModel.fullscreen.close();
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
            style={style}
            onTouchEnd={onTouchEnd}
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
