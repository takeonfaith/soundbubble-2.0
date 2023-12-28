import { styled } from "styled-components";

export const PlaylistStyled = styled.div<{ $color1: string }>`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  color: #fff;
  position: relative;

  .authors {
    font-size: 0.75rem;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 60%;
    transition: 0.2s opacity;
    box-shadow: 0 50px 100px ${({ $color1 }) => $color1};
    top: 0%;
    opacity: 0.2;
  }

  &:hover:before {
    opacity: 0.5;
  }
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

  img {
    transition: 0.3s transform ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const PalylistTitle = styled.div`
  font-size: 0.95;
  font-weight: 300;
`;

export const PalylistAuthors = styled.div`
  font-size: 0.8rem;
`;
