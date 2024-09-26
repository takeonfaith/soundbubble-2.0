import { Authors } from '@components/authors';
import { Flex } from '@components/flex';
import { IconLock } from '@tabler/icons-react';
import { useState } from 'react';
import { Songs } from '../../../database/sections';
import { PlayPauseIcon } from '../../../shared/components/playPauseIcon';
import { PlayingAnimation } from '../../../shared/components/playingAnimation';
import { Subtext } from '../../../shared/components/subtext';
import { createQueueObject } from '../../song/lib/createQueueObject';
import { songModel } from '../../song/new-model';
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
    const { queue, state } = songModel.useSong();
    const [loading, setLoading] = useState(false);
    const url = `/${isAlbum ? 'album' : 'playlist'}/${id}`;
    const isCurrentPlaying = state === 'playing' && queue?.id === id;

    const handleLoadPlaylistSongs = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        setLoading(true);
        Songs.getSongsByUids(songs).then((songs) => {
            songModel.controls.play({
                queue: createQueueObject({
                    id,
                    url,
                    name,
                    imageUrl: image,
                    songs,
                }),
                currentSongIndex: 0,
            });
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
            className={`${orientation} ${isCurrentPlaying ? 'playing' : ''}`}
            to={url}
            $color1={imageColors?.[0]}
        >
            {!children && (
                <ControlButton
                    $color={imageColors[0]}
                    onClick={handleLoadPlaylistSongs}
                    className={`${orientation} plane`}
                >
                    {isCurrentPlaying ? (
                        <PlayingAnimation playing color={imageColors[0]} />
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
                    <Flex gap={2}>
                        <PalylistTitle>{name}</PalylistTitle>
                        {isPrivate && <IconLock size={16} />}
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
                                    fontWeight: 200,
                                    fontSize: '0.8rem',
                                }}
                            >
                                {isAlbum ? 'Album' : 'Playlist'}{' '}
                                {authors.length !== 0 && '·'}
                            </Subtext>
                            {authors.length !== 0 && (
                                <Authors
                                    isAuthor={isAlbum}
                                    width="fit-content"
                                    authors={authors}
                                />
                            )}
                        </Flex>
                    )}
                </Flex>
                {children}
            </Flex>
        </PlaylistStyled>
    );
};
