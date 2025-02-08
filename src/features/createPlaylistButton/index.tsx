import { IconPlus } from '@tabler/icons-react';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { PlaylistItem } from '../../entities/playlist/ui';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';
import { TOrientation } from '../../entities/user/types';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { CreatePlaylistModal } from '../createPlaylistModal';
import { AddPlaylistStyled, IconWrapper } from './styles';
import { TSong } from '../../entities/song/model/types';

type Props = {
    orientation?: TOrientation;
    main?: boolean;
    initialSongs?: TSong[];
};

export const CreatePlaylistButton = ({
    initialSongs,
    orientation,
    main,
}: Props) => {
    const handleAddPlaylist = () => {
        modalModel.events.open({
            title: 'Create Playlist',
            content: <CreatePlaylistModal initialSongs={initialSongs} />,
        });
    };

    if (main) {
        return (
            <Button
                onClick={handleAddPlaylist}
                className="primary"
                $width="150px"
                color="#fff"
            >
                <IconPlus size={20} />
                Add playlist
            </Button>
        );
    }

    return (
        <PlaylistItem
            orientation={orientation}
            onClick={handleAddPlaylist}
            isAuthor
            playlist={createPlaylistObject(createAuthorObject({}), {
                name: 'New playlist',
                authors: [],
                imageColors: [
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                    'transparent',
                ],
            })}
            as="button"
        >
            <AddPlaylistStyled className={`${orientation}`}>
                <IconWrapper className={`${orientation}`}>
                    <IconPlus size={24} />
                </IconWrapper>
            </AddPlaylistStyled>
        </PlaylistItem>
    );
};
