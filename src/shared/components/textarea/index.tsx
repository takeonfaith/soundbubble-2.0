import { forwardRef, RefObject, useState } from 'react';
import { InputError, Label, MaxLenWrapper, Required } from '../input/styles';
import { TextareaStyled, TextareaWrapper } from './styles';

type Props = Omit<
    React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >,
    'onChange'
> & {
    label?: string;
    error?: string | null;
    onChange?: (value: string) => void;
};

export const Textarea = forwardRef(
    ({ label, onChange, error, required, ...props }: Props, ref) => {
        const [height, setHeight] = useState('auto');

        const handleResize = (
            event: React.KeyboardEvent<HTMLTextAreaElement>
        ) => {
            if (event.currentTarget.value.length === 0) {
                setHeight('auto');
            } else {
                setHeight(`${event.currentTarget.scrollHeight}px`);
            }
        };

        const handleChange = (e: Evt<'textarea'>) => {
            onChange?.(e.target.value);
        };

        return (
            <TextareaWrapper>
                {label && (
                    <Label>
                        {error && <InputError>{error}</InputError>}
                        {!error && (
                            <>
                                {label}{' '}
                                <Required>{required ? '*' : ''}</Required>
                            </>
                        )}
                    </Label>
                )}

                <TextareaStyled
                    ref={ref as RefObject<HTMLTextAreaElement>}
                    style={{ height }}
                    onKeyDown={handleResize}
                    onKeyUp={handleResize}
                    onChange={handleChange}
                    {...props}
                />
                {props.maxLength && (
                    <MaxLenWrapper style={{ bottom: 'auto', top: '-16px' }}>
                        {props.value?.toString().length} / {props.maxLength}
                    </MaxLenWrapper>
                )}
            </TextareaWrapper>
        );
    }
);
