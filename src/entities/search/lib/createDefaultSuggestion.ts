import {
    getEntityId,
    getEntityName,
} from '../../../features/searchWithHints/lib/getDividedEntity';
import { getEntityPlace } from '../../../features/searchWithHints/lib/getEntityPlace';
import { normalizeString } from '../../../shared/funcs/normalizeString';
import { TEntity, TSuggestion } from '../model/types';

export const createDefaultSuggestion = (entity: TEntity): TSuggestion => {
    const variantsOfName = [];
    const fullName = getEntityName(entity);
    for (let i = 0; i <= fullName.length; i++) {
        const chars = normalizeString(fullName.substring(0, i));
        variantsOfName.push(chars);
    }

    return {
        fullName,
        variantsOfName,
        rank: 0,
        uid: getEntityId(entity),
        place: getEntityPlace(entity),
    };
};
