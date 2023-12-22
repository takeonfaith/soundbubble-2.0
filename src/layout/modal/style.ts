import { DarkBackground } from "@components/darkBackground";
import styled from "styled-components";

export const ModalBackground = styled(DarkBackground)`
  position: absolute;
  z-index: 11;
`;

export const ModalStyled = styled.div`
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.colors.modal};
  border: 2px solid ${({ theme }) => theme.colors.border};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme }) => theme.borderRadius.middle};
  color: #fff;
`;

export const ModalTitle = styled.h3`
  margin: 22px;
  font-weight: 300;
`;

export const ModalContent = styled.div``;
