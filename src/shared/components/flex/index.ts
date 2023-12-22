import styled from "styled-components";

export const Flex = styled.div<{
  jc?: "space-between" | "center" | "flex-start" | "flex-end" | "space-around";
  gap?: number;
  d?: "column" | "row";
  width?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => jc ?? "flex-start"};
  flex-direction: ${({ d }) => d ?? "row"};
  gap: ${({ gap }) => `${gap}px`};
  width: ${({ width }) => width ?? "fit-content"};
`;
