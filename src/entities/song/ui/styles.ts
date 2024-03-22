import { Button } from "@components/button";
import styled from "styled-components";
import { THEME } from "../../../shared/constants/theme";

export const PlayButton = styled.div`
  border: none;
  transition: 0.2s opacity;
  cursor: pointer;

  width: 20px;
  height: 20px;
`;

const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  background: #0e0e0e;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.overlay};
`;

export const MoreInfoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  border: none;
  padding: 4px;
  opacity: 0;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.overlay};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const PlayOverlay = styled(Overlay)`
  opacity: 0;
`;

export const PauseOverlay = styled(Overlay)`
  opacity: 1;
  svg {
    stroke-width: 1;
  }
`;

export const LoadingOverlay = styled(Overlay)``;

export const SongLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  @container (min-width: 700px) {
    gap: 20px;
  }

  @container (max-width: 699px) {
    gap: 12px;
  }
`;

export const SongStyled = styled.div<{ playing: boolean }>`
  width: 100%;
  height: 50px;
  background: ${({ playing }) => playing ? THEME.colors.lightHover : 'transparent'};
  padding: 4px 8px;
  border-radius: calc(${({ theme }) => theme.borderRadius.mild} + 6px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
  border: none;
  container-type: size;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    box-shadow: 0 0 20px #14141473;
  }

  &:hover ${PlayOverlay}, &:hover ${MoreInfoButton} {
    opacity: 1;
  }

  ${MoreInfoButton} {
    ${({ playing }) => playing ? 'opacity: 1' : 'opacity:0'};
  }

  /* @container (max-width: 699px) {
    height: 60px;
  } */
`;

export const SongCover = styled.div<{ color1: string }>`
  height: 46px;
  min-width: 46px;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  background: ${({ color1 }) => color1};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @container (min-width: 700px) {
    height: 35px;
    max-width: 35px;
    min-width: 35px;
  }

  @container (max-width: 699px) {
    height: 42px;
    min-width: 42px;
  }

  .action-icon {
    width: 20px;
    height: 20px;
    opacity: 0.9;
  }

  svg {
    color: ${({ color1 }) => color1};
  }
`;

export const SongInfo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @container (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }

  @container (max-width: 699px) {
    flex-direction: column;
  }
`;

export const SongName = styled.div`
  font-weight: 200;
  opacity: 0.85;
  font-size: 1rem;

  @container (min-width: 700px) {
    white-space: nowrap;
  }
`;

export const SongNameAndListens = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @container (min-width: 700px) {
    width: 100%;
  }
`;

export const Listens = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  opacity: 0.7;
  font-size: 0.8rem;

  @container (min-width: 700px) {
    display: none;
  }

  &.outside {
    @container (min-width: 700px) {
      display: flex;
      min-width: 200px;
    }

    @container (max-width: 699px) {
      display: none;
    }
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const LikeButton = styled(Button)`
  width: 30px;
  min-height: 30px;
  color: ${({ theme }) => theme.colors.greyText};

  svg {
    width: 22px;
    height: 22px;
  }
`;
