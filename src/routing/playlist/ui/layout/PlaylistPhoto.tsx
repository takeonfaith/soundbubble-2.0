import { IconPencil } from '@tabler/icons-react';
import React from 'react';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistCover } from '../../../../entities/playlist/ui/PlaylistCover';
import { LoadingOverlay } from '../../../../entities/song/ui/styles';
import { modalModel } from '../../../../layout/modal/model';
import { EditPlaylistPhotoModal } from '../editing/EditPlaylistPhotoModal';
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
    if (!playlist && !imageUrl) {
        return <IconWrapper>{icon}</IconWrapper>;
    }

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
                            content: <EditPlaylistPhotoModal />,
                        })
                    }
                >
                    <IconPencil color="#fff" size={50} />
                </LoadingOverlay>
            )}
        </PlaylistCover>
    );
};
