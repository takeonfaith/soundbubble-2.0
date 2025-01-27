import {
    IconArrowsShuffle,
    IconCircleCheck,
    IconDots,
    IconInfoCircle,
    IconLock,
    IconPencil,
    IconPlus,
    IconSearch,
    IconShare3,
    IconSparkles,
    IconTrash,
    IconWorld,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ToggleLike } from '../../../../entities/playlist/hooks/useTogglePlaylistLike';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { PlaylistInfo } from '../../../../entities/playlist/ui/PlaylistInfo';
import { SongState, TQueue } from '../../../../entities/song/model/types';
import { songModel } from '../../../../entities/song/new-model';
import { userModel } from '../../../../entities/user/model';
import { ShareModal } from '../../../../features/shareModal';
import { confirmModel } from '../../../../layout/confirm/model';
import { modalModel } from '../../../../layout/modal/model';
import { popupModel } from '../../../../layout/popup/model';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';
import { Divider } from '../../../../shared/components/divider';
import { Flex } from '../../../../shared/components/flex';
import { Loading } from '../../../../shared/components/loading';
import { PlayPauseIcon } from '../../../../shared/components/playPauseIcon';
import { AddSongsToPlaylistModal } from '../editing/AddSongsToPlaylistModal';
import { Like } from './Like';
import { PlaylistSearch } from './PlaylistSearch';
import Popover from '../../../../shared/components/popover';
import { styled } from 'styled-components';
import { slowSongsApi } from '../../../../entities/song/new-model/slow-songs';

const MainButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
    outline: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 24px;
`;

type Props = {
    playlist: TPlaylist | null;
    queue: TQueue;
    primaryColor?: string;
    isEditing?: boolean;
    searching:
        | {
              isSearching: boolean;
              value: string;
          }
        | undefined;
    likeModel?: (playlist: TPlaylist | null) => ToggleLike;
};

export const PlaylistControlButtons = ({
    playlist,
    isEditing,
    searching,
    queue,
    primaryColor,
    likeModel,
}: Props) => {
    const [currentUser] = userModel.useUser();
    const { state } = songModel.useSong();
    const navigate = useNavigate();
    const [slowMode, setSlowMode] = useState(false);

    const noSongs = queue.songs.length === 0;
    const [buttonType, setButtonType] = useState<
        'play' | 'shuffle' | 'slow' | null
    >(null);
    const isAuthor = currentUser
        ? playlist?.authors.find((author) => author.uid === currentUser.uid)
        : false;

    const isOwner = playlist?.ownerId === currentUser?.uid;

    const buttonsDisabled =
        queue.songs.length === 0 ||
        (!!buttonType && state === SongState.loading);

    useEffect(() => {
        if (state === SongState.playing) {
            setButtonType(null);
        }
    }, [state]);

    const handleInfo = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: '',
            content: <PlaylistInfo playlist={playlist} />,
        });
    };

    const handleShare = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: `Share ${playlist?.name} with friends`,
            content: <ShareModal entity={playlist} />,
            sizeY: 'm',
        });
    };

    const handleEdit = () => {
        playlistModel.events.updateIsEditing(!isEditing);
    };

    const handleDeletePlaylist = () => {
        if (playlist) {
            confirmModel.events.open({
                icon: <IconTrash />,
                iconColor: 'red',
                text: 'Are you sure you want to delete this playlist',
                subtext: 'This action is irreversible',
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
            popupModel.events.close();
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
                    popupModel.events.close();
                },
            });
        }
    };

    const handleOpenMore = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            e,
            height: isOwner ? (playlist?.isPrivate ? 152.5 : 192.5) : 96,
            content: (
                <DefaultContextMenuStyled>
                    {!playlist?.isPrivate && (
                        <Popover
                            content={
                                !currentUser
                                    ? 'You need an account for that'
                                    : null
                            }
                        >
                            <Button
                                disabled={!currentUser}
                                onClick={handleShare}
                            >
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
                            <Button onClick={handleDeletePlaylist}>
                                <IconTrash />
                                Delete
                            </Button>
                        </>
                    )}
                </DefaultContextMenuStyled>
            ),
        });
    };

    const handleAddSongs = () => {
        modalModel.events.open({
            title: 'Add songs to playlist',
            content: <AddSongsToPlaylistModal playlist={playlist} />,
            sizeY: 'l',
        });
    };

    if (searching?.isSearching) {
        return <PlaylistSearch searching={searching} />;
    }

    return (
        <Flex width="fit-content" gap={20}>
            {isEditing && (
                <Flex>
                    <Button
                        className="primary"
                        $width="150px"
                        style={{ color: '#fff' }}
                        $primaryColor={primaryColor}
                        onClick={handleEdit}
                    >
                        <IconCircleCheck size={20} />
                        Done editing
                    </Button>
                </Flex>
            )}
            {!noSongs && !isEditing && (
                <Flex gap={10}>
                    <MainButtonsWrapper>
                        <Button
                            $height="45px"
                            $width="45px"
                            style={{
                                borderRadius: '30px',
                                color: !slowMode ? '#fff' : undefined,
                            }}
                            $primaryColor={primaryColor}
                            className={!slowMode ? 'primary' : ''}
                            onClick={() => {
                                setButtonType('play');
                                songModel.controls.playPauseQueue({
                                    queue,
                                    currentSongIndex: 0,
                                });
                                setSlowMode(false);
                                slowSongsApi.reset();
                            }}
                            disabled={buttonsDisabled}
                        >
                            <PlayPauseIcon
                                loading={buttonType === 'play'}
                                playling={false}
                                size={20}
                            />
                        </Button>
                        <Popover content="Slow version">
                            <Button
                                style={{
                                    color: slowMode ? '#fff' : undefined,
                                    borderRadius: '100%',
                                }}
                                $width="45px"
                                $height="45px"
                                $primaryColor={primaryColor}
                                className={slowMode ? 'primary' : ''}
                                onClick={() => {
                                    slowSongsApi.add(
                                        queue.songs.reduce((acc, song) => {
                                            if (song.slowSrc) {
                                                acc.push(song.id);
                                            }

                                            return acc;
                                        }, [] as string[])
                                    );
                                    if (!slowMode) {
                                        setButtonType('slow');
                                    }

                                    setSlowMode(true);
                                    songModel.controls.playPauseQueue({
                                        queue,
                                        currentSongIndex: 0,
                                    });
                                }}
                            >
                                {buttonType === 'slow' ? (
                                    <Loading />
                                ) : (
                                    <IconSparkles />
                                )}
                            </Button>
                        </Popover>
                    </MainButtonsWrapper>
                    <Button
                        $width="45px"
                        $height="45px"
                        className="outline"
                        style={{ borderRadius: '30px' }}
                        onClick={() => {
                            setButtonType('shuffle');
                            songModel.controls.shufflePlayPause({ queue });
                        }}
                        disabled={buttonsDisabled}
                    >
                        {buttonType === 'shuffle' ? (
                            <Loading />
                        ) : (
                            <IconArrowsShuffle size={20} />
                        )}
                    </Button>
                </Flex>
            )}
            {isAuthor && !isEditing && noSongs && (
                <Button
                    $width="130px"
                    className="primary"
                    style={{
                        fontWeight: noSongs ? '400' : '300',
                        color: noSongs ? '#fff' : undefined,
                    }}
                    onClick={handleAddSongs}
                    $primaryColor={primaryColor ?? 'grey'}
                >
                    <IconPlus size={20} />
                    Add songs
                </Button>
            )}
            <Flex gap={6}>
                {isAuthor && !isEditing && !noSongs && (
                    <Button
                        $width="130px"
                        className="ghost"
                        style={{
                            fontWeight: noSongs ? '400' : '300',
                            color: noSongs ? '#fff' : undefined,
                        }}
                        onClick={handleAddSongs}
                        $primaryColor={primaryColor}
                    >
                        <IconPlus size={20} />
                        Add songs
                    </Button>
                )}
                {playlist && !isAuthor && (
                    <Like playlist={playlist} likeModel={likeModel} />
                )}
                {!isEditing && !noSongs && (
                    <Button
                        $width="100px"
                        className="ghost"
                        style={{ fontWeight: '300' }}
                        onClick={() =>
                            playlistModel.events.updateIsSearching(true)
                        }
                    >
                        <IconSearch size={18} />
                        Search
                    </Button>
                )}
                {isAuthor && !isEditing && (
                    <Button
                        $width="90px"
                        className="ghost"
                        style={{ fontWeight: '300' }}
                        onClick={handleEdit}
                    >
                        <IconPencil size={18} />
                        Edit
                    </Button>
                )}

                {playlist && !isEditing && (
                    <Button
                        $width="90px"
                        className="ghost"
                        style={{ fontWeight: '300' }}
                        onClick={handleOpenMore}
                    >
                        <IconDots size={18} />
                        More
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};
