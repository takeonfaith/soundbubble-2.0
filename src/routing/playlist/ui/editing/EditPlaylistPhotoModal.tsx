import { useUnit } from 'effector-react';
import { useState } from 'react';
import {
    playlistModel,
    updatePlaylistFx,
} from '../../../../entities/playlist/model';
import {
    TPlaylist,
    TUploadPlaylist,
} from '../../../../entities/playlist/model/types';
import { modalModel } from '../../../../layout/modal/model';
import { DefaultButton } from '../../../../shared/components/button/DefaultButton';
import { Flex } from '../../../../shared/components/flex';
import { PhotoInput } from '../../../../shared/components/photoInput';
import { areObjectsDifferent } from '../../../../shared/funcs/areObjectsDifferent';

export const EditPlaylistPhotoModal = () => {
    const [{ currentPlaylist }] = playlistModel.usePlaylist();
    const playlistData = { ...currentPlaylist } as TPlaylist;
    const [isUpdating] = useUnit([updatePlaylistFx.pending]);

    const [updatedPlaylistData, setUpdatedPlaylistData] =
        useState<TUploadPlaylist | null>(playlistData);

    const handleUpdateField = (
        field: keyof TUploadPlaylist,
        value: unknown
    ) => {
        setUpdatedPlaylistData((prev) => {
            return { ...prev, [field]: value } as TPlaylist;
        });
    };

    const updateImage = (photo: File | null) => {
        handleUpdateField('image', photo);
    };

    const updateColors = (colors: string[]) => {
        handleUpdateField('imageColors', colors);
    };

    const isAvailableToChange = areObjectsDifferent(
        currentPlaylist,
        updatedPlaylistData
    );

    const handleUpdatePlaylist = () => {
        if (updatedPlaylistData && currentPlaylist) {
            playlistModel.events.updatePlaylist({
                update: {
                    ...updatedPlaylistData,
                    lastEditedTime: Date.now(),
                },
                onSuccess: () => {
                    modalModel.events.close();
                },
            });
        }
    };

    if (!currentPlaylist) return null;

    return (
        <Flex
            d="column"
            padding="25px"
            width="100%"
            jc="space-between"
            height="100%"
        >
            <Flex gap={10} width="100%" d="column" height="100%">
                <PhotoInput
                    file={updatedPlaylistData?.image ?? null}
                    colors={updatedPlaylistData?.imageColors ?? []}
                    onUpload={updateImage}
                    onColors={updateColors}
                />
            </Flex>

            <DefaultButton
                appearance="primary"
                width="100%"
                loading={isUpdating}
                disabled={!isAvailableToChange}
                onClick={handleUpdatePlaylist}
            >
                Save
            </DefaultButton>
        </Flex>
    );
};
