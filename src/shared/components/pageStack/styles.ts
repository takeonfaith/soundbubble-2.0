import styled from 'styled-components';
import { PAGE_TRANSITION_DURATION } from './constants';

export const PageStackWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.modal};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    overflow: auto;
    z-index: 10;
    transition: ${PAGE_TRANSITION_DURATION / 1000}s scale ease-out,
        ${PAGE_TRANSITION_DURATION / 1000}s opacity;

    &.slide {
        animation: slideForward ${PAGE_TRANSITION_DURATION / 1000}s forwards;
        transform: translateX(100%);

        @keyframes slideForward {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(0px);
            }
        }
    }

    &.back {
        animation: slideback ${PAGE_TRANSITION_DURATION / 1000}s forwards;
        transform: translateX(0%);
        opacity: 1;

        @keyframes slideback {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(100%);
            }
        }
    }

    &.back-prev {
        scale: 0.9;
        opacity: 0;
    }
`;
