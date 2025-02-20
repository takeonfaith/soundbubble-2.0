import { IconError404Off, IconMusicOff } from '@tabler/icons-react';
import { ToggleLike } from '../../entities/playlist/hooks/useTogglePlaylistLike';
import { TPlaylist } from '../../entities/playlist/model/types';
import { TAuthor, TQueue, TSong } from '../../entities/song/model/types';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { PlaylistStatistics } from './ui/layout/PlaylistStatistics';
import { SkeletonLoading } from './Skeleton';
import {
    BottomPlaylist,
    PlaylistPageSongs,
    PlaylistPageStyled,
    PlaylistSimilar,
} from './styles';
import { AddSongsButton } from './ui/editing/AddSongsButton';
import { PageTop } from './ui/layout/PageTop';
import { SearchNotFoundError } from './ui/layout/SearchNotFoundError';
import { useTypedTrasnlate } from '../../shared/hooks/useTypedTrasnlate';

type Props = {
    playlist: TPlaylist | null;
    isLoadingEditing: boolean;
    loading: boolean;
    queue: TQueue;
    isOwner: boolean;
    searching?: {
        isSearching: boolean;
        value: string;
    };
    currentPlaylistSongs: TSong[] | null;
    isEditing: boolean;
    name?: string;
    authors?: TAuthor[];
    imageUrl?: string;
    imageColors?: string[];
    likeModel?: (playlist: TPlaylist | null) => ToggleLike;
    handleRemoveSong: (song: TSong) => void;
};

export const PlaylistPageContent = (props: Props) => {
    const {
        playlist,
        name,
        authors,
        imageColors,
        imageUrl,
        isLoadingEditing,
        loading,
        isOwner,
        queue,
        searching,
        currentPlaylistSongs,
        isEditing,
        handleRemoveSong,
        likeModel,
    } = props;

    const error = !loading && !playlist;
    const translate = useTypedTrasnlate();

    return (
        <PageWrapper>
            {isLoadingEditing && <LoadingWrapper />}
            {!error && (
                <SkeletonPageAnimation
                    color=""
                    loading={!error && loading}
                    skeleton={<SkeletonLoading />}
                >
                    <PlaylistPageStyled>
                        <PageTop
                            name={name ?? playlist?.name}
                            imageUrl={imageUrl ?? playlist?.image}
                            playlist={playlist}
                            queue={queue}
                            likeModel={likeModel}
                            authors={authors ?? playlist?.authors}
                            style={{
                                padding:
                                    '60px var(--page-padding) 0 calc(var(--page-padding) + 8px)',
                            }}
                            isOwner={isOwner}
                            isEditing={isEditing}
                            searching={searching}
                            imageColors={imageColors}
                        />

                        <PlaylistPageSongs>
                            {searching?.value.length === 0 &&
                                currentPlaylistSongs?.length === 0 && (
                                    <PageMessage
                                        icon={IconMusicOff}
                                        title={translate('playlist_is_empty')}
                                        description={
                                            isOwner
                                                ? translate('playlist_is_empty_subtext')
                                                : ''
                                        }
                                    />
                                )}
                            <VerticalSongsList
                                queue={queue}
                                isEditing={isEditing}
                                onRemove={
                                    isOwner ? handleRemoveSong : undefined
                                }
                            />
                            {(currentPlaylistSongs?.length ?? 0) > 0 &&
                                searching?.value.length === 0 &&
                                isOwner && (
                                    <AddSongsButton playlist={playlist} />
                                )}
                        </PlaylistPageSongs>
                        <BottomPlaylist>
                            {searching?.value.length === 0 && (
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
                    title="Nothing found"
                    description={'Perhaps page was deleted or made private'}
                />
            )}
            <SearchNotFoundError
                songs={currentPlaylistSongs}
                searching={searching}
            />
        </PageWrapper>
    );
};
