// ts-expect-error dasdas
import { StyledSlider, StyledThumb, StyledTrack } from './styles';

const Thumb = (props: any) => {
    return <StyledThumb {...props} className={props.key}></StyledThumb>;
};

const Track = (props: any) => {
    return <StyledTrack {...props} className={`${props.key}`} />;
};

type Props = {
    max: number;
    value: number[];
    className?: string;
    color?: string;
    onAfterChange?: (value: number[]) => void;
    onChange?: (value: number[]) => void;
};

export const DoubleRangeSlider = ({
    max,
    value,
    className,
    onChange,
    color,
    onAfterChange,
}: Props) => {
    return (
        <StyledSlider
            $color={color}
            max={max}
            defaultValue={value}
            value={value}
            renderTrack={Track}
            renderThumb={Thumb}
            className={className}
            onChange={onChange}
            onAfterChange={onAfterChange}
        />
    );
};
