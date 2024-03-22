import { Button } from "@components/button";
import { DefaultButton } from "@components/button/DefaultButton";
import { Flex } from "@components/flex";
import { Input } from "@components/input";
import { PasswordInput } from "@components/input/PasswordInput";
import { useState } from "react";
import { userModel } from "../../entities/user/model";

type Props = {
  actionAfterLogin?: () => void;
};

export const LoginModal = ({ actionAfterLogin }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, loggining, error } = userModel.useUser()

  const handleLogin = () => {
    // if (actionAfterLogin) actionAfterLogin();
    userModel.events.login({ email, password })
  };

  console.log(error);


  const handleChangeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <Flex d="column" width="100%" jc="space-between" height="100%" gap={20}>
      <Flex d="column" jc="center" width="100%" height="100%" gap={20}>
        {error?.message}
        <Input
          value={email}
          onChange={handleChangeLogin}
          placeholder="Enter email"
          label="Email"
          type="email"
          onError={(e) => console.log(e)}
          required
        />
        <PasswordInput
          onChange={handleChangePassword}
          value={password}
          required
        />
      </Flex>
      <DefaultButton
        loading={loggining}
        onClick={handleLogin}
        appearance="primary"
      >
        Login
      </DefaultButton>
      <Button>Don't have an account</Button>
    </Flex>
  );
};
