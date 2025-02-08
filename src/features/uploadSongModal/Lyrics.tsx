import { useNavigate } from 'react-router';
import {
    uploadSong,
    useUploadingSong,
} from '../../entities/song/new-model/upload';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Textarea } from '../../shared/components/textarea';
import { SignUpModalStyled } from '../signUpModal/styles';
import { useForm } from './model';

export const Lyrics = () => {
    const navigate = useNavigate();
    const { values, updateField, onSubmit } = useForm(
        (form, cleanForm) => {
            console.log({ form });

            uploadSong({
                form,
                onSuccess: () => {
                    modalModel.events.close();
                    navigate(`/author/${form.authors[0].uid}`);
                    cleanForm();
                },
            });
        }
    );

    const uploadingSong = useUploadingSong();

    return (
        <SignUpModalStyled>
            <Flex height="100%" jc="center" width="100%">
                <Textarea
                    label="Lyrics"
                    value={values.lyrics}
                    placeholder="Enter lyrics here..."
                    onChange={(value) => updateField({ id: 'lyrics', value })}
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton
                    appearance="primary"
                    loading={uploadingSong}
                    onClick={onSubmit}
                >
                    Add song to soundbubble
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
