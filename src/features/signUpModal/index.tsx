import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Form } from '../../shared/components/form';
import { PhotoInput } from '../../shared/components/photoInput';
import { Email } from './Email';

const fields = [
    {
        label: 'Name',
        id: 'name',
        type: 'text',
        placeholder: 'Enter your name',
        required: true,
    },
] as const;

export const SignUpModal = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: 'Email',
            content: <Email />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    return (
        <Flex d="column" gap={10} padding="0 25px" width="100%">
            <PhotoInput
                colors={[]}
                onUpload={function (photo: File | null): void {
                    throw new Error('Function not implemented.');
                }}
                onColors={function (colors: string[]): void {
                    throw new Error('Function not implemented.');
                }}
            />
            <Flex d="column" gap={50} width="100%">
                <Form
                    fields={fields}
                    submitErrorMessage={undefined}

                    submitText={'Create new account'}
                    onSumbit={() => null}
                />
                <Flex width="100%" gap={10}>
                    <DefaultButton appearance="outline" disabled>
                        Previous
                    </DefaultButton>
                    <DefaultButton appearance="primary" onClick={handleNext}>
                        Next
                    </DefaultButton>
                </Flex>
            </Flex>
        </Flex>
    );
};
