import { styled } from 'styled-components';
import { Button } from '../../shared/components/button';

export const LikeButtonStyled = styled(Button)<{
    likeColor: string;
}>`
    color: ${({ theme }) => theme.colors.textColor};
    filter: brightness(1.2);

    &.liked {
        color: ${({ likeColor }) => likeColor};
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
