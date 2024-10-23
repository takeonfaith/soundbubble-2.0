import {
    getEntityId,
    getEntityName,
} from '../../../features/searchWithHints/lib/getDividedEntity';
import { getEntityPlace } from '../../../features/searchWithHints/lib/getEntityPlace';
import { normalizeString } from '../../../shared/funcs/normalizeString';
import { TEntity, TSuggestion } from '../model/types';

export const getVariantsOfName = (name: string | undefined) => {
    const variantsOfName = [];

    if (!name) return [];

    for (let i = 0; i <= name.length; i++) {
        const chars = normalizeString(name.substring(0, i));
        variantsOfName.push(chars);
    }

    return variantsOfName;
};

export const createDefaultSuggestion = (entity: TEntity): TSuggestion => {
    const fullName = getEntityName(entity);
    const variantsOfName = getVariantsOfName(fullName);

    return {
        fullName,
        variantsOfName,
        rank: 0,
        uid: getEntityId(entity),
        place: getEntityPlace(entity),
    };
};
