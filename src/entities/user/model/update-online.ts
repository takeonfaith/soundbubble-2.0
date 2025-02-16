import { createEffect, sample } from 'effector';
import { Database } from '../../../database';
import { TUser } from './types';
import { userIsLoggedIn } from '../../chat/lib/userIsLoggedIn';
import { $user } from './user';
import { interval } from 'patronum';
import { TIME_IN_MS } from '../../../shared/constants/time';
import { logout } from './logout';
import { setUser } from './init';

export const updateUserOnlineFx = createEffect<TUser, void>();

const { tick } = interval({
    timeout: 5 * TIME_IN_MS.minute,
    start: setUser,
    stop: logout,
});

sample({
    clock: [setUser, tick],
    filter: userIsLoggedIn,
    source: $user,
    fn: (user) => user,
    target: updateUserOnlineFx,
});

sample({
    clock: updateUserOnlineFx.done,
    fn: ({ params: user }) => ({ ...user!, online: Date.now() }),
    target: $user,
});

updateUserOnlineFx.use(async (user: TUser) => {
    await Database.Users.updateUserOnline(user.uid, Date.now());
});
