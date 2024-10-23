import { Flex } from '@components/flex';
import { LoopMode, SongState } from '@song/model/types';
import {
    IconArrowsShuffle,
    IconPlayerTrackNextFilled,
    IconPlayerTrackPrevFilled,
    IconRepeat,
    IconRepeatOnce,
} from '@tabler/icons-react';
import { useMemo } from 'react';
import { getHumanDuration } from '../../../entities/song/lib/getHumanDuration';
import { PlayPauseIcon } from '../playPauseIcon';
import { Slider } from '../slider';
import {
    ControlButton,
    DurationText,
    MusicControlsStyled,
    SmallControlButton,
} from './styles';

type Props = {
    state: SongState | null;
    colors: string[] | undefined;
    duration: number;
    currentTime: number;
    loopMode: LoopMode;
    shuffle: boolean;
    disableNextSongButton: boolean;
    handleShuffle: () => void;
    handleLoopMode: () => void;
    onPlay: () => void;
    onPrev: () => void;
    onNext: () => void;
    handleChangeTime: React.ChangeEventHandler<HTMLInputElement>;
    handleMouseUp: React.MouseEventHandler<HTMLInputElement>;
};

export const MusicControls = ({
    state,
    colors,
    duration,
    currentTime,
    loopMode,
    shuffle,
    disableNextSongButton,
    handleShuffle,
    handleLoopMode,
    onPlay,
    onNext,
    onPrev,
    handleChangeTime,
    handleMouseUp,
}: Props) => {
    const { currentTimeStr, durationStr } = useMemo(
        () => ({
            currentTimeStr: getHumanDuration(currentTime),
            durationStr: getHumanDuration(duration),
        }),
        [duration, currentTime]
    );

    const buttonColor = colors?.[0];

    return (
        <MusicControlsStyled className="music-controls">
            <Slider
                value={currentTime}
                duration={duration}
                onChangeTime={handleChangeTime}
                onMouseUp={handleMouseUp}
                color={buttonColor}
                getSliderValue={(value, duration) =>
                    getHumanDuration(value * duration)
                }
            />
            <Flex jc="space-between" width="100%" className="duration-numbers">
                <DurationText>{currentTimeStr}</DurationText>
                <DurationText>{durationStr}</DurationText>
            </Flex>
            <Flex jc="space-between" width="100%" className="control-buttons">
                <SmallControlButton
                    $color1={buttonColor}
                    className={`queue-button ${shuffle ? 'selected' : ''} `}
                    onClick={handleShuffle}
                >
                    <IconArrowsShuffle />
                </SmallControlButton>
                <Flex gap={20} className="playback-buttons">
                    <ControlButton className="control-button" onClick={onPrev}>
                        <IconPlayerTrackPrevFilled className="prev-icon-2" />
                        <IconPlayerTrackPrevFilled className="prev-icon-1" />
                    </ControlButton>
                    <ControlButton
                        className="control-button play-pause"
                        disabled={state === 'loading'}
                        onClick={onPlay}
                    >
                        <PlayPauseIcon
                            loading={
                                state === SongState.loading ||
                                state === SongState.loadingThenPlay
                            }
                            playling={state === 'playing'}
                        />
                    </ControlButton>
                    <ControlButton
                        className="control-button"
                        disabled={disableNextSongButton}
                        onClick={onNext}
                    >
                        <IconPlayerTrackNextFilled className="next-icon-1" />
                        <IconPlayerTrackNextFilled className="next-icon-2" />
                    </ControlButton>
                </Flex>
                <SmallControlButton
                    className={`queue-button ${
                        loopMode !== LoopMode.noloop ? 'selected' : ''
                    }`}
                    onClick={handleLoopMode}
                    $color1={buttonColor}
                >
                    {loopMode === LoopMode.loopone && <IconRepeatOnce />}
                    {loopMode !== LoopMode.loopone && <IconRepeat />}
                </SmallControlButton>
            </Flex>
        </MusicControlsStyled>
    );
};
