import { IconMusicMinus } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useEffect } from 'react';
import { useTogglePlaylistLike } from '../../entities/playlist/hooks/useTogglePlaylistLike';
import { playlistModel } from '../../entities/playlist/model';
import { deletePlaylistFx } from '../../entities/playlist/model/delete-playlist';
import { updatePlaylistFx } from '../../entities/playlist/model/update-playlist';
import { createQueueObject } from '../../entities/song/lib/createQueueObject';
import { TSong } from '../../entities/song/model/types';
import { userModel } from '../../entities/user/model';
import { confirmModel } from '../../layout/confirm/model';
import { useUrlParamId } from '../../shared/hooks/useUrlParamId';
import { usePlaylistSearch } from './hooks/usePlaylistSearch';
import { PlaylistPageContent } from './PlaylistPageContent';

export const PlaylistPage = () => {
    const [currentPlaylist, loading, isEditing, searching] =
        playlistModel.usePlaylist();
    const [currentPlaylistSongs] = playlistModel.usePlaylistSongs();
    const [currentUser] = userModel.useUser();
    const [isUpdating, isDeleting] = useUnit([
        updatePlaylistFx.pending,
        deletePlaylistFx.pending,
    ]);

    const isLoadingEditing = isDeleting || isUpdating;
    const { visible } = usePlaylistSearch(searching, currentPlaylistSongs);

    const queue = createQueueObject({
        name: currentPlaylist?.name,
        songs: visible,
        imageUrl: currentPlaylist?.image,
        url: `/playlist/${currentPlaylist?.id}`,
        id: currentPlaylist?.id,
    });

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
            queue={queue}
            isOwner={isOwner}
            currentPlaylistSongs={visible}
            isEditing={isEditing}
            handleRemoveSong={handleRemove}
            searching={searching}
            likeModel={useTogglePlaylistLike}
        />
    );
};
