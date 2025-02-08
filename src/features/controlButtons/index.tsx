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
    const {
        state,
        currentSongIndex,
        queue: currentQueue,
    } = songModel.useSong();
    const theme = useTheme();
    const shouldLoadSongs = 'songIds' in queue;
    const isLoading =
        state === SongState.loading || state === SongState.loadingThenPlay;

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
                    if (queue.id !== currentQueue?.id) {
                        setButtonType('play');
                    }
                    if (shouldLoadSongs) {
                        songModel.controls.loadSongsThenPlay({
                            queue,
                            currentSongIndex,
                            sort: true,
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
                    loading={buttonType === 'play' && isLoading}
                    playling={state === SongState.playing}
                />
                Play
            </DefaultButton>
            <DefaultButton
                loading={false}
                onClick={(e) => {
                    setButtonType('shuffle');
                    e.preventDefault();

                    if (shouldLoadSongs) {
                        songModel.controls.loadSongsThenShuffle({
                            queue,
                            currentSongIndex: 0,
                        });
                    } else {
                        songModel.controls.shufflePlayPause({ queue });
                    }
                }}
                style={style}
                disabled={isLoading}
                appearance="outline"
            >
                {buttonType === 'shuffle' && isLoading ? (
                    <Loading />
                ) : (
                    <IconArrowsShuffle size={20} />
                )}
                Shuffle
            </DefaultButton>
        </>
    );
};
