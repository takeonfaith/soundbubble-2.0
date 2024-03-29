import styled from "styled-components";

export const SearchWithHintsStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const HintsStyled = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.input};
  height: fit-content;
  min-height: 45px;
  padding: 4px;
  border-radius: ${({ theme }) =>
    `0 0 ${theme.borderRadius.mild} ${theme.borderRadius.mild}`};
  position: absolute;
  top: calc(100% - 4px);
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.greyText};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  z-index: 10;

  & > * {
    animation: appear 0.5s;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HintItemStyled = styled.div`
  padding: 8px 6px;
  border-radius: ${({ theme }) => `calc(${theme.borderRadius.mild} - 2px)`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 300;
  width: 100%;

  .authors {
    width: fit-content;
    white-space: nowrap;
  }

  &.selected {
    background: ${({ theme }) => theme.colors.blue.transparent};
    color: #fff;
    font-weight: 400;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightHover};
  }
`;

export const HintName = styled.div`
  white-space: nowrap;
`;

export const HintIcon = styled.div`
  min-width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;
