import { effectorForm } from '../../../shared/effector/form';

export const { useForm } = effectorForm({
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
});
