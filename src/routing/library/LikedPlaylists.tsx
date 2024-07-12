import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { Loading } from '../../shared/components/loading';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { PageGridStyled } from './styles';

export const LikedPlaylists = () => {
    const [added, loadingAdded] = userModel.useAddedPlaylists();
    const [own, loadingOwn] = userModel.useOwnPlaylists();

    return (
        <ContentWrapper>
            {(loadingAdded || loadingOwn) && <Loading />}
            <PageGridStyled>
                {[...own, ...added].map((playlist) => {
                    return (
                        <PlaylistItem
                            playlist={playlist}
                            key={playlist.id}
                        />
                    );
                })}
            </PageGridStyled>
        </ContentWrapper>
    );
};
