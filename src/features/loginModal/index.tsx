import { Button } from "@components/button";
import { DefaultButton } from "@components/button/DefaultButton";
import { Flex } from "@components/flex";
import { Input } from "@components/input";
import { PasswordInput } from "@components/input/PasswordInput";
import { IconAt } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { userModel } from "../../entities/user/model";
import { modalModel } from "../../layout/modal/model";

type Props = {
  actionAfterLogin?: () => void;
};

export const LoginModal = ({ actionAfterLogin }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [{ data, error }, loading] = userModel.useUser()

  const validateFields = () => {
    const errors: Record<string, string> = {};
    if (!email) {
      errors.email = "Email is required"
    }

    if (!password) {
      errors.password = "Password is required"
    }
    setErrors(errors);
    console.log(errors);

    return Object.keys(errors).length !== 0;
  }

  const handleLogin = () => {
    const hasErrors = validateFields()
    console.log(hasErrors, errors);

    if (actionAfterLogin) actionAfterLogin();
    if (!hasErrors) {
      userModel.events.login({ email, password })
    }
  };

  useEffect(() => {
    if (data) {
      modalModel.events.close()
    }
  }, [data])


  console.log(error);


  const handleChangeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
    setErrors(prev => {
      const errors = { ...prev }
      delete errors.email
      return errors
    })
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPassword(e.currentTarget.value);
    setErrors(prev => {
      const errors = { ...prev }
      delete errors.password
      return errors
    })
  };

  return (
    <Flex d="column" width="100%" jc="space-between" height="100%" gap={20} padding="0 25px">
      <Flex d="column" jc="center" width="100%" height="300px" gap={20} onKeyDown={e => e.key === 'Enter' && handleLogin()}>
        {error?.message}
        <Input
          value={email}
          onChange={handleChangeLogin}
          placeholder="Enter email"
          label="Email"
          type="email"
          onError={(e) => console.log(e)}
          required
          icon={<IconAt />}
          error={errors?.email}
        />
        <PasswordInput
          onChange={handleChangePassword}
          value={password}
          required
          error={errors?.password}
        />
      </Flex>
      <DefaultButton
        loading={loading}
        onClick={handleLogin}
        appearance="primary"
      >
        Login
      </DefaultButton>
      <Button>Don't have an account</Button>
    </Flex>
  );
};
