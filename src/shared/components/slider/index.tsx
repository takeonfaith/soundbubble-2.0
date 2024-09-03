import { useMemo, useRef, useState } from 'react';
import { SLIDER_VALUE_BUBBLE_WIDTH } from './constants';
import {
    HoverStripe,
    SliderStyled,
    SliderValueBubbleStyled,
    SliderWrapper,
} from './styles';

type Props = {
    value: number;
    duration: number;
    onChangeTime: React.ChangeEventHandler<HTMLInputElement>;
    onMouseUp: React.MouseEventHandler<HTMLInputElement>;
    color?: string;
    getSliderValue?: (value: number, duration: number) => string;
};

export const Slider = ({
    value,
    duration,
    onChangeTime,
    onMouseUp,
    color,
    getSliderValue = (value) => `${Math.floor(value * 100)}%`,
}: Props) => {
    const [sliderValuePos, setSliderValuePos] = useState(0);
    const rangeRef = useRef<HTMLInputElement | null>(null);

    const { getBackgroundSize } = useMemo(
        () => ({
            getBackgroundSize: {
                backgroundSize: `calc(${(value * 100) / duration}%) 100%`,
            },
        }),
        [duration, value]
    );

    const handleMouse = (
        event: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        if (rangeRef.current && duration !== 0) {
            const rect = rangeRef.current.getBoundingClientRect();
            const offsetX = Math.max(
                (event.clientX - rect.left) / rect.width,
                0
            );

            setSliderValuePos(offsetX);
        }
    };

    return (
        <SliderWrapper className="song-slider" ref={rangeRef}>
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
            <SliderStyled
                style={getBackgroundSize}
                color={color}
                type="range"
                value={value}
                max={duration}
                min={0}
                onChange={onChangeTime}
                onMouseMove={handleMouse}
                onMouseUp={onMouseUp}
                onMouseLeave={() => setSliderValuePos(0)}
            />
            <HoverStripe style={{ width: `${sliderValuePos * 100}%` }} />
        </SliderWrapper>
    );
};
