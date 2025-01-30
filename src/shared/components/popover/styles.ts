import { styled } from 'styled-components';

export const PopoverContainer = styled.div<{
    isVisible: boolean;
    tongueColor?: string;
}>`
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
    white-space: nowrap;

    animation: appear 0.2s forwards;

    kbd {
        margin-left: 4px;
        min-width: 20px;
        min-height: 14px;
        padding: 2px;
    }

    --tongue-size: 6px;
    --tongue-border: ${({ tongueColor, theme }) =>
        tongueColor ?? theme.colors.border};
    --tongue-color: ${({ tongueColor, theme }) =>
        tongueColor ?? theme.colors.pageTopButton};

    &.showTongue {
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: calc(var(--tongue-size) + 4px);
            height: calc(var(--tongue-size) + 4px);
            background: var(--tongue-color);
            border-right: 1px solid var(--tongue-border);
            border-bottom: 1px solid var(--tongue-border);
            border-radius: 1px;
            z-index: -1;
        }
    }

    &.top::after {
        transform: translate(-50%, 50%) rotate(45deg);
        left: 50%;
        bottom: -1px;
    }

    &.bottom::after {
        transform: translate(-50%, -50%) rotate(-135deg);
        left: 50%;
        top: -1px;
    }

    &.right::after {
        transform: translate(-50%, -50%) rotate(135deg);
        top: 50%;
        left: 1px;
    }

    &.left::after {
        transform: translate(50%, -50%) rotate(315deg);

        top: 50%;
        right: -0.5px;
    }

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
