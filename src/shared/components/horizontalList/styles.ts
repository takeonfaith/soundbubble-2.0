import styled from 'styled-components';
import { Button } from '../button';

export const ArrowButton = styled(Button)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    min-width: 36px;
    width: 36px;
    height: 36px;
    min-height: 36px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.pageBackground};
    z-index: 10;
    display: none;

    &:hover {
        background: ${({ theme }) => theme.colors.sidebar};
    }

    svg {
        width: 20px;
        height: 20px;
    }

    &.left {
        left: 4px;
    }

    &.right {
        right: 4px;
    }
`;

export const ListWrapper = styled.div<{ $overflowColor?: string }>`
    width: 100%;
    height: fit-content;
    position: relative;
    overflow: hidden;
    display: flex;

    @media (min-width: 1001px) {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0px;
            width: 10px;
            height: 100%;
            background: ${({ theme, $overflowColor }) =>
                $overflowColor ?? theme.colors.pageBackground};
            box-shadow: 10px 0 10px 20px
                ${({ theme, $overflowColor }) =>
                    $overflowColor ?? theme.colors.pageBackground};
            z-index: 1;
            display: none;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0px;
            width: 30px;
            height: 100%;
            background: ${({ theme, $overflowColor }) =>
                $overflowColor ?? theme.colors.pageBackground};
            box-shadow: -10px 0 10px 20px
                ${({ theme, $overflowColor }) =>
                    $overflowColor ?? theme.colors.pageBackground};
            z-index: 1;
            display: none;
        }

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
