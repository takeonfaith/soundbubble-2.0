import styled from 'styled-components';

export const PopupStyled = styled.div<{
    $isOpen: boolean;
    $posX: number;
    $posY: number;
    $transformOrigin: string;
    $height: number;
    $width: number;
}>`
    position: absolute;
    width: ${({ $width }) => `${$width}px`};
    background: ${({ theme }) => theme.colors.context};
    height: ${({ $height }) => `${$height}px`};
    top: ${({ $posY }) => `${$posY}px`};
    left: ${({ $posX }) => `${$posX}px`};
    border-radius: ${({ theme }) => theme.borderRadius.mild};
    box-shadow: 0 0 40px #0000002e;
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    z-index: 1000;
    transform: ${({ $isOpen }) => ($isOpen ? 'scale(1)' : 'scale(0.8)')};
    transition: 0.15s opacity, 0.15s visibility, 0.15s transform;
    transform-origin: ${({ $transformOrigin }) => $transformOrigin};
    overflow: hidden;

    @media (max-width: 768px) {
        transform: ${({ $isOpen }) => ($isOpen ? 'scale(1.05)' : 'scale(0.8)')};
    }
`;
