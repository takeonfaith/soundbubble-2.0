import styled from "styled-components";

export const Skeleton = styled.div`
  background: ${({ theme }) => theme.colors.lightHover};
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
