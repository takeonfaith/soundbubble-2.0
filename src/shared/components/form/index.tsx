import { ForwardedRef, forwardRef } from 'react';
import { AuthorsInput } from '../../../features/authorsInput';
import { EmailInput } from '../../../features/emailInput';
import { PasswordInput } from '../../../features/passwordInput/PasswordInput';
import { DateInput } from '../dateInput';
import { Input } from '../input';
import { Message } from '../mesage';
import { Textarea } from '../textarea';
import { FormProps, TField } from './types';
import { TExtendedSuggestion } from '../../../features/searchWithHints/types';

const COMPONENTS = {
    email: EmailInput,
    password: PasswordInput,
    text: Input,
    textarea: Textarea,
    date: DateInput,
    authors: AuthorsInput,
};

export const Form = forwardRef(
    <T extends TField>(
        props: FormProps<T>,
        fieldRef: ForwardedRef<unknown>
    ) => {
        const { fields, sumbitError, valueObj, handleChange } = props;

        return (
            <>
                {sumbitError && <Message type="error">{sumbitError}</Message>}
                {fields.map((field) => {
                    const Field = COMPONENTS[field.type];

                    return (
                        <Field
                            ref={fieldRef}
                            required={field.required}
                            value={valueObj[field.id as T['id']].value}
                            onChange={handleChange(field.id)}
                            error={valueObj[field.id as T['id']].error}
                            label={field.label ?? undefined}
                            placeholder={field.placeholder}
                            key={field.id}
                            addedAuthors={[]}
                            loadingItems={false}
                            onSumbit={function (
                                addedAuthors: TExtendedSuggestion[]
                            ): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    );
                })}
            </>
        );
    }
);

Form.displayName = 'Form';
