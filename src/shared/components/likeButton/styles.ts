import { styled } from "styled-components";
import { Button } from "../button";

export const LikeButtonStyled = styled(Button) <{ likeColor: string; isLiked: boolean }>`
  width: 30px;
  min-height: 30px;
  color: ${({ theme, likeColor, isLiked }) => isLiked ? likeColor : theme.colors.greyText};

  svg {
    width: 22px;
    height: 22px;
  }
`;
