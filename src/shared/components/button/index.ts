import styled from 'styled-components';

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
    transition: 0.2s filter, 0.1s color, 0.1s opacity;
    position: relative;
    color: ${({ color }) => color};
    gap: 8px;
    user-select: none;

    &:disabled {
        filter: grayscale(1);
        opacity: 0.3;
        color: ${({ theme }) => theme.colors.textColor};
        pointer-events: none;

        & > * {
            opacity: 0.5;
        }
    }

    @media (hover: hover) {
        &:hover {
            filter: brightness(0.9);
            background: ${({ $background, theme }) =>
                !$background ? theme.colors.lightHover : ''};
        }

        &:active {
            filter: brightness(0.85);
            transform: scale(0.99);
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
