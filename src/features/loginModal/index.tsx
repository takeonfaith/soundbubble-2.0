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
import { useForm } from '../../shared/hooks/useForm';
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

const Block = ({ icon }: { icon: React.ReactNode }) => {
    return <BlockStyled className="block">{icon}</BlockStyled>;
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

export const LoginModal = ({
    actionAfterLogin,
    title = 'Welcome back to Soundbubble',
}: Props) => {
    const [{ data, error }, _, loading] = userModel.useUser();
    const { formProps, onSumbit } = useForm({
        fields,
        handleSubmit: (obj) => {
            userModel.events.login(obj);
        },
        submitErrorMessage: error?.message,
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
                <Flex d="column" gap={10}>
                    <div className="emoji">
                        {!formProps.sumbitError ? '👋' : '😬'}
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
