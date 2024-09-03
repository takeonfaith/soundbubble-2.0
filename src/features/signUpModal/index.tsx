import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Form } from '../../shared/components/form';
import { Logo } from '../../shared/components/logo';
import { Subtext } from '../../shared/components/subtext';
import { useForm } from '../../shared/hooks/useForm';
import backgroundImg from './img/background.png';
import { SignUpWrapper } from './styles';
import { UserPhoto } from './UserPhoto';

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
            title: 'Photo',
            content: <UserPhoto />,
            sizeX: 's',
            sizeY: 's',
        });
    };
    const { formProps, onSumbit } = useForm({
        fields,
        handleSubmit: () => {
            handleNext();
        },
    });

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

            <Flex width="100%" gap={10}>
                <DefaultButton appearance="primary" onClick={onSumbit}>
                    Next
                </DefaultButton>
            </Flex>
        </SignUpWrapper>
    );
};
