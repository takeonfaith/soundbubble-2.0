import styled from 'styled-components';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { PasswordInput } from '../passwordInput/PasswordInput';
import { ChoosingAuthors } from './ChoosingAuthors';
import { useForm } from './model';
import { PasswordStrength } from './PasswordStrength';
import { SignUpModalStyled } from './styles';

export const PasswordRules = styled.div`
    background: ${({ theme }) => theme.colors.pageBackground2};
`;

export const Passwords = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: 'Choose your favorite authors',
            content: <ChoosingAuthors />,
            sizeX: 'm',
            sizeY: 'l',
        });
    };

    const { values, onChange, errors, onSubmit } = useForm(handleNext, [
        'password',
    ]);

    return (
        <SignUpModalStyled>
            <Flex
                d="column"
                gap={20}
                width="100%"
                height="100%"
                ai="center"
                jc="center"
            >
                <PasswordInput
                    id="password"
                    placeholder="Enter your password..."
                    value={values.password}
                    onChange={onChange}
                    required
                    error={errors.password}
                />
                <PasswordStrength value={values.password} />
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => modalModel.events.back()}
                >
                    Previous
                </DefaultButton>
                <DefaultButton appearance="primary" onClick={onSubmit}>
                    Next
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
