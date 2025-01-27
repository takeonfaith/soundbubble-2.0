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
import { useEffect, useRef } from 'react';
import { PLAYLIST_DEFAULT_NAME } from './model/constants';

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
    const navigate = useNavigate();
    const nameRef = useRef<HTMLInputElement | null>(null);
    const {
        values,
        errors,
        onSubmit,
        onChange,
        updateField,
        handleEnterKeyDown,
    } = useForm((obj, handleClean) => {
        const { name, photo, colors } = obj;
        const playlist = createPlaylistObject(createAuthorObject(currentUser), {
            name: name,
            image: photo,
            imageColors: colors,
        });

        playlistModel.events.createPlaylist({
            playlist,
            onSuccess: () => {
                navigate(`/playlist/${playlist.id}`);
                modalModel.events.close();
                handleClean();
            },
        });
    });

    useEffect(() => {
        nameRef.current?.select();

        return () => {
            updateField({ id: 'name', value: PLAYLIST_DEFAULT_NAME });
        };
    }, [updateField]);

    if (!currentUser) return null;

    return (
        <CreatePlaylistModalStyled>
            <PhotoInput
                file={values.photo}
                colors={values.colors}
                onUpload={(photo) => updateField({ id: 'photo', value: photo })}
                onColors={(colors) =>
                    updateField({ id: 'colors', value: colors })
                }
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
                    ref={nameRef}
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
