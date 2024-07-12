import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { TSong } from '../../entities/song/model/types';
import { DARK_THEME } from '../../shared/constants/theme';
import { LikeButtonStyled } from './styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
    onClick,
    background,
    height,
    width = '30px',
    ...props
}: Props) => {
    const onLikeClick = (e: Evt<'btn'>) => {
        e.stopPropagation();
        if (song) {
            onClick?.(song);
        }
    };

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
