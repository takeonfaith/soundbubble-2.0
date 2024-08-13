export type FieldType = 'email' | 'password' | 'text';

export type Field = {
    type: FieldType;
    id: string;
    required: boolean;
    label?: string;
    placeholder?: string;
    validation?: (value: string) => string;
};

export type FieldObj<T extends Field> = {
    [key in T['id']]: T & {
        value: string;
        error: string | undefined;
    };
};

export type SubmitObj<T extends Field> = {
    [key in T['id']]: string;
};

export type FormProps<T extends Field> = {
    fields: readonly T[];
    submitErrorMessage: string | undefined;
    loading?: boolean;
    submitText: string;
    focusOnField?: T['id'];
    onSumbit: (value: SubmitObj<T>) => void;
};
