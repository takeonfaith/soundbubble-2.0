import { keyframes, styled } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const TimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CircleContainer = styled.svg<{ size: number }>`
    width: ${({ size }) => `${size * 3}px`};
    height: ${({ size }) => `${size * 3}px`};
    transform: rotate(-90deg); // to make the progress start from the top
`;

export const BackgroundCircle = styled.circle<{ size: number }>`
    fill: none;
    stroke: ${({ theme }) => theme.colors.pageBackground};
    stroke-width: ${({ size }) => size / 3};
`;

export const ProgressCircle = styled.circle<{
    progress: number;
    size: number;
    dasharray: number;
}>`
    fill: none;
    stroke-width: ${({ size }) => size / 3};
    stroke-linecap: round;
    stroke-dasharray: ${({ dasharray }) => dasharray};
    stroke-dashoffset: ${({ progress }) => progress};
    transition: stroke-dashoffset 1s linear;
`;

export const TimeLabel = styled.div<{ size: number }>`
    position: absolute;
    font-size: ${({ size }) => `${size * 1.3}px`};
    color: inherit;
    font-weight: 500;
`;
