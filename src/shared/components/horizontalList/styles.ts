import styled from 'styled-components';
import { Button } from '../button';

export const ArrowButton = styled(Button)`
    position: absolute;
    right: 20px;
    top: -40px;
    min-width: 30px;
    width: 30px;
    height: 30px;
    min-height: 30px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.pageTopButton};
    z-index: 10;
    outline: 1px solid ${({ theme }) => theme.colors.border};

    &:hover {
        background: ${({ theme }) => theme.colors.sidebar};
    }

    &:active {
        transform: scale(0.96);
        transform-origin: top center;
    }

    svg {
        width: 20px;
        height: 20px;
    }

    &.left {
        right: 60px;
    }
`;

export const ListWrapper = styled.div<{ $overflowColor?: string }>`
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;

    @media (min-width: 1001px) {
        &.showLeft {
            &::before {
                display: block;
            }

            ${ArrowButton}.left {
                display: flex;
            }
        }

        &.showRight {
            &::after {
                display: block;
            }

            ${ArrowButton}.right {
                display: flex;
            }
        }
    }
`;

export const HorizontalListStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1000px) {
        & > *:first-child {
            margin-left: 20px;
        }

        & > *:last-child {
            margin-right: 20px;
        }
    }
`;
