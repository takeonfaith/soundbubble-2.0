import React, { forwardRef } from "react";
import {
  InputError,
  InputFieldWrapper,
  InputStyled,
  InputWrapper,
  Label,
  LeftIcon,
  Required,
  RightIcon,
} from "./styles";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  error?: string;
  onRightIconClick?: () => void;
};

export const Input = forwardRef(({
  icon,
  rightIcon,
  label,
  required,
  error,
  type,
  onRightIconClick,
  ...props
}: Props, ref) => {
  return (
    <InputWrapper $disabled={props.disabled}>
      {label && (
        <Label>
          {label} <Required>{required ? "*" : ""}</Required>
        </Label>
      )}
      <InputFieldWrapper>
        <LeftIcon>{icon}</LeftIcon>
        <InputStyled
          $hasError={!!error}
          $hasIcon={!!icon}
          $hasRightIcon={!!rightIcon}
          type={type}
          required={required}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
          {...props}
        />
        {rightIcon && <RightIcon onClick={onRightIconClick}>{rightIcon}</RightIcon>}
      </InputFieldWrapper>
      {error && <InputError>{error}</InputError>}
    </InputWrapper>
  );
});

Input.displayName = 'Input';