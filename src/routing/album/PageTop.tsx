import {
    IconArrowLeft,
    IconDiscountCheckFilled,
    IconDotsVertical,
    IconEdit,
    IconHeadphones,
    IconInfoCircle,
    IconLock,
    IconMusicPlus,
    IconShare3,
    IconTrash,
    IconUserPlus,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { playlistModel } from '../../entities/playlist/model';
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
} from '../../shared/components/pageTop/styles';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { Wave } from '../../shared/images';
import { ButtonsStyled } from '../author/styles';
import { AddSongsToPlaylistModal } from './AddSongsToPlaylistModal';

type Props = {
    name: string | undefined;
    numberOfListenersPerMonth: number | undefined;
    subscribers: number | undefined;
    colors: string[] | undefined;
    isVerified?: boolean;
    isPrivate?: boolean;
    isOwner: boolean;
    handleClickShare: () => void;
    queue: TQueue;
};

export const PageTop = ({
    name,
    isPrivate,
    numberOfListenersPerMonth,
    subscribers,
    colors,
    isVerified,
    isOwner,
    handleClickShare,
    queue,
}: Props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { currentPlaylist } = playlistModel.usePlaylist();

    const handleDeletePlaylist = () => {
        confirmModel.events.open({
            text: 'Are you sure you want to delete this playlist?',
            onAccept: () => {
                // playlistModel.events.deletePlaylist(currentPlaylist?.id);
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
            content: <PlaylistInfo playlist={currentPlaylist} />,
        });
    };

    const handleAddSongs = () => {
        modalModel.events.open({
            title: 'Add songs to playlist',
            content: <AddSongsToPlaylistModal playlist={currentPlaylist} />,
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
                        <Button onClick={handleClickShare}>
                            <IconShare3 />
                            Share
                        </Button>
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
                        <Button onClick={handleClickShare}>
                            <IconShare3 />
                            Share
                        </Button>
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
        <PageTopStyled $colors={colors}>
            <PlaylistCover
                size="200px"
                isAlbum={currentPlaylist?.isAlbum ?? false}
                src={currentPlaylist?.image}
                colors={currentPlaylist?.imageColors}
            />
            <Flex gap={8} d="column" ai="center">
                <Flex gap={4} d="column">
                    <Flex gap={6}>
                        <h2>{name}</h2>
                        {isVerified && (
                            <IconDiscountCheckFilled color={colors?.[1]} />
                        )}
                        {isPrivate && <IconLock size={20} />}
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
                                    {currentPlaylist?.isAlbum
                                        ? 'Album'
                                        : 'Playlist'}{' '}
                                    ·{' '}
                                </span>
                            }
                            <Authors
                                width="fit-content"
                                authors={currentPlaylist?.authors}
                                isAuthor={currentPlaylist?.isAlbum}
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
                        {formatBigNumber(numberOfListenersPerMonth)}
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
                    entity={null}
                    isLiked={false}
                    likeColor={undefined}
                    height="40px"
                    width="40px"
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
                    buttonColor={colors?.[0] ?? 'grey'}
                />
            </ButtonsStyled>
        </PageTopStyled>
    );
};
