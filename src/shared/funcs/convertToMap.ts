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

export const convertToMapArray = <T extends object, K extends keyof T>(
    arr: T[],
    field: K,
    fieldFn?: (item: T[K]) => string
) => {
    return arr.reduce((acc, item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [field]: _, ...newObj } = item;
        const key = Object.keys(newObj)[0] as keyof Omit<T, K>;
        const finalObj = newObj[key];
        const fieldId = fieldFn
            ? fieldFn(item[field])
            : (item[field] as string);

        if (acc[fieldId]) {
            acc[fieldId].push(finalObj);
        } else {
            acc[fieldId] = [finalObj];
        }

        return acc;
    }, {} as Record<string, Array<T[keyof Omit<T, K>]>>);
};
