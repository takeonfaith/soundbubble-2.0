import { createStore } from 'effector';
import { User } from 'firebase/auth';
import { TUser } from './types';

export const $user = createStore<TUser | null>(null);
export const $userCreds = createStore<User | null>(null);

$user.watch((user) => console.log(user));
