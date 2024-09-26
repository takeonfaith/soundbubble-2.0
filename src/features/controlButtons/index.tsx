import { IconArrowsShuffle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { SongState, TQueue } from '../../entities/song/model/types';
import { songModel } from '../../entities/song/new-model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Loading } from '../../shared/components/loading';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';

type Props = {
    queue: TQueue;
    buttonColor: string;
};

export const ControlButtons = ({ queue, buttonColor }: Props) => {
    const { state, currentSongIndex } = songModel.useSong();
    const theme = useTheme();

    const style = {
        background: theme.colors.pageTopButton,
        color: buttonColor,
    };

    const [buttonType, setButtonType] = useState<'play' | 'shuffle' | null>(
        null
    );

    useEffect(() => {
        if (state === SongState.playing) {
            setButtonType(null);
        }
    }, [state]);

    return (
        <>
            <DefaultButton
                loading={state === SongState.loading}
                onClick={(e) => {
                    e.stopPropagation();
                    setButtonType('play');

                    songModel.controls.play({
                        queue,
                        currentSongIndex,
                    });
                }}
                style={style}
                appearance="secondary"
            >
                <PlayPauseIcon
                    size={20}
                    loading={buttonType === 'play'}
                    playling={false}
                />
                Play
            </DefaultButton>
            <DefaultButton
                loading={false}
                onClick={(e) => {
                    e.stopPropagation();
                    setButtonType('shuffle');
                    songModel.controls.shufflePlay({ queue });
                }}
                style={style}
            >
                {buttonType === 'shuffle' ? (
                    <Loading />
                ) : (
                    <IconArrowsShuffle size={20} />
                )}
                Shuffle
            </DefaultButton>
        </>
    );
};
