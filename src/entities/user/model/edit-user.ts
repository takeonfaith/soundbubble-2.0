import { createEvent, sample } from 'effector';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { Database } from '../../../database';
import { $user } from './user';
import { userIsLoggedIn } from '../../chat/lib/userIsLoggedIn';
import { TUser } from './types';

export type UpdatedUserFields = {
    displayName?: string;
    imageColors?: string[];
    photoFile?: File | null;
};

type EditUserProps = {
    update: UpdatedUserFields;
    onSuccess?: () => void;
};

export const editUserFx = createEffectWithToast<
    EditUserProps & { user: TUser },
    UpdatedUserFields
>('User successfully updated', 'Failed to edit');

export const editUser = createEvent<EditUserProps>();

sample({
    clock: editUser,
    source: $user,
    filter: userIsLoggedIn,
    fn: (user, props) => ({ ...props, user }),
    target: editUserFx,
});

sample({
    clock: editUserFx.doneData,
    source: $user,
    filter: userIsLoggedIn,
    fn: (user, newData): TUser => ({ ...user, ...newData }),
    target: $user,
});

editUserFx.use(async ({ user, update, onSuccess }) => {
    const res = await Database.Users.editUser(user, update);
    onSuccess?.();
    return res;
});
