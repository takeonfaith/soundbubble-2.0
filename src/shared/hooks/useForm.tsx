import { useEffect, useState } from 'react';
import { FieldObj, SubmitObj, TField } from '../components/form/types';

const getValueObj = <T extends TField>(fields: readonly T[]) =>
    fields.reduce((acc, field) => {
        acc[field.id as T['id']] = { value: '', error: '', ...field };
        return acc;
    }, {} as FieldObj<T>);

const getResultObj = <T extends TField, K extends FieldObj<T>>(
    valueObj: K
): SubmitObj<T> => {
    return Object.keys(valueObj).reduce((acc, fieldName) => {
        acc[fieldName as T['id']] = valueObj[fieldName as T['id']].value;
        return acc;
    }, {} as SubmitObj<T>);
};

type Props<T extends TField> = {
    fields: readonly T[];
    submitErrorMessage?: string;
    handleSubmit?: (res: SubmitObj<T>) => void;
};

export const useForm = <T extends TField>({
    fields,
    submitErrorMessage,
    handleSubmit,
}: Props<T>) => {
    const [sumbitError, setSumbitError] = useState<string | undefined>();
    const [valueObj, setValueObj] = useState(getValueObj(fields));
    const areAllRequiredFieldFilled = !Object.keys(valueObj).find(
        (fieldName) => {
            const { value, required } = valueObj[fieldName as T['id']];
            return value.length === 0 && required;
        }
    );

    const validateFields = () => {
        const errors: Record<string, string> = {};
        Object.keys(valueObj).forEach((fieldName) => {
            const { value, required, validation, type, label } =
                valueObj[fieldName as T['id']];

            if (value.length === 0 && required) {
                errors[fieldName] = `${
                    valueObj[fieldName as T['id']].label
                } is required`;
            } else if (type === 'email' && !/\S+@\S+\.\S+/.test(value)) {
                errors[fieldName] = `${label} should be a valid email address`;
            } else if (validation && validation(value, label, valueObj)) {
                errors[fieldName] = validation(value, label, valueObj);
            }
        });

        setValueObj((prev) => {
            const newObj = { ...prev };
            Object.keys(valueObj).forEach((fieldName) => {
                newObj[fieldName as T['id']].error = errors[fieldName];
            });

            return newObj;
        });

        return Object.keys(errors).length !== 0;
    };

    const onSumbit = (e: Evt<'btn'>) => {
        e.preventDefault();
        setSumbitError(undefined);
        const hasErrors = validateFields();

        if (!hasErrors) {
            try {
                handleSubmit?.(getResultObj(valueObj));
            } catch (error) {
                setSumbitError(
                    error instanceof Error ? error.message : (error as string)
                );
            }
        }
    };

    const handleChange = (key: string) => {
        return (val: string | React.ChangeEvent<HTMLInputElement>) => {
            setSumbitError(undefined);
            setValueObj((prev) => {
                const v = typeof val === 'string' ? val : val?.target?.value;

                const newObj = { ...prev };
                newObj[key as T['id']].value = v;
                newObj[key as T['id']].error = '';

                return newObj;
            });
        };
    };

    useEffect(() => {
        if (submitErrorMessage) {
            setSumbitError(submitErrorMessage);
        }
    }, [submitErrorMessage]);

    return {
        onSumbit,
        areAllRequiredFieldFilled,
        formProps: {
            sumbitError: sumbitError,
            fields,
            valueObj,
            handleChange,
        },
    };
};
