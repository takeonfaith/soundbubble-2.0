import {
    IconArrowLeft,
    IconDotsVertical,
    IconEdit,
    IconHeadphones,
    IconInfoCircle,
    IconMusicPlus,
    IconShare3,
    IconTrash,
    IconUserPlus,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { useTogglePlaylistLike } from '../../entities/playlist/hooks/useTogglePlaylistLike';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistCover } from '../../entities/playlist/ui/PlaylistCover';
import { PlaylistInfo } from '../../entities/playlist/ui/PlaylistInfo';
import { TQueue } from '../../entities/song/model/types';
import { ControlButtons } from '../../features/controlButtons';
import { LikeButton } from '../../features/likeButton';
import { confirmModel } from '../../layout/confirm/model';
import { modalModel } from '../../layout/modal/model';
import { popupModel } from '../../layout/popup/model';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import {
    PageTopStyled,
    TopBackground,
    TopLeftCorner,
    TopRightCorner,
} from './styles';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { Wave } from '../../shared/images';
import { ButtonsStyled } from '../author/styles';
import { AddSongsToPlaylistModal } from './AddSongsToPlaylistModal';
import Popover from '../../shared/components/popover';
import { userModel } from '../../entities/user/model';
import { NO_ACCOUNT_FOR_ACTION } from '../../shared/constants/texts';

type Props = {
    album: TPlaylist | null;
    isOwner: boolean;
    handleClickShare: () => void;
    queue: TQueue;
};

export const PageTop = ({ album, isOwner, handleClickShare, queue }: Props) => {
    const navigate = useNavigate();
    const [currentUser] = userModel.useUser();
    const theme = useTheme();
    const { isLiked, handleToggleLike, performingAction } =
        useTogglePlaylistLike(album);

    if (!album) return null;

    const { name, subscribers, imageColors, listens } = album;

    const handleDeletePlaylist = () => {
        confirmModel.events.open({
            text: 'Are you sure you want to delete this playlist?',
            onAccept: () => {
                // playlistModel.events.deletePlaylist(album?.id);
                navigate(-1);
            },
            subtext: 'This action cannot be undone',
            icon: <IconTrash />,
            iconColor: 'red',
        });
    };

    const handleInfo = () => {
        modalModel.events.open({
            title: 'Playlist Information',
            content: <PlaylistInfo playlist={album} />,
        });
    };

    const handleAddSongs = () => {
        modalModel.events.open({
            title: 'Add songs to playlist',
            content: <AddSongsToPlaylistModal playlist={album} />,
            sizeY: 'l',
        });
    };

    const handleOpenMore = (e: Evt<'btn'>) => {
        e.stopPropagation();

        if (isOwner) {
            popupModel.events.open({
                e,
                height: 248,
                content: (
                    <DefaultContextMenuStyled>
                        <Button>
                            <IconEdit />
                            Edit
                        </Button>
                        <Button onClick={handleAddSongs}>
                            <IconMusicPlus />
                            Add Songs
                        </Button>
                        <Divider />
                        <Popover
                            content={!currentUser && NO_ACCOUNT_FOR_ACTION}
                        >
                            <Button
                                disabled={!currentUser}
                                onClick={handleClickShare}
                            >
                                <IconShare3 />
                                Share
                            </Button>
                        </Popover>
                        <Button onClick={handleInfo}>
                            <IconInfoCircle />
                            Info
                        </Button>
                        <Divider />
                        <Button
                            color={theme.scheme.red.text}
                            onClick={handleDeletePlaylist}
                        >
                            <IconTrash />
                            Delete
                        </Button>
                    </DefaultContextMenuStyled>
                ),
            });
        } else {
            popupModel.events.open({
                e,
                height: 96,
                content: (
                    <DefaultContextMenuStyled>
                        <Popover
                            content={!currentUser && 'Need an account for that'}
                        >
                            <Button
                                disabled={!currentUser}
                                onClick={handleClickShare}
                            >
                                <IconShare3 />
                                Share
                            </Button>
                        </Popover>
                        <Button onClick={handleInfo}>
                            <IconInfoCircle />
                            Info
                        </Button>
                    </DefaultContextMenuStyled>
                ),
            });
        }
    };

    return (
        <PageTopStyled $colors={imageColors}>
            <PlaylistCover
                size="200px"
                isAlbum={album?.isAlbum ?? false}
                src={album?.image}
                colors={album?.imageColors}
            />
            <Flex gap={8} d="column" ai="center">
                <Flex gap={4} d="column">
                    <Flex gap={6}>
                        <h2>{name}</h2>
                    </Flex>
                    <div className="subtitle">
                        <Flex gap={3}>
                            {
                                <span
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: '300',
                                        opacity: '0.6',
                                    }}
                                >
                                    {album?.isAlbum ? 'Album' : 'Playlist'} ·{' '}
                                </span>
                            }
                            <Authors
                                width="fit-content"
                                authors={album?.authors}
                                isAuthor={album?.isAlbum}
                            />
                        </Flex>
                    </div>
                </Flex>
                <Flex
                    gap={20}
                    style={{ opacity: '0.8', fontWeight: '300' }}
                    className="stats"
                >
                    <Flex gap={4}>
                        {formatBigNumber(listens)}
                        <IconHeadphones size={16} />
                    </Flex>
                    <Flex gap={4}>
                        {formatBigNumber(subscribers)}
                        <IconUserPlus size={16} />
                    </Flex>
                </Flex>
            </Flex>
            <TopLeftCorner>
                <Button
                    $height="40px"
                    $width="40px"
                    onClick={() => navigate(-1)}
                >
                    <IconArrowLeft size={20} />
                </Button>
            </TopLeftCorner>
            <TopRightCorner>
                <LikeButton
                    entity={album}
                    isLiked={isLiked}
                    likeColor={'#fff'}
                    height="40px"
                    loading={performingAction}
                    width="40px"
                    onClick={handleToggleLike}
                />
                <Button $height="40px" $width="40px" onClick={handleOpenMore}>
                    <IconDotsVertical size={20} />
                </Button>
            </TopRightCorner>
            <TopBackground>
                <img src={Wave} />
            </TopBackground>
            <ButtonsStyled>
                <ControlButtons
                    queue={queue}
                    buttonColor={imageColors?.[0] ?? 'grey'}
                />
            </ButtonsStyled>
        </PageTopStyled>
    );
};
