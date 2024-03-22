import styled from "styled-components";

export const BeautifulBackground = styled.div<{ $colors: string[] | undefined }>`
  background-color: ${({ $colors }) => $colors?.[1] ?? "grey"};
  animation: bg 8s infinite;
  background-size: 200% 200%;
  //linear-gradient(#000000b0, #00000057)
  background-image: linear-gradient(#00000042, #00000038),
    radial-gradient(
      at 40% 20%,
      ${({ $colors }) => $colors?.[0] ?? "grey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 80% 0%,
      ${({ $colors }) => $colors?.[5] ?? "grey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 0% 50%,
      ${({ $colors }) => $colors?.[2] ?? "darkgrey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 80% 50%,
      ${({ $colors }) => $colors?.[5] ?? "lightgrey"} 0px,
      transparent 50%
    ),
    radial-gradient(
      at 0% 100%,
      ${({ $colors }) => $colors?.[2] ?? "grey"} 0px,
      transparent 50%
    );

  &.close {
    opacity: 0;
    visibility: hidden;
    transform: translateY(200px);
  }

  @keyframes bg {
    0% {
		background-position: 0 0;
      background-size: 100% 100%;
    }
    50% {
		background-position: -100px -120px;
      background-size: 120% 120%;
    }
    100% {
		background-position: 0 0;
      background-size: 100% 100%;
    }
  }
`