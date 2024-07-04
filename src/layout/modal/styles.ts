import { DarkBackground } from '@components/darkBackground';
import styled from 'styled-components';

export const ModalBackground = styled(DarkBackground)`
    position: absolute;
    z-index: 12;
`;

export const ModalStyled = styled.div`
    min-width: 500px;
    max-width: 800px;
    min-height: 500px;
    height: fit-content;
    max-height: 80dvh;
    background: ${({ theme }) => theme.colors.modal};
    border: 2px solid ${({ theme }) => theme.colors.border};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    display: flex;
    flex-direction: column;

    & > button {
        top: 22px;
        right: 25px;
        width: 30px;
        height: 30px;
        background-color: ${({ theme }) => theme.colors.hover};
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: auto;
        bottom: 0;
        left: 0;
        top: auto;
        transform: translateY(0);
        border-radius: 8px 8px 0 0;
        border: none;
        height: 80dvh;
    }
`;

export const ModalTitle = styled.h3`
    margin: 25px;
    margin-bottom: 15px;
    font-weight: 300;

    @media (max-width: 768px) {
        margin: 20px;
    }
`;

export const ModalContent = styled.div`
    height: 100%;
    padding-bottom: 25px;
    padding-top: 0;
    overflow-y: auto;
`;

export const ModalButtons = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
`;

export const ScrollingPart = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`;
