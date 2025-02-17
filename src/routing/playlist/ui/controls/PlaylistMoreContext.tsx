import {
    IconInfoCircle,
    IconLock,
    IconShare3,
    IconSparkles,
    IconTrash,
    IconWaveSine,
    IconWorld,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistInfo } from '../../../../entities/playlist/ui/PlaylistInfo';
import { userModel } from '../../../../entities/user/model';
import { ShareModal } from '../../../../features/shareModal';
import { confirmModel } from '../../../../layout/confirm/model';
import { modalModel } from '../../../../layout/modal/model';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';
import { Divider } from '../../../../shared/components/divider';
import Popover from '../../../../shared/components/popover';
import { NO_ACCOUNT_FOR_ACTION } from '../../../../shared/constants/texts';
import { SongState, TSong } from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { uniqueArrayObjectsByField } from '../../../../shared/funcs/uniqueArrayObjectsByFields';
import { Loading } from '../../../../shared/components/loading';
import { useUnit } from 'effector-react';
import { playWaveFx } from '../../../../entities/song/new-model/wave';

type Props = {
    playlist: TPlaylist | null;
    songs: TSong[];
};

export const PlaylistMoreContext = ({ playlist, songs }: Props) => {
    const [currentUser] = userModel.useUser();
    const navigate = useNavigate();
    const isOwner = playlist?.ownerId === currentUser?.uid;
    const { state } = songModel.useSong();
    const playWavePending = useUnit(playWaveFx.pending);
    const isLoadingWave =
        state === SongState.loading ||
        state === SongState.loadingThenPlay ||
        playWavePending;

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

    const handlePlayWave = () => {
        if (playlist && songs.length > 3) {
            const authors = songs.flatMap((song) => song.authors);
            songModel.wave.playWave({
                authors: uniqueArrayObjectsByField(authors, 'uid'),
            });
        }
    };

    return (
        <DefaultContextMenuStyled>
            {playlist && songs.length > 3 && (
                <>
                    <Button disabled={isLoadingWave} onClick={handlePlayWave}>
                        {isLoadingWave ? <Loading /> : <IconWaveSine />}
                        Play wave on playlist
                    </Button>
                    <Divider />
                </>
            )}
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
