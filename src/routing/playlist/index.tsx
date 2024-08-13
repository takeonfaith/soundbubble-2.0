import { IconError404Off, IconMusicOff, IconPlus } from '@tabler/icons-react';
import { playlistModel } from '../../entities/playlist/model';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { PageTop } from './pageTop';
import { SkeletonLoading } from './Skeleton';
import {
    PlaylistPageSongs,
    PlaylistPageStyled,
    PlaylistSimilar,
} from './styles';

export const PlaylistPage = () => {
    const { currentPlaylist, currentPlaylistSongs, loading, error } =
        playlistModel.usePlaylist();
    const [{ data }] = userModel.useUser();
    const isAuthor = !!currentPlaylist?.authors.find(
        (author) => author.uid === data?.uid
    );
    useUrlParamId({
        page: 'playlist',
        onChangeId: (id) => {
            if (id) {
                playlistModel.events.loadPlaylist(id);
            }
        },
    });

    const handleClickShare = () => {
        modalModel.events.open({
            title: `Share ${currentPlaylist?.name} with friends`,
            content: <ShareModal entity={currentPlaylist} />,
        });
    };

    const handleAddSongsModal = () => {
        modalModel.events.open({
            title: 'Add songs to playlist',
            content: <></>,
        });
    };

    return (
        <PageWrapper>
            {!error && (
                <SkeletonPageAnimation
                    color=""
                    loading={!error && loading}
                    skeleton={<SkeletonLoading />}
                >
                    <PlaylistPageStyled>
                        <PageTop
                            isAuthor={isAuthor}
                            handleClickShare={handleClickShare}
                            id={''}
                            name={currentPlaylist?.name}
                            numberOfListenersPerMonth={currentPlaylist?.listens}
                            subscribers={currentPlaylist?.subscribers}
                            isPrivate={currentPlaylist?.isPrivate}
                            colors={currentPlaylist?.imageColors}
                        />
                        <PlaylistPageSongs>
                            {currentPlaylist?.songs.length === 0 && (
                                <PageMessage
                                    icon={IconMusicOff}
                                    title="Oops!"
                                    description="Playlist is empty"
                                >
                                    {isAuthor && (
                                        <DefaultButton
                                            width="130px"
                                            appearance="secondary"
                                            onClick={handleAddSongsModal}
                                        >
                                            <IconPlus size={18} />
                                            Add songs
                                        </DefaultButton>
                                    )}
                                </PageMessage>
                            )}
                            <VerticalSongsList
                                songs={currentPlaylistSongs ?? []}
                                listName={currentPlaylist?.name ?? ''}
                                listIcon={currentPlaylist?.image ?? ''}
                                listUrl={`/playlist/${
                                    currentPlaylist?.id ?? ''
                                }`}
                            />
                        </PlaylistPageSongs>
                        <PlaylistSimilar></PlaylistSimilar>
                    </PlaylistPageStyled>
                </SkeletonPageAnimation>
            )}
            {error && (
                <PageMessage
                    icon={IconError404Off}
                    title="No playlist was found"
                    description={'Perhaps it was deleted'}
                />
            )}
        </PageWrapper>
    );
};
