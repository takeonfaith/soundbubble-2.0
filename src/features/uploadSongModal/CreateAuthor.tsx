import { useUnit } from 'effector-react';
import { userModel } from '../../entities/user/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { PhotoInput } from '../../shared/components/photoInput';
import { SignUpModalStyled } from '../signUpModal/styles';
import { useForm } from './model/create-author';
import { useForm as useSongForm } from './model';
import { createAuthorFx } from '../../entities/user/model/create-author';
import { modalModel } from '../../layout/modal/model';
import { createDefaultSuggestion } from '../../entities/search/lib/createDefaultSuggestion';

export const CreateAuthor = () => {
    const [loading] = useUnit([createAuthorFx.pending]);
    const { updateField: updateSongField } = useSongForm(() => null);
    const { values, errors, updateField, onSubmit, onChange } = useForm(
        (form) => {
            userModel.events.createAuthor({
                form,
                onSuccess: (user) => {
                    modalModel.events.back();
                    updateSongField({
                        id: 'authors',
                        value: [createDefaultSuggestion(user)],
                    });
                },
            });
        }
    );

    return (
        <SignUpModalStyled>
            <Flex gap={30} d="column" height="100%" jc="center" width="100%">
                <PhotoInput
                    file={values.photoFile}
                    colors={values.imageColors}
                    onUpload={(file) => {
                        updateField({ id: 'photoFile', value: file });
                    }}
                    onColors={(colors) => {
                        updateField({ id: 'imageColors', value: colors });
                    }}
                    error={errors.photoFile}
                />
                <Input
                    label="Name"
                    onChange={onChange}
                    id="displayName"
                    placeholder="Enter author name..."
                    required
                    value={values.displayName}
                    error={errors.displayName}
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton
                    loading={loading}
                    appearance="primary"
                    onClick={onSubmit}
                >
                    Create author
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
