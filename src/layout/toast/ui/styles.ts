import styled from 'styled-components';
import { Button } from '../../../shared/components/button';

export const ToastStyled = styled.div`
    position: fixed;
    top: 30px;
    right: -100px;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    padding: 10px;
    width: fit-content;
    max-width: 450px;
    border-radius: 10px;
    z-index: 10000;
    transition: 0.35s right, 0.35s opacity;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    opacity: 0;
    font-weight: 300;
    pointer-events: none;
    padding-right: 50px;

    & .close-button {
        width: 30px;
        height: 30px;
        min-height: 30px;
        border-radius: 100%;
        top: 50%;
        transform: translateY(-50%);

        svg {
            width: 20px;
            height: 20px;
        }
    }

    .icon,
    .icon svg {
        width: 18px;
        height: 18px;
    }

    &.success {
        background: ${({ theme }) => theme.scheme.green.mild};
        color: ${({ theme }) => theme.scheme.green.text};
        border: 1px solid ${({ theme }) => theme.scheme.green.transparent};

        & .progress-circle {
            stroke: ${({ theme }) => theme.scheme.green.text};
        }
    }

    &.error {
        background: ${({ theme }) => theme.scheme.red.mild};
        color: ${({ theme }) => theme.scheme.red.text};
        border: 1px solid ${({ theme }) => theme.scheme.red.transparent};

        & .progress-circle {
            stroke: ${({ theme }) => theme.scheme.red.text};
        }
    }

    &.info {
        background: ${({ theme }) => theme.scheme.blue.mild};
        color: ${({ theme }) => theme.scheme.blue.text};
        border: 1px solid ${({ theme }) => theme.scheme.blue.transparent};

        & .progress-circle {
            stroke: ${({ theme }) => theme.scheme.blue.text};
        }
    }

    &.show {
        right: 40px;
        opacity: 1;
        pointer-events: all;
    }
`;

export const ToastButton = styled(Button)`
    background: ${({ theme }) => theme.colors.lightHover};
    font-weight: 300;
    font-size: 0.85rem;
    opacity: 0.8;
`;

export const ReasonStyled = styled.div``