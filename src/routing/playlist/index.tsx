import { IconError404Off, IconMusicOff } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import {
    deletePlaylistFx,
    playlistModel,
    updatePlaylistFx,
} from '../../entities/playlist/model';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { getTotalSongsDuration } from '../../shared/funcs/getTotalSongsDuration';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { AddSongsButton } from './AddSongsButton';
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
    const [isUpdating, isDeleting] = useUnit([
        updatePlaylistFx.pending,
        deletePlaylistFx.pending,
    ]);
    const isLoading = isDeleting || isUpdating;

    const isOwner = !!currentPlaylist?.authors.find(
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

    const queue = createQueueObject({
        name: currentPlaylist?.name,
        songs: currentPlaylistSongs ?? [],
        imageUrl: currentPlaylist?.image,
        url: `/playlist/${currentPlaylist?.id}`,
        id: currentPlaylist?.id,
    });

    return (
        <PageWrapper>
            {isLoading && <LoadingWrapper />}
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
                                    '60px var(--page-padding) 0 calc(var(--page-padding) + 8px)',
                            }}
                            isOwner={isOwner}
                        />

                        <PlaylistPageSongs>
                            {currentPlaylist?.songs.length === 0 && (
                                <PageMessage
                                    icon={IconMusicOff}
                                    title="Playlist is empty"
                                    description=""
                                />
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
                    description={'Perhaps it was deleted or made private'}
                />
            )}
        </PageWrapper>
    );
};
