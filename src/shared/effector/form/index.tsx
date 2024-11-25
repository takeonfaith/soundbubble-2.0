import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { MIN_PASSWORD_LENGTH } from '../../../features/signUpModal/constansts';
import { TForm } from './types';
import { useState } from 'react';

export const effectorForm = <T extends TForm>(form: T) => {
    type FormType = {
        [key in keyof T]: (typeof form)[key]['init'];
    };
    type ErrorType = Record<keyof T, string | undefined>;

    const updateField = createEvent<{
        id: keyof T;
        value: FormType[keyof T];
    }>();

    const updateError = createEvent<{
        id: keyof T;
        error: string | undefined;
    }>();

    const $form = createStore<FormType>(
        Object.keys(form).reduce((acc, key) => {
            acc[key as keyof T] = form[key].init;
            return acc;
        }, {} as Record<keyof T, T[string]['init']>)
    );

    const $errors = createStore<ErrorType>(
        Object.keys(form).reduce((acc, key) => {
            acc[key as keyof T] = undefined;
            return acc;
        }, {} as Record<keyof T, string | undefined>)
    );

    sample({
        clock: updateField,
        source: $form,
        fn: (form, { id, value }) => ({
            ...form,
            [id]: value,
        }),
        target: $form,
    });

    sample({
        clock: updateField,
        source: $errors,
        fn: (form, { id }) => ({
            ...form,
            [id]: undefined,
        }),
        target: $errors,
    });

    sample({
        clock: updateError,
        source: $errors,
        fn: (errors, { id, error }) => ({
            ...errors,
            [id]: error,
        }),
        target: $errors,
    });

    return {
        useForm: (
            handleSubmit: (values: FormType) => void,
            validate?: (keyof T)[]
        ) => {
            const [values, errors] = useUnit([$form, $errors]);
            const [loading, setLoading] = useState(false);

            const validateFields = async () => {
                let hasErrors = false;
                const validationKeys = validate ?? Object.keys(form);

                for (const key of validationKeys) {
                    const { required, validation, type, asyncValidation } =
                        form[key];
                    if (required && !values[key]) {
                        updateError({
                            id: key,
                            error: 'This field is required',
                        });
                        hasErrors = true;
                    } else if (
                        validation &&
                        !!validation(values[key] as never)
                    ) {
                        updateError({
                            id: key,
                            error: validation(values[key] as never),
                        });
                        hasErrors = true;
                    } else if (
                        type === 'email' &&
                        !/\S+@\S+\.\S+/.test(values[key] as string)
                    ) {
                        hasErrors = true;
                        updateError({
                            id: key,
                            error: 'Should be a valid email address',
                        });
                    } else if (
                        type === 'password' &&
                        (values[key] as string).length < MIN_PASSWORD_LENGTH
                    ) {
                        hasErrors = true;
                        updateError({
                            id: key,
                            error: 'Password is too weak',
                        });
                    } else if (
                        required &&
                        (type === 'authors' || type === 'stringArray') &&
                        (values[key] as unknown[]).length === 0
                    ) {
                        hasErrors = true;
                        updateError({
                            id: key,
                            error: 'This field is required',
                        });
                    } else if (asyncValidation) {
                        setLoading(true);
                        const error = await asyncValidation(
                            values[key] as never
                        );
                        setLoading(false);
                        if (error) {
                            updateError({
                                id: key,
                                error,
                            });
                            hasErrors = true;
                        }
                    } else {
                        updateError({ id: key, error: undefined });
                    }
                }

                return hasErrors;
            };

            const onSubmit = async () => {
                const hasErrors = await validateFields();
                console.log(hasErrors, errors);

                if (!hasErrors) {
                    handleSubmit(values);
                }
            };

            const onChange = (e: Evt<'input'>) => {
                const { id, value } = e.currentTarget;
                updateField({ id, value });
            };

            return {
                values,
                errors,
                onSubmit,
                updateField,
                onChange,
                loading,
            };
        },
    };
};
