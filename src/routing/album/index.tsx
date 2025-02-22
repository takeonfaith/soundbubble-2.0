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
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { PlaylistStatistics } from '../playlist/ui/layout/PlaylistStatistics';
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

export const AlbumPage = () => {
    const [currentPlaylist, loading] = playlistModel.usePlaylist();
    const [currentPlaylistSongs] = playlistModel.usePlaylistSongs();
    const error = !loading && !currentPlaylist;

    const [currentUser] = userModel.useUser();
    const isOwner = !!currentPlaylist?.authors.find(
        (author) => author.uid === currentUser?.uid
    );
    const url = `/album/${currentPlaylist?.id}`;

    useUrlParamId({
        page: 'album',
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
        url,
        id: currentPlaylist?.id,
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
                            handleClickShare={handleClickShare}
                            album={currentPlaylist}
                            isOwner={isOwner}
                            queue={queue}
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
                            <VerticalSongsList
                                showSerialNumber={0}
                                queue={queue}
                            />
                            {(currentPlaylistSongs?.length ?? 0) > 0 &&
                                isOwner && (
                                    <AddSongsButton
                                        playlist={currentPlaylist}
                                    />
                                )}
                        </PlaylistPageSongs>
                        <BottomPlaylist>
                            {(currentPlaylistSongs?.length ?? 0) > 0 && (
                                <PlaylistStatistics
                                    songs={currentPlaylistSongs}
                                />
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
