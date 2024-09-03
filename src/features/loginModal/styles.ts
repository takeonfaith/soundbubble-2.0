import styled from 'styled-components';

export const LoginModalStyled = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 25px;

    h2 {
        font-weight: 400;
        font-size: 1.3rem;
        white-space: nowrap;
    }

    .forgot-password {
        bottom: -20px;
        margin: 0 auto;
        font-size: 0.85rem;
        position: absolute;
        font-weight: 300;
        color: ${({ theme }) => theme.scheme.blue.text};
        padding: 2px 8px;

        &:hover {
            background: ${({ theme }) => theme.scheme.blue.transparent};
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const RightSideStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;

    & .emoji {
        font-size: 30px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const PromoStyled = styled.div`
    width: 55%;
    height: 400px;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    user-select: none;

    .logo {
        width: 90px;
        z-index: 1;
        animation: jumping2 10s infinite ease-in-out;
    }

    @media (max-width: 768px) {
        /* display: none; */
        width: 100%;
        height: 230px;
        overflow: visible;
    }
`;

export const PARTICLES_QUANTITY = 30;

const getParticles = () => {
    const styles = [];

    for (let i = 0; i < PARTICLES_QUANTITY; i++) {
        const duration = (1 + 0.01 * Math.floor(Math.random() * 350)) * 1;
        const delay =
            -0.01 * Math.floor(Math.random() * PARTICLES_QUANTITY) * duration;
        const background = `#3481fe3d`;
        const transform = `translate(calc(${Math.floor(
            Math.random() * 50
        )} * 10px), calc(${Math.floor(Math.random() * 50)} * 10px))`;
        const size = Math.floor(Math.random() * 20);

        styles.push(`
          &:nth-child(${i + 1}) {
            width: ${size}px;
            height: ${size}px;
            transform: ${transform};
            background: ${background};
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
          }
        `);
    }

    return styles.join('\n');
};

export const Blocks = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    &::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        filter: blur(70px);
        inset: 37%;
        background-color: ${({ theme }) => theme.scheme.blue.action};
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
        inset: 40% 37%;

        &::before {
            width: 80px;
            height: 80px;
        }
    }

    .block {
        transform-origin: top left;
        animation: jumping 4s infinite ease-in-out;
    }

    .block:nth-child(1) {
        top: 90px;
        left: 120px;
        animation-delay: 0.2s;
        color: ${({ theme }) => theme.scheme.blue.action};
    }
    .block:nth-child(2) {
        top: 100px;
        right: 120px;
        animation-delay: 0.8s;
        color: ${({ theme }) => theme.scheme.red.action};
    }
    .block:nth-child(3) {
        bottom: 120px;
        left: 70px;
        animation-delay: 0.5s;
        color: ${({ theme }) => theme.scheme.purple.main};
    }
    .block:nth-child(4) {
        bottom: 130px;
        right: 90px;
        animation-delay: 0s;
        color: ${({ theme }) => theme.scheme.green.main};
    }
    .block:nth-child(5) {
        bottom: 70px;
        right: 200px;
        animation-delay: 0.1s;
        color: ${({ theme }) => theme.scheme.orange.main};
    }

    @media (max-width: 768px) {
        .block:nth-child(1) {
        }
        .block:nth-child(2) {
        }
        .block:nth-child(3) {
            bottom: 110px;
            left: 130px;
        }
        .block:nth-child(4) {
        }
        .block:nth-child(5) {
            bottom: 60px;
            right: 150px;
        }
    }

    @keyframes jumping {
        0% {
            transform: translate(0px, 0px);
        }
        50% {
            transform: translate(0px, -20px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }

    @keyframes jumping2 {
        0% {
            transform: translate(0px, 0px);
        }
        50% {
            transform: translate(0px, -10px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }

    .particles {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;

        .particle {
            position: absolute;
            animation: shoot 3s ease-out infinite;
            animation-name: shoot, fade;
            border-radius: 2px;

            ${getParticles()}
        }

        @keyframes shoot {
            0% {
                transform: translate(200px, 200px);
            }
        }

        @keyframes fade {
            to {
                opacity: 0;
            }
        }
    }
`;

export const BlockStyled = styled.div`
    background: ${({ theme }) => theme.colors.pageBackground};
    border-radius: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    z-index: 2;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const LoginButtons = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
