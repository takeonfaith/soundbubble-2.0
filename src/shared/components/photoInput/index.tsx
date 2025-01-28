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
import { InputError } from '../input/styles';
import {
    BackgroundPreview,
    CenterButton,
    ColorInput,
    InputWrapper,
    PhotoInputStyled,
} from './styles';

type Props = {
    file: File | string | null;
    colors: string[];
    error?: string | null;
    onUpload: (photo: File | null) => void;
    onColors: (colors: string[]) => void;
};

const EXTENSIONS = '.png, .jpg, .jpeg, .avif';

export const PhotoInput = ({
    colors,
    onColors,
    onUpload,
    file,
    error,
}: Props) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [showColors, setShowColors] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    const getColors = (colors: string[]) => {
        onColors(colors);
    };

    useEffect(() => {
        if (file) {
            setPreview(
                typeof file === 'string' ? file : URL.createObjectURL(file)
            );
        }
    }, [file]);

    const handleFile = (
        event?: React.ChangeEvent<HTMLInputElement>,
        outsideFile?: File
    ) => {
        const file = outsideFile ?? event?.target?.files?.[0];
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

    // handle drag events
    const handleDrag = (
        e: React.DragEvent<HTMLDivElement | HTMLFormElement>
    ) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.type);

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(undefined, e.dataTransfer.files[0]);
        }
        setDragActive(false);
    };

    return (
        <>
            {error && <InputError>{error}</InputError>}
            <InputWrapper
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`${dragActive ? 'dragActive' : ''}${
                    error ? 'error' : ''
                }`}
            >
                {preview && <BackgroundPreview $colors={colors} />}
                <PhotoInputStyled>
                    <input
                        type="file"
                        accept={EXTENSIONS}
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
