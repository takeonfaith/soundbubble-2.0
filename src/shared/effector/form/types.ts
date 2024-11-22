import { FieldType } from '../../components/form/types';

export type TField = {
    init: unknown;
    required: boolean;
    type: FieldType;
    validation?: (value: unknown) => string | undefined;
};

export type TForm = {
    [key: string]: TField;
};
