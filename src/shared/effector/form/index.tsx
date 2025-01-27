import { createEvent, createStore, sample } from 'effector';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { MIN_PASSWORD_LENGTH } from '../../../features/signUpModal/constansts';
import { isValidHttpUrl } from '../../funcs/isValidHttpUrl';
import { isValidYoutubeLink } from '../../funcs/isValidYoutubeLink';
import { ErrorType, FormType, TForm } from './types';

export const effectorForm = <T extends TForm>(form: T) => {
    const updateField = createEvent<{
        id: keyof T;
        value: FormType<T>[keyof T];
    }>();

    const reset = createEvent();

    const updateError = createEvent<{
        id: keyof T;
        error: string | undefined;
    }>();

    const $form = createStore<FormType<T>>(
        Object.keys(form).reduce((acc, key) => {
            acc[key as keyof T] = form[key].init;
            return acc;
        }, {} as Record<keyof T, T[string]['init']>)
    );

    $form.watch((f) => console.log(f));

    $form.reset(reset);

    const $errors = createStore<ErrorType<T>>(
        Object.keys(form).reduce((acc, key) => {
            acc[key as keyof T] = undefined;
            return acc;
        }, {} as Record<keyof T, string | undefined>)
    );

    $errors.reset(reset);

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
            handleSubmit: (
                values: FormType<T>,
                handleCleanForm: () => void
            ) => void,
            validate?: (keyof T)[]
        ) => {
            const [values, errors] = useUnit([$form, $errors]);
            const [loading, setLoading] = useState(false);

            const validateFields = async () => {
                let hasErrors = false;
                const validationKeys = validate ?? Object.keys(form);

                for (const key of validationKeys) {
                    console.log(values, key);
                    const { required, validation, type, asyncValidation } =
                        form[key];
                    if (required && !values[key]) {
                        updateError({
                            id: key,
                            error: 'This field is required',
                        });
                        hasErrors = true;
                    } else if (
                        type === 'url' &&
                        (values[key] as string).length !== 0 &&
                        !isValidHttpUrl(values[key] as string)
                    ) {
                        hasErrors = true;
                        updateError({
                            id: key,
                            error: 'Incorrect url format',
                        });
                    } else if (
                        type === 'youtube-link' &&
                        (values[key] as string).length !== 0 &&
                        !isValidYoutubeLink(values[key] as string)
                    ) {
                        hasErrors = true;
                        updateError({
                            id: key,
                            error: 'Incorrect youtube link',
                        });
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

            const handleCleanForm = () => {
                reset();
            };

            const onSubmit = async () => {
                const hasErrors = await validateFields();
                console.log(hasErrors, errors);

                if (!hasErrors) {
                    handleSubmit(values, handleCleanForm);
                }
            };

            const onChange = (e: Evt<'input'>) => {
                const { id, value } = e.currentTarget;
                updateField({ id, value });
            };

            const handleEnterKeyDown = (
                e: React.KeyboardEvent<HTMLInputElement>
            ) => {
                if (e.key === 'Enter') {
                    onSubmit();
                }
            };

            return {
                values,
                errors,
                onSubmit,
                updateField,
                onChange,
                loading,
                handleEnterKeyDown,
            };
        },
    };
};
