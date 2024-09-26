import { IconError404Off, IconMusicOff, IconPlus } from '@tabler/icons-react';
import { playlistModel } from '../../entities/playlist/model';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { getTotalSongsDuration } from '../../shared/funcs/getTotalSongsDuration';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { AddSongsButton } from './AddSongsButton';
import { AddSongsToPlaylistModal } from './AddSongsToPlaylistModal';
import { PageTop } from './PageTop';
import { SkeletonLoading } from './Skeleton';
import {
    BottomPlaylist,
    PlaylistPageSongs,
    PlaylistPageStyled,
    PlaylistSimilar,
} from './styles';

export const PlaylistPage = () => {
    const { currentPlaylist, currentPlaylistSongs, loading, error } =
        playlistModel.usePlaylist();

    const [currentUser] = userModel.useUser();
    const isOwner =
        currentUser?.isAdmin ||
        !!currentPlaylist?.authors.find(
            (author) => author.uid === currentUser?.uid
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
            content: <AddSongsToPlaylistModal playlist={currentPlaylist} />,
            sizeY: 'l',
        });
    };

    const queue = createQueueObject({
        name: currentPlaylist?.name,
        songs: currentPlaylistSongs ?? [],
        imageUrl: currentPlaylist?.image,
        url: `/playlist/${currentPlaylist?.id}`,
    });

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
                            name={currentPlaylist?.name}
                            playlist={currentPlaylist}
                            queue={queue}
                            authors={currentPlaylist?.authors}
                            style={{
                                padding:
                                    '80px var(--page-padding) 0 calc(var(--page-padding) + 8px)',
                            }}
                        />

                        <PlaylistPageSongs>
                            {currentPlaylist?.songs.length === 0 && (
                                <PageMessage
                                    icon={IconMusicOff}
                                    title="Oops!"
                                    description="Playlist is empty"
                                >
                                    {isOwner && (
                                        <Button
                                            $width="130px"
                                            $height="35px"
                                            className="outline"
                                            onClick={handleAddSongsModal}
                                            style={{ fontSize: '0.85rem' }}
                                        >
                                            <IconPlus size={18} />
                                            Add songs
                                        </Button>
                                    )}
                                </PageMessage>
                            )}
                            <VerticalSongsList queue={queue} />
                            {(currentPlaylistSongs?.length ?? 0) > 0 &&
                                isOwner && (
                                    <AddSongsButton
                                        playlist={currentPlaylist}
                                    />
                                )}
                        </PlaylistPageSongs>
                        <BottomPlaylist>
                            {(currentPlaylistSongs?.length ?? 0) > 0 && (
                                <Subtext
                                    style={{
                                        fontSize: '0.85rem',
                                        opacity: '0.4',
                                    }}
                                >
                                    {currentPlaylistSongs?.length ?? 0} songs,
                                    {getTotalSongsDuration(
                                        currentPlaylistSongs
                                    )}
                                </Subtext>
                            )}
                        </BottomPlaylist>
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
