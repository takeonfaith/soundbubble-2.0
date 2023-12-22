import styled from "styled-components";

export const LoadingStyled = styled.div`
  width: 18px;
  height: 18px;

  svg {
    animation: loading 0.5s infinite linear;
    transform-origin: center center;
    stroke-width: 3;
    width: 18px;
    height: 18px;

    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
