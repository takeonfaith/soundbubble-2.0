import { IconMail } from '@tabler/icons-react';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { Passwords } from './Passwords';
import { SignUpModalStyled } from './styles';
import { EmailInput } from '../emailInput';

// const fields = [
//     {
//         id: 'email',
//         label: 'Email Address',
//         type: 'email',
//         placeholder: 'Enter your email',
//         required: true,
//     },
// ] as const;

export const Email = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: 'Password',
            content: <Passwords />,
            sizeX: 's',
            sizeY: 's',
        });
    };

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
                    onChange={function (value: string): void {
                        throw new Error('Function not implemented.');
                    }}
                    value={''}
                    required={false}
                    error={undefined}
                />
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => modalModel.events.back()}
                >
                    Previous
                </DefaultButton>
                <DefaultButton appearance="primary" onClick={handleNext}>
                    Next
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
