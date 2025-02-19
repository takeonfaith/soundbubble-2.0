import { IconMusicOff, IconSearch } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Database } from '../../../../database';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { addSongsToPlaylistsFx } from '../../../../entities/playlist/model/update-playlist';
import { TEntity } from '../../../../entities/search/model/types';
import { TSong } from '../../../../entities/song/model/types';
import { SongItem } from '../../../../entities/song/ui';
import { SongListSkeleton } from '../../../../entities/song/ui/SongListSkeleton';
import { userModel } from '../../../../entities/user/model';
import { AddEntitiesUI } from '../../../../features/addEntitiesUI';
import { modalModel } from '../../../../layout/modal/model';
import { Button } from '../../../../shared/components/button';
import { DefaultButton } from '../../../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../../../shared/components/checkIcon';
import { Flex } from '../../../../shared/components/flex';
import { PageMessage } from '../../../../shared/components/pageMessage';
import { translate } from '../../../../i18n';

const AddSongsToPlaylistModalStyled = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 0px;

    h4 {
        font-weight: 300;
        width: 100%;
        padding: 6px;
        margin-top: 10px;
    }
`;

type Props = {
    playlist: TPlaylist | null;
};

export const AddSongsToPlaylistModal = ({ playlist }: Props) => {
    const [library] = userModel.useSongLibrary();
    const [currentPlaylistSongs] = playlistModel.usePlaylistSongs();
    const [isAdding] = useUnit([addSongsToPlaylistsFx.pending]);
    const [loading, setLoading] = useState(false);
    const [listTitle, setListTitle] = useState(translate('liked_songs'));
    const [notFound, setNotFound] = useState(false);
    const [suggestedSongs, setSuggestedSongs] = useState<TSong[]>([]);
    const [loadingSuggestedSongs, setLoadingSuggestedSongs] = useState(false);
    const entites = useMemo(
        () => [...suggestedSongs, ...library],
        [library, suggestedSongs]
    );

    useEffect(() => {
        if (currentPlaylistSongs) {
            setLoadingSuggestedSongs(true);
            Database.Playlists.getPlaylistSongsSuggestions(
                currentPlaylistSongs
            ).then((songs) => {
                setSuggestedSongs(songs);
                setLoadingSuggestedSongs(false);
            });
        }
    }, [currentPlaylistSongs]);

    if (!playlist) return null;

    const handleSave = (songs: TSong[]) => {
        return () => {
            playlistModel.events.addSongsToPlaylists({
                songs,
                playlists: [playlist],
                onSuccess: () => {
                    modalModel.events.close();
                },
            });
        };
    };

    const onSearchValueChange = (
        value: string,
        visibleItems: TSong[],
        setVisibleItems: React.Dispatch<React.SetStateAction<TSong[]>>
    ) => {
        setNotFound(false);
        if (visibleItems.length === 0 && value.length !== 0) {
            setLoading(true);
            setListTitle(translate('global_search'));
            Database.SearchSuggestions.getSearchResult(value, 'songs').then(
                (results: TEntity[]) => {
                    setVisibleItems(results as TSong[]);
                    setLoading(false);
                    setNotFound(results.length === 0);
                }
            );
        } else {
            setListTitle(translate('liked_songs'));
        }
    };

    return (
        <AddSongsToPlaylistModalStyled>
            <AddEntitiesUI
                entities={entites}
                initiallyAddedItems={[]}
                onSearchValueChange={onSearchValueChange}
                inputPlaceholder={'Search for songs'}
                renderItem={(song, checked, onClick, _, index, value) => {
                    const showTitle =
                        (value.length === 0 &&
                            index === suggestedSongs.length) ||
                        (value.length !== 0 && index === 0);

                    const showSkeleton =
                        index === 0 &&
                        suggestedSongs.length === 0 &&
                        loadingSuggestedSongs;

                    const showSuggestedTitle =
                        value.length === 0 &&
                        index === 0 &&
                        (suggestedSongs.length !== 0 || loadingSuggestedSongs);

                    return (
                        <>
                            {showSuggestedTitle && (
                                <h4>{translate('suggested_songs')}</h4>
                            )}
                            {showSkeleton && <SongListSkeleton quantity={4} />}
                            {showTitle && <h4>{listTitle}</h4>}
                            <SongItem
                                song={song}
                                playing={false}
                                loading={false}
                                index={index}
                                onClick={onClick}
                            >
                                <Button $width="40px">
                                    <CheckIcon
                                        checked={checked}
                                        type={'plus'}
                                    />
                                </Button>
                            </SongItem>
                        </>
                    );
                }}
                renderButton={(addedSongs) => {
                    return (
                        <DefaultButton
                            appearance="primary"
                            loading={isAdding}
                            onClick={handleSave(addedSongs)}
                        >
                            {translate('save_changes')}
                        </DefaultButton>
                    );
                }}
            >
                {loading && (
                    <Flex width="100%" jc="center" padding="6px">
                        <SongListSkeleton quantity={9} />
                    </Flex>
                )}
                {!loading && notFound && (
                    <PageMessage
                        icon={IconSearch}
                        title={translate('no_results')}
                        description={'Try to change search query'}
                    />
                )}
            </AddEntitiesUI>
            {!library.length && listTitle !== 'Global Search' && (
                <PageMessage
                    icon={IconMusicOff}
                    title={'Library is empty'}
                    description={''}
                />
            )}
        </AddSongsToPlaylistModalStyled>
    );
};
