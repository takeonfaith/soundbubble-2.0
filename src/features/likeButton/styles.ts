import { styled } from 'styled-components';
import { Button } from '../../shared/components/button';

export const LikeButtonStyled = styled(Button)<{
    likeColor: string;
    isLiked: boolean;
}>`
    color: ${({ isLiked, likeColor, theme }) =>
        isLiked ? likeColor : theme.colors.textColor};
    filter: brightness(1.2);

    svg {
        width: 22px;
        height: 22px;
    }
`;
