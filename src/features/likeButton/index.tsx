import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { TSong } from '../../entities/song/model/types';
import { DARK_THEME } from '../../shared/constants/theme';
import { LikeButtonStyled } from './styles';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    //TODO: Remove connection to song so that it can be reused to other entities
    song: TSong | null;
    likeColor: string | undefined;
    onClick?: (song: TSong) => void;
    width?: string;
    height?: string;
    isLiked: boolean;
    background?: string;
};

export const LikeButton = ({
    song,
    isLiked,
    likeColor = DARK_THEME.colors.greyText,
    background,
    height,
    width = '30px',
    onClick,
    ...props
}: Props) => {
    const { loggedIn } = usePrivateAction();

    const onLikeClick = loggedIn((e: Evt<'btn'>) => {
        e.stopPropagation();
        if (song) {
            onClick?.(song);
        }
    });

    return (
        <LikeButtonStyled
            {...props}
            $width={width}
            $height={height}
            $background={background}
            className={'like-button ' + (isLiked ? 'liked' : '')}
            onClick={onLikeClick}
            $likeColor={likeColor}
        >
            {isLiked ? <IconHeartFilled /> : <IconHeart />}
        </LikeButtonStyled>
    );
};
