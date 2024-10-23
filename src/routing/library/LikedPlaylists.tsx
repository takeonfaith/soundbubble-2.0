import { IconPlus } from '@tabler/icons-react';
import styled from 'styled-components';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { PlaylistItem } from '../../entities/playlist/ui';
import { userModel } from '../../entities/user/model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { modalModel } from '../../layout/modal/model';
import { Loading } from '../../shared/components/loading';
import { ContentWrapper } from '../../shared/components/pageWrapper';
import useCurrentDevice from '../../shared/hooks/useCurrentDevice';
import { PageGridStyled } from './styles';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';

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
    const allPlaylists = [...own, ...added];
    const { isMobile } = useCurrentDevice();

    return (
        <ContentWrapper>
            {(loadingAdded || loadingOwn) && <Loading />}
            <PageGridStyled>
                <PlaylistItem
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                    onClick={() =>
                        modalModel.events.open({
                            title: 'Create Playlist',
                            content: <CreatePlaylistModal />,
                        })
                    }
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
