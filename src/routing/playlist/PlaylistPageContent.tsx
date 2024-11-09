import { IconError404Off, IconMusicOff } from '@tabler/icons-react';
import { ToggleLike } from '../../entities/playlist/hooks/useTogglePlaylistLike';
import { TPlaylist } from '../../entities/playlist/model/types';
import { TAuthor, TQueue, TSong } from '../../entities/song/model/types';
import { VerticalSongsList } from '../../entities/song/ui/verticalList';
import { LoadingWrapper } from '../../shared/components/loadingWrapper';
import { PageMessage } from '../../shared/components/pageMessage';
import { PageWrapper } from '../../shared/components/pageWrapper';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { Subtext } from '../../shared/components/subtext';
import { getTotalSongsDuration } from '../../shared/funcs/getTotalSongsDuration';
import { AddSongsButton } from '../album/AddSongsButton';
import { SkeletonLoading } from './Skeleton';
import {
    BottomPlaylist,
    PlaylistPageSongs,
    PlaylistPageStyled,
    PlaylistSimilar,
} from './styles';
import { PageTop } from './ui/layout/PageTop';
import { SearchNotFoundError } from './ui/layout/SearchNotFoundError';

type Props = {
    playlist: TPlaylist | null;
    isLoadingEditing: boolean;
    loading: boolean;
    error: string | null;
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
        error,
        isOwner,
        queue,
        searching,
        currentPlaylistSongs,
        isEditing,
        handleRemoveSong,
        likeModel,
    } = props;

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
                                        title="Playlist is empty"
                                        description=""
                                    />
                                )}
                            <VerticalSongsList
                                queue={queue}
                                isEditing={isEditing}
                                onRemove={handleRemoveSong}
                            />
                            {(currentPlaylistSongs?.length ?? 0) > 0 &&
                                searching?.value.length === 0 &&
                                isOwner && (
                                    <AddSongsButton playlist={playlist} />
                                )}
                        </PlaylistPageSongs>
                        <BottomPlaylist>
                            {(currentPlaylistSongs?.length ?? 0) > 0 &&
                                searching?.value.length === 0 && (
                                    <Subtext
                                        style={{
                                            fontSize: '0.85rem',
                                            opacity: '0.4',
                                        }}
                                    >
                                        {currentPlaylistSongs?.length ?? 0}{' '}
                                        songs,{' '}
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
