import { TUser } from '../../../entities/user/model/types';
import { effectorForm } from '../../../shared/effector/form';

export const { useForm } = effectorForm({
    name: {
        init: '',
        required: true,
        type: 'text',
    },
    email: {
        init: '',
        required: true,
        type: 'email',
    },
    password: {
        init: '',
        required: true,
        type: 'password',
    },
    photo: {
        init: null as File | null,
        required: false,
        type: 'file',
    },
    imageColors: {
        init: [] as string[],
        required: false,
        type: 'stringArray',
    },
    authors: {
        init: [] as TUser[],
        required: true,
        type: 'authors',
    },
    added: {
        init: [] as string[],
        required: true,
        type: 'authors',
    },
});
