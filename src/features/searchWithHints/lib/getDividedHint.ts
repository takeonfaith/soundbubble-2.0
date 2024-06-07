import { THint } from '../types';

export const getHintName = (suggestion: THint) => {
    if ('displayName' in suggestion) return suggestion['displayName'];

    return suggestion['name'];
};

export const getHintId = (suggestion: THint) => {
    if ('uid' in suggestion) return suggestion['uid'];

    return suggestion['id'];
};
