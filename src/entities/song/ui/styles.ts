import { Button } from '@components/button';
import styled from 'styled-components';

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
`;

export const MoreInfoButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${({ theme }) => theme.colors.textColor};
    border: none;
    padding: 4px;
    margin-right: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    cursor: pointer;

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
    }
`;

export const SongStyled = styled.div<{ playing: boolean }>`
    width: 100%;
    height: 50px;
    background: ${({ playing, theme }) =>
        playing ? theme.colors.lightHover : 'transparent'};
    padding: 4px 8px;
    border-radius: calc(${({ theme }) => theme.borderRadius.mild} + 6px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.textColor};
    cursor: pointer;
    border: none;
    container-type: size;
    --icon-size: 18px;

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
    }

    .cover-children {
        svg {
            width: var(--icon-size);
            height: var(--icon-size);
        }
    }

    ${MoreInfoButton} {
        ${({ playing }) => (playing ? 'opacity: 1' : 'opacity: 0')};
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
    color: ${({ theme }) => theme.colors.greyText};

    svg {
        width: 22px;
        height: 22px;
    }
`;

export const SongButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

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

    @container (min-width: 700px) {
        display: none;
    }
`;
