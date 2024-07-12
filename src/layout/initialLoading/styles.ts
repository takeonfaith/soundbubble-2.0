import styled from 'styled-components';

export const InitialLoadingStyled = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    background: ${({ theme }) => theme.colors.pageBackground};
    width: 100%;
    height: 100dvh;
    transition: 1s opacity, 1s visibility;

    span {
        text-align: center;
        font-size: 1rem;
        max-width: 250px;
        width: 80%;
    }

    & .logo {
        animation: logopulse 2s infinite;

        @keyframes logopulse {
            0% {
                transform: scale(1);
                filter: brightness(1);
            }
            50% {
                transform: scale(1.05);
                filter: brightness(1.05);
            }
            100% {
                transform: scale(1);
                filter: brightness(1);
            }
        }
    }

    img {
        width: 100px;
        height: 100px;
    }

    & .loading {
        position: absolute;
        bottom: 60px;
        margin: 0 auto;
    }

    &.loaded {
        animation: showApp 0.5s forwards;
        animation-delay: 1s;

        & .logo {
            animation: shiftLogo 1s forwards ease-in-out;
            animation-delay: 0.2s;

            @keyframes shiftLogo {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
                100% {
                    transform: translateY(20px);
                }
            }
        }

        @keyframes showApp {
            0% {
                opacity: 1;
                visibility: visible;
            }
            100% {
                opacity: 0;
                visibility: hidden;
            }
        }
    }
`;
