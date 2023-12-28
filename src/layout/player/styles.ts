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
  width: 360px;
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
  scroll-padding-top: 260px;
`;

export const Lyrics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #fff;
  font-size: 1.8rem;
`;

export const Lyric = styled.div`
  padding: 10px;
  transition: 0.2s background, 0.2s opacity, 0.3s transform;
  cursor: pointer;
  opacity: 0.4;
  transform: scale(0.9);
  transform-origin: left center;
  border-radius: ${({ theme }) => theme.borderRadius.middle};
  font-weight: 500;

  &.ordinary {
    opacity: 1;
    transform: scale(1);
  }

  &.current {
    opacity: 1;
    transform: scale(1);
  }

  &.farFromCurrent {
    opacity: 0.05;
    transform: scale(0.8);
  }

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
    stroke-width: 2;
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.lightHover};
  }
`;

export const LyricLoadingAnimation = styled.div<{
  $duration: number;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transition: 0.5s opacity;

  & span {
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.lightHover};
    border-radius: 10px;
  }

  &.current {
    animation: dissapear 1s forwards ease-in-out;
    transform-origin: left center;
    opacity: 1;
    animation-delay: ${({ $duration }) => `calc(${$duration}s - 1s)`};

    & span:nth-child(1) {
      animation: lyricloading ${({ $duration }) => $duration / 3}s forwards;
      animation-delay: 0;
    }

    & span:nth-child(2) {
      animation: lyricloading ${({ $duration }) => $duration / 3}s forwards;
      animation-delay: ${({ $duration }) => $duration / 3}s;
    }

    & span:nth-child(3) {
      animation: lyricloading ${({ $duration }) => $duration / 3}s forwards;
      animation-delay: ${({ $duration }) => ($duration * 2) / 3}s;
    }

    @keyframes lyricloading {
      0% {
        transform: scale(1);
        background: ${({ theme }) => theme.colors.lightHover};
      }
      100% {
        transform: scale(1.2);
        background: #fff;
      }
    }

    @keyframes dissapear {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      30% {
        transform: scale(0.95);
        opacity: 1;
      }
      60% {
        transform: scale(1.05);
        opacity: 1;
      }
      100% {
        transform: scale(0.8);
        opacity: 0;
      }
    }
  }
`;
