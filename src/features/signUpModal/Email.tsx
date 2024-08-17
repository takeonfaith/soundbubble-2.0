import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Form } from '../../shared/components/form';
import { Passwords } from './Passwords';
import { SignUpModalStyled } from './styles';

const fields = [
    {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Enter your email',
        required: true,
    },
] as const;

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
                <Form
                    fields={fields}
                    submitErrorMessage={undefined}
                    submitText={''}
                    onSumbit={() => null}
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
