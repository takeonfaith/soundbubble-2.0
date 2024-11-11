import { TEntity } from '../../entities/search/model/types';

export const convertToMap = <T extends TEntity>(arr: T[]) => {
    return arr.reduce((acc, item) => {
        if ('id' in item) {
            acc[item.id] = item;
        } else if ('uid' in item) {
            acc[item.uid] = item;
        }

        return acc;
    }, {} as Record<string, T>);
};
