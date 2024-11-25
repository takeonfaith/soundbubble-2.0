import { TUser } from '../../../entities/user/model/types';

export type FieldType =
    | 'email'
    | 'password'
    | 'text'
    | 'number'
    | 'date'
    | 'authors'
    | 'file'
    | 'stringArray';

type TField<T extends FieldType, K> = {
    type: T;
    init: K;
    required: boolean;
    validation?: (value: K) => string | undefined;
    asyncValidation?: (value: K) => Promise<string | undefined>;
};

export type TFields =
    | TField<'email' | 'date' | 'text' | 'password', string>
    | TField<'file', File | null>
    | TField<'authors', TUser[]>
    | TField<'stringArray', string[]>
    | TField<'number', number>;

export type TForm = {
    [key: string]: TFields;
};
