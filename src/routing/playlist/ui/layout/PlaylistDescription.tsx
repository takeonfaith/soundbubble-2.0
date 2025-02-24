import React, { useEffect, useRef, useState } from 'react';
import { playlistModel } from '../../../../entities/playlist/model';
import { modalModel } from '../../../../layout/modal/model';
import { Button } from '../../../../shared/components/button';
import { Flex } from '../../../../shared/components/flex';
import {
    DescriptionStyled,
    PlaylistDescriptionInput,
    PlaylistNameStyled,
} from '../../styles';
import { Subtext } from '../../../../shared/components/subtext';
import { translate } from '../../../../i18n';

type Props = {
    description: string | undefined;
    isOwner: boolean;
    isEditing: boolean;
};

const MAX_DESCRIPTION_LENGTH = 105;

export const PlaylistDescription = ({
    description,
    isOwner,
    isEditing,
}: Props) => {
    const [newDescription, setNewDescription] = useState(description ?? '');
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const showMoreButton =
        (newDescription?.length ?? 0) > MAX_DESCRIPTION_LENGTH &&
        !isEditingDescription;

    useEffect(() => {
        setNewDescription(description ?? '');
    }, [description]);

    useEffect(() => {
        setIsEditingDescription(isEditing);
    }, [isEditing]);

    useEffect(() => {
        if (isEditingDescription && !isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing, isEditingDescription]);

    const handleUpdateDescription = () => {
        if (newDescription !== description) {
            playlistModel.events.updatePlaylist({
                update: {
                    description: newDescription,
                    lastEditedTime: Date.now(),
                },
            });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            handleUpdateDescription();
            if (!isEditing) {
                setIsEditingDescription(false);
            }
        }
    };

    const handleChange = (value: string) => {
        setNewDescription(value);
    };

    const handleBlur = () => {
        if (!isEditing) {
            setIsEditingDescription(false);
        }
        handleUpdateDescription();
    };

    const handleClick = () => {
        if (isOwner) {
            setIsEditingDescription(true);
        }
    };

    if (!isEditingDescription && !description) return null;

    return (
        <Flex d="column" ai="flex-start">
            <PlaylistNameStyled
                className={isOwner ? 'hoverable' : ''}
                onClick={handleClick}
            >
                {!isEditingDescription ? (
                    <DescriptionStyled>
                        {newDescription?.slice(0, MAX_DESCRIPTION_LENGTH)}
                        {(newDescription?.length ?? 0) > MAX_DESCRIPTION_LENGTH
                            ? '...'
                            : ''}
                        {showMoreButton ? (
                            <Button
                                $width="34px"
                                $height="20px"
                                style={{
                                    display: 'inline-block',
                                    fontSize: '0.85rem',
                                    marginLeft: '10px',
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    modalModel.events.open({
                                        title: 'Playlist description',
                                        content: (
                                            <Flex padding="0 25px">
                                                <Subtext
                                                    style={{
                                                        fontSize: '1rem',
                                                    }}
                                                >
                                                    {newDescription}
                                                </Subtext>
                                            </Flex>
                                        ),
                                    });
                                }}
                            >
                                More
                            </Button>
                        ) : null}
                    </DescriptionStyled>
                ) : (
                    <PlaylistDescriptionInput
                        ref={inputRef}
                        value={newDescription}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        maxLength={300}
                        placeholder={translate('description')}
                    />
                )}
            </PlaylistNameStyled>
        </Flex>
    );
};
