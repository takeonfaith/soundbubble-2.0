import styled from 'styled-components';

export const MusicControlsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    color: #fff;
`;

export const CustomSlider = styled.input<{ color1: string | undefined }>`
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.skeleton};
    background-image: linear-gradient(
        90deg,
        ${({ color1 }) => color1 ?? 'grey'} 100%,
        white 50%
    );
    background-repeat: no-repeat;
    transition: 0.2s filter, 0.2s transform;
    cursor: pointer;

    &:hover {
        filter: brightness(1);

        transform: scaleY(2);
        border-radius: 30px;

        /* &::-webkit-slider-thumb {
            display: block;
        } */
    }

    &:focus {
        outline: none;
    }

    &:active {
        filter: brightness(1.5);
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: ${({ theme }) => theme.colors.shadow};
        background: ${({ color1 }) => color1 ?? 'grey'};
        transition: 0.2s;
        opacity: 0;

        &:hover {
            box-shadow: 0 0 0px 10px ${({ theme }) => theme.colors.hover};
        }
    }

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        box-shadow: none;
        border: none;
        background: transparent;
    }

    @media (max-width: 768px) {
        height: 5px;
    }
`;

export const ControlButton = styled.button`
    border: none;
    background: transparent;
    width: 60px;
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;
    transition: 0.2s transform;
    overflow: hidden;

    .loading {
        width: 30px;
        height: 30px;

        svg {
            width: 30px;
            height: 30px;
        }
    }

    .prev-icon-1 {
        margin-right: 60px;
        opacity: 1;
    }

    .prev-icon-2 {
        margin-right: 30px;
        opacity: 0;
    }

    .next-icon-1 {
        margin-left: 60px;
        opacity: 1;
    }

    .next-icon-2 {
        margin-left: 30px;
        opacity: 0;
    }

    &:disabled {
        opacity: 0.4;
    }

    &:not(:active) {
        .prev-icon-1,
        .prev-icon-2,
        .next-icon-1,
        .next-icon-2 {
            transition: margin-left 0.25s, margin-right 0.25s, 0.15s opacity;
        }
    }

    &:not(:disabled) {
        @media (hover: hover) {
            &:hover {
                background: ${({ theme }) => theme.colors.lightHover};

                svg {
                    filter: drop-shadow(0 0 15px black);
                }
            }
        }

        @media (hover: none) {
            &:active {
                background: ${({ theme }) => theme.colors.lightHover};
            }
        }

        &:active {
            transform: scale(0.9);

            .prev-icon-1 {
                margin-left: 30px;
                margin-right: 0px;
                opacity: 0;
            }

            .prev-icon-2 {
                margin-right: 0;
                margin-left: 60px;
                opacity: 1;
            }

            .next-icon-1 {
                margin-right: 30px;
                margin-left: 0px;
                opacity: 0;
            }

            .next-icon-2 {
                margin-left: 0;
                margin-right: 60px;
                opacity: 1;
            }

            svg {
                transform: scale(0.9);
            }

            @keyframes shift {
                0% {
                    margin-left: 30px;
                }
                100% {
                    margin-left: 0;
                    margin-right: 60px;
                }
            }
        }
    }

    svg {
        min-width: 30px;
        height: 30px;
        transition: 0.2s transform;
    }

    @media (max-width: 768px) {
        svg {
            min-width: 35px;
            height: 35px;
        }
    }
`;

export const DurationText = styled.div`
    font-size: 0.8rem;
`;

export const SmallControlButton = styled(ControlButton)<{ $color1?: string }>`
    width: 40px;
    height: 40px;

    &.selected {
        background: ${({ theme }) => theme.colors.lightHover};
        svg {
            color: #000;
            opacity: 1;
        }
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
