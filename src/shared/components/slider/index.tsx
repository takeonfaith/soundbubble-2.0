import { useRef, useState } from 'react';
import { Progress } from '../progress';
import { SLIDER_VALUE_BUBBLE_WIDTH } from './constants';
import { LoadedStripe, SliderValueBubbleStyled, SliderWrapper } from './styles';
import { DoubleRangeSlider } from '../double-range';

type Props = {
    value: number;
    duration: number;
    loadedPercent?: number;
    loopSegment?: [number, number] | null;
    onChangeLoopSegment?: (value: number[]) => void;
    onAfterChangeLoopSegment?: (value: number[]) => void;
    onChangeTime: (time: number) => void;
    onMouseUp: (time: number) => void;
    color?: string;
    showSegment?: boolean;
    getSliderValue?: (value: number, duration: number) => string;
};

export const Slider = ({
    value,
    duration,
    onChangeTime,
    onMouseUp,
    loadedPercent,
    loopSegment,
    onChangeLoopSegment,
    onAfterChangeLoopSegment,
    color,
    showSegment,
    getSliderValue = (value) => `${(value * 100).toFixed(0)}%`,
}: Props) => {
    const [sliderValuePos, setSliderValuePos] = useState(0);
    const rangeRef = useRef<HTMLInputElement | null>(null);
    const [mouseDown, setMouseDown] = useState(false);

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (rangeRef.current && duration !== 0) {
            const rect = rangeRef.current.getBoundingClientRect();
            const offsetX = Math.max(
                (event.clientX - rect.left) / rect.width,
                0
            );

            setSliderValuePos(Math.min(offsetX, 1));
            if (mouseDown) {
                onChangeTime(
                    Math.min(+(offsetX * duration).toFixed(2), duration)
                );
            }
        }
    };

    const handleMouseUp = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (rangeRef.current && duration !== 0) {
            const rect = rangeRef.current.getBoundingClientRect();
            const offsetX = Math.max(
                (event.clientX - rect.left) / rect.width,
                0
            );
            console.log(mouseDown, +(offsetX * duration).toFixed(2));

            if (mouseDown) {
                onMouseUp(Math.min(+(offsetX * duration).toFixed(2), duration));
            }

            setMouseDown(false);
        }
    };

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (rangeRef.current && duration !== 0) {
            const rect = rangeRef.current.getBoundingClientRect();
            const offsetX = Math.max(
                (event.clientX - rect.left) / rect.width,
                0
            );

            setMouseDown(true);

            onChangeTime(Math.min(+(offsetX * duration).toFixed(2), duration));
        }
    };

    const handleMouseLeave = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (rangeRef.current && duration !== 0) {
            const rect = rangeRef.current.getBoundingClientRect();
            const offsetX = Math.max(
                (event.clientX - rect.left) / rect.width,
                0
            );

            if (mouseDown) {
                onMouseUp(Math.min(+(offsetX * duration).toFixed(2), duration));
                setMouseDown(false);
            }
        }
    };

    const handleTouchStart = (event) => {
        if (rangeRef.current && duration !== 0) {
            const touch = event.touches[0];
            const rect = rangeRef.current.getBoundingClientRect();
            const offsetX = Math.max(
                (touch.clientX - rect.left) / rect.width,
                0
            );

            setMouseDown(true);

            onChangeTime(Math.min(+(offsetX * duration).toFixed(2), duration));
        }
    };

    return (
        <SliderWrapper
            className={`song-slider ${mouseDown ? 'down' : ''}`}
            ref={rangeRef}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
        >
            {showSegment && loopSegment && (
                <DoubleRangeSlider
                    max={duration}
                    value={loopSegment}
                    onChange={onChangeLoopSegment}
                    onAfterChange={onAfterChangeLoopSegment}
                    className="segment-slider"
                    color={color}
                />
            )}
            {duration !== 0 && (
                <SliderValueBubbleStyled
                    style={{
                        left: `calc(${sliderValuePos * 100}% - ${
                            SLIDER_VALUE_BUBBLE_WIDTH / 2
                        }px)`,
                    }}
                >
                    {getSliderValue(sliderValuePos, duration)}
                </SliderValueBubbleStyled>
            )}
            <Progress
                value={value / (duration ?? 1)}
                color={color}
                className="progress"
            />
            <LoadedStripe
                style={{
                    width: `${loadedPercent}%`,
                }}
            />
        </SliderWrapper>
    );
};
