import { styled } from 'styled-components';
import { hexToRgbA } from '../../funcs/hexToRgba';

export const CoolestGradientStyled = styled.div<{
    $colors: string[] | undefined;
}>`
    --color-bg1: ${({ $colors }) => $colors?.[0] ?? 'purple'};
    --color-bg2: ${({ theme }) => theme.colors.pageBackground};
    --color1: ${({ $colors }) => hexToRgbA($colors?.[2]) ?? '18, 113, 255'};
    --color2: ${({ $colors }) => hexToRgbA($colors?.[2]) ?? '221, 74, 255'};
    --color3: ${({ $colors }) => hexToRgbA($colors?.[3]) ?? '100, 220, 255'};
    --color4: ${({ $colors }) => hexToRgbA($colors?.[4]) ?? '208, 50, 50'};
    --color5: ${({ $colors }) => hexToRgbA($colors?.[5]) ?? '188, 180, 50'};
    --color-interactive: ${({ $colors }) =>
        hexToRgbA($colors?.[1]) ?? '140, 100, 255'};
    --circle-size: 150%;
    --blending: hard-light;

    width: 100%;
    height: 100%;

    position: absolute;
    overflow: hidden;
    transition: 0.2s;
    background: linear-gradient(180deg, var(--color-bg1), var(--color-bg2));

    .noise-layer {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(var(--color-bg1, 0.2));
        background-image: url('./noise-light.png');
        opacity: 0.2;
        z-index: 1;
        transform: translateZ(0);
    }

    top: 0;
    left: 0;

    svg {
        display: none;
    }

    .gradients-container {
        width: 100%;
        height: 100%;
        filter: url(#goo);
    }

    @keyframes moveInCircle {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes moveVertical {
        0% {
            transform: translateY(-50%);
        }
        50% {
            transform: translateY(50%);
        }
        100% {
            transform: translateY(-50%);
        }
    }

    @keyframes moveHorizontal {
        0% {
            transform: translateX(-50%) translateY(-10%);
        }
        50% {
            transform: translateX(50%) translateY(10%);
        }
        100% {
            transform: translateX(-50%) translateY(-10%);
        }
    }

    .g1,
    .g2,
    .g3,
    .g4,
    .g5,
    .interactive {
        position: absolute;
        mix-blend-mode: var(--blending);

        width: var(--circle-size);
        height: var(--circle-size);

        top: calc(50% - var(--circle-size) / 2);
        left: calc(50% - var(--circle-size) / 2);

        opacity: 0.8;
    }

    .interactive {
        background: radial-gradient(
                circle at center,
                rgba(var(--color-interactive), 0.8) 0,
                rgba(var(--color-interactive), 0) 50%
            )
            no-repeat;
        opacity: 0.8;
        top: -50%;
        left: -65%;
        width: 100%;
        height: 100%;
    }

    .g1 {
        background: radial-gradient(
                circle at center,
                rgba(var(--color1), 0.8) 0,
                rgba(var(--color2), 0) 50%
            )
            no-repeat;
        transform-origin: center center;
        animation: moveVertical 30s ease infinite;
    }

    .g2 {
        background: radial-gradient(
                circle at center,
                rgba(var(--color2), 0.8) 0,
                rgba(var(--color2), 0) 50%
            )
            no-repeat;
        transform-origin: calc(50% - 400px);
        animation: moveInCircle 20s reverse infinite;
    }

    .g3 {
        background: radial-gradient(
                circle at center,
                rgba(var(--color3), 0.8) 0,
                rgba(var(--color3), 0) 50%
            )
            no-repeat;
        top: calc(50% - var(--circle-size) / 2 + 200px);
        left: calc(50% - var(--circle-size) / 2 + 200px);
        transform-origin: calc(50% + 400px);
        animation: moveInCircle 40s linear infinite;
    }

    .g4 {
        background: radial-gradient(
                circle at center,
                rgba(var(--color4), 0.8) 0,
                rgba(var(--color4), 0) 50%
            )
            no-repeat;
        opacity: 0.2;
        transform-origin: calc(50% - 200px);
        animation: moveHorizontal 40s ease infinite;
    }

    .g5 {
        background: radial-gradient(
                circle at center,
                rgba(var(--color5), 0.8) 0,
                rgba(var(--color5), 0) 50%
            )
            no-repeat;
        top: calc(50% - var(--circle-size));
        left: calc(50% - var(--circle-size));
        transform-origin: calc(50% - 800px) calc(50% + 200px);
        animation: moveInCircle 20s ease infinite;
    }
`;
