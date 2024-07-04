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
    font-size: 0.9rem;
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
    transition: 0s;
    position: relative;
    color: ${({ color }) => color};
    gap: 8px;

    &:disabled {
        filter: grayscale(1) brightness(1.4);
        pointer-events: none;
        opacity: 0.5;
    }

    @media (hover: hover) {
        &:hover {
            filter: brightness(0.9);
            background: ${({ $background, theme }) =>
                !$background ? theme.colors.lightHover : ''};
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
