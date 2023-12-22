import { IconX } from "@tabler/icons-react";
import { CloseButtonStyled } from "./styles";

type Props = {
  onClick: () => void;
};

export const CloseButton = ({ onClick }: Props) => {
  return (
    <CloseButtonStyled onClick={onClick}>
      <IconX />
    </CloseButtonStyled>
  );
};
