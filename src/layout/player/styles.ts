import { styled } from 'styled-components';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';
import { hexToRgbA } from '../../shared/funcs/hexToRgba';
import { ANIMATION_DURATION } from './constants';
import { Button } from '../../shared/components/button';

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
            color: ${({ theme }) => theme.colors.textColor} !important;
            transform: scale(0.9);

            &.selected {
                background: ${({ theme }) => theme.colors.hover};

                & svg {
                    color: ${({ theme }) => theme.colors.textColor};
                }

                &::before {
                    background: ${({ theme }) => theme.colors.textColor};
                }
            }
        }
    }

    .music-controls {
        flex-direction: row-reverse;
        gap: 60px;
        position: relative;
        max-width: 1000px;

        @media (max-width: 2270px) {
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

        @media (max-width: 2270px) {
            width: 400px;
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

        @media (max-width: 2270px) {
            right: none;
            left: calc(50% + 2px);
            top: 40px;
            transform: translateX(-50%);
            width: 404px;
        }

        & > * {
            font-size: 0.65rem;
            min-width: 36px;
            display: block;
        }
    }

    @media (max-width: 1340px) {
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

    @media (max-width: 2270px) {
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

    @media (max-width: 1340px) {
        min-width: 200px;
        max-width: 200px;
    }

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
    gap: 14px;

    & .volume-button {
        button {
            color: ${({ theme }) => theme.colors.textColor};
        }
    }

    & .volume-button:hover ~ button {
        opacity: 0;
        pointer-events: none;
    }

    & .like-button.liked {
        filter: brightness(${({ theme }) => theme.colors.brightness});
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const FriendsList = styled.div`
    width: 150px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    pointer-events: none;
    opacity: 0;
    transition: 0.3s opacity, 0.3s right;
    position: absolute;
    right: 100px;
    z-index: 10;
    padding: 6px 10px;

    button {
        font-size: 0.8rem;
        min-width: 30px;
        min-height: 30px;
        height: 30px;
        border-radius: 100%;
        background: ${({ theme }) => theme.colors.hover};
    }

    .general-cover {
        cursor: pointer;
    }
`;

export const ShareButtonStyled = styled(Button)`
    display: flex;
    align-items: center;
    width: 42px;

    &.has-hover {
        &:hover {
            ${FriendsList} {
                background: ${({ theme }) => theme.colors.modal};
                opacity: 1;
                right: 162px;
                pointer-events: all;
                padding: 10px;
                border-radius: 50px;
            }
        }
    }
`;

export const SendAnimationStyled = styled.div`
    position: absolute;
    opacity: 0;
    pointer-events: none;
    z-index: 10;

    &.animation1 {
        animation: send1 ${ANIMATION_DURATION / 1000}s forwards linear;
        @keyframes send1 {
            0% {
                transform: translate(0, 0);
                opacity: 0;
            }
            50% {
                transform: translate(-10px, -20px);
                opacity: 1;
            }
            100% {
                transform: translate(-30px, 0);
                opacity: 0;
            }
        }
    }

    &.animation2 {
        animation: send2 ${ANIMATION_DURATION / 1000}s forwards linear;
        @keyframes send2 {
            0% {
                transform: translate(0, 0);
                opacity: 0;
            }
            50% {
                transform: translate(-35px, -20px);
                opacity: 1;
            }
            100% {
                transform: translate(-70px, 0);
                opacity: 0;
            }
        }
    }

    &.animation3 {
        animation: send3 ${ANIMATION_DURATION / 1000}s forwards linear;
        @keyframes send3 {
            0% {
                transform: translate(0, 0);
                opacity: 0;
            }
            50% {
                transform: translate(-70px, -30px);
                opacity: 1;
            }
            100% {
                transform: translate(-110px, 0);
                opacity: 0;
            }
        }
    }
`;
