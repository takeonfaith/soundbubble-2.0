import LogoImage from "shared/assets/Logo3.svg";
import { LogoStyled, LogoText } from "./styles";
import { Flex } from "@components/flex";

export const Logo = () => {
  return (
    <Flex gap={14}>
      <LogoStyled src={LogoImage} alt="Logo" /> <LogoText>Soundbubble</LogoText>
    </Flex>
  );
};
