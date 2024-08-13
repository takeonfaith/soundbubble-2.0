import { styled } from 'styled-components';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';

export const PlayerStyled = styled.div<{ $background: string }>`
    width: calc(100% - var(--sidebar-width) - var(--page-gap));
	 border-radius: var(--desktop-page-radius);
    margin: var(--page-gap);
    min-height: 80px;
    display: flex;
	 align-self: flex-end;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    transition: 0.5s background-color;
    background-color: ${({ $background }) => $background};
    background-image: ${({ theme }) =>
        `linear-gradient(${theme.colors.playerDarkening}, ${theme.colors.playerDarkening})`};
    gap: 50px;
    position: relative;
    z-index: 10;

    .music-controls {
        flex-direction: row-reverse;
    }

    .control-buttons {
        order: 3;
        width: fit-content;
        margin-bottom: 16px;

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
            }
        }
    }

    .song-slider {
        order: 2;
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        height: 2px;
        width: 35%;

        &::-webkit-slider-thumb {
            width: 10px;
            height: 10px;
        }
    }

    .duration-numbers {
        order: 1;
        position: absolute;
        left: 50%;
        bottom: 26px;
        transform: translateX(-50%);
        opacity: 0.6;
        font-size: 0.7rem;
        min-width: 70px;
        width: 35%;
        color: ${({ theme }) => theme.colors.textColor};

        & > * {
            font-size: 0.7rem;
            min-width: 36px;
            display: block;
        }
    }

    @media (max-width: 1000px) {
        padding: 6px;
        min-height: auto;
        border-radius: 14px;
        margin: 0 12px;
        width: calc(100% - 24px);
        box-shadow: 0px -10px 10px 0px ${({ theme }) => theme.colors.pageBackground};
        gap: 0;

        .music-controls {
            display: none;
        }
    }
`;

export const SongTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: 200;

    @media (max-width: 1000px) {
        font-size: 0.95rem;
    }
`;

export const SongStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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

    @media (max-width: 1000px) {
        display: none;
    }
`;
