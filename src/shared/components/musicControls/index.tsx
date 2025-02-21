import { Flex } from '@components/flex';
import { LoopMode, SongState } from '@song/model/types';
import {
    IconArrowsShuffle,
    IconPlayerTrackNextFilled,
    IconPlayerTrackPrevFilled,
    IconRepeat,
    IconRepeatOnce,
} from '@tabler/icons-react';
import { getHumanDuration } from '../../../entities/song/lib/getHumanDuration';
import { IconRepeatSegment } from '../../icons/IconRepeatSegment';
import { PlayPauseIcon } from '../playPauseIcon';
import { Slider } from '../slider';
import { Duration } from './Duration';
import {
    ControlButton,
    MusicControlsStyled,
    SmallControlButton,
} from './styles';
import Popover from '../popover';

type Props = {
    state: SongState | null;
    colors: string[] | undefined;
    duration: number;
    currentTime: number;
    loopMode: LoopMode;
    shuffle: boolean;
    disableNextSongButton: boolean;
    loadedPercent: number;
    loopSegment: [number, number] | null;
    handleChangeLoopSegment: (range: number[]) => void;
    handleAfterChangeLoopSegment: (range: number[]) => void;
    handleShuffle: () => void;
    handleLoopMode: () => void;
    onPlay: () => void;
    onPrev: () => void;
    onNext: () => void;
    handleChangeTime: (time: number) => void;
    handleMouseUp: (time: number) => void;
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
    loadedPercent,
    loopSegment,
    handleChangeLoopSegment,
    handleAfterChangeLoopSegment,
}: Props) => {
    const buttonColor = colors?.[0];
    const loopIcons = [
        <IconRepeat />,
        <IconRepeat />,
        <IconRepeatOnce />,
        <IconRepeatSegment />,
    ];

    return (
        <MusicControlsStyled className="music-controls">
            <Slider
                loadedPercent={loadedPercent}
                value={currentTime}
                duration={duration}
                onChangeTime={handleChangeTime}
                onMouseUp={handleMouseUp}
                color={buttonColor}
                loopSegment={loopSegment}
                onChangeLoopSegment={handleChangeLoopSegment}
                onAfterChangeLoopSegment={handleAfterChangeLoopSegment}
                showSegment={loopMode === LoopMode.loopsegment}
                getSliderValue={(value, duration) =>
                    getHumanDuration(value * duration)
                }
            />
            <Duration duration={duration} currentTime={currentTime} />
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
                <Popover
                    content={
                        loopMode === LoopMode.loopsegment ? 'Loop segment' : null
                    }
                >
                    <SmallControlButton
                        className={`queue-button ${
                            loopMode !== LoopMode.noloop ? 'selected' : ''
                        } ${
                            loopMode === LoopMode.loopsegment ? 'segment' : ''
                        }`}
                        onClick={handleLoopMode}
                        $color1={buttonColor}
                    >
                        {loopIcons[loopMode]}
                    </SmallControlButton>
                </Popover>
            </Flex>
        </MusicControlsStyled>
    );
};
