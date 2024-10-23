import styled from 'styled-components';

const PARTICLES_QUANTITY = 30;

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

const ParticlesStyles = styled.div`
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
`;

type Props = {
    quantity?: number; // Number of particles to display (default: 30)
};

export const Particles = ({ quantity = PARTICLES_QUANTITY }: Props) => {
    return (
        <ParticlesStyles>
            {Array.from(Array(quantity)).map((_, index) => {
                return <div className="particle" key={index} />;
            })}
        </ParticlesStyles>
    );
};
