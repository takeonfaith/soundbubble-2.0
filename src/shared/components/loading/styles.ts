import styled from "styled-components";

export const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: loadinganim 0.5s infinite linear;
    transform-origin: center center;
    stroke-width: 3;

    @keyframes loadinganim {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
