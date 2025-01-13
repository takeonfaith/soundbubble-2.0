import { IconDiscOff } from '@tabler/icons-react';
import { useMemo } from 'react';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { Loading } from '../../shared/components/loading';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { PageGridStyled } from './styles';

export const LikedAlbums = () => {
    const [added, loadingAdded] = userModel.useAddedPlaylists();
    const { isMobile } = useCurrentDevice();

    const allAlbums = useMemo(() => added.filter((p) => p.isAlbum), [added]);

    if (!loadingAdded && !allAlbums.length) {
        return (
            <PageMessage
                icon={IconDiscOff}
                title={'No albums added'}
                description={'They will appear here if you add a new album'}
            />
        );
    }

    return (
        <ContentWrapper>
            {loadingAdded && <Loading />}

            <PageGridStyled>
                {allAlbums.map((playlist) => {
                    return (
                        <PlaylistItem
                            orientation={isMobile ? 'horizontal' : 'vertical'}
                            playlist={playlist}
                            key={playlist.id}
                            isAuthor={false}
                        />
                    );
                })}
            </PageGridStyled>
        </ContentWrapper>
    );
};
