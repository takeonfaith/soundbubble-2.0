import { translate } from '../../i18n';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Message } from '../../shared/components/mesage';
import { PhotoInput } from '../../shared/components/photoInput';
import { Email } from './Email';
import { useForm } from './model';
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
    const { values, updateField } = useForm(handleNext, ['photo']);

    return (
        <SignUpModalStyled>
            <Flex d="column" width="100%" height="100%" gap={20}>
                <PhotoInput
                    file={values.photo}
                    colors={values.imageColors}
                    onUpload={(file) =>
                        updateField({ id: 'photo', value: file })
                    }
                    onColors={(imageColors) => {
                        updateField({ id: 'imageColors', value: imageColors });
                    }}
                />
                {!values.photo && (
                    <Message type="tip">
                        {translate('you_may_add_photo_later')}
                    </Message>
                )}
            </Flex>
            <Flex width="100%" gap={10}>
                <DefaultButton
                    appearance="outline"
                    onClick={() => modalModel.events.back()}
                >
                    {translate('previous')}
                </DefaultButton>
                <DefaultButton appearance="primary" onClick={handleNext}>
                    {translate('next')}
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
