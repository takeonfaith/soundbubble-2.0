import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { createPlaylistObject } from '../../entities/playlist/lib/createPlaylistObject';
import { playlistModel } from '../../entities/playlist/model';
import { createAuthorObject } from '../../entities/user/lib/createAuthorObject';
import { userModel } from '../../entities/user/model';
import { modalModel } from '../../layout/modal/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { PhotoInput } from '../../shared/components/photoInput';
import { useForm } from './model';

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

export const CreatePlaylistModal = () => {
    const [currentUser] = userModel.useUser();
    const [loading] = playlistModel.useCreatePlaylist();
    const [colors, setColors] = useState<string[]>([]);
    const [photo, setPhoto] = useState<File | null>(null);
    const navigate = useNavigate();
    const { values, errors, onSubmit, onChange, handleEnterKeyDown } = useForm(
        (obj) => {
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
        }
    );

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
                onKeyDown={handleEnterKeyDown}
            >
                <Input
                    placeholder="Enter a playlist name"
                    label="Playlist Name"
                    required
                    value={values.name}
                    id="name"
                    error={errors.name}
                    onChange={onChange}
                />
                <DefaultButton
                    onClick={onSubmit}
                    disabled={values.name.length === 0}
                    appearance="primary"
                    loading={loading}
                >
                    Create
                </DefaultButton>
            </Flex>
        </CreatePlaylistModalStyled>
    );
};
