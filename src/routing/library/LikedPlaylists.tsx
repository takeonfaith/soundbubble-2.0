import { IconPlaylistOff } from '@tabler/icons-react';
import { useMemo } from 'react';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistButton } from '../../features/createPlaylistButton';
import { LoginButton } from '../../features/loginButton';
import { Loading } from '../../shared/components/loading';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { PageGridStyled } from './styles';

export const LikedPlaylists = () => {
    const [added, loadingAdded] = userModel.useAddedPlaylists();
    const [own, loadingOwn] = userModel.useOwnPlaylists();
    const [currentUser] = userModel.useUser();
    const loading = loadingAdded || loadingOwn;
    const allPlaylists = useMemo(
        () => [...own, ...added.filter((p) => !p.isAlbum)],
        [added, own]
    );
    const { isMobile } = useCurrentDevice();

    if (!currentUser) {
        return (
            <PageMessage
                icon={IconPlaylistOff}
                title={'Need to log in'}
                description={'To create playlists and share them'}
            >
                <LoginButton />
            </PageMessage>
        );
    }

    if (!loading && !allPlaylists.length) {
        return (
            <PageMessage
                icon={IconPlaylistOff}
                title={'No playlists created'}
                description={'They will appear here when you add them'}
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
