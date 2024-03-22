import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../../../shared/components/button";

export const PlaylistStyled = styled(Link) <{ $color1: string }>`
  gap: 10px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  color: #fff;
  position: relative;
  text-decoration: none;
  --size: calc(100vw / 8);

  width: var(--size);
  
  .authors {
    font-size: 0.75rem;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: calc(100vw / 9);
    height: calc(100vw / 9);
    transition: 0.2s opacity;
    box-shadow: 0 50px 100px ${({ $color1 }) => $color1};
    top: 0%;
    opacity: 0.2;
  }

  &:hover:before {
    opacity: 0.5;
  }

  @media (max-width:1200px) {
    --size: calc(100vw / 6); 
  }
`;

export const ControlButton = styled(Button) <{ $color: string }>`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
  opacity: 0;
  border-radius: 100%;
  color: ${({ $color }) => $color};
  background: ${({ theme }) => theme.colors.hover};
  transition: 0.2s opacity;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`

export const PlaylistCover = styled.div<{ $color1: string }>`
  width: var(--size);
  height: var(--size);
  min-width: 140px;
  min-height: 140px;
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: ${({ $color1 }) => $color1};
  border-radius: ${({ theme }) => theme.borderRadius.middle};
  position: relative;

  img {
    transition: 0.3s transform ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    ${ControlButton} {
      opacity: 0.9;
    }
  }
`;

export const PalylistTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const PalylistAuthors = styled.div`
  font-size: 0.8rem;
`;

