import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from '../../../shared/components/button';
import { PLAYLIST_RADIUS } from '../constants';

export const ControlButton = styled(Button)<{ $color: string }>`
    position: absolute;

    bottom: 60px;
    left: 16px;
    right: auto;
    width: 40px;
    height: 40px;
    min-height: auto;
    border-radius: 100px;
    color: ${({ $color }) => $color};
    background: ${({ theme }) => theme.colors.pageTopButton} !important;
    transition: 0.1s opacity;
    opacity: 0;
    z-index: 10;

    svg {
        filter: brightness(${({ theme }) => theme.colors.brightness});
    }

    & .playing-animation {
        filter: brightness(${({ theme }) => theme.colors.brightness});
    }

    &.horizontal {
        bottom: 6px;
        left: auto;
        right: 6px;
        width: 35px;
        height: 35px;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.pageBackground2};
    }
`;

export const PlaylistStyled = styled(Link)<{ $color1: string }>`
    --size: calc((100vw - var(--sidebar-width)) / 6 - 25.4px);

    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: fit-content;
    color: ${({ theme }) => theme.colors.textColor};
    position: relative;
    text-decoration: none;
    width: var(--size);
    padding: 0;
    border-radius: 6px;
    overflow: visible;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: var(--size);
        height: var(--size);
        transition: 0.2s opacity;
        box-shadow: 0 50px 70px ${({ $color1 }) => $color1};
        top: 0%;
        opacity: 0.2;
        border-radius: ${PLAYLIST_RADIUS};
    }

    & .like-button {
        position: absolute;
        bottom: -4px;
        right: 0px;
        z-index: 1;
        border-radius: 20px;
        color: ${({ $color1 }) => $color1 ?? 'darkgrey'};
        filter: brightness(${({ theme }) => theme.colors.brightness});

        &:hover {
            color: ${({ $color1 }) => $color1 ?? 'darkgrey'};
            background: ${({ theme }) => theme.colors.pageBackground};
            filter: brightness(1);
        }
    }

    &.horizontal {
        --size: 34px;
        overflow: hidden;
        padding: 6px 8px;
        width: 100%;
        flex-direction: row;
        align-items: center;

        &::before {
            display: none;
        }
    }

    &.playing {
        ${ControlButton} {
            opacity: 1;
            border: 1px solid ${({ theme }) => theme.colors.border};
        }
    }

    .authors {
        font-size: 0.75rem;
    }

    @media (hover: hover) {
        &:hover:before {
            opacity: 0.4;
        }

        &:hover {
            &.vertical {
                background: none;
            }

            &.horizontal {
                background: ${({ theme }) => theme.colors.hover};
            }

            ${ControlButton} {
                opacity: 1;
            }
        }
    }

    @media (max-width: 1350px) {
        &.vertical {
            --size: calc((100vw - var(--sidebar-width)) / 5 - 27.2px);
        }
    }

    @media (max-width: 1200px) {
        &.vertical {
            --size: calc((100vw - var(--sidebar-width)) / 4 - 30px);
        }
    }

    @media (max-width: 1000px) {
        &.vertical {
            --size: calc(100vw / 4 - 25px);
        }

        &.horizontal {
            padding: 6px 0px;
            --size: 40px;
        }

        &::before {
            display: none;
        }
    }

    @media (max-width: 700px) {
        &.vertical {
            --size: calc(100vw / 3 - 32px);
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
