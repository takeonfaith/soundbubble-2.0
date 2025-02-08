import { TExtendedSuggestion } from '../../../features/searchWithHints/types';

export type FieldType =
    | 'email'
    | 'password'
    | 'text'
    | 'number'
    | 'date'
    | 'authors'
    | 'file'
    | 'url'
    | 'youtube-link'
    | 'stringArray';

export type TField<T extends FieldType, K> = {
    type: T;
    init: K;
    required: boolean;
    validation?: (value: K) => string | undefined;
    asyncValidation?: (value: K) => Promise<string | undefined>;
};

type StrType = 'email' | 'date' | 'text' | 'password' | 'url' | 'youtube-link';

export type TFields<T extends FieldType> = T extends StrType
    ? TField<StrType, string>
    : T extends 'file'
    ? TField<'file', File | null>
    : T extends 'authors'
    ? TField<'authors', TExtendedSuggestion[]>
    : T extends 'stringArray'
    ? TField<'stringArray', string[]>
    : T extends 'number'
    ? TField<'number', number>
    : never;

export type TForm = {
    [key: string]: TFields<
        StrType | 'file' | 'authors' | 'number' | 'stringArray'
    >;
};

export type FormType<T extends TForm> = {
    [key in keyof T]: TFields<T[key]['type']>['init'];
};
export type ErrorType<T extends TForm> = Record<keyof T, string | undefined>;
