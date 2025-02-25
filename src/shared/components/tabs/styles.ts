import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../constants/screenSize';

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

    &.chips {
        background: transparent;
        gap: 4px;
        padding: 0;
    }

    ${MEDIA_QUERIES.isMobile} {
        width: 100%;
        background: transparent;
    }
`;

export const TabItemStyled = styled(Link)<{ $width?: string; $height: string }>`
    min-width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 16px;
    cursor: pointer;
    user-select: none;
    z-index: 0;
    font-size: 0.9rem;
    font-weight: 300;
    opacity: 0.7;
    transition: 0.2s color, 0.5s background;

    &.chips {
        min-width: calc(${({ $width }) => $width} - 3px);
        border-radius: 20px;
        font-size: 0.9rem;
        opacity: 1;

        &.selected {
            color: #fff;
        }
    }

    &.selected {
        color: ${({ theme }) => theme.colors.textColor};
        opacity: 1;
        font-weight: 400;
        background: transparent;
        font-size: 0.85rem;
    }

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.hover};
        }
    }

    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.9rem;
        height: 32px;
        padding: 4px 12px;

        &.selected {
            color: ${({ theme }) => theme.scheme.blue.main};
        }
    }
`;

export const CurrentTabItem = styled.div<{
    $width: string;
    $height: string;
    $shift: string;
}>`
    width: ${({ $width }) => $width};
    padding: 10px 16px;
    height: ${({ $height }) => $height};
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.context};
    position: absolute;
    transition: 0.2s transform;
    transform: translateX(${({ $shift }) => $shift});
    left: 4px;
    top: 4px;
    z-index: 0;
    outline: 1px solid ${({ theme }) => theme.colors.border};

    &.chips {
        transform: translateX(
            calc(${({ $shift }) => `${$shift} * 100% + 4px * ${$shift}`})
        );
        border-radius: 20px;

        left: 0;
        top: 0;
        background: ${({ theme }) => theme.scheme.blue.action};
    }

    ${MEDIA_QUERIES.isMobile} {
        height: 32px;
        padding: 4px 12px;
    }
`;
