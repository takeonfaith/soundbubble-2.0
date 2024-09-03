import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Message } from '../../shared/components/mesage';
import { PhotoInput } from '../../shared/components/photoInput';
import { Email } from './Email';
import { SignUpModalStyled } from './styles';

export const UserPhoto = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: 'Email',
            content: <Email />,
            sizeX: 's',
            sizeY: 's',
        });
    };

    return (
        <SignUpModalStyled>
            <Flex d="column" width="100%" height="100%" gap={20}>
                <PhotoInput
                    colors={[]}
                    onUpload={function (photo: File | null): void {
                        throw new Error('Function not implemented.');
                    }}
                    onColors={function (colors: string[]): void {
                        throw new Error('Function not implemented.');
                    }}
                />
                <Message type="tip">
                    You may add photo later in your profile
                </Message>
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
