import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { TEntity } from '../../entities/search/model/types';
import { Loading } from '../../shared/components/loading';
import { DARK_THEME } from '../../shared/constants/theme';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';
import { LikeButtonStyled } from './styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    entity: TEntity | null | undefined;
    likeColor: string | undefined;
    onClick?: (event: Evt<'btn'>, entity: TEntity) => void;
    width?: string;
    height?: string;
    isLiked: boolean;
    background?: string;
    loading?: boolean;
};

export const LikeButton = ({
    isLiked,
    entity,
    likeColor = DARK_THEME.colors.greyText,
    background,
    height,
    width = '30px',
    onClick,
    loading,
    ...props
}: Props) => {
    const { loggedIn } = usePrivateAction();

    const onLikeClick = loggedIn((e: Evt<'btn'>) => {
        e.stopPropagation();
        e.preventDefault();
        if (entity) {
            onClick?.(e, entity);
        }
    });

    return (
        <LikeButtonStyled
            {...props}
            $width={width}
            $height={height}
            $background={background}
            className={`like-button ${isLiked ? 'liked' : ''} ${
                props.className ?? ''
            }`}
            onClick={onLikeClick}
            disabled={loading || props.disabled}
            $likeColor={likeColor}
        >
            {loading ? (
                <Loading />
            ) : isLiked ? (
                <IconHeartFilled />
            ) : (
                <IconHeart />
            )}
            {props.children}
        </LikeButtonStyled>
    );
};
