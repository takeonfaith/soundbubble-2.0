import styled from 'styled-components';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { PasswordStrength } from './PasswordStrength';
import { SignUpModalStyled } from './styles';

// const fields = [
//     {
//         label: 'Password',
//         id: 'password',
//         type: 'password',
//         placeholder: 'Enter your password',
//         required: true,
//     },
//     {
//         label: 'Confirm Password',
//         id: 'confirmPassword',
//         type: 'password',
//         placeholder: 'Confirm your password',
//         required: true,
//     },
// ] as const;

export const PasswordRules = styled.div`
    background: ${({ theme }) => theme.colors.pageBackground2};
`;

export const Passwords = () => {
    const handleSignUp = () => {};

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
                <PasswordStrength />
                {/* <Form fields={fields} valueObj={undefined} handleChange={function (key: string): (val: string | React.ChangeEvent<HTMLInputElement>) => void {
                    throw new Error('Function not implemented.');
                } } /> */}
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => modalModel.events.back()}
                >
                    Previous
                </DefaultButton>
                <DefaultButton appearance="primary" onClick={handleSignUp}>
                    Sign Up
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
