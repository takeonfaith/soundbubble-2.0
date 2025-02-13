import { styled } from 'styled-components';
import { ANIMATION_DURATION, INITIAL_SCALE } from './constants';

export const PopupContainer = styled.div<{
    $coords: {
        top: number;
        left: number;
        transformOrigin: string;
    };
    $closeDelay: number;
}>`
    position: fixed;
    min-width: 150px;
    max-height: 99vh;
    top: ${({ $coords }) => $coords.top}px;
    left: ${({ $coords }) => $coords.left}px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.context};
    z-index: 1200;
    transform-origin: ${({ $coords }) => $coords.transformOrigin};
    overflow: hidden;
    outline: 1px solid ${({ theme }) => theme.colors.hover};
    animation: popupAppear ${ANIMATION_DURATION}ms forwards;
    overflow-y: auto;

    &.hidden {
        animation: popupDissapear ${ANIMATION_DURATION}ms forwards;

        @keyframes popupDissapear {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(${INITIAL_SCALE});
                opacity: 0;
            }
        }
    }

    @keyframes popupAppear {
        0% {
            transform: scale(${INITIAL_SCALE});
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
