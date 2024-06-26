import styled from 'styled-components';

export const SkeletonPageAnimationStyled = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
`;

export const SkeletonSection = styled.div<{ $background?: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    background: linear-gradient(
        360deg,
        ${({ theme, $background }) =>
            `${$background ?? theme.colors.pageBackground}, ${
                $background ?? theme.colors.pageBackground
            }, ${$background ?? theme.colors.pageBackground}`},
        transparent
    );
    background-size: 100% 500%;
    background-position: 0 0;

    transition: 0.4s background-position, 0.3s opacity;
    pointer-events: none;
    opacity: 0;
    overflow-y: auto;
    overflow-x: hidden;

    &.loading {
        opacity: 1;
        height: fit-content;
        pointer-events: all;
        background-position: 0 100%;
    }
`;

export const ContentSection = styled.div``;
