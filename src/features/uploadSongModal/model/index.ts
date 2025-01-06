import { TUser } from '../../../entities/user/model/types';
import { effectorForm } from '../../../shared/effector/form';
import { TForm } from '../../../shared/effector/form/types';

export type FormType<T extends TForm> = {
    [key in keyof T]: T[key]['init'];
};

const initial = {
    songFile: {
        type: 'file',
        required: true,
        init: null as File | null,
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

export type AddSongFormType = FormType<typeof initial>;

export const { useForm } = effectorForm(initial);
