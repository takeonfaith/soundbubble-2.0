import { IconDiscOff } from '@tabler/icons-react';
import { useMemo } from 'react';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { Loading } from '../../shared/components/loading';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { PageGridStyled } from './styles';
import { Flex } from '../../shared/components/flex';

export const LikedAlbums = () => {
    const [added, loadingAdded] = userModel.useAddedPlaylists();
    const { isMobile } = useCurrentDevice();

    const allAlbums = useMemo(() => added.filter((p) => p.isAlbum), [added]);

    return (
        <ContentWrapper>
            {loadingAdded && <Loading />}
            {!loadingAdded && !allAlbums.length && (
                <Flex height="100%" width="100%" jc="center" padding="20vh">
                    <PageMessage
                        icon={IconDiscOff}
                        title={'No albums added'}
                        description={
                            'They will appear here if you add a new album'
                        }
                    />
                </Flex>
            )}
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
