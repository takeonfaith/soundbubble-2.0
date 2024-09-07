import { useUnit } from 'effector-react';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Textarea } from '../../shared/components/textarea';
import { SignUpModalStyled } from '../signUpModal/styles';
import { $addSongForm, updateField } from './model';
import { uploadSong, useUploadingSong } from '../../entities/song/model/upload';

export const Lyrics = () => {
    const form = useUnit($addSongForm);
    const uploadingSong = useUploadingSong();
    console.log(form);

    return (
        <SignUpModalStyled>
            <Flex height="100%" jc="center" width="100%">
                <Textarea
                    label="Lyrics"
                    value={form.lyrics}
                    placeholder="Enter lyrics here..."
                    onChange={(value) => updateField({ id: 'lyrics', value })}
                />
            </Flex>
            <Flex width="100%">
                <DefaultButton
                    appearance="primary"
                    loading={uploadingSong}
                    onClick={() => uploadSong(form)}
                >
                    Add song to soundbubble
                </DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
