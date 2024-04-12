import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../../../shared/components/button";
import { TOrientation } from "../../user/types";

export const PlaylistStyled = styled(Link) <{ $color1: string; $orientation: TOrientation }>`
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

  @media (max-width:1200px) {
    --size: calc(100vw / 6); 
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

export const PlaylistCoverStyled = styled.div<{ $color1: string | undefined; $size?: string }>`
  width: ${({ $size }) => $size ?? 'var(--size)'};
  height: ${({ $size }) => $size ?? 'var(--size)'};
  /* min-width: 140px;
  min-height: 140px; */
  max-width: 300px;
  max-height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: ${({ $color1 }) => $color1 ?? 'grey'};
  border-radius: ${({ theme }) => theme.borderRadius.huge};
  position: relative;

  img {
    width: 100%;
    transition: 0.3s transform ease-in-out;
  }

  .playlist-icon {
    width: 50%;
    height: 50%;
    opacity: 0.8;
    margin: auto;
    color:#fff;
  }

  

  &:hover {
    img {
      transform: scale(1.1);
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