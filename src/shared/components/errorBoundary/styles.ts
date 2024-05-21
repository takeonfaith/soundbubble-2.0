import { styled } from "styled-components";

export const ErrorBoundaryStyled = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  font-weight: 200;
`;

export const ErrorIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.red.transparent};
  color: ${({ theme }) => theme.colors.red.main};
  border-radius: 100%;

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const ErrorTitle = styled.h3`
  font-weight: 300;
  color: #fff;
  font-size: 1.5rem;
`;

export const ErrorMessage = styled.span`
  max-width: 40%;
  line-height: 1.4rem;
  text-align: center;
  font-size: 1rem;
  text-align: left;
  font-family: monospace;
  color: ${({ theme }) => theme.colors.red.text};
  background: ${({theme})=>theme.colors.red.transparent};
  padding: 16px;
  border-radius: 10px;
`;
