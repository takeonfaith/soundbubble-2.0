import { useRef, useState } from 'react';
import { Progress } from '../progress';
import { SLIDER_VALUE_BUBBLE_WIDTH } from './constants';
import { LoadedStripe, SliderValueBubbleStyled, SliderWrapper } from './styles';

type Props = {
    value: number;
    duration: number;
    loadedPercent: number;
    onChangeTime: (time: number) => void;
    onMouseUp: (time: number) => void;
    color?: string;
    getSliderValue?: (value: number, duration: number) => string;
};

export const Slider = ({
    value,
    duration,
    onChangeTime,
    onMouseUp,
    loadedPercent,
    color,
    getSliderValue = (value) => `${Math.floor(value * 100)}%`,
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
                onChangeTime(+(offsetX * duration).toFixed(2));
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
            console.log(+(offsetX * duration).toFixed(2));

            if (mouseDown) {
                onMouseUp(+(offsetX * duration).toFixed(2));
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

            onChangeTime(+(offsetX * duration).toFixed(2));
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
                onMouseUp(+(offsetX * duration).toFixed(2));
            }

            setMouseDown(false);
        }
    };

    return (
        <SliderWrapper
            className="song-slider"
            ref={rangeRef}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
        >
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
