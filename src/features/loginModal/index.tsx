import { Button } from "@components/button";
import { Flex } from "@components/flex";
import { Input } from "@components/input";
import { LoginButton } from "./styles";

type Props = {
  actionAfterLogin?: () => void;
};

export const LoginModal = ({ actionAfterLogin }: Props) => {
  const handleLogin = () => {
    if (actionAfterLogin) actionAfterLogin();
  };

  return (
    <Flex d="column" width="100%" jc="space-between" height="100%" gap={20}>
      <Flex d="column" jc="center" width="100%" height="100%" gap={20}>
        <Input placeholder="Enter email" />
        <Input placeholder="Enter password" type="password" />
      </Flex>
      <LoginButton>Login</LoginButton>
      <Button>Don't have an account</Button>
    </Flex>
  );
};
