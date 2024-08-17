import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { createDefaultPlaylist } from '../../entities/playlist/lib/createDefaultPlaylist';
import { playlistModel } from '../../entities/playlist/model';
import { userModel } from '../../entities/user/model';
import { modalModel } from '../../layout/modal/model';
import { Form } from '../../shared/components/form';
import { PhotoInput } from '../../shared/components/photoInput';
import { useState } from 'react';
import { useForm } from '../../shared/hooks/useForm';
import { DefaultButton } from '../../shared/components/button/DefaultButton';

const CreatePlaylistModalStyled = styled.div`
    padding: 0 20px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

const fields = [
    {
        id: 'name',
        label: 'Playlist Name',
        type: 'text',
        placeholder: 'Enter a Playlist Name',
        required: true,
    },
] as const;

export const CreatePlaylistModal = () => {
    const [{ data }] = userModel.useUser();
    const [loading] = playlistModel.useCreatePlaylist();
    const [colors, setColors] = useState<string[]>([]);
    const [photo, setPhoto] = useState<File | null>(null);
    const navigate = useNavigate();
    const { formProps, onSumbit } = useForm({
        fields,
        handleSubmit: (obj) => {
            const playlist = createDefaultPlaylist({
                name: obj.name,
                image: photo,
                imageColors: colors,
                authors: data ? [data] : [],
            });

            playlistModel.events.createPlaylist({
                playlist,
                onSuccess: (playlist) => {
                    navigate(`/playlist/${playlist.id}`);
                    modalModel.events.close();
                },
            });
        },
    });

    if (!data) return null;

    return (
        <CreatePlaylistModalStyled>
            <PhotoInput
                colors={colors}
                onUpload={(photo) => setPhoto(photo)}
                onColors={(colors) => setColors(colors)}
            />
            <Form {...formProps} />
            <DefaultButton
                onClick={onSumbit}
                appearance="primary"
                loading={loading}
            >
                Create
            </DefaultButton>
        </CreatePlaylistModalStyled>
    );
};
