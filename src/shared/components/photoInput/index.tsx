import {
    IconCamera,
    IconColorFilter,
    IconTrash,
    IconX,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import { Button } from '../button';
import { DefaultButton } from '../button/DefaultButton';
import { Flex } from '../flex';
import {
    BackgroundPreview,
    CenterButton,
    ColorInput,
    InputWrapper,
    PhotoInputStyled,
} from './styles';

type Props = {
    file: File | null;
    colors: string[];
    onUpload: (photo: File | null) => void;
    onColors: (colors: string[]) => void;
};

export const PhotoInput = ({ colors, onColors, onUpload, file }: Props) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [showColors, setShowColors] = useState(false);

    const getColors = (colors: string[]) => {
        onColors(colors);
    };

    useEffect(() => {
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    }, [file]);

    const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0];
        if (file) {
            onUpload(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleDelete = () => {
        onUpload(null);
        onColors([]);
        setPreview(null);
    };

    return (
        <>
            <InputWrapper>
                {preview && <BackgroundPreview $colors={colors} />}
                <PhotoInputStyled>
                    <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleFile}
                    />
                    {preview && (
                        <ColorExtractor getColors={getColors}>
                            <img src={preview} className="preview-image" />
                        </ColorExtractor>
                    )}

                    <CenterButton className={preview ? 'with-preview' : ''}>
                        <IconCamera />
                    </CenterButton>
                </PhotoInputStyled>
            </InputWrapper>
            {preview && !showColors && (
                <Flex width="100%" gap={10}>
                    <DefaultButton
                        appearance="outline"
                        onClick={() => setShowColors(true)}
                    >
                        <IconColorFilter size={16} />
                        Colors
                    </DefaultButton>
                    <DefaultButton appearance="outline" onClick={handleDelete}>
                        <IconTrash size={16} />
                        Delete
                    </DefaultButton>
                </Flex>
            )}
            {showColors && (
                <Flex width="100%" gap={4}>
                    <Flex
                        width="100%"
                        gap={0}
                        height="60px"
                        style={{ borderRadius: '4px', overflow: 'hidden' }}
                    >
                        {colors.map((color, index) => {
                            return (
                                <ColorInput
                                    type="color"
                                    value={color}
                                    onChange={(e) => {
                                        const newColors = [...colors];
                                        newColors[index] = e.target.value;
                                        onColors(newColors);
                                    }}
                                />
                            );
                        })}
                    </Flex>
                    <Button
                        $width="70px"
                        onClick={() => setShowColors(false)}
                        $height="60px"
                    >
                        <IconX />
                    </Button>
                </Flex>
            )}
        </>
    );
};
