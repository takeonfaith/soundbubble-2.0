import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Form } from '../../shared/components/form';
import { Message } from '../../shared/components/mesage';
import { useForm } from '../../shared/hooks/useForm';
import { SignUpModalStyled } from '../signUpModal/styles';

const fields = [
    {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Enter your email address',
        required: true,
    },
] as const;

export const ForgotPasswordModal = () => {
    const { formProps, onSumbit } = useForm({ fields });

    return (
        <SignUpModalStyled>
            <Flex
                height="calc(100% - 100px)"
                width="100%"
                d="column"
                gap={20}
                jc="center"
            >
                <Message type="info">
                    We will send you a new password to the email bellow
                </Message>
                <Form {...formProps} />
            </Flex>
            <Flex width="100%">
                <DefaultButton
                    disabled={!formProps.valueObj.email.value.length}
                    appearance="primary"
                    onClick={onSumbit}
                >
                    Send a code
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
