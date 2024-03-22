import styled from "styled-components";

export const Button = styled.button<{ $background?: string; $width?: string }>`
  border: none;
  background: ${({ $background }) => $background ?? "transparent"};
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  color: #fff;
  font-size: 1rem;
  width: ${({ $width }) => $width ?? "100%"};
  min-height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0s;
  position: relative;

  &:disabled {
    filter: grayscale(1) brightness(0.8);
    pointer-events: none;
  }

  &:hover {
    filter: brightness(0.9);
    background: ${({ $background, theme }) =>
    !$background ? theme.colors.lightHover : ""};
  }
`;
