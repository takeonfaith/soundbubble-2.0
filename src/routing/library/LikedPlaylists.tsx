import { IconPlaylistOff } from '@tabler/icons-react';
import { useMemo } from 'react';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistButton } from '../../features/createPlaylistButton';
import { LoginButton } from '../../features/loginButton';
import { Loading } from '../../shared/components/loading';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import { PageGridStyled } from './styles';
import { translate } from '../../i18n';
import { useUnit } from 'effector-react';
import { $isMobileOrTablet } from '../../shared/hooks/useDevice/model';

export const LikedPlaylists = () => {
    const [added, loadingAdded] = userModel.useAddedPlaylists();
    const [own, loadingOwn] = userModel.useOwnPlaylists();
    const [currentUser] = userModel.useUser();
    const loading = loadingAdded || loadingOwn;
    const allPlaylists = useMemo(
        () => [...own, ...added.filter((p) => !p.isAlbum)],
        [added, own]
    );
    const isMobile = useUnit($isMobileOrTablet);

    if (!currentUser) {
        return (
            <PageMessage
                icon={IconPlaylistOff}
                title={translate('need_to_login')}
                description={''}
            >
                <LoginButton />
            </PageMessage>
        );
    }

    if (!loading && !allPlaylists.length) {
        return (
            <PageMessage
                icon={IconPlaylistOff}
                title={translate('no_playlists')}
                description={translate('no_playlists_subtext')}
            >
                <CreatePlaylistButton main />
            </PageMessage>
        );
    }

    return (
        <ContentWrapper>
            {loading && <Loading />}
            <PageGridStyled>
                {!!allPlaylists.length && (
                    <CreatePlaylistButton
                        orientation={isMobile ? 'horizontal' : 'vertical'}
                    />
                )}
                {allPlaylists.map((playlist) => {
                    const isAuthor =
                        !!currentUser &&
                        !!playlist.authors.find(
                            (a) => a.uid === currentUser.uid
                        );

                    return (
                        <PlaylistItem
                            orientation={isMobile ? 'horizontal' : 'vertical'}
                            playlist={playlist}
                            key={playlist.id}
                            isAuthor={isAuthor}
                        />
                    );
                })}
            </PageGridStyled>
        </ContentWrapper>
    );
};
