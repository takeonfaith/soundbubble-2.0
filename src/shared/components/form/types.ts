export type FieldType =
    | 'email'
    | 'password'
    | 'text'
    | 'textarea'
    | 'date'
    | 'authors';

export type TField = {
    type: FieldType;
    id: string;
    required: boolean;
    label?: string;
    placeholder?: string;
    validation?: (
        value: string,
        label: string | undefined,
        fieldObj: FieldObj<TField>
    ) => string;
};

export type FieldObj<T extends TField> = {
    [key in T['id']]: T & {
        value: string;
        error: string | undefined;
    };
};

export type SubmitObj<T extends TField> = {
    [key in T['id']]: string;
};

export type FormProps<T extends TField> = {
    fields: readonly T[];
    sumbitError?: string | undefined;
    valueObj: FieldObj<T>;
    handleChange: (
        key: string
    ) => (val: string | React.ChangeEvent<HTMLInputElement>) => void;
};
