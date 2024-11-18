import { TEntity, TPlace } from '../../../entities/search/model/types';
import { getEntityType } from './getEntityType';

/*
	Нужно для поля place в search коллекции
*/
export const getEntityPlace = (entity: TEntity): TPlace => {
    const type = getEntityType(entity);

    const dic: Record<string, TPlace> = {
        song: 'songs',
        playlist: 'playlists',
        album: 'playlists',
        user: 'users',
        author: 'users',
    };

    return dic[type];
};
