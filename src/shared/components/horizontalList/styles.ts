import styled from 'styled-components';
import { Button } from '../button';

export const ArrowButton = styled(Button)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    min-width: 40px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.pageBackground};
    z-index: 10;
    display: none;

    &.left {
        left: 0px;
    }

    &.right {
        right: 0px;
    }
`;

export const ListWrapper = styled.div`
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
            left: -20px;
            width: 20px;
            height: 100%;
            background: ${({ theme }) => theme.colors.pageBackground2};
            box-shadow: 10px 0 10px 10px
                ${({ theme }) => theme.colors.pageBackground2};
            pointer-events: none;
            z-index: 1;
            display: none;
        }

        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: -20px;
            width: 20px;
            height: 100%;
            background: ${({ theme }) => theme.colors.pageBackground2};
            box-shadow: -10px 0 10px 10px
                ${({ theme }) => theme.colors.pageBackground2};
            pointer-events: none;
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
    gap: 20px;
    max-width: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;

    /* &::-webkit-scrollbar {
        display: none;
    } */
`;
