import styled from 'styled-components';
import { SongsStyled } from '../author/styles';
import { hexToRgbA } from '../../shared/funcs/hexToRgba';

export const SectionStyled = styled(SongsStyled)`
    padding: 16px 0;

    h3 {
        font-weight: 400;
    }

    & .horizontal-list {
        padding: 0 40px;
        padding-bottom: 40px;
    }

    @media (max-width: 1000px) {
        padding-bottom: 20px;

        & .horizontal-list {
            padding: 0;
            gap: 15px;
        }
    }
`;

export const UserTopStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 80px 40px;
    padding-bottom: 40px;
    background: linear-gradient(
        180deg,
        ${({ color, theme }) =>
            `${`rgba(${hexToRgbA(color)}, 0.4)`}, ${
                theme.colors.pageBackground
            }`}
    );

    h2 {
        font-weight: 400;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 80px 20px;
        padding-bottom: 20px;
    }
`;

export const UserInfoName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
        width: 100%;
        gap: 30px;
    }
`;

export const UserButtons = styled.div`
    display: flex;
    width: 330px;
    gap: 10px;

    button {
        max-width: 160px;
    }

    @media (max-width: 768px) {
        width: 100%;

        button {
            max-width: none;
        }
    }
`;
