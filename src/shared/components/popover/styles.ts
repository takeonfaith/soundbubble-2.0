import { styled } from 'styled-components';

export const PopoverContainer = styled.div<{ isVisible: boolean }>`
    position: absolute;
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    background-color: ${({ theme }) => theme.colors.pageTopButton};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 4px 8px;
    z-index: 1200;
    font-size: 0.8em;
    font-weight: 300;
    pointer-events: none;

    animation: appear 0.2s forwards;

    @keyframes appear {
        0% {
            opacity: 0;
            visibility: hidden;
        }
        100% {
            opacity: 1;
            visibility: visible;
        }
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export const TargetElement = styled.div``;
