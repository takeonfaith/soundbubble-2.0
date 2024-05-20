import styled from "styled-components";

export const Skeleton = styled.div`
  background: ${({ theme }) => theme.colors.skeleton};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SkeletonShape = styled(Skeleton) <{ width: string; height: string; radius?: string }>`
  width: ${({ width }) => width ?? '100px'};
  min-width: ${({ width }) => width ?? '100px'};
  height: ${({ height }) => height ?? '100px'};
  border-radius: ${({ radius }) => radius ?? '10px'};
`