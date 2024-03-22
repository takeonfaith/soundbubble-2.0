import styled from "styled-components";
import { POPUP_WIDTH } from "./constants";

export const PopupWrapper = styled.div`
  width: 100%;
  height: 100dvh;

  position: fixed;
  z-index: 100;
`;

export const PopupStyled = styled.div<{
  $posX: number;
  $posY: number;
  $transformOrigin: string;
}>`
  position: absolute;
  width: ${POPUP_WIDTH}px;
  background: black;
  height: 400px;
  top: ${({ $posY }) => `${$posY}px`};
  left: ${({ $posX }) => `${$posX}px`};
  border-radius: ${({ theme }) => theme.borderRadius.mild};

  animation: popupappear 0.3s forwards;
  transform-origin: ${({ $transformOrigin }) => $transformOrigin};

  @keyframes popupappear {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
