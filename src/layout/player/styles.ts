import styled from "styled-components";

export const PlayerStyled = styled.div<{ $colors: string[] | undefined }>`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  background-color: ${({ $colors }) => $colors?.[0] ?? "grey"};
  animation: bg 8s infinite;
  background-size: 200% 200%;
  background-image: linear-gradient(#000000b0, #00000057),
    radial-gradient(
      at 40% 20%,
      ${({ $colors }) => $colors?.[0] ?? "grey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 80% 0%,
      ${({ $colors }) => $colors?.[1] ?? "grey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 0% 50%,
      ${({ $colors }) => $colors?.[2] ?? "darkgrey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 80% 50%,
      ${({ $colors }) => $colors?.[3] ?? "lightgrey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 0% 100%,
      ${({ $colors }) => $colors?.[4] ?? "grey"} 0px,
      transparent 50%
    );

  @keyframes bg {
    0% {
      background-size: 100% 100%;
    }
    50% {
      background-size: 120% 120%;
    }
    100% {
      background-size: 100% 100%;
    }
  }
`;

export const PlayerWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .authors {
    font-size: 1rem;
    color: #fff;
  }
`;

export const PlayerCover = styled.div<{ $color1: string | undefined }>`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.middle};
  background: ${({ $color1 }) => $color1 ?? "darkgrey"};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 130px #000000ab;

  svg {
    width: 100px;
    height: 100px;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const PlayerTitle = styled.div`
  font-size: 1.5rem;
  width: 400px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #fff;
`;

export const RightSide = styled.div`
  width: 100%;
  height: 100%;
  padding: 260px 100px;
  overflow-y: auto;
`;

export const Lyrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 2.2rem;
  color: #fff;
  font-weight: 500;
`;

export const Lyric = styled.div`
  padding: 10px;
  transition: 0.2s background;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.middle};

  &:hover {
    background: #ffffff3d;
  }
`;

export const SmallButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.middle};
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightHover};
  }
`;
