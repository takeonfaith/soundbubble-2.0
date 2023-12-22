import styled from "styled-components";

export const CoverStyled = styled.img<{ $coverLoaded: boolean }>`
  height: 100%;
  object-fit: cover;
  transition: 0.7s;
  opacity: ${({ $coverLoaded }) => ($coverLoaded ? "1" : "0")};
  transform: ${({ $coverLoaded }) =>
    $coverLoaded ? "scale(1)" : "scale(1.2)"};
`;
