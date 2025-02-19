import styled from 'styled-components';

export const FirstScreenStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
    padding: 20px;

    h2 {
        font-weight: 400;
    }

    & > .bokeh {
        display: block;
        width: 100%;
        height: 400px;
        background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0) 0%,
            ${({ theme }) => theme.colors.pageBackground} 70%,
            ${({ theme }) => theme.colors.pageBackground} 100%
        );
        border-radius: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }

    img.background {
        position: absolute;
        filter: hue-rotate(100deg);

        z-index: 0;
    }

    img.background1 {
        position: absolute;
        filter: hue-rotate(50deg);

        z-index: -1;
        transition: 1s opacity;
    }

    h2 {
        z-index: 10;
    }

    span {
        font-size: 1.1rem;
        width: 370px;
        text-align: center;
        z-index: 10;
    }

    .particles {
        top: -20px;
        left: 40px;
        z-index: -1;
        animation: generalAppear 2s forwards;

        & .particle {
            background: transparent;
            color: ${({ theme }) => theme.scheme.purple.action};
        }
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 620px;

    animation: slide 20s infinite linear;

    &.shifted {
        margin-right: 80px;
        animation-duration: 15s;
    }

    @keyframes slide {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-640px);
        }
    }

    & div {
        min-width: 70px;
        height: 70px;
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.lightHover};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s;

        svg {
            width: 40%;
            height: 40%;
        }
    }
`;

export const IconStyled = styled.label`
    min-width: 70px;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    outline: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.pageTopButton};
    white-space: nowrap;
    gap: 20px;
    padding: 14px 20px;

    & .switchToggle,
    & .circle {
        transition: 0.9s;
    }

    &.toggled {
        animation: toggled 2s forwards;

        @keyframes toggled {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    }

    &:hover {
        background: ${({ theme }) => theme.colors.input};
        cursor: pointer;
    }

    svg {
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.scheme.pink.action};
    }
`;

export const ShareSongAnimation = styled.div`
    &::before {
        content: '';
        display: block;
        position: absolute;
        border-bottom: 2px dashed ${({ theme }) => theme.colors.input};
        width: 220px;
        height: 1px;
        left: 50%;
        top: calc(50% - 60px);
        transform: translate(-50%, -50%);
    }

    & .general-cover {
        position: absolute;
        left: 70px;
        top: 180px;
        animation: shareSong 2s infinite;
        animation-delay: 1s;

        @keyframes shareSong {
            0% {
                transform: translate(0px, 0);
            }
            50% {
                transform: translate(170px, -70px);
            }
            100% {
                transform: translate(330px, 0);
            }
        }
    }
`;
