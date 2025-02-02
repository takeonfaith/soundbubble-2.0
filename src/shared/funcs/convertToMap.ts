/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
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

export const convertToMapArray = <T extends object>(
    arr: T[],
    field: keyof T,
    fieldFn?: (item: T) => string
) => {
    return arr.reduce((acc, item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [field]: _, ...newObj } = item;
        const key = Object.keys(newObj)[0] as keyof T;
        const finalObj = newObj[key];
        const fieldId = fieldFn ? fieldFn(item[field]) : item[field];

        if (acc[fieldId]) {
            acc[fieldId].push(finalObj);
        } else {
            acc[fieldId] = [finalObj];
        }

        return acc;
    }, {} as Record<unknown, Omit<T, keyof T>[]>);
};
