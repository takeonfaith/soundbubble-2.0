import {
    IconEditCircle,
    IconHeart,
    IconHeartBroken,
    IconInfoCircle,
    IconPlaylistAdd,
    IconShare3,
    IconSquareRoundedPlus,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { AddSongToPlaylistModal } from '../../../features/addSongToPlaylistModal';
import { ShareModal } from '../../../features/shareModal';
import { modalModel } from '../../../layout/modal/model';
import { popupModel } from '../../../layout/popup/model';
import { Button } from '../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../shared/components/defaultContextMenu';
import { Divider } from '../../../shared/components/divider';
import { ENTITIES_ICONS } from '../../../shared/constants/icons';
import { userModel } from '../../user/model';
import { useToggleLike } from '../hooks/useToggleLike';
import { TSong } from '../model/types';
import { SongInfo } from './SongInfo';
import { AuthorsModal } from './AuthorsModal';

type Props = {
    song: TSong | null;
};

export const SongMoreContextMenu = ({ song }: Props) => {
    const [currentUser] = userModel.useUser();
    const [library] = userModel.useSongLibrary();
    const isLiked = library?.find((s) => s.id === song?.id);
    const navigate = useNavigate();
    const { handleToggleLike } = useToggleLike(song);

    const handleShare = () => {
        modalModel.events.open({
            title: `Share "${song?.name}" with friends`,
            content: <ShareModal entity={song} />,
        });
        popupModel.events.close();
    };

    const handleAddToPlaylist = () => {
        modalModel.events.open({
            title: `Add "${song?.name}" to playlist`,
            content: <AddSongToPlaylistModal song={song} />,
        });
        popupModel.events.close();
    };

    const handleOpenAuthors = () => {
        if ((song?.authors.length ?? 0) > 1) {
            modalModel.events.open({
                title: `${song?.name ?? '-'} authors`,
                content: (
                    <AuthorsModal authors={song?.authors} isAuthor={true} />
                ),
            });
        } else {
            navigate(`/author/${song?.authors[0].uid}`);
        }
        popupModel.events.close();
    };

    const handleLike = () => {
        if (song) {
            handleToggleLike();
            popupModel.events.close();
        }
    };

    const handleInfoModal = () => {
        modalModel.events.open({
            title: ``,
            content: <SongInfo song={song} />,
        });
        popupModel.events.close();
    };

    return (
        <DefaultContextMenuStyled>
            {!isLiked ? (
                <Button onClick={handleLike}>
                    <IconHeart size={20} />
                    Add to Liked
                </Button>
            ) : (
                <Button onClick={handleLike}>
                    <IconHeartBroken />
                    Remove from Liked
                </Button>
            )}
            <Button onClick={handleAddToPlaylist}>
                <IconSquareRoundedPlus size={20} />
                Add to playlist
            </Button>
            <Button>
                <IconPlaylistAdd />
                Add to queue
            </Button>
            <Divider />
            <Button onClick={handleShare}>
                <IconShare3 />
                Share
            </Button>
            <Button onClick={handleInfoModal}>
                <IconInfoCircle />
                Info
            </Button>
            <Button onClick={handleOpenAuthors}>
                {ENTITIES_ICONS.author}
                Authors
            </Button>
            {currentUser?.isAdmin && (
                <>
                    <Divider />
                    <Button>
                        <IconEditCircle />
                        Edit song
                        <span className="admin">Admin</span>
                    </Button>
                </>
            )}
        </DefaultContextMenuStyled>
    );
};
