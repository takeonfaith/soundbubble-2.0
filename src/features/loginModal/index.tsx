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
import { translate } from '../../i18n';

type Props<T> = {
    actionAfterLogin?: T;
    title?: string;
};

export const LoginModal = <T extends ((params?: any) => unknown) | undefined>({
    actionAfterLogin,
    title = translate('welcome_back'),
}: Props<T>) => {
    const [currentUser, _, loading] = userModel.useUser();
    const { values, errors, onSubmit, updateField, handleEnterKeyDown } =
        useForm((values) => {
            userModel.events.login(values);
        });

    const handleOpenSignUp = () => {
        modalModel.events.open({
            title: translate('sign_up'),
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
                        {translate('enter_details')}
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
                        focusOnLoad
                    />
                    <PasswordInput
                        required
                        error={errors.password}
                        value={values.password}
                        onChange={(e) => {
                            updateField({
                                id: 'password',
                                value: e.currentTarget.value,
                            });
                        }}
                        onKeyDown={handleEnterKeyDown}
                    />
                    <Button
                        $height="10px"
                        className="forgot-password"
                        $width="fit-content"
                        onClick={() =>
                            modalModel.events.open({
                                title: translate('forgot_password'),
                                content: <ForgotPasswordModal />,
                                sizeX: 's',
                                sizeY: 's',
                            })
                        }
                    >
                        {translate('forgot_password')}
                    </Button>
                </Flex>
                <LoginButtons>
                    <DefaultButton
                        appearance="outline"
                        onClick={handleOpenSignUp}
                    >
                        {translate('dont_have_an_account')}
                    </DefaultButton>
                    <DefaultButton
                        loading={loading}
                        appearance="primary"
                        className="primary"
                        onClick={onSubmit}
                    >
                        {translate('login')}
                    </DefaultButton>
                </LoginButtons>
            </RightSideStyled>
        </LoginModalStyled>
    );
};
