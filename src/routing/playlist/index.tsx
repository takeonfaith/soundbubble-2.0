import { IconMusicMinus } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect, useState } from 'react';
import {
    deletePlaylistFx,
    playlistModel,
    updatePlaylistFx,
} from '../../entities/playlist/model';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { TSong } from '../../entities/song/model/types';
import { userModel } from '../../entities/user/model';
import { confirmModel } from '../../layout/confirm/model';
import { normalizeString } from '../../shared/funcs/normalizeString';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { PlaylistPageContent } from './PlaylistPageContent';
import { useTogglePlaylistLike } from '../../entities/playlist/hooks/useTogglePlaylistLike';

export const PlaylistPage = () => {
    const [
        { currentPlaylist, currentPlaylistSongs, loading, error },
        isEditing,
        searching,
    ] = playlistModel.usePlaylist();
    const [currentUser] = userModel.useUser();
    const [isUpdating, isDeleting] = useUnit([
        updatePlaylistFx.pending,
        deletePlaylistFx.pending,
    ]);
    const isLoadingEditing = isDeleting || isUpdating;
    const [playlistSongs, setPlaylistSongs] = useState(
        currentPlaylistSongs ?? []
    );

    const queue = createQueueObject({
        name: currentPlaylist?.name,
        songs: playlistSongs,
        imageUrl: currentPlaylist?.image,
        url: `/playlist/${currentPlaylist?.id}`,
        id: currentPlaylist?.id,
    });

    useEffect(() => {
        if (searching.value.length > 0) {
            setPlaylistSongs(
                (currentPlaylistSongs ?? []).filter((s) =>
                    normalizeString(s.name).includes(
                        normalizeString(searching.value)
                    )
                )
            );
        } else {
            setPlaylistSongs(currentPlaylistSongs ?? []);
        }
    }, [currentPlaylistSongs, searching.value]);

    const isOwner = !!currentPlaylist?.authors.find(
        (author) => author.uid === currentUser?.uid
    );

    useUrlParamId({
        page: 'playlist',
        onChangeId: (id) => {
            if (id) {
                playlistModel.events.updateIsEditing(false);
                playlistModel.events.updateIsSearching(false);
                playlistModel.events.updateSearchValue('');
                playlistModel.events.loadPlaylist(id);
            }
        },
    });

    const handleRemove = (song: TSong) => {
        if (currentPlaylistSongs) {
            confirmModel.events.open({
                text: `Are you sure you want to remove song from the playlist`,
                icon: <IconMusicMinus />,
                iconColor: 'red',
                onAccept: () => {
                    playlistModel.events.updatePlaylist({
                        update: {
                            songs: currentPlaylistSongs
                                .filter((s) => s.id !== song.id)
                                .map((s) => s.id),
                            lastEditedTime: Date.now(),
                        },
                    });
                },
            });
        }
    };

    useEffect(() => {
        return () => {
            playlistModel.events.updateIsEditing(false);
            playlistModel.events.updateIsSearching(false);
        };
    }, []);

    return (
        <PlaylistPageContent
            playlist={currentPlaylist}
            isLoadingEditing={isLoadingEditing}
            loading={loading}
            error={error}
            queue={queue}
            isOwner={isOwner}
            currentPlaylistSongs={playlistSongs}
            isEditing={isEditing}
            handleRemoveSong={handleRemove}
            searching={searching}
            likeModel={useTogglePlaylistLike}
        />
    );
};
