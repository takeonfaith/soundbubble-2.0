import { TPlaylist } from '../../../entities/playlist/model/types';
import { PlaylistItem } from '../../../entities/playlist/ui';
import { TEntity } from '../../../entities/search/model/types';
import { createQueueObject } from '../../../entities/song/lib/createQueueObject';
import { TQueue, TSong } from '../../../entities/song/model/types';
import { SongItem } from '../../../entities/song/ui';
import { PlaneSongList } from '../../../entities/song/ui/planeList';
import { TUser } from '../../../entities/user/model/types';
import { TOrientation } from '../../../entities/user/types';
import { UserItem } from '../../../entities/user/ui';
import { getEntityId } from '../../../features/searchWithHints/lib/getDividedEntity';
import { getEntityType } from '../../../features/searchWithHints/lib/getEntityType';

export const EntityTypeMap = {
    song: SongItem,
    author: UserItem,
    user: UserItem,
    playlist: PlaylistItem,
    album: PlaylistItem,
    deleted: PlaylistItem,
    chat: () => null,
};

export const getEntityItem = (
    item: TEntity,
    queue: Omit<TQueue, 'songs'>,
    onClick?: (item: TEntity, e: Evt<'a'> | Evt<'div'>) => void,
    children?: React.ReactNode,
    orientation: TOrientation = 'horizontal'
) => {
    const id = getEntityId(item);
    const type = getEntityType(item);

    switch (type) {
        case 'playlist':
        case 'album':
            return (
                <PlaylistItem
                    orientation={orientation}
                    playlist={item as TPlaylist}
                    key={id}
                    isAuthor={true}
                    onClick={onClick}
                >
                    {children}
                </PlaylistItem>
            );
        case 'author':
        case 'user':
            return (
                <UserItem
                    orientation={orientation}
                    user={item as TUser}
                    key={id}
                    onClick={onClick}
                    showLikeButton={false}
                >
                    {children}
                </UserItem>
            );
        case 'song':
            return (
                <PlaneSongList
                    onClick={onClick}
                    queue={createQueueObject({
                        ...queue,
                        songs: [item as TSong],
                    })}
                >
                    {children}
                </PlaneSongList>
            );
        default:
            return <PlaylistItem playlist={null} isAuthor />;
    }
};
