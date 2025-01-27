import { IconPencil } from '@tabler/icons-react';
import React from 'react';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistCover } from '../../../../entities/playlist/ui/PlaylistCover';
import { LoadingOverlay } from '../../../../entities/song/ui/styles';
import { EditPhotoModal } from '../../../../features/editPhotoModal';
import { modalModel } from '../../../../layout/modal/model';
import { IconWrapper } from '../../styles';
import styled from 'styled-components';

const EditPhotoOverlay = styled(LoadingOverlay)`
    opacity: 0;
    cursor: pointer;
    transition: 0.2s opacity;

    &:hover,
    &.visible {
        opacity: 0.9;
    }
`;

type Props = {
    playlist: TPlaylist | null;
    icon: React.ReactNode;
    isEditing?: boolean;
    imageUrl?: string;
    isOwner: boolean;
};

export const PlaylistPhoto = ({
    playlist,
    icon,
    isEditing,
    imageUrl,
    isOwner,
}: Props) => {
    const [currentPlaylist] = playlistModel.usePlaylist();

    if (!playlist && !imageUrl) {
        return <IconWrapper>{icon}</IconWrapper>;
    }

    const handleUpdatePlaylistPhoto = (
        newPhoto: File | null | undefined,
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
            {isOwner && (
                <EditPhotoOverlay
                    className={isEditing ? 'visible' : ''}
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
                </EditPhotoOverlay>
            )}
        </PlaylistCover>
    );
};
