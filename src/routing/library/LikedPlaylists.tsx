import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { Loading } from '../../shared/components/loading';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { PageGridStyled } from './styles';

export const LikedPlaylists = () => {
    const [added, loadingAdded] = userModel.useAddedPlaylists();
    const [own, loadingOwn] = userModel.useOwnPlaylists();
    const allPlaylists = [...own, ...added];
    const { isMobile } = useCurrentDevice();

    return (
        <ContentWrapper>
            {(loadingAdded || loadingOwn) && <Loading />}
            <PageGridStyled>
                {allPlaylists.map((playlist) => {
                    return (
                        <PlaylistItem
                            orientation={isMobile ? 'horizontal' : 'vertical'}
                            playlist={playlist}
                            key={playlist.id}
                        />
                    );
                })}
            </PageGridStyled>
        </ContentWrapper>
    );
};
