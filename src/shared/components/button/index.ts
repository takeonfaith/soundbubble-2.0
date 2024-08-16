import styled from 'styled-components';
import { hexToRgbA } from '../../funcs/hexToRgba';

export const Button = styled.button<{
    $background?: string;
    $width?: string;
    $height?: string;
    $align?: 'left' | 'right' | 'center';
}>`
    border: none;
    background: ${({ $background }) => $background ?? 'transparent'};
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    font-size: 0.94rem;
    width: ${({ $width }) => $width ?? '100%'};
    min-height: ${({ $height }) => $height ?? '40px'};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: ${({ $align = 'center' }) =>
        $align === 'left'
            ? 'flex-start'
            : $align === 'right'
            ? 'flex-end'
            : $align};
    transition: 0.2s filter, 0.1s color, 0.1s opacity, 0.1s box-shadow;
    position: relative;
    color: ${({ color }) => color};
    gap: 8px;
    user-select: none;

    &:disabled {
        filter: grayscale(1);
        opacity: 0.5;
        color: ${({ theme }) => theme.colors.textColor};
        pointer-events: none;

        & > * {
            opacity: 0.5;
        }
    }
    &.primary {
        background: ${({ theme }) => theme.colors.blue.action};
        box-shadow: 0 10px 20px
            rgba(${({ theme }) => hexToRgbA(theme.colors.blue.action)}, 0.3);
    }

    &.secondary {
        background: ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.colors.blue.action};
    }

    &.outline {
        background: ${({ theme }) => theme.colors.pageBackground};
        color: ${({ theme }) => theme.colors.textColor};
        border: 1px solid ${({ theme }) => theme.colors.border};
    }

    @media (hover: hover) {
        &:hover {
            filter: brightness(0.9);
        }

        &:active {
            filter: brightness(0.85);
            transform: scale(0.99);

            &.primary {
                box-shadow: none;
            }
        }
    }

    @media (hover: none) {
        transition: 0.2s transform;

        &:active {
            background: ${({ theme }) => theme.colors.hover};
            transform: scale(0.95);
        }
    }
`;
