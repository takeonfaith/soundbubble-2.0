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
                width="fit-content"
                loading={performingAction}
                onClick={handleToggleLike}
                className="ghost"
                style={{ padding: '0 10px' }}
            >
                {isLiked ? translate('liked') : translate('add_to_liked')}
            </LikeButton>
        </LikeButtonWrapper>
    );
};
