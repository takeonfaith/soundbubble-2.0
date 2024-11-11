import { NavigateFunction } from 'react-router';

let navigateGlobal: NavigateFunction | undefined;

// Set the navigation function
export const setNavigate = (navigateFunction: NavigateFunction) => {
    navigateGlobal = navigateFunction;
};

// Get the navigation function
export const globalNavigate = () => {
    if (!navigateGlobal) {
        throw new Error('Navigate function is not set yet!');
    }

    return navigateGlobal;
};
