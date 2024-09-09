import React, { forwardRef } from 'react';
import {
    InputError,
    InputFieldWrapper,
    InputStyled,
    InputWrapper,
    Label,
    LeftIcon,
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
                    {icon && <LeftIcon>{icon}</LeftIcon>}
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
            </InputWrapper>
        );
    }
);

Input.displayName = 'Input';
