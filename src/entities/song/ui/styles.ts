import { Button } from '@components/button';
import styled from 'styled-components';
import { SONG_RADIUS } from '../constants';

export const PlayButton = styled.div`
    border: none;
    transition: 0.2s opacity;
    cursor: pointer;

    width: var(--icon-size);
    height: var(--icon-size);
`;

const Overlay = styled.div`
    position: absolute;
    z-index: 1;
    background: #0e0e0e;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.overlay};
    border-radius: ${SONG_RADIUS};
`;

export const MoreInfoButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 35px;
    height: 35px;
    min-height: 35px;
    color: ${({ theme }) => theme.colors.textColor};
    border: none;
    padding: 4px;
    margin-right: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    cursor: pointer;
    opacity: 0;

    &:hover {
        background: ${({ theme }) => theme.colors.hover};
    }

    svg {
        width: var(--icon-size);
        height: var(--icon-size);
    }

    @container (max-width: 699px) {
        opacity: 1;
        margin-right: 0px;
    }
`;

export const PlayOverlay = styled(Overlay)`
    left: 0;
    top: 0;
    opacity: 0;
`;

export const PauseOverlay = styled(Overlay)`
    left: 0;
    top: 0;

    .playing-animation {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ${PlayButton} {
        opacity: 0;
    }

    svg {
        stroke-width: 1;
    }
`;

export const LoadingOverlay = styled(Overlay)`
    left: 0;
    top: 0;
`;

export const SongLeft = styled.div<{ $color1: string }>`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    ${Overlay} {
        svg {
            color: ${({ $color1 }) => $color1};
        }
    }

    @container (min-width: 700px) {
        gap: 20px;
    }

    @container (max-width: 699px) {
        gap: 12px;
        overflow: hidden;
        width: calc(100% - 40px);
    }
`;

export const SongStyled = styled.div`
    width: 100%;
    height: 50px;
    padding: 4px 8px;
    border-radius: calc(${({ theme }) => theme.borderRadius.mild} + 6px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
    border: none;
    container-type: size;
    transition: 0.1s background;
    --icon-size: 18px;

    &.disabled {
        opacity: 0.5;
        pointer-events: none;

        .like-button {
            display: flex;
        }

        .duration {
            display: none;
        }
    }

    &.playing {
        background: ${({ theme }) => theme.colors.hover};
    }

    & .duration {
        font-size: 0.7rem;
        font-weight: 400;
        width: 35px;
        text-align: center;
    }

    @media (hover: hover) {
        &:hover {
            background: ${({ theme }) => theme.colors.hover};
            /* box-shadow: 0 0 20px #14141473; */

            ${PauseOverlay} {
                ${PlayButton} {
                    opacity: 1;
                }

                .playing-animation {
                    opacity: 0;
                }
            }

            .cover-children {
                ${PlayOverlay} {
                    opacity: 1;
                }
            }

            ${MoreInfoButton} {
                opacity: 1;
            }

            .like-button {
                display: flex;
            }

            .duration {
                display: none;
            }
        }
    }

    &:focus {
        background: ${({ theme }) => theme.colors.hover};
        outline: none;
    }

    &:active {
        background: ${({ theme }) => theme.colors.darkHover};
    }

    .cover-children {
        svg {
            width: var(--icon-size);
            height: var(--icon-size);
        }
    }

    &.playing {
        ${MoreInfoButton} {
            opacity: 1;
        }
    }

    @media (max-width: 1000px) {
        padding: 0;

        &:active {
            background: transparent;
        }

        .general-cover {
            min-width: 40px;
            width: 40px;
            height: 40px;
        }

        &.playing {
            background: transparent;
        }
    }

    /* @container (max-width: 699px) {
    height: 60px;
  } */
`;

export const SongInfo = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;

    @container (min-width: 700px) {
        flex-direction: row;
        align-items: center;
    }

    @container (max-width: 699px) {
        flex-direction: column;
    }
`;

export const SongName = styled.div`
    font-weight: 200;
    opacity: 0.85;
    font-size: 1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 90%;

    @container (min-width: 700px) {
        white-space: nowrap;
    }
`;

export const SongNameAndListens = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @container (min-width: 700px) {
        width: 100%;
    }
`;

export const SongAuthors = styled.div`
    width: 100%;
`

export const Listens = styled.div`
    display: flex;
    align-items: center;
    gap: 1px;
    opacity: 0.7;
    font-size: 0.8rem;

    @container (min-width: 700px) {
        display: none;
    }

    &.outside {
        @container (min-width: 700px) {
            display: flex;
            min-width: 200px;
        }

        @container (max-width: 699px) {
            display: none;
        }
    }

    svg {
        width: 12px;
        height: 12px;
    }
`;

export const LikeButton = styled(Button)`
    width: 30px;
    min-height: 30px;
    color: ${({ theme }) => theme.scheme.grey.text};

    svg {
        width: 22px;
        height: 22px;
    }
`;

export const SongButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    & .like-button {
        display: none;
    }

    @container (max-width: 699px) {
        .like-button {
            display: none;
        }

        ${MoreInfoButton} {
            opacity: 0.4;
        }
    }
`;

export const SongSkeletonStyled = styled.div`
    container-type: size;
    width: 100%;
    height: 50px;
`;

export const HorizontalSongStyled = styled.div`
    width: 100%;

    @container (max-width: 699px) {
        display: none;
    }
`;

export const VerticalSongStyled = styled.div`
    height: 60px;

    &.no-background > div {
        background: transparent;
    }

    @container (min-width: 700px) {
        display: none;
    }
`;

export const SerialNumberStyled = styled.span`
    opacity: 0.5;
    font-weight: 300;
    min-width: 50px;
    font-size: 0.9rem;

    @container (max-width: 699px) {
        min-width: 35px;
        font-size: 0.8rem;
    }
`;
