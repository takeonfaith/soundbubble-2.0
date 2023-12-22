import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: auto;
  position: relative;
`;

export const ContentStyled = styled.div`
  width: 100%;
  color: #fff;
  padding: 30px 200px;
  font-weight: 200;
  background: ${({ theme }) => theme.colors.pageBackground};
  position: relative;
  margin-top: 300px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -400px;
    height: 400px;
    width: 100%;
    background: linear-gradient(
      0deg,
      ${({ theme }) => theme.colors.pageBackground},
      #0000005e
    );
  }
`;

export const ContentImage = styled.img`
  min-width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
  will-change: auto;
`;
