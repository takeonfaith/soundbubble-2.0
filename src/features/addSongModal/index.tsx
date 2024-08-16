import { useState } from 'react';
import { Form } from '../../shared/components/form';
import { PhotoInput } from '../../shared/components/photoInput';
import { AddSongModalStyled } from './styles';
import { GenreInput } from '../genreInput';

const fields = [
    {
        label: 'Song Name',
        id: 'songName',
        type: 'text',
        placeholder: 'Enter song name',
        required: true,
    },
    {
        label: 'Authors',
        id: 'authors',
        type: 'authors',
        placeholder: 'Find authors',
        required: true,
    },
    {
        label: 'Date',
        id: 'date',
        type: 'date',
        placeholder: 'Enter song date',
        required: true,
    },
    {
        label: 'Lyrics',
        id: 'lyrics',
        type: 'textarea',
        placeholder: 'Enter lyrics',
        required: false,
    },
] as const;

export const AddSongModal = () => {
    const [colors, setColors] = useState<string[]>([]);
    const [photo, setPhoto] = useState<File | null>(null);

    return (
        <AddSongModalStyled>
            <PhotoInput
                colors={colors}
                onUpload={(photo) => setPhoto(photo)}
                onColors={(colors) => setColors(colors)}
            />
            <GenreInput />
            <Form
                fields={fields}
                submitErrorMessage={undefined}
                submitText={'Add new song'}
                onSumbit={() => null}
            />
        </AddSongModalStyled>
    );
};
