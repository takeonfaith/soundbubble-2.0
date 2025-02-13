import {
    IconInfoCircle,
    IconLock,
    IconShare3,
    IconTrash,
    IconWorld,
} from '@tabler/icons-react';
import { playlistModel } from '../../../../entities/playlist/model';
import { PlaylistInfo } from '../../../../entities/playlist/ui/PlaylistInfo';
import { ShareModal } from '../../../../features/shareModal';
import { confirmModel } from '../../../../layout/confirm/model';
import { modalModel } from '../../../../layout/modal/model';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';
import { Divider } from '../../../../shared/components/divider';
import Popover from '../../../../shared/components/popover';
import { NO_ACCOUNT_FOR_ACTION } from '../../../../shared/constants/texts';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { userModel } from '../../../../entities/user/model';
import { useNavigate } from 'react-router';

type Props = {
    playlist: TPlaylist | null;
};

export const PlaylistMoreContext = ({ playlist }: Props) => {
    const [currentUser] = userModel.useUser();
    const navigate = useNavigate();
    const isOwner = playlist?.ownerId === currentUser?.uid;

    const handleInfo = () => {
        modalModel.events.open({
            title: '',
            content: <PlaylistInfo playlist={playlist} />,
        });
    };

    const handleShare = () => {
        modalModel.events.open({
            title: `Share ${playlist?.name} with friends`,
            content: <ShareModal entity={playlist} />,
            sizeY: 'm',
        });
    };

    const handleDeletePlaylist = () => {
        if (playlist) {
            confirmModel.events.open({
                icon: <IconTrash />,
                iconColor: 'red',
                text: 'Are you sure you want to delete this playlist?',
                subtext:
                    'This action is irreversible, you will not be able to restore it after deleting',
                onAccept: () => {
                    playlistModel.events.deletePlaylist({
                        playlist,
                        onSuccess: () => {
                            navigate('/');
                        },
                    });
                },
            });
        }
    };

    const handleMakePrivate = () => {
        if (playlist) {
            playlistModel.events.updatePlaylist({
                update: {
                    isPrivate: !playlist.isPrivate,
                    lastEditedTime: Date.now(),
                },
            });
        }
    };

    const handleMakePublic = () => {
        if (playlist) {
            confirmModel.events.open({
                icon: <IconWorld />,
                iconColor: 'blue',
                text: 'Are you sure you want to make this playlist public?',
                subtext: 'Everyone will be able to access this playlist',
                onAccept: () => {
                    playlistModel.events.updatePlaylist({
                        update: {
                            isPrivate: !playlist.isPrivate,
                        },
                    });
                },
            });
        }
    };

    return (
        <DefaultContextMenuStyled>
            {!playlist?.isPrivate && (
                <Popover content={!currentUser ? NO_ACCOUNT_FOR_ACTION : null}>
                    <Button disabled={!currentUser} onClick={handleShare}>
                        <IconShare3 />
                        Share
                    </Button>
                </Popover>
            )}
            <Button onClick={handleInfo}>
                <IconInfoCircle />
                Info
            </Button>
            {isOwner && (
                <>
                    <Divider />
                    {!playlist?.isPrivate ? (
                        <Button onClick={handleMakePrivate}>
                            <IconLock />
                            Make private
                        </Button>
                    ) : (
                        <Button onClick={handleMakePublic}>
                            <IconWorld />
                            Make public
                        </Button>
                    )}
                    <Button className="danger" onClick={handleDeletePlaylist}>
                        <IconTrash />
                        Delete
                    </Button>
                </>
            )}
        </DefaultContextMenuStyled>
    );
};
