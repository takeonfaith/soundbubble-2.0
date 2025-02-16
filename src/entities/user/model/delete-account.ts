import { createEvent, sample } from 'effector';
import { User } from 'firebase/auth';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { TUser } from './types';
import { $user, $userCreds } from './user';
import { modalModel } from '../../../layout/modal/model';
import { logout } from './logout';

export const deleteAccountFx = createEffectWithToast<
    { user: TUser; userCreds: User },
    void
>('Account deleted', 'Failed to delete account');

export const deleteAccount = createEvent();

sample({
    clock: deleteAccount,
    source: { user: $user, userCreds: $userCreds },
    filter: ({ user, userCreds }) => !!user && !!userCreds,
    fn: (props) => ({ user: props.user!, userCreds: props.userCreds! }),
    target: deleteAccountFx,
});

sample({
    clock: deleteAccountFx.done,
    target: logout,
});

deleteAccountFx.doneData.watch(() => {
    modalModel.events.close();
});

deleteAccountFx.use(async ({ user, userCreds }) => {
    await Database.Users.deleteAccount(user, userCreds);
});
