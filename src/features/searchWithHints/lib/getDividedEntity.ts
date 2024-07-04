import { TEntity } from '../../../entities/search/model/types';

export const getEntityName = (suggestion: TEntity | undefined) => {
    if(!suggestion) return ''

    if ('displayName' in suggestion) return suggestion['displayName'];

    if ('chatName' in suggestion) return suggestion['chatName'];

    return suggestion['name'];
};

export const getEntityId = (suggestion: TEntity) => {
    if ('uid' in suggestion) return suggestion['uid'];

    return suggestion['id'];
};

export const getEntityImage = (suggestion: TEntity) => {
    if ('photoURL' in suggestion) return suggestion['photoURL'];

    if ('image' in suggestion) return suggestion['image'];

    if ('chatImage' in suggestion) return suggestion['chatImage'];

    return suggestion['cover'];
};
