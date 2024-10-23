import {
    IconHeadphones,
    IconLock,
    IconUserPlus,
    IconWorld,
} from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { playlistModel } from '../../entities/playlist/model';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistCover } from '../../entities/playlist/ui/PlaylistCover';
import { TAuthor, TQueue } from '../../entities/song/model/types';
import { popupModel } from '../../layout/popup/model';
import { Authors } from '../../shared/components/authors';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { Subtext } from '../../shared/components/subtext';
import { dateToString } from '../../shared/funcs/dateToString';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { getTotalSongsDuration } from '../../shared/funcs/getTotalSongsDuration';
import { hexToRgbA } from '../../shared/funcs/hexToRgba';
import { PlaylistControlButtons } from './PlaylistControlButtons';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';

const PageTopWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    overflow: visible;
    padding-left: 8px;
    margin-bottom: 20px;
    width: 100%;
    background: linear-gradient(
        180deg,
        ${({ color }) => `rgba(${color}, 0.2)`},
        transparent
    );

    & .authors {
        font-size: 0.95rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const IconWrapper = styled.div`
    width: 200px;
    height: 200px;
    background: ${({ theme }) => theme.scheme.blue.mild};
    border-radius: 20px;
    color: ${({ theme }) => theme.scheme.blue.action};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 60%;
        height: 60%;
        filter: drop-shadow(0 0 35px);
    }
`;

const PlaylistControlButtonsStyled = styled.div`
    position: sticky;
    padding: 12px 0 0px 8px;
    margin-bottom: 28px;
    z-index: 11;
    width: fit-content;
    background: ${({ theme }) => theme.colors.pageBackground};
`;

const PlaylistNameStyled = styled.div`
    &.hoverable {
        h1:hover {
            outline: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: 4px;
        }
    }
`;

const PlaylistNameInput = styled(Input)`
    font-size: 2rem;
    font-weight: 600;
    border-radius: 4px;
    max-height: 60px;
    height: 50px;
    padding: 6px;
    background: ${({ theme }) => theme.colors.lightHover};
    outline: 1px solid ${({ theme }) => theme.colors.border};
`;

const PlaylistName = ({
    name,
    isOwner,
}: {
    name: string | undefined;
    isOwner: boolean;
}) => {
    const [newName, setNewName] = useState(name);
    const [isEditingName, setIsEditingName] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setNewName(name);
    }, [name]);

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
                    onBlur={() => {
                        setIsEditingName(false);
                        handleUpdateName();
                    }}
                    onChange={(e) => setNewName(e.currentTarget.value)}
                />
            )}
        </PlaylistNameStyled>
    );
};

type Props = {
    queue: TQueue;
    name: string | undefined;
    authors: TAuthor[] | undefined;
    playlist: TPlaylist | null;
    icon?: React.ReactNode;
    hasHeader?: boolean;
    isOwner: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageTop = ({
    queue,
    authors,
    name,
    icon,
    playlist,
    hasHeader,
    isOwner,
    ...props
}: Props) => {
    const handleMakePrivate = (e: Evt<'btn'>) => {
        e.stopPropagation();
        popupModel.events.open({
            e,
            height: 56,
            content: (
                <DefaultContextMenuStyled>
                    <Button
                        onClick={() => {
                            playlistModel.events.updatePlaylist({
                                update: {
                                    isPrivate: !playlist?.isPrivate,
                                },
                            });
                            popupModel.events.close();
                        }}
                    >
                        <IconWorld /> Make publuc
                    </Button>
                </DefaultContextMenuStyled>
            ),
        });
    };

    return (
        <>
            <PageTopWrapper
                color={
                    playlist
                        ? hexToRgbA(playlist?.imageColors[0] ?? '#4a4a4a')
                        : undefined
                }
                {...props}
            >
                {playlist ? (
                    <PlaylistCover
                        size="200px"
                        src={playlist?.image}
                        colors={playlist?.imageColors}
                        isAlbum={false}
                    />
                ) : (
                    <IconWrapper>{icon}</IconWrapper>
                )}
                <Flex gap={20} d="column" ai="flex-start">
                    <Flex d="column" ai="flex-start" gap={6}>
                        <Flex gap={10}>
                            <PlaylistName name={name} isOwner={isOwner} />
                            {playlist?.isPrivate && (
                                <Button
                                    $width="40px"
                                    onClick={handleMakePrivate}
                                >
                                    <IconLock size={22} />
                                </Button>
                            )}
                        </Flex>
                        <Authors authors={authors} isAuthor={false} />
                    </Flex>
                    <Flex gap={10}>
                        {playlist && (
                            <>
                                <Flex gap={10}>
                                    <Flex gap={4}>
                                        <Subtext
                                            style={{ fontSize: '0.85rem' }}
                                        >
                                            {formatBigNumber(playlist.listens)}
                                        </Subtext>
                                        <IconHeadphones
                                            size={14}
                                            opacity={0.5}
                                        />
                                    </Flex>
                                    ·
                                    <Flex gap={4}>
                                        <Subtext
                                            style={{ fontSize: '0.85rem' }}
                                        >
                                            {formatBigNumber(
                                                playlist.subscribers
                                            )}
                                        </Subtext>
                                        <IconUserPlus size={14} opacity={0.5} />
                                    </Flex>
                                </Flex>
                                ·
                            </>
                        )}
                        {!playlist ? (
                            <Subtext style={{ fontSize: '0.85rem' }}>
                                {queue.songs.length} songs,{' '}
                                {getTotalSongsDuration(queue.songs)}
                            </Subtext>
                        ) : (
                            <Subtext style={{ fontSize: '0.85rem' }}>
                                {playlist.lastEditedTime !== undefined
                                    ? `Updated: ${
                                          getLastSeen(playlist.lastEditedTime, 'less than 5 minutes ago')
                                              .status
                                      }`
                                    : `Created: ${dateToString(
                                          playlist.creationDate
                                      )}`}
                            </Subtext>
                        )}
                    </Flex>
                </Flex>
            </PageTopWrapper>
            <PlaylistControlButtonsStyled
                style={{ top: hasHeader ? '10px' : '0px' }}
                className="playlist-control"
            >
                <PlaylistControlButtons
                    queue={queue}
                    primaryColor={
                        playlist
                            ? playlist?.imageColors[0] ?? '#3f3f3f'
                            : undefined
                    }
                    playlist={playlist}
                />
            </PlaylistControlButtonsStyled>
        </>
    );
};
