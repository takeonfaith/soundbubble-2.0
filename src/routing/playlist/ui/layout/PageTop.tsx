import {
    IconHeadphones,
    IconLock,
    IconUserPlus,
    IconWorld,
} from '@tabler/icons-react';
import { styled } from 'styled-components';
import { ToggleLike } from '../../../../entities/playlist/hooks/useTogglePlaylistLike';
import { playlistModel } from '../../../../entities/playlist/model';
import { TPlaylist } from '../../../../entities/playlist/model/types';
import { TAuthor, TQueue } from '../../../../entities/song/model/types';
import { modalModel } from '../../../../layout/modal/model';
import { popupModel } from '../../../../layout/popup/model';
import { Authors } from '../../../../shared/components/authors';
import { Button } from '../../../../shared/components/button';
import { DefaultContextMenuStyled } from '../../../../shared/components/defaultContextMenu';
import { Flex } from '../../../../shared/components/flex';
import { Subtext } from '../../../../shared/components/subtext';
import { dateToString } from '../../../../shared/funcs/dateToString';
import { formatBigNumber } from '../../../../shared/funcs/formatBigNumber';
import { getTotalSongsDuration } from '../../../../shared/funcs/getTotalSongsDuration';
import { hexToRgbA } from '../../../../shared/funcs/hexToRgba';
import { getLastUpdated } from '../../lib/getLastUpdated';
import { PlaylistControlButtons } from '../controls/PlaylistControlButtons';
import { AddFriendsToPlaylistModal } from '../editing/AddFriendsToPlaylistModal';
import { PlaylistDescription } from './PlaylistDescription';
import { PlaylistName } from './PlaylistName';
import { PlaylistPhoto } from './PlaylistPhoto';

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

const PlaylistControlButtonsStyled = styled.div`
    position: sticky;
    padding: 12px 0 0px 8px;
    margin-bottom: 28px;
    z-index: 11;
    width: fit-content;
    background: ${({ theme }) => theme.colors.pageBackground};
`;

type Props = {
    queue: TQueue;
    imageUrl?: string | undefined;
    name: string | undefined;
    authors: TAuthor[] | undefined;
    playlist: TPlaylist | null;
    icon?: React.ReactNode;
    hasHeader?: boolean;
    isOwner: boolean;
    isEditing?: boolean;
    imageColors?: string[];
    searching:
        | {
              isSearching: boolean;
              value: string;
          }
        | undefined;
    likeModel?: (playlist: TPlaylist | null) => ToggleLike;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageTop = ({
    queue,
    authors,
    name,
    icon,
    playlist,
    hasHeader,
    isOwner,
    isEditing,
    searching,
    likeModel,
    imageUrl,
    imageColors,
    ...props
}: Props) => {
    const buttonPrimaryColor = (
        playlist
            ? playlist.imageColors && playlist.imageColors.length > 0
                ? playlist.imageColors
                : ['#3f3f3f']
            : imageColors ?? ['#3f3f3f']
    )[0];

    const handleMakePrivate = (e: Evt<'btn'>) => {
        if (isOwner) {
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
                            {playlist?.isPrivate ? (
                                <>
                                    <IconWorld /> Make publuc
                                </>
                            ) : (
                                <>
                                    <IconLock /> Make private
                                </>
                            )}
                        </Button>
                    </DefaultContextMenuStyled>
                ),
            });
        }
    };

    return (
        <>
            <PageTopWrapper
                color={
                    playlist || (imageColors?.length ?? 0) > 1
                        ? hexToRgbA(buttonPrimaryColor)
                        : undefined
                }
                {...props}
            >
                <PlaylistPhoto
                    isEditing={isEditing}
                    icon={icon}
                    playlist={playlist}
                    imageUrl={imageUrl}
                />
                <Flex gap={30} d="column" ai="flex-start">
                    <Flex
                        gap={playlist?.description ? 10 : 20}
                        d="column"
                        ai="flex-start"
                    >
                        <Flex d="column" ai="flex-start" gap={6}>
                            <Flex gap={10}>
                                <PlaylistName
                                    isEditing={isEditing}
                                    name={name}
                                    isOwner={isOwner}
                                    onUpdate={(newName) => {
                                        playlistModel.events.updatePlaylist({
                                            update: {
                                                name: newName,
                                                lastEditedTime: Date.now(),
                                            },
                                        });
                                    }}
                                />
                                {(playlist?.isPrivate || isEditing) && (
                                    <Button
                                        $width="40px"
                                        onClick={handleMakePrivate}
                                    >
                                        {playlist?.isPrivate ? (
                                            <IconLock size={22} />
                                        ) : (
                                            <IconWorld size={22} />
                                        )}
                                    </Button>
                                )}
                            </Flex>
                            <Flex gap={8} width="100%">
                                <Authors authors={authors} isAuthor={false} />
                                {isEditing && (
                                    <Button
                                        $width="60px"
                                        $height="30px"
                                        className="outline"
                                        style={{
                                            fontSize: '0.8rem',
                                            opacity: '0.8',
                                            fontWeight: '300',
                                            gap: '6px',
                                        }}
                                        onClick={() => {
                                            modalModel.events.open({
                                                title: 'Send invitation to playlsit',
                                                content: (
                                                    <AddFriendsToPlaylistModal />
                                                ),
                                                sizeY: 'l',
                                            });
                                        }}
                                    >
                                        <IconUserPlus size={14} />
                                        Edit
                                    </Button>
                                )}
                            </Flex>
                        </Flex>
                        {!isEditing && (
                            <Flex gap={10}>
                                {playlist && (
                                    <>
                                        <Flex gap={10}>
                                            <Flex gap={4}>
                                                <Subtext
                                                    style={{
                                                        fontSize: '0.85rem',
                                                    }}
                                                >
                                                    {formatBigNumber(
                                                        playlist.listens
                                                    )}
                                                </Subtext>
                                                <IconHeadphones
                                                    size={14}
                                                    opacity={0.5}
                                                />
                                            </Flex>
                                            ·
                                            <Flex gap={4}>
                                                <Subtext
                                                    style={{
                                                        fontSize: '0.85rem',
                                                    }}
                                                >
                                                    {formatBigNumber(
                                                        playlist.subscribers
                                                    )}
                                                </Subtext>
                                                <IconUserPlus
                                                    size={14}
                                                    opacity={0.5}
                                                />
                                            </Flex>
                                        </Flex>
                                        ·
                                    </>
                                )}
                                {!playlist ? (
                                    <Subtext style={{ fontSize: '0.85rem' }}>
                                        {queue.songs.length}{' '}
                                        {queue.songs.length > 1
                                            ? 'songs'
                                            : 'song'}
                                        , {getTotalSongsDuration(queue.songs)}
                                    </Subtext>
                                ) : (
                                    <Subtext style={{ fontSize: '0.85rem' }}>
                                        {playlist.lastEditedTime !== undefined
                                            ? `Updated: ${getLastUpdated(
                                                  playlist.lastEditedTime
                                              )}`
                                            : `Created: ${dateToString(
                                                  playlist.creationDate
                                              )}`}
                                    </Subtext>
                                )}
                            </Flex>
                        )}
                    </Flex>
                    <PlaylistDescription
                        description={playlist?.description}
                        isOwner={isOwner}
                        isEditing={isEditing ?? false}
                    />
                </Flex>
            </PageTopWrapper>
            <PlaylistControlButtonsStyled
                style={{ top: hasHeader ? '10px' : '0px' }}
                className="playlist-control"
            >
                <PlaylistControlButtons
                    queue={queue}
                    primaryColor={buttonPrimaryColor}
                    isEditing={isEditing}
                    playlist={playlist}
                    searching={searching}
                    likeModel={likeModel}
                />
            </PlaylistControlButtonsStyled>
        </>
    );
};
