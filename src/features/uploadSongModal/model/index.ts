import { TUser } from '../../../entities/user/model/types';
import { effectorForm } from '../../../shared/effector/form';
import { FormType } from '../../../shared/effector/form/types';

const form = {
    songFile: {
        type: 'file',
        required: true,
        init: null as File | null,
    },
    youtubeLink: {
        type: 'youtube-link',
        required: false,
        init: '',
    },
    imageColors: {
        type: 'stringArray',
        required: true,
        init: [] as string[],
    },
    name: {
        type: 'text',
        required: true,
        init: '',
    },
    author: {
        type: 'text',
        required: false,
        init: '',
    },
    authors: {
        type: 'authors',
        required: true,
        init: [] as TUser[],
    },
    duration: {
        type: 'number',
        required: true,
        init: 0 as number,
    },
    coverFile: {
        type: 'file',
        required: true,
        init: null,
    },
    lyrics: {
        type: 'text',
        required: false,
        init: '',
    },
    langs: {
        type: 'stringArray',
        required: true,
        init: [] as string[],
    },
    moods: {
        type: 'stringArray',
        required: true,
        init: [] as string[],
    },
    genres: {
        type: 'stringArray',
        required: true,
        init: [] as string[],
    },
    releaseDate: {
        type: 'date',
        required: true,
        init: new Date().toLocaleDateString('fr-CA'),
    },
} as const;

export type AddSongFormType = FormType<typeof form>;

export const { useForm } = effectorForm(form);
