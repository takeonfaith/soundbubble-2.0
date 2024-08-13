import { EmailInput } from '../../../features/emailInput';
import { PasswordInput } from '../../../features/passwordInput/PasswordInput';
import { DefaultButton } from '../button/DefaultButton';
import { Input } from '../input';
import { Message } from '../mesage';
import { Field, FormProps } from './types';
import { useForm } from './useForm';

const COMPONENTS = {
    email: EmailInput,
    password: PasswordInput,
    text: Input,
};

export const Form = <T extends Field>(props: FormProps<T>) => {
    const { fields, submitErrorMessage, loading, submitText, focusOnField } =
        props;
    const {
        fieldObjects,
        sumbitError,
        allRequiredFieldsAreFilled,
        fieldRef,
        handleSumbit,
        handleChange,
    } = useForm(props);

    return (
        <>
            {sumbitError && (
                <Message type="error">
                    {submitErrorMessage || sumbitError}
                </Message>
            )}
            {fields.map((field) => {
                const Field = COMPONENTS[field.type];
                return (
                    <Field
                        ref={field.id === focusOnField ? fieldRef : undefined}
                        required={field.required}
                        value={fieldObjects[field.id as T['id']].value}
                        onChange={handleChange(field.id)}
                        error={fieldObjects[field.id as T['id']].error}
                        label={field.label ?? undefined}
                        placeholder={field.placeholder}
                        key={field.id}
                    />
                );
            })}
            <DefaultButton
                onClick={handleSumbit}
                appearance="primary"
                loading={loading}
                disabled={!allRequiredFieldsAreFilled}
            >
                {submitText}
            </DefaultButton>
        </>
    );
};
