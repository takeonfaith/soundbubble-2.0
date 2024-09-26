/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from '@components/flex';

import { useEffect } from 'react';
import { userModel } from '../../entities/user/model';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Form } from '../../shared/components/form';
import { Subtext } from '../../shared/components/subtext';
import { useForm } from '../../shared/hooks/useForm';
import { SignUpModal } from '../signUpModal';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { LoginButtons, LoginModalStyled, RightSideStyled } from './styles';
import { LeftSide } from './LeftSide';

type Props<T> = {
    actionAfterLogin?: T;
    title?: string;
};

const fields = [
    {
        id: 'email',
        type: 'email',
        label: 'Email',
        required: true,
        placeholder: 'Enter your email',
    },
    {
        id: 'password',
        type: 'password',
        label: 'Password',
        required: true,
        placeholder: 'Enter your password',
    },
] as const;

export const LoginModal = <T extends ((params?: any) => unknown) | undefined>({
    actionAfterLogin,
    title = 'Welcome back to Soundbubble',
}: Props<T>) => {
    const [currentUser, _, loading] = userModel.useUser();
    const { formProps, onSumbit } = useForm({
        fields,
        handleSubmit: (obj) => {
            userModel.events.login(obj);
        },
        submitErrorMessage: '',
    });

    const handleOpenSignUp = () => {
        modalModel.events.open({
            title: 'Sign Up',
            content: <SignUpModal />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    useEffect(() => {
        if (currentUser) {
            if (actionAfterLogin) {
                actionAfterLogin();
            } else {
                modalModel.events.close();
            }
        }
    }, [actionAfterLogin, currentUser]);

    return (
        <LoginModalStyled>
            <LeftSide />
            <RightSideStyled>
                <Flex d="column" gap={10}>
                    <div className="emoji">
                        {!formProps.sumbitError ? '🥳' : '😬'}
                    </div>
                    <h2>
                        {!formProps.sumbitError
                            ? title
                            : 'Ooops! Failed to log in'}
                    </h2>
                    {!formProps.sumbitError && (
                        <Subtext style={{ fontSize: '1rem' }}>
                            Please enter your details
                        </Subtext>
                    )}
                </Flex>

                <Flex
                    height={formProps.sumbitError ? '220px' : '188px'}
                    jc="center"
                    d="column"
                    width="100%"
                    gap={20}
                    style={{ marginBottom: '90px', position: 'relative' }}
                >
                    <Form {...formProps} />
                    <Button
                        $height="10px"
                        className="forgot-password"
                        $width="fit-content"
                        onClick={() =>
                            modalModel.events.open({
                                title: 'Forgot password',
                                content: <ForgotPasswordModal />,
                                sizeX: 's',
                                sizeY: 's',
                            })
                        }
                    >
                        Forgot password?
                    </Button>
                </Flex>
                <LoginButtons>
                    <DefaultButton
                        appearance="outline"
                        onClick={handleOpenSignUp}
                    >
                        Don't have an account
                    </DefaultButton>
                    <DefaultButton
                        loading={loading}
                        appearance="primary"
                        className="primary"
                        onClick={onSumbit}
                    >
                        Login
                    </DefaultButton>
                </LoginButtons>
            </RightSideStyled>
        </LoginModalStyled>
    );
};
