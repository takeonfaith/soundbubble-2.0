import { translate } from '../../i18n';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { PhotoInput } from '../../shared/components/photoInput';
import { SignUpModalStyled } from '../signUpModal/styles';
import { GeneralInfo } from './GeneralInfo';
import { useForm } from './model';

export const SongCover = () => {
    const handleNext = () => {
        modalModel.events.open({
            title: 'General Info',
            content: <GeneralInfo />,
            sizeX: 's',
            sizeY: 'm',
        });
    };

    const { values, updateField, onSubmit, errors } = useForm(handleNext, [
        'coverFile',
    ]);

    return (
        <SignUpModalStyled>
            <Flex width="100%" d="column" gap={10} height="100%" jc="center">
                <PhotoInput
                    file={values.coverFile}
                    error={errors.coverFile}
                    colors={values.imageColors}
                    onUpload={(file) => {
                        updateField({ id: 'coverFile', value: file });
                    }}
                    onColors={(colors) => {
                        updateField({ id: 'imageColors', value: colors });
                    }}
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton appearance="primary" onClick={onSubmit}>
                    {translate('next')}
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
