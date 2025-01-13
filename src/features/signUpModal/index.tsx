import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { Logo } from '../../shared/components/logo';
import { Subtext } from '../../shared/components/subtext';
import backgroundImg from './img/background.png';
import { useForm } from './model';
import { SignUpWrapper } from './styles';
import { UserPhoto } from './UserPhoto';

export const SignUpModal = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: 'Photo',
            content: <UserPhoto />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    const { values, errors, onSubmit, onChange, handleEnterKeyDown } = useForm(
        handleNext,
        ['name']
    );

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
                <Input
                    placeholder="Enter your name..."
                    label="Name"
                    id="name"
                    value={values.name}
                    required
                    onChange={onChange}
                    error={errors.name}
                    maxLength={30}
                    onKeyDown={handleEnterKeyDown}
                />
            </Flex>

            <Flex width="100%" gap={10}>
                <DefaultButton appearance="primary" onClick={onSubmit}>
                    Next
                </DefaultButton>
            </Flex>
        </SignUpWrapper>
    );
};
