import styled from 'styled-components';
import { hexToRgbA } from '../../funcs/hexToRgba';

export const Button = styled.button<{
    $background?: string;
    $width?: string;
    $height?: string;
    $align?: 'left' | 'right' | 'center';
    $primaryColor?: string;
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

    &.primary {
        background: ${({ theme, $primaryColor }) =>
            $primaryColor ?? theme.scheme.blue.action};
        box-shadow: 0 10px 20px
            rgba(
                ${({ theme, $primaryColor }) =>
                    hexToRgbA($primaryColor ?? theme.scheme.blue.action)},
                0.3
            );
    }

    &.danger {
        color: ${({ theme }) => theme.scheme.red.text};

        svg {
            color: ${({ theme }) => theme.scheme.red.text};
        }
    }

    &.secondary {
        background: ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.scheme.blue.action};
    }

    &.outline {
        background: ${({ theme }) => theme.colors.pageBackground};
        color: ${({ theme }) => theme.colors.textColor};
        border: 1px solid ${({ theme }) => theme.colors.border};
    }

    &.plane {
        background: transparent;
        color: ${({ theme }) => theme.colors.textColor};
    }

    &.ghost {
        background: transparent;
        color: ${({ theme }) => theme.colors.greyText2};
    }

    &:active {
        filter: brightness(0.85);
        transform: scale(0.99);

        &.primary {
            box-shadow: none;
        }
    }

    &:disabled {
        filter: grayscale(0.5);
        color: ${({ theme }) => theme.colors.greyText};
        pointer-events: none;

        &.primary {
            filter: grayscale(0.6);
            color: #ffffff66;
            box-shadow: none;
        }

        &.plane,
        &.ghost,
        &.outline {
            background: ${({ theme }) => theme.scheme.grey.mild};
        }
    }

    @media (hover: hover) {
        &:not(.primary) {
            &:hover {
                filter: brightness(0.9);
                background: ${({ theme }) => theme.colors.hover};
            }
        }

        &.primary:not(:disabled):hover,
        &.outline:not(:disabled):hover,
        &.secondary:not(:disabled):hover {
            filter: brightness(0.9);
        }

        &.plane:not(:disabled):hover {
            background: ${({ theme }) => theme.scheme.grey.mild};
        }

        &.ghost:not(:disabled):hover {
            color: ${({ theme }) => theme.colors.textColor};
        }
    }

    @media (hover: none) {
        transition: 0.2s transform;

        &:not(.primary) {
            &:active {
                filter: brightness(0.9);
                background: ${({ theme }) => theme.colors.hover};
            }
        }

        &.primary:active,
        &.outline:active,
        &.secondary:active {
            filter: brightness(0.9);
        }
    }
`;
