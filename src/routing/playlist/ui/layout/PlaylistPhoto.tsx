import { IconPencil } from '@tabler/icons-react';
import React from 'react';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistCover } from '../../../../entities/playlist/ui/PlaylistCover';
import { LoadingOverlay } from '../../../../entities/song/ui/styles';
import { EditPhotoModal } from '../../../../features/editPhotoModal';
import { modalModel } from '../../../../layout/modal/model';
import { IconWrapper } from '../../styles';

type Props = {
    playlist: TPlaylist | null;
    icon: React.ReactNode;
    isEditing?: boolean;
    imageUrl?: string;
};

export const PlaylistPhoto = ({
    playlist,
    icon,
    isEditing,
    imageUrl,
}: Props) => {
    const [{ currentPlaylist }] = playlistModel.usePlaylist();

    if (!playlist && !imageUrl) {
        return <IconWrapper>{icon}</IconWrapper>;
    }

    const handleUpdatePlaylistPhoto = (
        newPhoto: File | null,
        imageColors: string[],
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        playlistModel.events.updatePlaylist({
            update: {
                image: newPhoto,
                imageColors,
                lastEditedTime: Date.now(),
            },
            onSuccess: () => {
                modalModel.events.close();
                setLoading(false);
            },
        });
    };

    if (!currentPlaylist) return null;

    return (
        <PlaylistCover
            size="200px"
            src={imageUrl ?? playlist?.image}
            colors={playlist?.imageColors}
            isAlbum={false}
        >
            {isEditing && (
                <LoadingOverlay
                    style={{ opacity: '0.8', cursor: 'pointer' }}
                    onClick={() =>
                        modalModel.events.open({
                            title: 'Edit playlist cover',
                            content: (
                                <EditPhotoModal
                                    onSave={handleUpdatePlaylistPhoto}
                                    imageColors={currentPlaylist.imageColors}
                                    photo={currentPlaylist.image}
                                />
                            ),
                        })
                    }
                >
                    <IconPencil color="#fff" size={50} />
                </LoadingOverlay>
            )}
        </PlaylistCover>
    );
};
