import styled from 'styled-components';
import { Button } from '../../../shared/components/button';
import { hexToRgbA } from '../../../shared/funcs/hexToRgba';

export const SettingButton = styled(Button)`
    justify-content: space-between;
    padding: 16px 20px;

    &:active {
        transform: scale(1);
    }

    @media (max-width: 768px) {
    }
`;

export const SectionStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 50px);
    background: ${({ theme }) => theme.colors.pageTopButton};
    margin: 25px;
    margin-top: 10px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 1px #00000091;

    & button:not(:last-child),
    & > div:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.scheme.grey.transparent};
        border-radius: 0;
    }

    @media (max-width: 768px) {
        margin: 16px;
        margin-top: 10px;
        width: calc(100% - 32px);
    }
`;

export const SectionTitle = styled.h5`
    margin-left: 45px;
    font-weight: 200;
    margin-bottom: 0;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.greyText2};

    @media (max-width: 768px) {
        margin-left: 35px;
    }
`;

export const SelectListButton = styled(Button)`
    font-weight: 200;
    justify-content: space-between;
    padding: 16px 20px;

    &:active {
        transform: scale(1);
        background: ${({ theme }) => theme.scheme.grey.transparent};
    }

    .left-icon {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.colors.greyText2};
    }

    .check-icon {
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.scheme.blue.action};
    }
`;

export const SettingButtonIcon = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 13px;
    background: rgba(${({ color }) => hexToRgbA(color)}, 0.2);

    svg {
        width: 20px;
        height: 20px;
        color: ${({ color }) => color};
    }
`;

export const SettingButtonText = styled.div`
    font-size: 0.9rem;
    font-weight: 200;
`;
