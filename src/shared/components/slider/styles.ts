import styled from 'styled-components';
import { SLIDER_VALUE_BUBBLE_WIDTH } from './constants';

export const SliderValueBubbleStyled = styled.div`
    width: ${SLIDER_VALUE_BUBBLE_WIDTH}px;
    height: 20px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.pageBackground};
    color: ${({ theme }) => theme.colors.textColor};
    position: absolute;
    top: -30px;
    left: 0;
    display: flex;
    font-size: 0.7rem;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 100;
`;

export const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    &:hover ${SliderValueBubbleStyled} {
        transition: 0.2s opacity;
        opacity: 1;
    }
`;

export const SliderStyled = styled.input<{ color: string | undefined }>`
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.skeleton};
    background-image: linear-gradient(
        90deg,
        ${({ color, theme }) => color ?? theme.colors.textColor} 100%,
        white 50%
    );
    background-repeat: no-repeat;
    background-size: 0%;
    transition: 0.2s filter, 0.2s transform;
    cursor: pointer;
    filter: brightness(${({ theme }) => theme.colors.brightness});

    &:hover {
        transform: scaleY(2);
        border-radius: 30px;

        &::-webkit-slider-thumb {
            display: block;
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        filter: brightness(1.1);
    }

    &::-webkit-slider-thumb {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: ${({ theme }) => theme.colors.shadow};
        background: ${({ color, theme }) =>
            color ?? theme.colors.pageBackground};
        transition: 0.2s;
        opacity: 0;

        &:hover {
            box-shadow: 0 0 0px 10px ${({ theme }) => theme.colors.hover};
        }
    }

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    @media (max-width: 768px) {
        height: 5px;
    }
`;

export const HoverStripe = styled.div`
    height: 8px;
    position: absolute;
    background: ${({ theme }) => theme.colors.skeleton};
    border-radius: 20px 0 0 20px;
    pointer-events: none;
`;
