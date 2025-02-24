import { Authors } from '@components/authors';
import { Flex } from '@components/flex';
import { IconLock } from '@tabler/icons-react';
import { LikeButton } from '../../../features/likeButton';
import { PlayButton } from '../../../routing/playlist/ui/controls/PlayButton';
import { Subtext } from '../../../shared/components/subtext';
import { createLoadQueueObject } from '../../song/lib/createQueueObject';
import { songModel } from '../../song/new-model';
import { createAuthorObject } from '../../user/lib/createAuthorObject';
import { TOrientation } from '../../user/types';
import { useTogglePlaylistLike } from '../hooks/useTogglePlaylistLike';
import { createPlaylistObject } from '../lib/createPlaylistObject';
import { TPlaylist } from '../model/types';
import { PlaylistCover } from './PlaylistCover';
import { PalylistTitle, PlaylistStyled } from './styles';
import { useUnit } from 'effector-react';
import { $pendingQueueLoading } from '../../song/new-model/song-state';
import { SongState } from '../../song/model/types';
import { $type } from '../../../routing/playlist/ui/controls/model';
import { translate } from '../../../i18n';

type Props = {
    playlist: TPlaylist | null;
    orientation?: TOrientation;
    children?: React.ReactNode;
    as?: string;
    isAuthor: boolean;
    hideAuthors?: boolean;
    imagePlaceholder?: React.ReactNode;
    onClick?: (playlist: TPlaylist, e: Evt<'a'>) => void;
    disabled?: boolean;
};

export const PlaylistItem = ({
    playlist,
    children,
    onClick,
    as,
    imagePlaceholder,
    isAuthor,
    hideAuthors,
    disabled,
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
    const [type, pendingQueueLoading] = useUnit([$type, $pendingQueueLoading]);
    const isCurrentPlaying =
        type === 'default' && state === SongState.playing && queue?.id === id;
    const isLoadingQueue = playlist
        ? pendingQueueLoading.has(playlist.id)
        : false;
    const playlistQueue = createLoadQueueObject({
        id,
        name,
        imageUrl: image,
        songIds: songs,
        url,
    });
    const { isLiked, handleToggleLike, performingAction } =
        useTogglePlaylistLike(playlist);

    const handleClick = (e: Evt<'a'>) => {
        onClick?.(p, e);
    };

    return (
        <PlaylistStyled
            as={as}
            onClick={handleClick}
            className={`playlist-item ${orientation} ${
                isCurrentPlaying || isLoadingQueue ? 'playing' : ''
            } ${disabled ? 'disabled' : ''}`}
            to={url}
            $color1={imageColors?.[0]}
        >
            {!children && (
                <PlayButton
                    queue={playlistQueue}
                    primaryColor={imageColors[0]}
                    showPlayingAnimation
                />
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
                    <Flex
                        gap={2}
                        jc="flex-start"
                        width={
                            orientation === 'vertical'
                                ? isAuthor
                                    ? 'fit-content'
                                    : 'calc(100% - 30px)'
                                : 'fit-content'
                        }
                    >
                        <PalylistTitle className="playlist-title">
                            {name}
                        </PalylistTitle>
                        {isPrivate && <IconLock size={16} />}
                    </Flex>
                    {orientation === 'vertical' ? (
                        authors.length !== 0 && (
                            <Flex
                                width={isAuthor ? '100%' : 'calc(100% - 30px)'}
                            >
                                <Authors authors={authors} isAuthor={isAlbum} />
                            </Flex>
                        )
                    ) : (
                        <Flex width="100%" gap={4}>
                            {!hideAuthors && (
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
                                            ? translate('album')
                                            : translate('playlist')
                                        : ''}{' '}
                                    {authors.length !== 0 && '·'}
                                </Subtext>
                            )}
                            {authors.length !== 0 && !hideAuthors && (
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
