import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { LikeButtonStyled } from './styles';
import { DARK_THEME } from '../../shared/constants/theme';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    songId: string | undefined;
    likeColor: string | undefined;
    onClick?: (songId: string) => void;
    width?: string;
    height?: string;
    background?: string;
};

export const LikeButton = ({
    songId,
    likeColor = DARK_THEME.colors.greyText,
    onClick,
    background,
    height,
    width = '30px',
    ...props
}: Props) => {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {}, []);

    const onLikeClick = (e: Evt<'btn'>) => {
        e.stopPropagation();
        if (songId) onClick?.(songId);

        setIsLiked((prev) => !prev);
    };

    return (
        <LikeButtonStyled
            {...props}
            $width={width}
            $height={height}
            $background={background}
            className={'like-button ' + (isLiked ? 'liked' : '')}
            onClick={onLikeClick}
            likeColor={likeColor}
        >
            {isLiked ? <IconHeartFilled /> : <IconHeart />}
        </LikeButtonStyled>
    );
};
