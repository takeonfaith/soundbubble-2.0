import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  padding: var(--content-padding);
  min-height: 80px;
  display: flex;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  left: 0;
  top: 0;
`;

export const HeaderPageTitle = styled.h1`
  font-weight: 400;
`;
