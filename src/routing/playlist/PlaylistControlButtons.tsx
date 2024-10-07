import {
    IconArrowsShuffle,
    IconDots,
    IconInfoCircle,
    IconPencil,
    IconPlus,
    IconSearch,
    IconShare3,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistInfo } from '../../entities/playlist/ui/PlaylistInfo';
import { SongState, TQueue } from '../../entities/song/model/types';
import { songModel } from '../../entities/song/new-model';
import { userModel } from '../../entities/user/model';
import { LikeButton } from '../../features/likeButton';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { popupModel } from '../../layout/popup/model';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';
import { AddSongsToPlaylistModal } from './AddSongsToPlaylistModal';
import { LikeButtonWrapper } from './styles';
import { useTogglePlaylistLike } from '../../entities/playlist/hooks/useTogglePlaylistLike';

type Props = {
    playlist: TPlaylist | null;
    queue: TQueue;
    primaryColor?: string;
};

export const PlaylistControlButtons = ({
    playlist,
    queue,
    primaryColor,
}: Props) => {
    const [currentUser] = userModel.useUser();
    const { state } = songModel.useSong();
    const { isLiked, handleToggleLike, performingAction } =
        useTogglePlaylistLike(playlist);

    const noSongs = queue.songs.length === 0;
    const [buttonType, setButtonType] = useState<'play' | 'shuffle' | null>(
        null
    );
    const isOwner = currentUser
        ? playlist?.authors.find((author) => author.uid === currentUser.uid)
        : false;

    const buttonsDisabled =
        queue.songs.length === 0 ||
        (!!buttonType && state === SongState.loading);

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
        });
    };

    const handleOpenMore = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            e,
            height: 100,
            content: (
                <DefaultContextMenuStyled>
                    <Button onClick={handleShare}>
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
    };

    const handleAddSongs = () => {
        modalModel.events.open({
            title: 'Add songs to playlist',
            content: <AddSongsToPlaylistModal playlist={playlist} />,
            sizeY: 'l',
        });
    };

    useEffect(() => {
        if (state === SongState.playing) {
            setButtonType(null);
        }
    }, [state]);

    return (
        <Flex width="fit-content" gap={20}>
            {!noSongs && (
                <Flex gap={10}>
                    <Button
                        $height="45px"
                        $width="45px"
                        style={{
                            borderRadius: '30px',
                            color: '#fff',
                        }}
                        $primaryColor={primaryColor}
                        className="primary"
                        onClick={() => {
                            setButtonType('play');

                            songModel.controls.play({
                                queue,
                                currentSongIndex: 0,
                            });
                        }}
                        disabled={buttonsDisabled}
                    >
                        <PlayPauseIcon
                            loading={buttonType === 'play'}
                            playling={false}
                            size={20}
                        />
                    </Button>
                    <Button
                        $width="45px"
                        $height="45px"
                        className="outline"
                        style={{ borderRadius: '30px' }}
                        onClick={() => {
                            setButtonType('shuffle');
                            songModel.controls.shufflePlay({ queue });
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
            <Flex gap={6}>
                {isOwner && (
                    <Button
                        $width="130px"
                        className={!noSongs ? 'ghost' : 'primary'}
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
                {playlist && !isOwner && (
                    <LikeButtonWrapper>
                        <LikeButton
                            entity={playlist}
                            likeColor={playlist.imageColors[3]}
                            isLiked={isLiked}
                            width="90px"
                            loading={performingAction}
                            onClick={handleToggleLike}
                        >
                            {isLiked ? 'Liked' : 'Like'}
                        </LikeButton>
                    </LikeButtonWrapper>
                )}
                <Button
                    $width="100px"
                    className="ghost"
                    style={{ fontWeight: '300' }}
                >
                    <IconSearch size={18} />
                    Search
                </Button>
                {isOwner && (
                    <Button
                        $width="90px"
                        className="ghost"
                        style={{ fontWeight: '300' }}
                    >
                        <IconPencil size={18} />
                        Edit
                    </Button>
                )}

                {playlist && (
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
