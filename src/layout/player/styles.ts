import { styled } from 'styled-components';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';
import { hexToRgbA } from '../../shared/funcs/hexToRgba';

export const PlayerStyled = styled.div<{ $background: string }>`
    width: calc(100% - var(--sidebar-width) - var(--page-gap));
    border-radius: var(--desktop-page-radius);
    margin: var(--page-gap);
    min-height: var(--player-size);
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    transition: 0.5s background-color;
    background-color: ${({ $background }) => $background};
    background-image: ${({ theme }) =>
        `linear-gradient(${theme.colors.playerDarkening}, ${theme.colors.playerDarkening})`};
    gap: 20px;
    position: relative;
    z-index: 10;
    position: relative;

    .control-buttons {
        order: 3;
        width: fit-content;

        .play-pause {
            background: ${({ theme, $background }) =>
                `rgba(${hexToRgbA($background)}, 0.1)` ??
                theme.colors.darkHover};
            filter: brightness(${({ theme }) => theme.colors.brightness});
        }

        .playback-buttons {
            gap: 0;

            .control-button {
                color: ${({ theme }) => theme.colors.textColor};
                transform: scale(0.7);
            }
        }

        .queue-button {
            color: ${({ theme }) => theme.colors.textColor};
            transform: scale(0.9);

            &.selected {
                background: ${({ theme }) => theme.colors.hover};

                & svg {
                    color: ${({ theme }) => theme.colors.textColor};
                }
            }
        }
    }

    .music-controls {
        flex-direction: row-reverse;
        gap: 60px;
        position: relative;
        max-width: 1000px;

        @media (max-width: 1270px) {
            flex-direction: column-reverse;
            gap: 6px;
        }
    }

    .song-slider {
        height: 3px;
        width: 100%;
        margin-right: 40px;
        min-width: 150px;

        &::-webkit-slider-thumb {
            width: 10px;
            height: 10px;
        }

        @media (max-width: 1270px) {
            width: 350px;
            margin-top: -4px;
            margin-right: 0;
        }
    }

    .duration-numbers {
        opacity: 0.6;
        position: absolute;
        right: -5px;
        width: 100%;
        top: 24px;
        min-width: 70px;
        width: calc(100% - 274px);
        color: ${({ theme }) => theme.colors.textColor};
        opacity: 0.4;
        pointer-events: none;

        @media (max-width: 1270px) {
            right: none;
            left: calc(50% + 2px);
            top: 40px;
            transform: translateX(-50%);
            width: 352px;
        }

        & > * {
            font-size: 0.65rem;
            min-width: 36px;
            display: block;
        }
    }

    @media (max-width: 1900px) {
        width: calc(100% - var(--page-gap) * 2);
    }

    @media (max-width: 1000px) {
        padding: 6px;
        min-height: auto;
        border-radius: 10px;
        margin: 0 12px;
        width: calc(100% - 24px);
        box-shadow: 0px -10px 10px 0px ${({ theme }) => theme.colors.pageBackground};
        gap: 0;

        .music-controls {
            display: none;
        }
    }
`;

export const PlayerMusicControls = styled.div`
    width: 100%;

    @media (max-width: 1270px) {
        transform: translateY(-7px);
    }
`;

export const SongTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: 200;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 1000px) {
        font-size: 0.95rem;
    }
`;

export const SongStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 300px;
    max-width: 300px;
    overflow: hidden;

    @media (max-width: 1000px) {
        min-width: calc(100% - 40px);
        width: calc(100% - 40px);
    }
`;

export const LyricsWrapper = styled(BeautifulBackground)`
    overflow-y: auto;
    height: 100%;
    padding: 50px 20px;
    animation: none;
    scroll-padding-bottom: 300px;

    & > * {
        gap: 10px;
        font-size: 1.4rem;
    }
`;

export const MobilePlayButton = styled.div`
    display: none;

    @media (max-width: 1000px) {
        display: block;
        width: fit-content;
    }
`;

export const PlayerActionButtons = styled.div`
    min-width: 300px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    & .like-button.liked {
        filter: brightness(${({ theme }) => theme.colors.brightness});
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;
