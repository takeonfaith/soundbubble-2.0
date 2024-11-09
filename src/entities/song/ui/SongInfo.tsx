import { IconHeadphones, IconQuote } from '@tabler/icons-react';
import styled from 'styled-components';
import { ShareModal } from '../../../features/shareModal';
import { Lyric } from '../../../layout/fullScreenPlayer/styles';
import { modalModel } from '../../../layout/modal/model';
import { Authors } from '../../../shared/components/authors';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { SmallAvatarList } from '../../../shared/components/smallAvatarList';
import { Subtext } from '../../../shared/components/subtext';
import { hexToRgbA } from '../../../shared/funcs/hexToRgba';
import { userModel } from '../../user/model';
import { UserItem } from '../../user/ui';
import { UserCover } from '../../user/ui/UserCover';
import { TLyric, TSong } from '../model/types';
import { SongCover } from './SongCover';
import { useEffect, useState } from 'react';
import { Database } from '../../../database';
import { LoadingWrapper } from '../../../shared/components/loadingWrapper';

const SongInfoStyled = styled.div<{ shadowColor: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: calc(100% - 20px);
    padding: 0 20px;

    .general-cover {
        box-shadow: 0 40px 70px
            ${({ shadowColor }) => `rgba(${hexToRgbA(shadowColor)}, 0.4)`};
        border-radius: 20px;

        img {
            border-radius: 20px;
        }
    }

    .authors {
        width: fit-content;
        font-size: 0.95rem;

        a {
            font-size: 0.95rem;
        }
    }
`;

const Listens = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    opacity: 0.8;
    font-size: 1.1rem;

    svg {
        width: 16px;
        height: 16px;
    }
`;

const FriendsListetingButton = styled(Button)`
    gap: 20px;
`;

const ShareButton = styled(Button)`
    color: #fff;
    filter: ${({ theme }) => theme.colors.brightness};

    &.primary {
        background: ${({ color }) => color ?? 'grey'};
        box-shadow: none;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

const Lyrics = ({ song }: { song: TSong }) => {
    const [lyrics, setLyrics] = useState<TLyric[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Database.Songs.loadLyrics(song.id)
            .then((lyrics) => {
                setLyrics(
                    lyrics.filter(
                        (lyric) =>
                            lyric.text !== '@loading' && lyric.text !== '@end'
                    )
                );
            })
            .finally(() => {
                setLoading(false);
            });
    }, [song.id]);

    return (
        <Flex padding="20px" d="column" gap={10} ai="flex-start">
            {loading && <LoadingWrapper />}
            {lyrics.map((lyric) => {
                return (
                    <Lyric className="ordinary" style={{ fontWeight: '300' }}>
                        {lyric.text}
                    </Lyric>
                );
            })}
        </Flex>
    );
};

type Props = {
    song: TSong | null | undefined;
};

export const SongInfo = ({ song }: Props) => {
    if (!song) return null;

    const [friends] = userModel.useFriends();

    const { cover, name, authors, listens, releaseDate, imageColors } = song;

    const friendsListening = friends.filter((friend) =>
        friend.addedSongs?.includes(song.id)
    );

    const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const handleOpenFriendsListeting = () => {
        modalModel.events.open({
            title: `Friends listening to ${name},`,
            content: (
                <Flex d="column" gap={10} width="100%" padding="0 20px">
                    {friendsListening.map((friend) => {
                        return (
                            <UserItem
                                orientation="horizontal"
                                user={friend}
                                key={friend.uid}
                                showLastSeen
                                onClick={() => modalModel.events.close()}
                            />
                        );
                    })}
                </Flex>
            ),
        });
    };

    const handleShare = () => {
        modalModel.events.open({
            title: `Share ${name} with friends`,
            content: <ShareModal entity={song} />,
            sizeY: 'l',
        });
    };

    return (
        <SongInfoStyled shadowColor={song?.imageColors[0] ?? 'grey'}>
            <SongCover size="200px" src={cover} colors={imageColors} />
            <Flex d="column" gap={20} height="100%">
                <Flex d="column" gap={8}>
                    <Flex gap={10} ai="baseline">
                        <h2>{name}</h2>
                        <Listens>
                            {listens}
                            <IconHeadphones />
                        </Listens>
                    </Flex>
                    <Authors
                        onAuthorsClick={() => modalModel.events.close()}
                        authors={authors}
                    />
                </Flex>
                <Flex gap={4} width="100%" d="column">
                    <Subtext>Released: {formattedDate}</Subtext>
                    {song.hasLyrics && (
                        <Button
                            className="ghost"
                            $width="70px"
                            $height="30px"
                            style={{ fontSize: '0.8rem', fontWeight: '300' }}
                            onClick={() =>
                                modalModel.events.open({
                                    title: 'Lyrics',
                                    content: <Lyrics song={song} />,
                                })
                            }
                        >
                            <IconQuote size={16} />
                            Lyrics
                        </Button>
                    )}
                </Flex>
            </Flex>
            <Buttons>
                {friendsListening.length > 0 && (
                    <FriendsListetingButton
                        className="outline"
                        onClick={handleOpenFriendsListeting}
                    >
                        Friends listening{' '}
                        <Flex>
                            <SmallAvatarList users={friendsListening}>
                                {friendsListening.length > 2 && (
                                    <UserCover
                                        isAuthor={false}
                                        size="20px"
                                        colors={['grey']}
                                        src={undefined}
                                    >
                                        <span
                                            style={{
                                                background: 'grey',
                                                position: 'relative',
                                                borderRadius: '100%',
                                                fontSize: '0.65rem',
                                                width: '20px',
                                                height: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                            }}
                                        >
                                            +{friendsListening.length - 2}
                                        </span>
                                    </UserCover>
                                )}
                            </SmallAvatarList>
                        </Flex>
                    </FriendsListetingButton>
                )}

                <ShareButton
                    className="primary"
                    color={imageColors[0]}
                    onClick={handleShare}
                >
                    Share
                </ShareButton>
            </Buttons>
        </SongInfoStyled>
    );
};
