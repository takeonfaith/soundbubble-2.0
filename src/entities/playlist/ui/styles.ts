import { styled } from "styled-components";

export const PlaylistStyled = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  color: #fff;
`;

export const PlaylistCover = styled.div<{ $color1: string }>`
  width: calc(100vw / 9);
  height: calc(100vw / 9);
  min-width: 140px;
  min-height: 140px;
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: ${({ $color1 }) => $color1};
  border-radius: ${({ theme }) => theme.borderRadius.mild};
`;

export const PalylistTitle = styled.div`
  font-size: 1rem;
`;

export const PalylistAuthors = styled.div`
  font-size: 0.8rem;
`;
