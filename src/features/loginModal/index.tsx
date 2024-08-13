/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@components/button';
import { Flex } from '@components/flex';

import { userModel } from '../../entities/user/model';
import { Form } from '../../shared/components/form';
import { useEffect } from 'react';
import { modalModel } from '../../layout/modal/model';

type Props = {
    actionAfterLogin?: (params?: unknown[]) => unknown;
};

const fields = [
    {
        id: 'Email',
        type: 'email',
        required: true,
    },
    {
        id: 'Password',
        type: 'password',
        required: true,
    },
] as const;

export const LoginModal = ({ actionAfterLogin }: Props) => {
    const [{ data, error }, _, loading] = userModel.useUser();

    useEffect(() => {
        if (data) {
            if (actionAfterLogin) {
                actionAfterLogin();
            } else {
                modalModel.events.close();
            }
        }
    }, [actionAfterLogin, data]);

    return (
        <Flex
            d="column"
            width="100%"
            jc="space-between"
            height="100%"
            gap={20}
            padding="0 25px"
        >
            <Flex d="column" jc="center" width="100%" height="350px" gap={20}>
                <Form
                    loading={loading}
                    submitErrorMessage={error?.message}
                    fields={fields}
                    submitText='Login'
                    onSumbit={(obj) => {
                        console.log(obj);

                        userModel.events.login({
                            email: obj.Email,
                            password: obj.Password,
                        });
                    }}
                />
            </Flex>
            <Button>Don't have an account</Button>
        </Flex>
    );
};
