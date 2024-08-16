import React, { useEffect, useRef, useState } from 'react';
import { Field, FieldObj, FormProps, SubmitObj } from './types';

export const useForm = <T extends Field>({
    onSumbit,
    fields,
    focusOnField,
    submitErrorMessage,
}: FormProps<T>) => {
    const fieldRef = useRef<HTMLInputElement>(null);
    const [fieldObjects, setFieldsObjects] = useState(
        fields.reduce((acc, field) => {
            acc[field.id as T['id']] = { value: '', error: '', ...field };
            return acc;
        }, {} as FieldObj<T>)
    );
    const [sumbitError, setSumbitError] = useState<string | undefined>();
    const allRequiredFieldsAreFilled = !Object.keys(fieldObjects).find(
        (fieldName) => {
            const { value, required } = fieldObjects[fieldName as T['id']];
            return value.length === 0 && required;
        }
    );

    const handleChange = (key: string) => {
        return (val: string | React.ChangeEvent<HTMLInputElement>) => {
            setSumbitError(undefined);
            setFieldsObjects((prev) => {
                const v = typeof val === 'string' ? val : val?.target?.value;

                const newObj = { ...prev };
                newObj[key as T['id']].value = v;
                newObj[key as T['id']].error = '';

                return newObj;
            });
        };
    };

    const validateFields = () => {
        const errors: Record<string, string> = {};
        Object.keys(fieldObjects).forEach((fieldName) => {
            const { value, required, validation, type, label } =
                fieldObjects[fieldName as T['id']];

            if (value.length === 0 && required) {
                errors[fieldName] = `${
                    fieldObjects[fieldName as T['id']].label
                } is required`;
            } else if (type === 'email' && !value.includes('@')) {
                errors[fieldName] = `${label} should be a valid email address`;
            } else if (validation && validation(value)) {
                errors[fieldName] = validation(value);
            }
        });

        setFieldsObjects((prev) => {
            const newObj = { ...prev };
            Object.keys(fieldObjects).forEach((fieldName) => {
                newObj[fieldName as T['id']].error = errors[fieldName];
            });

            return newObj;
        });

        return Object.keys(errors).length !== 0;
    };

    const handleSumbit = () => {
        const hasErrors = validateFields();
        setSumbitError(undefined);

        if (!hasErrors) {
            try {
                onSumbit(
                    Object.keys(fieldObjects).reduce((acc, fieldName) => {
                        acc[fieldName as T['id']] =
                            fieldObjects[fieldName as T['id']].value;
                        return acc;
                    }, {} as SubmitObj<T>)
                );
            } catch (error) {
                setSumbitError(
                    error instanceof Error ? error.message : (error as string)
                );
            }
        }
    };

    useEffect(() => {
        setSumbitError(submitErrorMessage);
    }, [submitErrorMessage]);

    useEffect(() => {
        if (fieldRef.current && focusOnField) {
            fieldRef.current.focus();
        }
    }, [focusOnField]);

    return {
        fieldObjects,
        sumbitError,
        allRequiredFieldsAreFilled,
        fieldRef,
        handleSumbit,
        handleChange,
    };
};
