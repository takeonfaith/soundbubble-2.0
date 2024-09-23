import { IconArrowDown, IconMusicUp, IconX } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { getHumanDuration } from '../../../entities/song/lib/getHumanDuration';
import { getSongDuration } from '../../../entities/song/lib/getSongDuration';
import { SongCover } from '../../../entities/song/ui/SongCover';
import { toastModel } from '../../../layout/toast/model';
import { Button } from '../button';
import { Flex } from '../flex';
import { Subtext } from '../subtext';
import {
    DragIconAnimated,
    SongInputIcon,
    SongInputLabel,
    SongInputStyled,
    UploadedSongAuthor,
    UploadedSongName,
    UploadedSongStyled,
} from './styles';
import { getHumanFileSize } from '../../funcs/getHumanFileSize';

const UploadedSong = ({
    file,
    handleRemove,
}: {
    file: File;
    handleRemove: (file: File) => void;
}) => {
    const [author, name] = file.name
        .replace('.mp3', '')
        .replace(/[_|]/g, ' ')
        .split('-');
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        getSongDuration(URL.createObjectURL(file)).then(setDuration);
    }, [file]);

    return (
        <UploadedSongStyled>
            <Flex gap={10}>
                <SongCover
                    size="35px"
                    src={undefined}
                    colors={['grey', 'grey', 'grey', 'grey', 'grey', 'grey']}
                />
                <Flex gap={0} d="column" ai="flex-start">
                    <UploadedSongName>{name ?? 'Song'}</UploadedSongName>
                    <UploadedSongAuthor>{author}</UploadedSongAuthor>
                </Flex>
            </Flex>
            <Flex gap={10}>
                <Flex d="column" ai="flex-end">
                    <Subtext style={{ fontSize: '0.67rem', fontWeight: '400' }}>
                        {getHumanDuration(duration)}
                    </Subtext>
                    <Subtext style={{ fontSize: '0.6rem', fontWeight: '400' }}>
                        {getHumanFileSize(file.size)}
                    </Subtext>
                </Flex>
                <Button
                    $width="34px"
                    $height="34px"
                    onClick={() => handleRemove(file)}
                >
                    <IconX size={20} opacity={0.6} />
                </Button>
            </Flex>
        </UploadedSongStyled>
    );
};

type Props = {
    onChange: (file: File | null) => void;
    file: File | null;
    error?: string | null;
};

export const SongInput = ({ file, onChange, error }: Props) => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // handle drag events
    const handleDrag = (
        e: React.DragEvent<HTMLDivElement | HTMLFormElement>
    ) => {
        e.preventDefault();
        e.stopPropagation();
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
            // at least one file has been dropped so do something
            // handleFiles(e.dataTransfer.files);
            console.log(e.dataTransfer.files);

            handleFileChange(undefined, e.dataTransfer.files);
        }
    };

    const handleFileChange = (
        event: Evt<'input'> | undefined,
        files?: FileList
    ) => {
        let file;
        if (event?.target.files) {
            file = event?.target.files[0];
        } else if (files) {
            file = files[0];
        }
        console.log(file);

        if (file && file.type.includes('audio')) {
            onChange(file);
        } else {
            toastModel.events.show({
                message: 'Please select a valid audio file',
                type: 'error',
            });
        }
    };

    const onButtonClick = () => {
        inputRef?.current?.click();
    };

    const handleRemove = () => {
        onChange(null);
    };

    return (
        <>
            <SongInputStyled
                onDragEnter={handleDrag}
                onSubmit={(e) => e.preventDefault()}
                className={`${dragActive ? 'dragActive' : ''} ${
                    error ? 'error' : ''
                }`}
            >
                <SongInputLabel htmlFor="file-upload">
                    <SongInputIcon>
                        {dragActive && (
                            <DragIconAnimated>
                                <IconArrowDown />
                            </DragIconAnimated>
                        )}
                        {!dragActive && <IconMusicUp />}
                    </SongInputIcon>
                    <Flex d="column" gap={8}>
                        <h3>Drag and drop audio files</h3>
                        <Subtext>Your file should either .mp3 or .wav</Subtext>
                    </Flex>
                    <Button
                        type="reset"
                        className="outline"
                        onClick={onButtonClick}
                    >
                        Browse files
                    </Button>
                </SongInputLabel>
                <input
                    id="file-upload"
                    type="file"
                    accept=".mp3,.wav"
                    onChange={handleFileChange}
                    ref={inputRef}
                />
                {dragActive && (
                    <div
                        id="drag-file-element"
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                    ></div>
                )}
            </SongInputStyled>
            {file && <UploadedSong file={file} handleRemove={handleRemove} />}
        </>
    );
};
