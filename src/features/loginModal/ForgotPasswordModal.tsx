import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Form } from '../../shared/components/form';
import { SubmitObj } from '../../shared/components/form/types';
import { Message } from '../../shared/components/mesage';
import { SignUpModalStyled } from '../signUpModal/styles';

export const ForgotPasswordModal = () => {
    return (
        <SignUpModalStyled>
            <Flex
                height="calc(100% - 100px)"
                width="100%"
                d="column"
                gap={20}
                jc="center"
            >
                <Message type='info'>
                    We will send you a new password to the email bellow
                </Message>
                <Form
                    fields={[
                        {
                            id: 'email',
                            label: 'Email Address',
                            type: 'email',
                            placeholder: 'Enter your email address',
                            required: true,
                        },
                    ]}
                    submitErrorMessage={undefined}
                    submitText={''}
                    onSumbit={function (
                        value: SubmitObj<{
                            id: string;
                            label: string;
                            type: 'email';
                            placeholder: string;
                            required: true;
                        }>
                    ): void {
                        throw new Error('Function not implemented.');
                    }}
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton appearance="primary">Send a code</DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
