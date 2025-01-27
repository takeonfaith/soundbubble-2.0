import { effectorForm } from '../../../shared/effector/form';
import { PLAYLIST_DEFAULT_NAME } from './constants';

export const { useForm } = effectorForm({
    name: {
        type: 'text',
        init: PLAYLIST_DEFAULT_NAME,
        required: true,
    },
    photo: {
        type: 'file',
        required: false,
        init: null,
    },
    colors: {
        type: 'stringArray',
        init: [],
        required: false,
    },
});
