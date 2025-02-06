import styled from 'styled-components';

export const SkeletonSection = styled.div<{ $background?: string }>`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 12;
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

    transition: 0.4s background-position, 0.4s opacity;
    pointer-events: none;
    opacity: 0;
    overflow: hidden;

    & .skeleton {
        animation-play-state: paused;
    }

    &.loading {
        opacity: 1;
        pointer-events: all;
        background-position: 0 100%;
        height: 100vh;

        & .skeleton {
            animation-play-state: running;
        }
    }
`;

export const ContentSection = styled.div`
    display: block;
    width: 100%;

    &.loading {
        display: none;
        height: 100%;
    }
`;
