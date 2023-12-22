import { IconSearch } from "@tabler/icons-react";
import { InputStyled, InputWrapper } from "./styles";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  return (
    <InputWrapper>
      <IconSearch />
      <InputStyled {...props}></InputStyled>
    </InputWrapper>
  );
};
