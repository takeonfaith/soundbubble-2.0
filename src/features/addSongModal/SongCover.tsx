import { useUnit } from 'effector-react';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { PhotoInput } from '../../shared/components/photoInput';
import { SignUpModalStyled } from '../signUpModal/styles';
import { $addSongForm, updateField } from './model';
import { GeneralInfo } from './GeneralInfo';
import { modalModel } from '../../layout/modal/model';

export const SongCover = () => {
    const form = useUnit($addSongForm);

    const handleNext = () => {
        modalModel.events.open({
            title: 'General Info',
            content: <GeneralInfo />,
            sizeX: 's',
            sizeY: 'm',
        });
    };

    console.log(form);

    return (
        <SignUpModalStyled>
            <Flex width="100%" d="column" gap={10} height="100%" jc="center">
                <PhotoInput
                    file={form.coverFile}
                    colors={form.imageColors}
                    onUpload={(file) => {
                        updateField({ id: 'coverFile', value: file });
                    }}
                    onColors={(colors) => {
                        updateField({ id: 'imageColors', value: colors });
                    }}
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton appearance="primary" onClick={handleNext}>
                    Next
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
