import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../../../shared/components/button";
import { TOrientation } from "../../user/types";
import { PLAYLIST_RADIUS } from "../constants";

export const PlaylistStyled = styled(Link)<{ $color1: string; $orientation: TOrientation }>`
  gap: 10px;
  display: flex;
  flex-direction: ${({ $orientation }) => $orientation === 'vertical' ? 'column' : 'row'};
  align-items: ${({ $orientation }) => $orientation === 'vertical' ? 'flex-start' : 'center'};
  height: fit-content;
  color: #fff;
  position: relative;
  text-decoration: none;
  --size: ${({ $orientation }) => $orientation === 'vertical' ? 'calc(100vw / 8)' : '34px'};

  width: ${({ $orientation }) => $orientation === 'vertical' ? 'var(--size)' : '100%'};
  
  .authors {
    font-size: 0.75rem;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: var(--size);
    height: var(--size);
    transition: 0.2s opacity;
    box-shadow: 0 50px 100px ${({ $color1 }) => $color1};
    top: 0%;
    opacity: 0.2;
    border-radius: ${PLAYLIST_RADIUS};
  }

  &:hover:before {
    opacity: 0.5;
  }

  .cover-children {
    opacity: 0;
    transition: 0.2s opacity;
  }

  &:hover {
    .cover-children {
      opacity: 0.9;
    }
  }

  @media (max-width: 1200px) {
    --size: calc(100vw / 6); 
  }

  @media (max-width: 800px) {
    --size: calc(100vw / 4);
  }
`;

export const ControlButton = styled(Button) <{ $color: string; $orientation: TOrientation }>`
  position: absolute;
  bottom: ${({ $orientation }) => $orientation === 'vertical' ? '16px' : '0px'};
  left: ${({ $orientation }) => $orientation === 'vertical' ? '16px' : '0px'};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  color: ${({ $color }) => $color};
  background: ${({ theme }) => theme.colors.modal};
  transition: 0.2s opacity;

  &:hover {
    background: ${({ theme }) => theme.colors.pageBackground};
  }
`

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