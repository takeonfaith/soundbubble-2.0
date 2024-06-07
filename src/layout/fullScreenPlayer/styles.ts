import styled from 'styled-components';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';

export const FullScreenPlayerStyled = styled(BeautifulBackground)`
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.2s, 0.5s background;
    bottom: 0;
    align-items: center;
    will-change: transform, opacity;
`;

export const PlayerWrapper = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .authors {
        font-size: 1rem;
        color: #fff;

        a {
            color: #fff;
        }
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
    width: 400px;
    height: 400px;
    overflow: hidden;

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
`;

export const PlayerTitle = styled.div`
    font-size: 1.5rem;
    width: 360px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #fff;
`;

export const RightSide = styled.div`
    width: 0%;
    height: 100%;
    padding: 180px 110px;
    overflow-y: auto;
    scroll-padding-bottom: 700px;
    opacity: 0;
    animation: slide-appear 0.5s forwards reverse;

    &.visible {
        animation: slide-appear 0.5s forwards;
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
`;
