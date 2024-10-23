import { TUser } from '../../user/model/types';

export const userIsLoggedIn = (user: TUser | null) => {
    return !!user;
};
