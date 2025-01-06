import styled from 'styled-components';
import { Button } from '../../../shared/components/button';
import { DEFAULT_TOAST_ANIMATION_DURATION } from '../model/constants';

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
    transition: 0.35s right, 0.35s opacity, 0.3s transform, 0.1s scale;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    opacity: 0;
    padding-right: 50px;
    z-index: 10000;

    &.chatMessage {
        background: ${({ theme }) => theme.colors.pageTopButton};
        border: 1px solid ${({ theme }) => theme.colors.border};
        gap: 12px;
        padding: 10px 14px;

        .icon {
            position: absolute;
            left: 40px;
            bottom: 8px;
            background: ${({ theme }) => theme.scheme.blue.action};
            color: #fff;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            outline: 2px solid ${({ theme }) => theme.colors.pageBackground};

            svg {
                width: 13px;
                height: 13px;
            }
        }
    }

    &.clickable {
        cursor: pointer;
        user-select: none;

        &:hover {
            background: ${({ theme }) => theme.colors.chatBackground};
        }

        &:active {
            scale: 0.98;
            transform-origin: center center;
        }
    }

    h4 {
        font-weight: 300;
        font-size: 0.9rem;
        min-width: 130px;
    }

    span {
        font-weight: 300;

        &.hasTitle {
            font-weight: 300;
            font-size: 0.82rem;
            color: ${({ theme }) => theme.colors.greyText2};
        }
    }

    animation: toastAppear ${DEFAULT_TOAST_ANIMATION_DURATION}ms forwards;

    @keyframes toastAppear {
        0% {
            opacity: 0;
            top: 30px;
            right: -100px;
        }
        100% {
            opacity: 1;
            top: 30px;
            right: 30px;
        }
    }

    &.hide {
        animation: toastHide ${DEFAULT_TOAST_ANIMATION_DURATION}ms forwards;
    }

    @keyframes toastHide {
        0% {
            opacity: 1;
            top: 30px;
            right: 30px;
        }
        100% {
            opacity: 0;
            top: 30px;
            right: -100px;
        }
    }

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

    &.info, &.loading {
        background: ${({ theme }) => theme.scheme.blue.mild};
        color: ${({ theme }) => theme.scheme.blue.text};
        border: 1px solid ${({ theme }) => theme.scheme.blue.transparent};

        & .progress-circle {
            stroke: ${({ theme }) => theme.scheme.blue.text};
        }
    }

    &.hint {
        background: ${({ theme }) => theme.scheme.grey.mild};
        color: ${({ theme }) => theme.scheme.grey.text2};
    }


`;

export const ToastButton = styled(Button)`
    background: ${({ theme }) => theme.colors.lightHover};
    font-weight: 300;
    font-size: 0.85rem;
    opacity: 0.8;
`;

export const ReasonStyled = styled.div`
    padding: 25px;
    font-family: monospace;
    font-size: 1rem;
`;
