import styled from "styled-components";

export const InputWrapper = styled.div<{ $disabled?: boolean }>`
  position: relative;
  width: 100%;

  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "all")};
`;

const Icon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 9px;

  svg {
    width: 18px;
    height: 18px;
    color: #fff;
    opacity: 0.3;
  }
`;

export const InputFieldWrapper = styled.div`
  height: fit-content;
  position: relative;
`;

export const LeftIcon = styled(Icon)`
  left: 10px;
`;
export const RightIcon = styled(Icon)`
  right: 10px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.lightHover};
  }
`;

export const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 4px;
  font-weight: 300;
  display: inline-block;
  width: 100%;
  color: ${({ theme }) => theme.colors.greyText};
`;

export const InputError = styled(Label)`
  margin-bottom: 0;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red.text};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.red.main};
`;

export const InputStyled = styled.input<{
  $hasIcon: boolean;
  $hasRightIcon: boolean;
  $hasError: boolean;
}>`
  border: none;
  background: ${({ theme }) => theme.colors.input};
  padding: 10px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  color: #fff;
  height: 40px;
  font-size: 0.95rem;
  font-weight: 300;
  width: 100%;
  /* border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.red.main : theme.colors.border}; */
  padding-left: ${({ $hasIcon }) => ($hasIcon ? "40px" : "10px")};
  padding-right: ${({ $hasRightIcon }) => ($hasRightIcon ? "40px" : "10px")};

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.border};
  }
`;
