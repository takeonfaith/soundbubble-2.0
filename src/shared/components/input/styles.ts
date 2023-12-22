import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 12px;
    width: 18px;
    height: 18px;
    left: 12px;
    color: #fff;
    opacity: 0.3;
  }
`;

export const InputStyled = styled.input`
  border: none;
  background: ${({ theme }) => theme.colors.input};
  padding: 10px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  color: #fff;
  font-size: 0.95rem;
  width: 100%;
  outline: 1px solid ${({ theme }) => theme.colors.border};
  padding-left: 40px;

  &:focus {
    outline: 2px solid #989cff78;
  }
`;
