import { IconArrowsShuffle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { SongState, TLoadQueue, TQueue } from '../../entities/song/model/types';
import { songModel } from '../../entities/song/new-model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Loading } from '../../shared/components/loading';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';

type Props = {
    queue: TQueue | TLoadQueue;
    buttonColor: string;
};

export const ControlButtons = ({ queue, buttonColor }: Props) => {
    const { state, currentSongIndex } = songModel.useSong();
    const theme = useTheme();
    const shouldLoadSongs = 'songIds' in queue;

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
                onClick={(e) => {
                    e.preventDefault();
                    setButtonType('play');
                    if (shouldLoadSongs) {
                        songModel.controls.loadSongsThenPlay({
                            queue,
                            currentSongIndex,
                        });
                    } else {
                        songModel.controls.playPauseQueue({
                            queue,
                            currentSongIndex,
                        });
                    }
                }}
                style={style}
                disabled={state === SongState.loading}
                appearance="outline"
                loading={false}
            >
                <PlayPauseIcon
                    size={20}
                    loading={
                        buttonType === 'play' && state === SongState.loading
                    }
                    playling={false}
                />
                Play
            </DefaultButton>
            <DefaultButton
                loading={false}
                onClick={(e) => {
                    setButtonType('shuffle');
                    e.preventDefault();
                    if (shouldLoadSongs) {
                        songModel.controls.loadAndShuffle({ queue });
                    } else {
                        songModel.controls.shufflePlayPause({ queue });
                    }
                }}
                style={style}
                disabled={state === SongState.loading}
                appearance="outline"
            >
                {buttonType === 'shuffle' && state === SongState.loading ? (
                    <Loading />
                ) : (
                    <IconArrowsShuffle size={20} />
                )}
                Shuffle
            </DefaultButton>
        </>
    );
};
