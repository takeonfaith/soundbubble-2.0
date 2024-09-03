import { IconError404Off, IconMusicOff, IconPlus } from '@tabler/icons-react';
import { playlistModel } from '../../entities/playlist/model';
import { getHumanDuration } from '../../entities/song/lib/getHumanDuration';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
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

    const totalDuration = currentPlaylistSongs?.reduce((acc, song) => {
        acc += song.duration;
        return acc;
    }, 0);

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
                                songs={currentPlaylistSongs ?? []}
                                listName={currentPlaylist?.name ?? ''}
                                listIcon={currentPlaylist?.image ?? ''}
                                listUrl={`/playlist/${
                                    currentPlaylist?.id ?? ''
                                }`}
                            />
                        </PlaylistPageSongs>
                        <BottomPlaylist>
                            {(currentPlaylistSongs?.length ?? 0) > 0 &&
                                isAuthor && (
                                    <Button
                                        $height="35px"
                                        $width="130px"
                                        className="outline"
                                        style={{ fontSize: '0.85rem' }}
                                    >
                                        <IconPlus size={18} />
                                        Add songs
                                    </Button>
                                )}
                            {(currentPlaylistSongs?.length ?? 0) > 0 && (
                                <Subtext
                                    style={{
                                        fontSize: '0.85rem',
                                        opacity: '0.4',
                                    }}
                                >
                                    {currentPlaylistSongs?.length ?? 0} songs,
                                    {getHumanDuration(totalDuration, 'text')}
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
