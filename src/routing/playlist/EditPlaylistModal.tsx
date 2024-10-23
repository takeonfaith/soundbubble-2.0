import { IconLock, IconUserPlus } from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import { playlistModel, updatePlaylistFx } from '../../entities/playlist/model';
import {
    TPlaylist,
    TUploadPlaylist,
} from '../../entities/playlist/model/types';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { IconText } from '../../shared/components/iconText';
import { Input } from '../../shared/components/input';
import { PhotoInput } from '../../shared/components/photoInput';
import { SmallAvatarList } from '../../shared/components/smallAvatarList';
import { SwitchToggle } from '../../shared/components/switchToggle';
import { areObjectsDifferent } from '../../shared/funcs/areObjectsDifferent';
import { AddFriendsToPlaylistModal } from './AddFriendsToPlaylistModal';

export const EditPlaylistModal = () => {
    const { currentPlaylist } = playlistModel.usePlaylist();
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

    const updateIsPrivate = () => {
        handleUpdateField('isPrivate', !updatedPlaylistData?.isPrivate);
    };

    const updateName = (e: Evt<'input'>) => {
        handleUpdateField('name', e.currentTarget.value);
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
            <Flex
                d="column"
                height="100%"
                ai="flex-start"
                width="100%"
                gap={20}
                padding="20px 0  100px 0"
            >
                <Flex gap={10} width="100%" d="column" height="100%">
                    <PhotoInput
                        file={updatedPlaylistData?.image ?? null}
                        colors={updatedPlaylistData?.imageColors ?? []}
                        onUpload={updateImage}
                        onColors={updateColors}
                    />
                </Flex>
                <Input
                    value={updatedPlaylistData?.name}
                    label="Name"
                    onChange={updateName}
                />
                <Button
                    $width="100%"
                    className="outline"
                    onClick={() =>
                        modalModel.events.open({
                            title: 'Add friends to playlist',
                            content: <AddFriendsToPlaylistModal />,
                            sizeY: 'l',
                        })
                    }
                >
                    <Flex width="100%" jc="space-between" padding="0 8px">
                        <Flex gap={10}>
                            <IconUserPlus size={16} />
                            Add friends to playlist
                        </Flex>
                        <SmallAvatarList users={updatedPlaylistData?.authors} />
                    </Flex>
                </Button>
                <Button $width="100%" onClick={updateIsPrivate}>
                    <Flex width="100%" jc="space-between" padding="0 8px">
                        <IconText icon={<IconLock />} text="Private" />
                        <SwitchToggle
                            checked={updatedPlaylistData?.isPrivate ?? false}
                            size="s"
                            onChange={() => null}
                        />
                    </Flex>
                </Button>
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
