import styled from 'styled-components';
import { BeautifulBackground } from '../../../shared/components/beautifulBackground';

export const TrendsPageStyled = styled.div`
    padding: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
`;

export const TrendBox = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #00000029;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .title {
        svg {
            width: 18px;
            height: 18px;
        }
    }

    h3 {
        color: #fff;
        font-weight: 300;
        opacity: 0.9;
    }
`;

export const TopPlateStyled = styled(BeautifulBackground)`
    height: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    border-radius: 8px;
    width: calc(33%);
    position: relative;
    overflow: hidden;
    background-size: 250% 250% !important;
    cursor: pointer;
    transition: 0.2s;

    .front {
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &:hover {
        transform: scale(1.01);
        filter: brightness(0.9);

        .playbutton {
            transform: scale(1.05);
        }
    }

    &:active {
        .playbutton {
            transform: scale(1);
        }
    }

    .info {
        color: #ffffff;

        h2 {
            font-weight: 300;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 1.34rem;
        }

        .subtext {
            opacity: 0.6;
            font-weight: 200;
            font-size: 0.9rem;
        }

        .authors {
            font-size: 16px;
            font-weight: 300;
        }
    }

    .playbutton {
        position: absolute;
        bottom: 30px;
        right: 30px;
        color: #ffffff;
        border-radius: 30px;
        background: ${({ $colors }) => $colors?.[1] ?? 'darkgrey'};
        transition: 0.2s transform;

        &:hover {
            background: ${({ $colors }) => $colors?.[1] ?? 'darkgrey'};
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const IndexStyled = styled.div`
    font-size: 12px;
    right: 20px;
    top: -14%;
    color: ${({ theme }) => theme.colors.skeleton};
    position: absolute;
    font-size: 16rem;
    font-weight: 500;
    user-select: none;
    z-index: 0;
`;

export const TopPlates = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
