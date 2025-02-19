import { IconEdit, IconInfoCircle } from '@tabler/icons-react';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistInfo } from '../../entities/playlist/ui/PlaylistInfo';
import { ShareButton } from '../../features/shareButton';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';

type Props = {
    album: TPlaylist;
};

export const AlbumContextMenu = ({ album }: Props) => {
    const handleInfo = () => {
        modalModel.events.open({
            title: 'Playlist Information',
            content: <PlaylistInfo playlist={album} />,
        });
    };

    return (
        <DefaultContextMenuStyled>
            <ShareButton type="menu" entity={album} />
            <Button onClick={handleInfo}>
                <IconInfoCircle />
                Info
            </Button>
        </DefaultContextMenuStyled>
    );
};
