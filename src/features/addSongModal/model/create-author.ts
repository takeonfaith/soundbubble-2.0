import { effectorForm } from '../../../shared/effector/form';

export const { useForm } = effectorForm({
    displayName: {
        init: '',
        required: true,
        type: 'text',
    },
    photoFile: {
        type: 'file',
        required: true,
        init: null as File | null,
    },
    imageColors: {
        type: 'stringArray',
        required: true,
        init: [] as string[],
    },
});
