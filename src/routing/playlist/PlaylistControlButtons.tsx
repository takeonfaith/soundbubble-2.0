import {
    IconArrowsShuffle,
    IconDots,
    IconInfoCircle,
    IconPencil,
    IconSearch,
    IconShare3,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { TPlaylist } from '../../entities/playlist/model/types';
import { SongState, TQueue } from '../../entities/song/model/types';
import { songModel } from '../../entities/song/new-model';
import { LikeButton } from '../../features/likeButton';
import { popupModel } from '../../layout/popup/model';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Flex } from '../../shared/components/flex';
import { Loading } from '../../shared/components/loading';
import { PlayPauseIcon } from '../../shared/components/playPauseIcon';

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
    const { state } = songModel.useSong();
    const [buttonType, setButtonType] = useState<'play' | 'shuffle' | null>(
        null
    );

    const isLiked = true;

    const handleOpenMore = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            e,
            height: 100,
            content: (
                <DefaultContextMenuStyled>
                    <Button>
                        <IconShare3 />
                        Share
                    </Button>
                    <Button>
                        <IconInfoCircle />
                        Info
                    </Button>
                </DefaultContextMenuStyled>
            ),
        });
    };

    useEffect(() => {
        if (state === SongState.playing) {
            setButtonType(null);
        }
    }, [state]);

    return (
        <Flex width="fit-content" gap={20}>
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

                        songModel.controls.play({ queue, currentSongIndex: 0 });
                    }}
                    disabled={queue.songs.length === 0}
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
                    disabled={queue.songs.length === 0}
                >
                    {buttonType === 'shuffle' ? (
                        <Loading />
                    ) : (
                        <IconArrowsShuffle size={20} />
                    )}
                </Button>
            </Flex>
            <Flex gap={2}>
                {playlist && (
                    <LikeButton
                        entity={playlist}
                        likeColor={playlist.imageColors[0]}
                        isLiked={isLiked}
                        width="90px"
                    >
                        {isLiked ? 'Liked' : 'Like'}
                    </LikeButton>
                )}
                <Button
                    $width="100px"
                    className="ghost"
                    style={{ fontWeight: '300' }}
                >
                    <IconSearch size={18} />
                    Search
                </Button>
                <Button
                    $width="90px"
                    className="ghost"
                    style={{ fontWeight: '300' }}
                >
                    <IconPencil size={18} />
                    Edit
                </Button>
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
