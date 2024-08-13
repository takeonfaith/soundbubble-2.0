import { Authors } from '@components/authors';
import { Flex } from '@components/flex';
import { IconLock } from '@tabler/icons-react';
import { useState } from 'react';
import { Songs } from '../../../database/sections';
import { PlayPauseIcon } from '../../../shared/components/playPauseIcon';
import { PlayingAnimation } from '../../../shared/components/playingAnimation';
import { Subtext } from '../../../shared/components/subtext';
import { songModel } from '../../song/model';
import { TQueueStore, TSong } from '../../song/model/types';
import { TOrientation } from '../../user/types';
import { TPlaylist } from '../model/types';
import { PlaylistCover } from './PlaylistCover';
import { ControlButton, PalylistTitle, PlaylistStyled } from './styles';

type Props = {
    playlist: TPlaylist;
    orientation?: TOrientation;
    children?: React.ReactNode;
    as?: string;
    onClick?: (playlist: TPlaylist, e: Evt<'a'>) => void;
};

export const PlaylistItem = ({
    playlist,
    children,
    onClick,
    as,
    orientation = 'vertical',
}: Props) => {
    const { image, name, imageColors, authors, id, songs, isAlbum, isPrivate } =
        playlist;
    const { play } = songModel.useControls();
    const { state } = songModel.useSong();
    const { queue } = songModel.queue.useQueue();
    const [loading, setLoading] = useState(false);
    const url = `/playlist/${id}`;
    const isCurrentPlaying = state === 'playing' && queue.url === url;

    const handlePlay = (songs: TSong[], index: number) => {
        const queue: TQueueStore | undefined = {
            currentSongIndex: index,
            name,
            image,
            url,
            songs: songs,
            shuffle: false,
        };

        play(songs[0], queue);
    };

    const handleLoadPlaylistSongs = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setLoading(true);
        Songs.getSongsByUids(songs).then((songs) => {
            handlePlay(songs, 0);
            setLoading(false);
        });
    };

    const handleClick = (e: Evt<'a'>) => {
        onClick?.(playlist, e);
    };

    return (
        <PlaylistStyled
            as={as}
            onClick={handleClick}
            $orientation={orientation}
            className={isCurrentPlaying ? 'playing' : ''}
            to={`/playlist/${id}`}
            $color1={imageColors?.[0]}
        >
            {!children && (
                <ControlButton
                    $orientation={orientation}
                    $color={imageColors?.[0]}
                    onClick={handleLoadPlaylistSongs}
                >
                    {isCurrentPlaying ? (
                        <PlayingAnimation playing color={imageColors?.[1]} />
                    ) : (
                        <PlayPauseIcon
                            loading={loading}
                            playling={false}
                            size={18}
                        />
                    )}
                </ControlButton>
            )}
            <PlaylistCover
                size={undefined}
                borderRadius={orientation === 'vertical' ? undefined : '3px'}
                src={image}
                colors={imageColors}
                isAlbum={isAlbum}
            />
            <Flex width="100%" jc="space-between">
                <Flex d="column" width="100%" gap={0} ai="flex-start">
                    <Flex>
                        <PalylistTitle>{name}</PalylistTitle>
                        {isPrivate && <IconLock size={18} />}
                    </Flex>
                    {orientation === 'vertical' ? (
                        <Authors authors={authors} />
                    ) : (
                        <Flex width="100%" gap={4}>
                            <Subtext
                                style={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {isAlbum ? 'Album' : 'Playlist'} /
                            </Subtext>
                            <Authors width="fit-content" authors={authors} />
                        </Flex>
                    )}
                </Flex>
                {children}
            </Flex>
        </PlaylistStyled>
    );
};
