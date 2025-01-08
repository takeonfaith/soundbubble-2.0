import styled from 'styled-components';
import { Flex } from '../../shared/components/flex';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';

export const PlaylistPageStyled = styled.div`
    width: 100%;
`;

export const PlaylistPageTop = styled.div<{ background: string }>`
    background: ${({ background }) => background};
    width: 100%;
    height: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PlaylistPageSongs = styled.div`
    width: 100%;
    padding: var(--page-padding);
    padding-top: 40px;
    padding-bottom: 0;

    @media (max-width: 1000px) {
        padding: 40px var(--page-padding);
        padding-bottom: 0;

        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`;

export const PlaylistCover = styled.div`
    width: 250px;
    height: 250px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const BottomPlaylist = styled.div`
    padding: 0 calc(var(--page-padding) + 6px);
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1000px) {
        padding: 0 var(--page-padding);
        margin-top: 10px;
    }
`;

export const PlaylistSimilar = styled.div``;

export const PlaylistImageStyled = styled.div`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 20px;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 70px;
        height: 70px;
    }

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
`;

export const DesktopGridHeaderStyled = styled(Flex)`
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const PageTopStyled = styled(BeautifulBackground)`
    min-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    position: relative;
    background-size: 150% 250%;
    animation: none;
    color: #fff;
    z-index: 4;
    transition: 0.2s;

    a {
        color: #fff;
    }
`;

export const TopRightCorner = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
    gap: 10px;

    &.compact {
        top: 15px;
    }

    button {
        border-radius: 100%;
        color: #fff;
    }

    @media (max-width: 768px) {
        top: 16px;
        right: 16px;
    }
`;

export const TopLeftCorner = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 30px;
    left: 30px;

    &.compact {
        top: 15px;
    }

    button {
        border-radius: 100%;
        color: #fff;
    }

    @media (max-width: 768px) {
        top: 16px;
        left: 16px;
    }
`;

export const TopBackground = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    left: 0;
    padding-top: 270px;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;

    img {
        width: 300%;
        animation: bgWave 4s linear infinite;
        opacity: 0.05;
        z-index: 0;

        @keyframes bgWave {
            0% {
                transform: translateX(0%);
            }
            100% {
                transform: translate(-50%);
            }
        }
    }
`;
