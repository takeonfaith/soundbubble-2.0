import { IconSearch } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CreatePlaylistButton } from '../../../../features/createPlaylistButton';
import { Button } from '../../../../shared/components/button';
import { CheckIcon } from '../../../../shared/components/checkIcon';
import { Input } from '../../../../shared/components/input';
import { Loading } from '../../../../shared/components/loading';
import { playlistModel } from '../../../playlist/model';
import { TPlaylist } from '../../../playlist/model/types';
import { $pendingAddingOrRemoving } from '../../../playlist/model/update-playlist';
import { PlaylistItem } from '../../../playlist/ui';
import { userModel } from '../../../user/model';
import { TSong } from '../../model/types';
import { AddToPlaylistsContextMenuStyled } from './styles';
import { useLocalSearch } from '../../../../shared/hooks/useLocalSearch';

const InputWrapper = styled.div`
    padding: 8px;
    padding-bottom: 4px;
`;

type Props = {
    song: TSong;
};

export const AddToPlaylistsContextMenu = ({ song }: Props) => {
    const [ownPlaylists] = userModel.useOwnPlaylists();
    const [pendingAddingOrRemoving] = useUnit([$pendingAddingOrRemoving]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { visible, handleChange, searchValue } = useLocalSearch(ownPlaylists);

    const addSongToPlaylist = (playlist: TPlaylist, isAdded: boolean) => {
        return () => {
            if (!isAdded) {
                playlistModel.events.addSongsToPlaylists({
                    songs: [song],
                    playlists: [playlist],
                });
            } else {
                playlistModel.events.removeSongsFromPlaylists({
                    songs: [song],
                    playlists: [playlist],
                });
            }
        };
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [inputRef]);

    return (
        <AddToPlaylistsContextMenuStyled>
            {ownPlaylists.length > 3 && (
                <InputWrapper>
                    <Input
                        ref={inputRef}
                        placeholder="Search..."
                        onChange={handleChange}
                        value={searchValue}
                        icon={<IconSearch />}
                    />
                </InputWrapper>
            )}
            <CreatePlaylistButton
                initialSongs={[song]}
                orientation="horizontal"
            />
            {visible.map((playlist) => {
                const isAdded = playlist.songs.includes(song.id);
                const isLoading = pendingAddingOrRemoving.has(playlist.id);

                return (
                    <PlaylistItem
                        playlist={playlist}
                        key={playlist.id}
                        isAuthor
                        orientation="horizontal"
                        hideAuthors
                        onClick={addSongToPlaylist(playlist, isAdded)}
                        as="button"
                        disabled={isLoading}
                    >
                        <Button
                            $height="30px"
                            style={{ minWidth: '35px' }}
                            $width="35px"
                        >
                            {isLoading ? (
                                <Loading />
                            ) : (
                                <CheckIcon checked={isAdded} type="plus" />
                            )}
                        </Button>
                    </PlaylistItem>
                );
            })}
        </AddToPlaylistsContextMenuStyled>
    );
};
