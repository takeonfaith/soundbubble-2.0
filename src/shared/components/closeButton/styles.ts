import styled from "styled-components";

export const CloseButtonStyled = styled.button`
  position: absolute;
  top: 3%;
  right: 3%;
  border: none;
  background: transparent;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  cursor: pointer;
  z-index: 10;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightHover};
  }
`;
