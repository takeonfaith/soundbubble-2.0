/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex } from '@components/flex';

import {
    IconBrandSafari,
    IconMessageCircle,
    IconMicrophone2,
    IconMusic,
    IconVinyl,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { userModel } from '../../entities/user/model';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Form } from '../../shared/components/form';
import { Logo } from '../../shared/components/logo';
import { Subtext } from '../../shared/components/subtext';
import { SignUpModal } from '../signUpModal';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import {
    Blocks,
    BlockStyled,
    LoginButtons,
    LoginModalStyled,
    PARTICLES_QUANTITY,
    PromoStyled,
    RightSideStyled,
} from './styles';

type Props = {
    actionAfterLogin?: (params?: unknown[]) => unknown;
    title?: string;
};

const fields = [
    {
        id: 'email',
        type: 'email',
        required: true,
    },
    {
        id: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        required: true,
    },
] as const;

const Block = ({ icon }: { icon: React.ReactNode }) => {
    return <BlockStyled className="block">{icon}</BlockStyled>;
};

export const LoginModal = ({
    actionAfterLogin,
    title = 'Welcome back to Soundbubble',
}: Props) => {
    const [{ data, error }, _, loading] = userModel.useUser();

    const handleOpenSignUp = () => {
        modalModel.events.open({
            title: 'Sign Up',
            content: <SignUpModal />,
            sizeX: 's',
            sizeY: 's',
        });
    };

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
        <LoginModalStyled>
            <PromoStyled>
                <Logo short />
                <Blocks>
                    <Block icon={<IconMusic />} />
                    <Block icon={<IconVinyl />} />
                    <Block icon={<IconMicrophone2 />} />
                    <Block icon={<IconBrandSafari />} />
                    <Block icon={<IconMessageCircle />} />

                    <div className="particles">
                        {Array.from(Array(PARTICLES_QUANTITY)).map(
                            (_, index) => {
                                return <div className="particle" key={index} />;
                            }
                        )}
                    </div>
                </Blocks>
            </PromoStyled>
            <RightSideStyled>
                {!error?.message && (
                    <Flex d="column" gap={10}>
                        <div className="emoji">👋</div>
                        <h2>{title}</h2>
                        <Subtext style={{ fontSize: '1rem' }}>
                            Please enter your details
                        </Subtext>
                    </Flex>
                )}
                <Flex
                    height={error?.message ? '288px' : '188px'}
                    jc="center"
                    d="column"
                    width="100%"
                    gap={20}
                    style={{ marginBottom: '90px', position: 'relative' }}
                >
                    <Form
                        loading={loading}
                        submitErrorMessage={error?.message}
                        fields={fields}
                        focusOnField="email"
                        submitText="Login"
                        onSumbit={(obj) => {
                            userModel.events.login(obj);
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
                    <DefaultButton appearance="primary" className='primary'>Login</DefaultButton>
                </LoginButtons>
            </RightSideStyled>
        </LoginModalStyled>
    );
};
