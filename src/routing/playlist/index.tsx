import { IconError404Off, IconMusicOff, IconPlus } from '@tabler/icons-react';
import { playlistModel } from '../../entities/playlist/model';
import { getHumanDuration } from '../../entities/song/lib/getHumanDuration';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { userModel } from '../../entities/user/model';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { PageTop } from './pageTop';
import { SkeletonLoading } from './Skeleton';
import {
    BottomPlaylist,
    PlaylistPageSongs,
    PlaylistPageStyled,
    PlaylistSimilar,
} from './styles';
import { Button } from '../../shared/components/button';

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
                        <BottomPlaylist>
                            <Button
                                $height="35px"
                                $width="130px"
                                className="outline"
                            >
                                <IconPlus />
                                Add songs
                            </Button>
                            <Subtext style={{ fontSize: '0.85rem' }}>
                                {currentPlaylistSongs?.length ?? 0} songs,
                                {getHumanDuration(totalDuration, 'text')}
                            </Subtext>
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
