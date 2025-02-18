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
import { TAuthor, TSong } from '../../../entities/song/model/types';
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
import { Flex } from '../../../shared/components/flex';
import { ENTITIES_ICONS } from '../../../shared/constants/icons';
import { PlayButton } from '../../playlist/ui/controls/PlayButton';
import { IndexStyled, TopPlateStyled } from './styles';

const getCover = (type: keyof typeof ENTITIES_ICONS) => {
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

type Props = {
    entity: Exclude<TEntity, TChat | TAuthor> | TUser;
    index: number;
};
export const TopPlate = ({ entity, index }: Props) => {
    const { state } = songModel.useSong();
    const type = getEntityType(entity);
    const navigate = useNavigate();
    const queueBasis = {
        id: getEntityId(entity),
        name: getEntityName(entity),
        url: `/${type}/${getEntityId(entity)}`,
        imageUrl: getEntityImage(entity),
    };
    const queues = {
        song: createQueueObject({
            ...queueBasis,
            name: 'Trends',
            url: '/trends',
            songs: [entity as TSong],
        }),
        album: createLoadQueueObject({
            ...queueBasis,
            songIds: (entity as TPlaylist).songs,
        }),
        playlist: createLoadQueueObject({
            ...queueBasis,
            songIds: (entity as TPlaylist).songs,
        }),
        author: createLoadQueueObject({
            ...queueBasis,
            songIds: (entity as TUser).ownSongs,
        }),
    };

    const Cover = getCover(type);

    const handleClick = () => {
        if (type === 'song') {
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
                        <Authors
                            isAuthor={getEntityType(entity) !== 'playlist'}
                            authors={entity.authors}
                        />
                    )}
                    {'ownSongs' in entity && (
                        <div className="subtext">
                            {entity.ownSongs?.length} songs
                        </div>
                    )}
                </Flex>

                <PlayButton
                    queue={queues[type as keyof typeof queues]}
                    state={state}
                    primaryColor={entity.imageColors[0]}
                    showPlayingAnimation
                />
            </div>
            <IndexStyled>#{index}</IndexStyled>
        </TopPlateStyled>
    );
};
