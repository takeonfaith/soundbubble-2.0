import { useState, useRef, useEffect } from 'react';
import { playlistModel } from '../../../../entities/playlist/model';
import { PlaylistNameStyled, PlaylistNameInput } from '../../styles';

type Props = {
    name: string | undefined;
    isOwner: boolean;
    isEditing?: boolean;
};

export const PlaylistName = ({ name, isOwner, isEditing }: Props) => {
    const [newName, setNewName] = useState(name);
    const [isEditingName, setIsEditingName] = useState(isEditing);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setNewName(name);
    }, [name]);

    useEffect(() => {
        setIsEditingName(isEditing);
    }, [isEditing]);

    useEffect(() => {
        if (isEditingName) {
            inputRef.current?.focus();
        }
    }, [isEditingName]);

    const handleUpdateName = () => {
        if (newName?.trim() === '') {
            setNewName(name);
            return;
        }

        if (newName !== name) {
            playlistModel.events.updatePlaylist({
                update: {
                    name: newName,
                    lastEditedTime: Date.now(),
                },
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleUpdateName();
            if (!isEditing) {
                setIsEditingName(false);
            }
        }
    };

    const handleChange = (e: Evt<'input'>) => {
        setNewName(e.currentTarget.value);
    };

    const handleBlur = () => {
        if (!isEditing) {
            setIsEditingName(false);
        }
        handleUpdateName();
    };

    return (
        <PlaylistNameStyled
            className={isOwner ? 'hoverable' : ''}
            onClick={() => {
                if (isOwner) {
                    setIsEditingName(true);
                }
            }}
        >
            {!isEditingName ? (
                <h1>{newName}</h1>
            ) : (
                <PlaylistNameInput
                    ref={inputRef}
                    value={newName}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    maxLength={100}
                />
            )}
        </PlaylistNameStyled>
    );
};
