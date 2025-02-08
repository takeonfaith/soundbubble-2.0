import { userModel } from '../../entities/user/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Message } from '../../shared/components/mesage';
import { EmailInput } from '../emailInput';
import { SignUpModalStyled } from '../signUpModal/styles';
import { useForm } from './model/forgot-password';

export const ForgotPasswordModal = () => {
    const { values, errors, updateField, onSubmit, loading } = useForm(
        (values) => {
            userModel.events.resetPassword(values.email);
        },
        ['email']
    );

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
                    We will send you a reset password email
                </Message>
                <EmailInput
                    onChange={(value) => {
                        updateField({
                            id: 'email',
                            value,
                        });
                    }}
                    value={values.email}
                    required={true}
                    error={errors.email}
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton
                    loading={loading}
                    appearance="primary"
                    onClick={onSubmit}
                >
                    Send email
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
