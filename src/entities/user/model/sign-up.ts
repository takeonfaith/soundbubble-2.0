import { createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { CreateUserCreditsType, TUser } from './types';
import { modalModel } from '../../../layout/modal/model';

export const signUpFx = createEffectWithToast<
    CreateUserCreditsType,
    TUser | null
>('Succesfully signed up', 'Failed to sign up');

export const signUp = createEvent<CreateUserCreditsType>();

sample({
    clock: signUp,
    target: signUpFx,
});

signUpFx.doneData.watch(() => {
    modalModel.events.close();
});

signUpFx.use(async (props) => {
    return await Database.Users.createUser(props);
});
