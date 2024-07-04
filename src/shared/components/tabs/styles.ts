import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TabsStyled = styled.div`
    width: fit-content;
    padding: 4px;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.pageBackground2};
    display: flex;
    align-items: center;
    gap: 0px;
    position: relative;
    /* box-shadow: ${({ theme }) => theme.colors.shadow}; */

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TabItemStyled = styled(Link)`
    min-width: calc(100% / 3);
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 16px;
    cursor: pointer;
    user-select: none;
    z-index: 1;
    font-size: 0.95rem;
    opacity: 0.7;
    transition: 0.2s color;

    &.selected {
        color: #fff;
        opacity: 1;
    }

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.hover};
        }
    }

    @media (max-width: 1000px) {
        font-size: 0.8rem;
        height: 32px;
        padding: 4px 12px;
    }
`;

export const CurrentTabItem = styled.div<{ $width: string; $shift: number }>`
    width: ${({ $width }) => $width};
    padding: 10px 16px;
    height: 38px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.blue.action};
    position: absolute;
    transition: 0.2s;
    transform: translateX(
        calc(${({ $shift }) => $shift * 100}% - ${({ $shift }) => $shift * 4}px)
    );
    left: 4px;
    top: 4px;
    z-index: 0;

    @media (max-width: 1000px) {
        height: 32px;
        padding: 4px 12px;
    }
`;
