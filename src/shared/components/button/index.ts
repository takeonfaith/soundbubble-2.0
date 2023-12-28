import styled from "styled-components";

export const Button = styled.button<{ $background?: string }>`
  border: none;
  background: ${({ $background }) => $background ?? "transparent"};
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  color: #fff;
  font-size: 1rem;
  width: 100%;
  min-height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.lightHover};
  }
`;
