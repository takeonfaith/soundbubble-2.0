import styled from 'styled-components';
import { SLIDER_VALUE_BUBBLE_WIDTH } from './constants';

export const LoadedStripe = styled.div`
    height: var(--slider-size);
    background: ${({ theme }) => theme.colors.skeleton};
    border-radius: 020px;
    pointer-events: none;
    border-radius: 4px;
    position: absolute;
    left: 0;
    transition: 0.2s width, 0.2s height;
    z-index: -1;
`;

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
    user-select: none;
    overflow: hidden;
    z-index: 100;
`;

export const SliderWrapper = styled.div`
    --slider-size: 4px;

    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    height: 10px;
    transition: 0.1s transform;
    border-radius: 4px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        height: 10px;
        width: calc(100% + 30px);
        cursor: pointer;
    }

    & .progress {
        width: 100%;
        height: var(--slider-size);
        border-radius: 4px;
        transition: 0.2s filter, 0.2s transform;
        cursor: pointer;
        filter: brightness(${({ theme }) => theme.colors.brightness});
        padding: 0;
        outline: none;
        background: ${({ theme }) => theme.colors.skeleton};
        transition: 0.2s height, 0.2s filter;
        overflow: hidden;

        & > div {
            transition: none;
            width: 0;
            border-radius: 4px;
        }

        &:focus {
            outline: none;
        }

        &:active {
            filter: brightness(
                calc(
                    ${({ theme }) =>
                        theme.colors.brightness + theme.colors.brightnessDiff}
                )
            );
        }
    }

    &:hover {
        --slider-size: 10px;

        &.down {
            &::after {
                content: '';
                position: fixed;
                left: -70%;
                bottom: 50%;
                transform: translateY(10%);
                height: 100vh;
                width: 100vw;
                z-index: 1000;
            }
        }

        ${SliderValueBubbleStyled} {
            transition: 0.2s opacity;
            opacity: 1;
        }

        & .progress {
            height: var(--slider-size);
        }
    }

    @media (max-width: 768px) {
        --slider-size: 8px;
    }
`;
