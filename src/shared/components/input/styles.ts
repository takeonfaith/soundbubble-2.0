import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Icon = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 12px;

  svg {
    width: 18px;
    height: 18px;
    color: #fff;
    opacity: 0.3;
  }
`;

export const LeftIcon = styled(Icon)`
  left: 12px;
`;
export const RightIcon = styled(Icon)`
  right: 12px;
`;

export const InputStyled = styled.input<{
  $hasIcon: boolean;
  $hasRightIcon: boolean;
}>`
  border: none;
  background: ${({ theme }) => theme.colors.input};
  padding: 10px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  color: #fff;
  font-size: 0.95rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding-left: ${({ $hasIcon }) => ($hasIcon ? "40px" : "10px")};
  padding-right: ${({ $hasRightIcon }) => ($hasRightIcon ? "40px" : "10px")};

  &:focus {
    outline: none;
  }
`;
