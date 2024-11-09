import { IconHeadphones, IconUserPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { TChat } from '../../../entities/chat/model/types';
import { TPlaylist } from '../../../entities/playlist/model/types';
import { PlaylistCover } from '../../../entities/playlist/ui/PlaylistCover';
import { TEntity } from '../../../entities/search/model/types';
import {
    createLoadQueueObject,
    createQueueObject,
} from '../../../entities/song/lib/createQueueObject';
import { SongState, TAuthor, TSong } from '../../../entities/song/model/types';
import { songModel } from '../../../entities/song/new-model';
import { SongCover } from '../../../entities/song/ui/SongCover';
import { TUser } from '../../../entities/user/model/types';
import { UserCover } from '../../../entities/user/ui/UserCover';
import {
    getEntityId,
    getEntityImage,
    getEntityName,
} from '../../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../../features/searchWithHints/lib/getEntityType';
import { Authors } from '../../../shared/components/authors';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { PlayPauseIcon } from '../../../shared/components/playPauseIcon';
import { IndexStyled, TopPlateStyled } from './styles';

export const TopPlate = ({
    entity,
    index,
}: {
    entity: Exclude<TEntity, TChat | TAuthor> | TUser;
    index: number;
}) => {
    const { queue, state } = songModel.useSong();
    const type = getEntityType(entity);
    const isLoading =
        queue?.id === getEntityId(entity) && state === SongState.loading;
    const isPlaying =
        queue?.id === getEntityId(entity) && state === SongState.playing;
    const navigate = useNavigate();

    const getCover = () => {
        switch (type) {
            case 'author':
            case 'user':
                return UserCover;
            case 'album':
            case 'playlist':
                return PlaylistCover;
            default:
                return SongCover;
        }
    };

    const Cover = getCover();

    const handleSongPlay = () => {
        const queue = createQueueObject({
            id: getEntityId(entity),
            name: 'Trends',
            url: '/trends',
            songs: [entity as TSong],
        });

        songModel.controls.play({
            queue,
            currentSongIndex: 0,
        });
    };

    const handlePlayAlbum = () => {
        const playlist = entity as TPlaylist;
        const queue = createLoadQueueObject({
            id: playlist.id,
            name: playlist.name,
            url: `/playlist/${playlist.id}`,
            imageUrl: playlist.image,
            songIds: playlist.songs,
        });

        songModel.controls.loadAndPlay({ queue, currentSongIndex: 0 });
    };

    const handlePlayAuthor = () => {
        const author = entity as TUser;
        const queue = createLoadQueueObject({
            id: author.uid,
            name: author.displayName,
            url: `/author/${author.uid}`,
            imageUrl: author.photoURL,
            songIds: author.ownSongs,
        });

        songModel.controls.loadAndPlay({ queue, currentSongIndex: 0 });
    };

    const handleClickPlay = (e) => {
        e.stopPropagation();

        if (type === 'song') {
            handleSongPlay();
            return;
        }

        if (type === 'playlist' || type === 'album') {
            handlePlayAlbum();
            return;
        }

        handlePlayAuthor();
    };

    const handleClick = () => {
        if (type === 'song') {
            handleSongPlay();

            return;
        }

        navigate(`/${type}/${getEntityId(entity)}`);
    };

    return (
        <TopPlateStyled $colors={entity.imageColors} onClick={handleClick}>
            <div className="front">
                <Cover
                    isAuthor={'isAuthor' in entity ? entity.isAuthor : false}
                    isAlbum={'isAlbum' in entity ? entity.isAlbum : false}
                    src={getEntityImage(entity)}
                    size={'120px'}
                    colors={entity.imageColors}
                />
                <Flex gap={4} d="column" ai="flex-start" className="info">
                    <Flex gap={10}>
                        <h2>{getEntityName(entity)}</h2>
                        {'numberOfListenersPerMonth' in entity && (
                            <Flex gap={4} className="subtext">
                                <IconHeadphones size={16} />
                                {entity.numberOfListenersPerMonth}
                            </Flex>
                        )}
                        <Flex gap={4} className="subtext">
                            {'listens' in entity ? (
                                <IconHeadphones size={16} />
                            ) : (
                                <IconUserPlus size={16} />
                            )}
                            {'listens' in entity
                                ? entity.listens
                                : entity.subscribers}
                        </Flex>
                    </Flex>
                    {'authors' in entity && (
                        <Authors authors={entity.authors} />
                    )}
                    {'ownSongs' in entity && (
                        <div className="subtext">
                            {entity.ownSongs?.length} songs
                        </div>
                    )}
                </Flex>
                <Button
                    $height="45px"
                    $width="45px"
                    className="playbutton"
                    onClick={handleClickPlay}
                >
                    <PlayPauseIcon
                        loading={isLoading}
                        playling={isPlaying}
                        size={20}
                    />
                </Button>
            </div>
            <IndexStyled>#{index}</IndexStyled>
        </TopPlateStyled>
    );
};
