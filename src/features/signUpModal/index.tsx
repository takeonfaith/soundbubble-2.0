import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Form } from '../../shared/components/form';
import { Logo } from '../../shared/components/logo';
import { Subtext } from '../../shared/components/subtext';
import { useForm } from '../../shared/hooks/useForm';
import { Email } from './Email';
import { SignUpWrapper } from './styles';
import backgroundImg from './img/background.png';

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
    const { formProps } = useForm({ fields, handleSubmit: () => null });
    const handleNext = () => {
        modalModel.events.open({
            title: 'Email',
            content: <Email />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    return (
        <SignUpWrapper>
            <Flex
                d="column"
                padding="20px 0"
                ai="flex-start"
                width="100%"
                gap={20}
            >
                <img src={backgroundImg} className="background" alt="" />
                <Logo short size="60px" />
                <h2>Hey there! 👋</h2>
                <Subtext
                    style={{
                        fontSize: '1.1rem',
                        width: '100%',
                        maxWidth: '300px',
                    }}
                >
                    Please enter your name in the field below and hit next
                </Subtext>
                <Form {...formProps} />
            </Flex>
            {/* <PhotoInput
                colors={[]}
                onUpload={function (photo: File | null): void {
                    throw new Error('Function not implemented.');
                }}
                onColors={function (colors: string[]): void {
                    throw new Error('Function not implemented.');
                }}
            /> */}

            <Flex width="100%" gap={10}>
                <DefaultButton appearance="primary" onClick={handleNext}>
                    Next
                </DefaultButton>
            </Flex>
        </SignUpWrapper>
    );
};
