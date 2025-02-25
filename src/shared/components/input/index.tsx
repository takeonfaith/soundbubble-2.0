import React, { forwardRef } from 'react';
import {
    InputError,
    InputFieldWrapper,
    InputStyled,
    InputWrapper,
    Label,
    LeftIcon,
    MaxLenWrapper,
    Required,
    RightIcon,
} from './styles';
import { InputProps } from './types';

export const Input = forwardRef(
    (
        {
            icon,
            rightIcon,
            label,
            required,
            error,
            type,
            onRightIconClick,
            ...props
        }: InputProps,
        ref
    ) => {
        const val = props.value?.toString() ?? '';

        return (
            <InputWrapper $disabled={props.disabled}>
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
                <InputFieldWrapper>
                    {icon && <LeftIcon className="left-icon">{icon}</LeftIcon>}
                    <InputStyled
                        $hasError={!!error}
                        $hasIcon={!!icon}
                        $hasRightIcon={!!rightIcon}
                        type={type}
                        required={required}
                        ref={ref as React.ForwardedRef<HTMLInputElement>}
                        {...props}
                    />
                    {rightIcon && (
                        <RightIcon onClick={onRightIconClick}>
                            {rightIcon}
                        </RightIcon>
                    )}
                </InputFieldWrapper>
                {props.maxLength &&
                    val.length + 10 >= (props.maxLength ?? 0) && (
                        <MaxLenWrapper>
                            {props.value?.toString().length} / {props.maxLength}
                        </MaxLenWrapper>
                    )}
            </InputWrapper>
        );
    }
);

Input.displayName = 'Input';
