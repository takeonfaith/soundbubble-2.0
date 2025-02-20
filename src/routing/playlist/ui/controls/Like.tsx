import { ToggleLike } from '../../../../entities/playlist/hooks/useTogglePlaylistLike';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { LikeButton } from '../../../../features/likeButton';
import { translate } from '../../../../i18n';
import { LikeButtonWrapper } from '../../styles';

type Props = {
    playlist: TPlaylist | null;
    likeModel: ((playlist: TPlaylist) => ToggleLike) | undefined;
};

export const Like = ({ playlist, likeModel }: Props) => {
    if (!likeModel || !playlist) return null;

    const { isLiked, handleToggleLike, performingAction } = likeModel(playlist);

    return (
        <LikeButtonWrapper>
            <LikeButton
                entity={playlist}
                likeColor={playlist.imageColors[0]}
                isLiked={isLiked}
                loading={performingAction}
                onClick={handleToggleLike}
                className="ghost default"
            >
                {isLiked ? translate('liked') : translate('add_to_liked')}
            </LikeButton>
        </LikeButtonWrapper>
    );
};
