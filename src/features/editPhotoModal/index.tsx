import { useState } from 'react';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Flex } from '../../shared/components/flex';
import { PhotoInput } from '../../shared/components/photoInput';

type Props = {
    onSave: (
        newPhoto: File | null,
        imageColors: string[],
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => void;
    imageColors: string[];
    photo: string | null;
};

export const EditPhotoModal = ({ onSave, photo, imageColors }: Props) => {
    const [newPhoto, setNewPhoto] = useState<File | string | null>(photo);
    const [newImageColors, setNewImageColors] = useState<string[]>(imageColors);
    const [loading, setLoading] = useState(false);

    const updateImage = (photo: File | null) => {
        setNewPhoto(photo);
    };

    const updateColors = (colors: string[]) => {
        setNewImageColors(colors);
    };

    const isAvailableToChange = photo !== newPhoto;

    const handleUpdatePlaylist = () => {
        if (newPhoto === null || newPhoto instanceof File) {
            setLoading(true);
            onSave(newPhoto, imageColors, setLoading);
        }
    };

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
                    file={newPhoto ?? null}
                    colors={newImageColors}
                    onUpload={updateImage}
                    onColors={updateColors}
                />
            </Flex>

            <DefaultButton
                appearance="primary"
                width="100%"
                loading={loading}
                disabled={!isAvailableToChange}
                onClick={handleUpdatePlaylist}
            >
                Save
            </DefaultButton>
        </Flex>
    );
};
