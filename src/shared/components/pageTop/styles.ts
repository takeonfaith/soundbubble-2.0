import { styled } from 'styled-components';
import { BeautifulBackground } from '../beautifulBackground';

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
