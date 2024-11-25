import { Database } from '../../../database';
import { TUser } from '../../../entities/user/model/types';
import { effectorForm } from '../../../shared/effector/form';

export const { useForm } = effectorForm({
    name: {
        type: 'text',
        init: '',
        required: true,
    },
    email: {
        init: '',
        required: true,
        type: 'email',
        asyncValidation: async (email) => {
            const isTaken = await Database.Users.checkIfEmailIsTaken(email);
            return isTaken
                ? 'This email is already taken. Choose a different one'
                : undefined;
        },
    },
    password: {
        init: '',
        required: true,
        type: 'password',
    },
    photo: {
        init: null,
        required: false,
        type: 'file',
    },
    imageColors: {
        init: [],
        required: false,
        type: 'stringArray',
    },
    authors: {
        init: [] as TUser[],
        required: true,
        type: 'authors',
    },
    added: {
        init: [],
        required: true,
        type: 'stringArray',
        validation: (added) => {
            return added.length < 5 ? 'Should add at least 5' : undefined;
        },
    },
});
