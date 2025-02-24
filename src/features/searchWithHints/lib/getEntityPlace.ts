import { TEntity, TPlace } from '../../../entities/search/model/types';
import { ENTITIES_ICONS } from '../../../shared/constants/icons';
import { getEntityType } from './getEntityType';

export const getTypeToPlace = (type: keyof typeof ENTITIES_ICONS) => {
    const dic: Record<string, TPlace> = {
        song: 'songs',
        playlist: 'playlists',
        album: 'playlists',
        user: 'users',
        author: 'users',
    };

    return dic[type];
};

export const getPlaceToType = (type: TPlace): keyof typeof ENTITIES_ICONS => {
    const dic: Record<TPlace, keyof typeof ENTITIES_ICONS> = {
        playlists: 'playlist',
        songs: 'song',
        users: 'author',
    };

    return dic[type];
};

/*
	Нужно для поля place в search коллекции
*/
export const getEntityPlace = (entity: TEntity): TPlace => {
    const type = getEntityType(entity);

    return getTypeToPlace(type);
};
