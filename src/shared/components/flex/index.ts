import styled from "styled-components";

export const Flex = styled.div<{
  jc?: "space-between" | "center" | "flex-start" | "flex-end" | "space-around";
  ai?: "center" | "flex-start" | "flex-end";
  gap?: number;
  d?: "column" | "row";
  width?: string;
  height?: string;
}>`
  display: flex;
  align-items: ${({ ai }) => ai ?? "center"};
  justify-content: ${({ jc }) => jc ?? "flex-start"};
  flex-direction: ${({ d }) => d ?? "row"};
  gap: ${({ gap }) => `${gap ?? 0}px`};
  width: ${({ width }) => width ?? "fit-content"};
  height: ${({ height }) => height ?? "fit-content"};
`;
