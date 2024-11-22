import { createEvent, sample } from 'effector';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { TUser } from './types';

export type CreateAuthorForm = {
    displayName: string;
    imageColors: string[];
    photoFile: File | null;
};

type CreateAuthorProps = {
    form: CreateAuthorForm;
    onSuccess?: (user: TUser) => void;
};

export const createAuthorFx = createEffectWithToast<CreateAuthorProps, TUser>(
    'Author successfully created',
    'Failed to create author'
);

export const createAuthor = createEvent<CreateAuthorProps>();

sample({
    clock: createAuthor,
    target: createAuthorFx,
});

createAuthorFx.use(async ({ form, onSuccess }) => {
    const res = await Database.Users.createAuthor(form);
    onSuccess?.(res);
    return res;
});
