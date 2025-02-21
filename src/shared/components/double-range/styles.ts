import ReactSlider from 'react-slider';
import { styled } from 'styled-components';

export const StyledThumb = styled.div`
    height: 14px;
    width: 4px;
    text-align: center;
    color: #fff;
    border-radius: 2px;
    cursor: grab;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.2s height, 0.2s width;
`;

export const StyledTrack = styled.div`
    top: 0;
    bottom: 0;

    &.track-0 {
        border-radius: 4px 0 0 4px;
    }

    &.track-2 {
        border-radius: 0 4px 4px 0;
    }
`;

export const StyledSlider = styled(ReactSlider)<{ $color: string }>`
    width: 100%;
    height: 4px;
    transition: 0.2s height;

    &::before {
        content: '';
        height: 10px;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        position: absolute;
        z-index: 1;
    }

    ${StyledThumb} {
        background: ${({ $color }) => $color};
    }

    ${StyledTrack} {
        &.track-1 {
            background: ${({ $color }) => $color};
            opacity: 0.5;
        }

        &.track-0,
        &.track-2 {
            background: gray;
            opacity: 2;
        }
    }

    &:hover {
        height: 10px;

        ${StyledThumb} {
            width: 5px;
            height: 20px;
        }
    }
`;
