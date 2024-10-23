import { useUnit } from 'effector-react';
import { useState } from 'react';
import { getSongDuration } from '../../entities/song/lib/getSongDuration';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { SongInput } from '../../shared/components/songInput';
import { SignUpModalStyled } from '../signUpModal/styles';
import { $addSongForm, updateField } from './model';
import { SongNameAndAuthor } from './SongNameAndAuthor';
import { toastModel } from '../../layout/toast/model';

export const AddSongModal = () => {
    const { songFile } = useUnit($addSongForm);
    const [error, setError] = useState<string | null>(null);
    const handleNext = (song: File | null) => {
        if (song) {
            modalModel.events.open({
                title: 'Name and author',
                content: <SongNameAndAuthor />,
                sizeX: 's',
                sizeY: 's',
            });
        } else {
            toastModel.events.show({
                type: 'error',
                message: 'Song file is required',
            });
        }
    };

    const handleChange = (file: File | null) => {
        setError(null);
        if (file === null) {
            updateField({ id: 'songFile', value: null });
            updateField({ id: 'name', value: '' });
            updateField({ id: 'author', value: '' });
            updateField({ id: 'duration', value: 0 });
            return;
        }

        const [author, name] = file.name.includes('-')
            ? file.name.replace('.mp3', '').split('-')
            : ['', file.name.replace('.mp3', '')];
        console.log(author, name);

        updateField({ id: 'songFile', value: file });
        updateField({
            id: 'name',
            value: author.includes('feat') ? author.trim() : name.trim(),
        });
        updateField({
            id: 'author',
            value: author.includes('feat') ? name.trim() : author.trim(),
        });
        getSongDuration(URL.createObjectURL(file)).then((res) => {
            console.log(res);

            updateField({ id: 'duration', value: res });
        });
        handleNext(file);
    };

    return (
        <SignUpModalStyled>
            <Flex d="column" gap={10} width="100%" jc="center" height="100%">
                <SongInput
                    error={error}
                    onChange={handleChange}
                    file={songFile}
                />
            </Flex>
            <Flex width="100%" onClick={() => handleNext(songFile)}>
                <DefaultButton appearance="primary">Next</DefaultButton>
            </Flex>
        </SignUpModalStyled>
    );
};
