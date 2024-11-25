/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from '@components/flex';

import { useEffect } from 'react';
import { userModel } from '../../entities/user/model';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Subtext } from '../../shared/components/subtext';
import { EmailInput } from '../emailInput';
import { PasswordInput } from '../passwordInput/PasswordInput';
import { SignUpModal } from '../signUpModal';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { LeftSide } from './LeftSide';
import { useForm } from './model';
import { LoginButtons, LoginModalStyled, RightSideStyled } from './styles';

type Props<T> = {
    actionAfterLogin?: T;
    title?: string;
};

export const LoginModal = <T extends ((params?: any) => unknown) | undefined>({
    actionAfterLogin,
    title = 'Welcome back to Soundbubble',
}: Props<T>) => {
    const [currentUser, _, loading] = userModel.useUser();
    const { values, errors, onSubmit, updateField } = useForm((values) => {
        userModel.events.login(values);
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
                    <div className="emoji">🥳</div>
                    <h2>{title}</h2>

                    <Subtext style={{ fontSize: '1rem' }}>
                        Please enter your details
                    </Subtext>
                </Flex>

                <Flex
                    height={'188px'}
                    jc="center"
                    d="column"
                    width="100%"
                    gap={20}
                    style={{ marginBottom: '90px', position: 'relative' }}
                >
                    <EmailInput
                        onChange={(value) => {
                            updateField({ id: 'email', value });
                        }}
                        value={values.email}
                        required
                        error={errors.email}
                    />
                    <PasswordInput
                        placeholder="Enter your password"
                        required
                        error={errors.password}
                        value={values.password}
                        onChange={(e) => {
                            updateField({
                                id: 'password',
                                value: e.currentTarget.value,
                            });
                        }}
                    />
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
                        onClick={onSubmit}
                    >
                        Login
                    </DefaultButton>
                </LoginButtons>
            </RightSideStyled>
        </LoginModalStyled>
    );
};
