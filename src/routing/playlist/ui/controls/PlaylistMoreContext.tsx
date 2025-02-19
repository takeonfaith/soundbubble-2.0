import {
    IconInfoCircle,
    IconLock,
    IconTrash,
    IconWaveSine,
    IconWorld,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useNavigate } from 'react-router';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistInfo } from '../../../../entities/playlist/ui/PlaylistInfo';
import { SongState, TSong } from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { playWaveFx } from '../../../../entities/song/new-model/wave';
import { userModel } from '../../../../entities/user/model';
import { ShareButton } from '../../../../features/shareButton';
import { translate } from '../../../../i18n';
import { confirmModel } from '../../../../layout/confirm/model';
import { modalModel } from '../../../../layout/modal/model';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';
import { Divider } from '../../../../shared/components/divider';
import { Loading } from '../../../../shared/components/loading';
import { uniqueArrayObjectsByField } from '../../../../shared/funcs/uniqueArrayObjectsByFields';

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

    const handleDeletePlaylist = () => {
        if (playlist) {
            confirmModel.events.open({
                icon: <IconTrash />,
                iconColor: 'red',
                text: translate('playlist_delete_warning'),
                subtext:
                    translate('playlist_delete_warning_subtext'),
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
                        {translate('play_wave_on_playlist')}
                    </Button>
                    <Divider />
                </>
            )}
            {!playlist?.isPrivate && playlist && (
                <ShareButton entity={playlist} type="menu" />
            )}
            <Button onClick={handleInfo}>
                <IconInfoCircle />
                {translate('info')}
            </Button>
            {isOwner && (
                <>
                    <Divider />
                    {!playlist?.isPrivate ? (
                        <Button onClick={handleMakePrivate}>
                            <IconLock />
                            {translate('make_private')}
                        </Button>
                    ) : (
                        <Button onClick={handleMakePublic}>
                            <IconWorld />
                            {translate('make_public')}
                        </Button>
                    )}
                    <Button className="danger" onClick={handleDeletePlaylist}>
                        <IconTrash />
                        {translate('delete')}
                    </Button>
                </>
            )}
        </DefaultContextMenuStyled>
    );
};
