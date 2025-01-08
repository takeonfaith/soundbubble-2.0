import { effectorForm } from '../../../shared/effector/form';

export const { useForm } = effectorForm({
    name: {
        type: 'text',
        init: '',
        required: true,
    },
});
