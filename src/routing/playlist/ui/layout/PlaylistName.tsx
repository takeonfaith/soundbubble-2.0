import { useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { PlaylistNameInput, PlaylistNameStyled } from '../../styles';

type Props = {
    name: string | undefined;
    isOwner: boolean;
    onUpdate?: (newName: string) => void;
    children?: (newName: string) => React.ReactNode;
    isEditing?: boolean;
    inputStyle?: CSSProperties;
};

export const PlaylistName = ({
    name,
    isOwner,
    isEditing,
    onUpdate,
    children,
    inputStyle,
}: Props) => {
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

        if (newName && newName !== name) {
            onUpdate?.(newName.trim());
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
                children && newName ? (
                    children(newName)
                ) : (
                    <h1>{newName}</h1>
                )
            ) : (
                <PlaylistNameInput
                    ref={inputRef}
                    value={newName}
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    maxLength={100}
                    style={{ ...inputStyle }}
                />
            )}
        </PlaylistNameStyled>
    );
};
