import styled from 'styled-components';

export const Button = styled.button<{
    $background?: string;
    $width?: string;
    $height?: string;
}>`
    border: none;
    background: ${({ $background }) => $background ?? 'transparent'};
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    font-size: 0.95rem;
    width: ${({ $width }) => $width ?? '100%'};
    min-height: ${({ $height }) => $height ?? '40px'};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0s;
    position: relative;
    color: ${({ color }) => color};

    &:disabled {
        filter: grayscale(1) brightness(1.4);
        pointer-events: none;
        opacity: 0.5;
    }

    &:hover {
        filter: brightness(0.9);
        background: ${({ $background, theme }) =>
            !$background ? theme.colors.lightHover : ''};
    }
`;
