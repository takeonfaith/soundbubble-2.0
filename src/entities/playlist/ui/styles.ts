import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from '../../../shared/components/button';
import { PLAYLIST_RADIUS } from '../constants';

export const ControlButton = styled(Button)<{ $color: string }>`
    position: absolute;
    bottom: 6px;
    left: auto;
    right: 6px;
    width: 35px;
    height: 35px;
    min-height: auto;
    border-radius: 100px;
    color: ${({ $color }) => $color};
    background: ${({ theme }) => theme.colors.pageTopButton};
    transition: 0.2s opacity;
    opacity: 0;
    z-index: 10;

    &.vertical {
        height: 40px;
        width: 40px;
        right: auto;
        left: 16px;
        bottom: 60px;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.pageBackground2};
    }
`;

export const PlaylistStyled = styled(Link)<{ $color1: string }>`
    --size: 34px;

    gap: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: fit-content;
    color: ${({ theme }) => theme.colors.textColor};
    position: relative;
    text-decoration: none;
    width: 100%;
    padding: 6px 8px;
    border-radius: 6px;
    overflow: hidden;

    &.vertical {
        --size: calc((100vw - var(--sidebar-width) - 148px) / 6);

        overflow: visible;
        padding: 0;
        width: var(--size);
        align-items: flex-start;
        flex-direction: column;
    }

    &.playing {
        ${ControlButton} {
            opacity: 1;
            box-shadow: 0 0px 10px #00000017;
        }
    }

    .authors {
        font-size: 0.75rem;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: var(--size);
        height: var(--size);
        transition: 0.2s opacity;
        box-shadow: 0 50px 100px ${({ $color1 }) => $color1};
        top: 0%;
        opacity: 0.2;
        border-radius: ${PLAYLIST_RADIUS};
    }

    &:hover:before {
        opacity: 0.5;
    }

    &:hover {
        &.horizontal {
            background: ${({ theme }) => theme.colors.hover};
        }

        &.vertical {
            background: none;
        }

        ${ControlButton} {
            opacity: 1;
        }
    }

    @media (max-width: 1400px) {
        &.vertical {
            --size: calc((100vw - var(--sidebar-width) - 132px) / 5);
        }
    }

    @media (max-width: 1180px) {
        &.vertical {
            --size: calc((100vw - var(--sidebar-width) - 116px) / 4);
        }
    }

    @media (max-width: 1000px) {
        padding: 8px 0;

        &.vertical {
            overflow: hidden;
            --size: calc(100vw / 4 - 22px);
        }

        .general-cover {
            min-width: 40px;
            min-height: 40px;
        }

        &::before {
            display: none;
        }
    }

    @media (max-width: 768px) {
        &.vertical {
            --size: calc(100vw / 3 - 27px);
        }
    }

    @media (max-width: 500px) {
        &.vertical {
            --size: calc(100vw / 2 - 32px);
        }
    }
`;

export const PalylistTitle = styled.div`
    font-size: 0.95rem;
    font-weight: 200;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
`;

export const PalylistAuthors = styled.div`
    font-size: 0.8rem;
`;
