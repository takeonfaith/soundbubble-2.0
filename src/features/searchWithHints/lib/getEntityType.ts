import { TEntity } from '../../../entities/search/model/types';
import { ENTITIES_ICONS } from '../../../shared/constants/icons';

export const getEntityType = (
    entity: TEntity
): keyof typeof ENTITIES_ICONS | undefined => {
    if ('isAuthor' in entity && entity?.isAuthor) return 'author';

    if ('displayName' in entity && entity?.displayName) return 'user';

    if ('isAlbum' in entity && entity?.isAlbum) return 'album';

    if ('subscribers' in entity && entity?.subscribers !== undefined)
        return 'playlist';

    return 'song';
};
