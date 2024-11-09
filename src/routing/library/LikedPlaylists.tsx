import { IconPlaylistOff, IconPlus } from '@tabler/icons-react';
import styled from 'styled-components';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { PlaylistItem } from '../../entities/playlist/ui';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { Loading } from '../../shared/components/loading';
import { PageMessage } from '../../shared/components/pageMessage';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { PageGridStyled } from './styles';
import { Flex } from '../../shared/components/flex';
import { useMemo } from 'react';

const IconWrapper = styled.div`
    height: 35%;
    width: 35%;
    display: flex;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.scheme.blue.transparent};

    @media (max-width: 768px) {
        width: 70%;
        height: 70%;
        background-color: transparent;
    }
`;

const AddPlaylistStyled = styled.div`
    width: 100%;
    height: calc(100% - 30px);
    border-radius: ${({ theme }) => theme.borderRadius.middle};
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.pageBackground2};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1rem;
    gap: 16px;
    color: ${({ theme }) => theme.colors.greyText2};

    svg {
        width: 65%;
        height: 65%;
        color: ${({ theme }) => theme.scheme.blue.action};
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        border-radius: 2px;
        top: 6px;

        svg {
            width: 80%;
            height: 80%;
        }
    }
`;

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

    const handleAddPlaylist = () => {
        modalModel.events.open({
            title: 'Create Playlist',
            content: <CreatePlaylistModal />,
        });
    };

    return (
        <ContentWrapper>
            {loading && <Loading />}
            {!loading && !allPlaylists.length && (
                <Flex height="100%" width="100%" jc="center" padding="20vh">
                    <PageMessage
                        icon={IconPlaylistOff}
                        title={'No playlists created'}
                        description={'They will appear here when you add them'}
                    >
                        <Button
                            onClick={handleAddPlaylist}
                            className="primary"
                            $width="150px"
                            color="#fff"
                        >
                            <IconPlus size={20} />
                            Add playlist
                        </Button>
                    </PageMessage>
                </Flex>
            )}
            <PageGridStyled>
                {!!allPlaylists.length && (
                    <PlaylistItem
                        orientation={isMobile ? 'horizontal' : 'vertical'}
                        onClick={handleAddPlaylist}
                        isAuthor
                        playlist={createPlaylistObject(createAuthorObject({}), {
                            name: 'New playlist',
                            authors: [],
                            imageColors: [
                                'transparent',
                                'transparent',
                                'transparent',
                                'transparent',
                                'transparent',
                                'transparent',
                            ],
                        })}
                        as="button"
                    >
                        <AddPlaylistStyled>
                            <IconWrapper>
                                <IconPlus size={24} />
                            </IconWrapper>
                            {/* New Playlist */}
                        </AddPlaylistStyled>
                    </PlaylistItem>
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
