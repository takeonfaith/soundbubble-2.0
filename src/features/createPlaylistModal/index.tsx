import { useState } from 'react';
import styled from 'styled-components';
import { playlistModel } from '../../entities/playlist/model';
import { userModel } from '../../entities/user/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Form } from '../../shared/components/form';
import { PhotoInput } from '../../shared/components/photoInput';
import { useForm } from '../../shared/hooks/useForm';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { useNavigate } from 'react-router';
import { modalModel } from '../../layout/modal/model';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';

const CreatePlaylistModalStyled = styled.div`
    padding: 20px;
    padding-top: 0;
    display: flex;
    min-height: 100%;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
    const [currentUser] = userModel.useUser();
    const [loading] = playlistModel.useCreatePlaylist();
    const [colors, setColors] = useState<string[]>([]);
    const [photo, setPhoto] = useState<File | null>(null);
    const navigate = useNavigate();
    const { formProps, onSumbit, areAllRequiredFieldFilled } = useForm({
        fields,
        handleSubmit: (obj) => {
            const playlist = createPlaylistObject(
                createAuthorObject(currentUser),
                {
                    name: obj.name,
                    image: photo,
                    imageColors: colors,
                }
            );

            playlistModel.events.createPlaylist({
                playlist,
                onSuccess: () => {
                    navigate(`/playlist/${playlist.id}`);
                    modalModel.events.close();
                },
            });
        },
    });

    if (!currentUser) return null;

    return (
        <CreatePlaylistModalStyled>
            <PhotoInput
                file={photo}
                colors={colors}
                onUpload={(photo) => setPhoto(photo)}
                onColors={(colors) => setColors(colors)}
            />
            <Flex
                height="100%"
                width="100%"
                d="column"
                gap={20}
                jc="space-between"
            >
                <Form {...formProps} />
                <DefaultButton
                    disabled={!areAllRequiredFieldFilled}
                    onClick={onSumbit}
                    appearance="primary"
                    loading={loading}
                >
                    Create
                </DefaultButton>
            </Flex>
        </CreatePlaylistModalStyled>
    );
};
