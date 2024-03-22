import LogoImage from "shared/assets/Logo3.svg";
import { LogoStyled, LogoText } from "./styles";
import { Flex } from "@components/flex";

type Props = {
  short?: boolean
}

export const Logo = ({ short = false }: Props) => {
  return (
    <Flex gap={14}>
      <LogoStyled src={LogoImage} alt="Logo" /> {!short && <LogoText>Soundbubble</LogoText>}
    </Flex>
  );
};
