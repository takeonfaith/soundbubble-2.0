import { IconSearch } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CreatePlaylistButton } from '../../../../features/createPlaylistButton';
import { CheckIcon } from '../../../../shared/components/checkIcon';
import { Input } from '../../../../shared/components/input';
import { playlistModel } from '../../../playlist/model';
import { TPlaylist } from '../../../playlist/model/types';
import { PlaylistItem } from '../../../playlist/ui';
import { userModel } from '../../../user/model';
import { TSong } from '../../model/types';
import { AddToPlaylistsContextMenuStyled } from './styles';

const InputWrapper = styled.div`
    padding: 8px;
    padding-bottom: 4px;
`;

type Props = {
    song: TSong;
};

export const AddToPlaylistsContextMenu = ({ song }: Props) => {
    const [ownPlaylists] = userModel.useOwnPlaylists();
    const inputRef = useRef<HTMLInputElement | null>(null);

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
                        icon={<IconSearch />}
                    />
                </InputWrapper>
            )}
            <CreatePlaylistButton
                initialSongs={[song]}
                orientation="horizontal"
            />
            {ownPlaylists.map((playlist) => {
                const isAdded = playlist.songs.includes(song.id);

                return (
                    <PlaylistItem
                        playlist={playlist}
                        key={playlist.id}
                        isAuthor
                        orientation="horizontal"
                        hideAuthors
                        onClick={addSongToPlaylist(playlist, isAdded)}
                        as="button"
                    >
                        <CheckIcon checked={isAdded} type="plus" />
                    </PlaylistItem>
                );
            })}
        </AddToPlaylistsContextMenuStyled>
    );
};
