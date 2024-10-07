import { IconHeadphones, IconLock, IconUserPlus } from '@tabler/icons-react';
import { styled } from 'styled-components';
import { TPlaylist } from '../../entities/playlist/model/types';
import { PlaylistCover } from '../../entities/playlist/ui/PlaylistCover';
import { TAuthor, TQueue } from '../../entities/song/model/types';
import { Authors } from '../../shared/components/authors';
import { Flex } from '../../shared/components/flex';
import { Subtext } from '../../shared/components/subtext';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { getTotalSongsDuration } from '../../shared/funcs/getTotalSongsDuration';
import { PlaylistControlButtons } from './PlaylistControlButtons';
import { hexToRgbA } from '../../shared/funcs/hexToRgba';
import { dateToString } from '../../shared/funcs/dateToString';

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

type Props = {
    queue: TQueue;
    name: string | undefined;
    authors: TAuthor[] | undefined;
    playlist: TPlaylist | null;
    icon?: React.ReactNode;
    hasHeader?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageTop = ({
    queue,
    authors,
    name,
    icon,
    playlist,
    hasHeader,
    ...props
}: Props) => {
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
                            <h1 style={{ fontWeight: '500' }}>{name}</h1>
                            {playlist?.isPrivate && <IconLock size={20} />}
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
                                Created: {dateToString(playlist.creationDate)}
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
