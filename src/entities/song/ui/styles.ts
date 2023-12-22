import styled from "styled-components";

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
  transition: 0.2s opacity;
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
`;

export const SongStyled = styled.div`
  width: 100%;
  height: 55px;
  background: transparent;
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.mild};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    box-shadow: 0 0 20px #14141473;
  }

  &:hover ${PlayOverlay}, &:hover ${MoreInfoButton} {
    opacity: 1;
  }
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

  svg {
    width: 20px;
    height: 20px;
    opacity: 0.9;
    color: ${({ color1 }) => color1};
  }
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SongName = styled.div`
  font-weight: 200;
  opacity: 0.85;
  font-size: 1rem;
`;

export const SongImage = styled.img<{ $imageLoaded: boolean }>`
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
  opacity: ${({ $imageLoaded }) => ($imageLoaded ? "1" : "0")};
  transform: ${({ $imageLoaded }) =>
    $imageLoaded ? "scale(1)" : "scale(1.2)"};
`;

export const SongNameAndListens = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Listens = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  opacity: 0.7;
  font-size: 0.8rem;

  svg {
    width: 12px;
    height: 12px;
  }
`;
