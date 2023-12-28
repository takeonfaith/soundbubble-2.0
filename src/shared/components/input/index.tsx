import React from "react";
import { InputStyled, InputWrapper, LeftIcon, RightIcon } from "./styles";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Input = ({ icon, rightIcon, ...props }: Props) => {
  return (
    <InputWrapper>
      <LeftIcon>{icon}</LeftIcon>
      <InputStyled
        $hasIcon={!!icon}
        $hasRightIcon={!!rightIcon}
        {...props}
      ></InputStyled>
      <RightIcon>{rightIcon}</RightIcon>
    </InputWrapper>
  );
};
