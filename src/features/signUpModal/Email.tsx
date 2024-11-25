import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { EmailInput } from '../emailInput';
import { useForm } from './model';
import { Passwords } from './Passwords';
import { SignUpModalStyled } from './styles';

export const Email = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: 'Password',
            content: <Passwords />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    const { values, errors, updateField, onSubmit, loading } = useForm(
        handleNext,
        ['email']
    );

    return (
        <SignUpModalStyled>
            <Flex
                width="100%"
                height="100%"
                jc="center"
                d="column"
                gap={20}
                ai="flex-start"
            >
                <EmailInput
                    onChange={(value) => {
                        updateField({ id: 'email', value });
                    }}
                    value={values.email}
                    required
                    error={errors.email}
                />
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => modalModel.events.back()}
                >
                    Previous
                </DefaultButton>
                <DefaultButton
                    loading={loading}
                    appearance="primary"
                    onClick={onSubmit}
                >
                    Next
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
