import styled from 'styled-components';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';

export const DESKTOP_COVER_WIDTH = '400px';
const MOBILE_COVER_WIDTH = '86vw';

export const FullScreenPlayerStyled = styled(BeautifulBackground)`
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.2s;
    bottom: 0;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100px);
    pointer-events: none;

    & > button {
        color: #fff;
    }

    @media (max-width: 1000px) {
        &::before {
            content: '';
            display: block;
            width: 40px;
            height: 5px;
            border-radius: 4px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 20px;
            background: ${({ theme }) => theme.colors.lightHover};
        }

        & > button {
            opacity: 0;
            width: 100%;
            left: 0;
        }
    }

    &.open {
        opacity: 1;
        pointer-events: all;
        visibility: visible;
        transform: translateY(0px);
    }
`;

export const PlayerWrapper = styled.div`
    width: ${DESKTOP_COVER_WIDTH};
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 700px) {
        width: ${MOBILE_COVER_WIDTH};
    }

    & .authors {
        font-size: 1rem;
        color: #fff;

        a {
            color: #fff;
        }
    }

    & .like-button {
        color: #fff;
    }

    & .song-slider {
        filter: brightness(2);
    }
`;

export const PlayerCover = styled.div<{ $color1: string | undefined }>`
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    background: ${({ $color1 }) => $color1 ?? 'darkgrey'};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 130px #00000057;
    width: ${DESKTOP_COVER_WIDTH};
    height: ${DESKTOP_COVER_WIDTH};
    overflow: hidden;

    @media (max-width: 700px) {
        width: ${MOBILE_COVER_WIDTH};
        height: ${MOBILE_COVER_WIDTH};

        .general-cover {
            img {
                width: ${MOBILE_COVER_WIDTH};
                height: ${MOBILE_COVER_WIDTH};
            }
        }

        margin-bottom: 30px;
    }

    svg {
        color: dimgray;
        width: 100px;
        height: 100px;
    }
`;

export const OtherCovers = styled.div`
    display: flex;
    height: 100%;
    width: 200%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    opacity: 0.2;

    transition: 0.2s;

    img {
        height: 100%;
    }

    & .song-cover:nth-child(1) {
        position: absolute;
        transform: translateX(-60px) scale(0.8);
    }

    & .song-cover:nth-child(2) {
        position: absolute;
        transform: translateX(60px) scale(0.8);
    }
`;

export const LeftSide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &.close {
        display: block;
        height: 100%;
    }

    @media (max-width: 768px) {
        padding-bottom: 40px;
    }
`;

export const PlayerTitle = styled.div`
    font-size: 1.5rem;
    width: calc(${DESKTOP_COVER_WIDTH} - 40px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;

    @media (max-width: 1000px) {
        width: calc(${MOBILE_COVER_WIDTH} - 40px);
    }
`;

export const RightSide = styled.div`
    width: 0%;
    height: 100%;
    padding: 180px 110px;
    overflow-y: auto;
    scroll-padding-bottom: 700px;
    opacity: 0;
    animation: slide-appear 0.5s forwards reverse;
    /* background: linear-gradient(270deg, #00000078 20%, transparent); */

    &.visible {
        animation: slide-appear 0.5s forwards;
    }

    & * {
        color: #fff;
    }

    @keyframes slide-appear {
        0% {
            opacity: 0;
            width: 0;
        }
        30% {
            opacity: 0;
            width: 100%;
        }
        100% {
            opacity: 1;
            width: 100%;
        }
    }
`;

export const LyricsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #fff;
    font-size: 1.8rem;
    position: relative;
`;

export const Lyric = styled.div`
    padding: 10px;
    transition: 0.2s background, 0.2s opacity, 0.3s transform;
    cursor: pointer;
    opacity: 0.4;
    transform: scale(0.9);
    transform-origin: left center;
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    font-weight: 500;

    &.ordinary {
        opacity: 1;
        transform: scale(1);
    }

    &.current {
        opacity: 1;
        transform: scale(1);
    }

    &.farFromCurrent {
        opacity: 0.1;
        transform: scale(0.8);
    }

    &:hover {
        background: #ffffff3d;
    }
`;

export const SmallButton = styled.button`
    border: none;
    background: transparent;
    color: #fff;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    cursor: pointer;

    svg {
        stroke-width: 2;
        width: 20px;
        height: 20px;
    }

    &:hover {
        background: ${({ theme }) => theme.colors.lightHover};
    }
`;

export const LyricLoadingAnimation = styled.div<{
    $duration: number;
}>`
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    transition: 0.5s opacity;

    & span {
        width: 10px;
        height: 10px;
        background: ${({ theme }) => theme.colors.lightHover};
        border-radius: 10px;
    }

    & span:nth-child(1) {
        animation: lyricloading ${({ $duration }) => $duration / 3}s forwards;
        animation-delay: 0;
        animation-play-state: paused;
    }

    & span:nth-child(2) {
        animation: lyricloading ${({ $duration }) => $duration / 3}s forwards;
        animation-delay: ${({ $duration }) => $duration / 3}s;
        animation-play-state: paused;
    }

    & span:nth-child(3) {
        animation: lyricloading ${({ $duration }) => $duration / 3}s forwards;
        animation-delay: ${({ $duration }) => ($duration * 2) / 3}s;
        animation-play-state: paused;
    }

    &.current {
        animation: dissapear 0.8s forwards;
        transform-origin: left center;
        opacity: 1;
        animation-delay: ${({ $duration }) => `calc(${$duration}s - 1s)`};

        & span {
            animation-play-state: running;
        }

        @keyframes lyricloading {
            0% {
                transform: scale(1);
                background: ${({ theme }) => theme.colors.lightHover};
            }
            100% {
                transform: scale(1.2);
                background: #fff;
            }
        }

        @keyframes dissapear {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            30% {
                transform: scale(0.95);
                opacity: 1;
            }
            60% {
                transform: scale(1.05);
                opacity: 1;
            }
            100% {
                transform: scale(0.8);
                opacity: 0;
            }
        }
    }
`;

export const BottomControlButtons = styled.div`
    position: absolute;
    left: 40px;
    bottom: 40px;
    width: calc(100% - 80px);
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
        width: calc(100% - 40px);
        left: 20px;
    }
`;

export const QueueStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    /* & button {
        color: #fff;
    }

    & a {
        color: #fff;
    }

    & > * {
        color: #fff !important;
    } */
`;
