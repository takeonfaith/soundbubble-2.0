import { Authors } from '@components/authors';
import { Flex } from '@components/flex';
import { IconLock } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { LikeButton } from '../../../features/likeButton';
import { toastModel } from '../../../layout/toast/model';
import { PlayPauseIcon } from '../../../shared/components/playPauseIcon';
import { PlayingAnimation } from '../../../shared/components/playingAnimation';
import { Subtext } from '../../../shared/components/subtext';
import { createLoadQueueObject } from '../../song/lib/createQueueObject';
import { SongState } from '../../song/model/types';
import { songModel } from '../../song/new-model';
import { createAuthorObject } from '../../user/lib/createAuthorObject';
import { TOrientation } from '../../user/types';
import { useTogglePlaylistLike } from '../hooks/useTogglePlaylistLike';
import { createPlaylistObject } from '../lib/createPlaylistObject';
import { TPlaylist } from '../model/types';
import { PlaylistCover } from './PlaylistCover';
import { ControlButton, PalylistTitle, PlaylistStyled } from './styles';

type Props = {
    playlist: TPlaylist | null;
    orientation?: TOrientation;
    children?: React.ReactNode;
    as?: string;
    isAuthor: boolean;
    imagePlaceholder?: React.ReactNode;
    onClick?: (playlist: TPlaylist, e: Evt<'a'>) => void;
};

export const PlaylistItem = ({
    playlist,
    children,
    onClick,
    as,
    imagePlaceholder,
    isAuthor,
    orientation = 'vertical',
}: Props) => {
    const p =
        playlist ??
        createPlaylistObject(createAuthorObject({}), {
            name: 'Deleted or private',
            authors: [],
        });
    const { image, name, imageColors, authors, id, songs, isAlbum, isPrivate } =
        p;

    const { queue, state } = songModel.useSong();
    const url = `/${isAlbum ? 'album' : 'playlist'}/${id}`;
    const isCurrentPlaying = state === 'playing' && queue?.id === id;
    const [loadingSongs, setLoadingSongs] = useState(false);
    const { isLiked, handleToggleLike, performingAction } =
        useTogglePlaylistLike(playlist);

    const handleClick = (e: Evt<'a'>) => {
        onClick?.(p, e);
    };

    const handlePlay = (event: Evt<'btn'>) => {
        event.preventDefault();
        if (songs.length > 0) {
            setLoadingSongs(true);
            const queue = createLoadQueueObject({
                id,
                name,
                imageUrl: image,
                songIds: songs,
                url,
            });
            songModel.controls.loadSongsThenPlay({
                queue,
                currentSongIndex: 0,
            });
        } else {
            toastModel.events.add({
                type: 'info',
                message: 'This playlist has no songs',
            });
        }
    };

    useEffect(() => {
        if (state === SongState.playing) {
            setLoadingSongs(false);
        }
    }, [state]);

    return (
        <PlaylistStyled
            as={as}
            onClick={handleClick}
            className={`${orientation} ${
                isCurrentPlaying || loadingSongs ? 'playing' : ''
            }`}
            to={url}
            $color1={imageColors?.[0]}
        >
            {!children && (
                <ControlButton
                    $color={imageColors[0]}
                    onClick={handlePlay}
                    className={`${orientation} plane`}
                >
                    {isCurrentPlaying ? (
                        <PlayingAnimation playing color={imageColors[0]} />
                    ) : (
                        <PlayPauseIcon
                            loading={loadingSongs}
                            playling={false}
                            size={18}
                        />
                    )}
                </ControlButton>
            )}
            {orientation === 'vertical' && !isAuthor && (
                <LikeButton
                    entity={playlist}
                    likeColor={imageColors?.[0] ?? 'grey'}
                    isLiked={isLiked}
                    onClick={handleToggleLike}
                    className="plane"
                    width="40px"
                    loading={performingAction}
                />
            )}
            {imagePlaceholder ?? (
                <PlaylistCover
                    size={undefined}
                    borderRadius={
                        orientation === 'vertical' ? undefined : '3px'
                    }
                    src={image}
                    colors={imageColors}
                    isAlbum={isAlbum}
                />
            )}
            <Flex width="100%" jc="space-between">
                <Flex
                    d="column"
                    width="100%"
                    gap={0}
                    ai="flex-start"
                    className="playlist-name"
                >
                    <Flex gap={2}>
                        <PalylistTitle>{name}</PalylistTitle>
                        {isPrivate && <IconLock size={16} />}
                    </Flex>
                    {orientation === 'vertical' ? (
                        authors.length !== 0 && <Authors authors={authors} />
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
                                {authors.length !== 0
                                    ? isAlbum
                                        ? 'Album'
                                        : 'Playlist'
                                    : ''}{' '}
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
