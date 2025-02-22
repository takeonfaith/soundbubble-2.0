import {
    IconChevronRight,
    IconHeadphones,
    IconQuote,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ShareButton } from '../../../features/shareButton';
import { Lyric } from '../../../layout/fullScreenPlayer/styles';
import { modalModel } from '../../../layout/modal/model';
import { Authors } from '../../../shared/components/authors';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { LoadingWrapper } from '../../../shared/components/loadingWrapper';
import { SmallAvatarList } from '../../../shared/components/smallAvatarList';
import { Subtext } from '../../../shared/components/subtext';
import { hexToRgbA } from '../../../shared/funcs/hexToRgba';
import { userModel } from '../../user/model';
import { UserItem } from '../../user/ui';
import { UserCover } from '../../user/ui/UserCover';
import { TSong } from '../model/types';
import { loadLyrics, lyricsModel } from '../new-model/lyrics';
import { SongCover } from './SongCover';
import { translate } from '../../../i18n';
import { dateToString } from '../../../shared/funcs/dateToString';

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
    const [lyrics, loading] = lyricsModel.useLyrics();

    useEffect(() => {
        loadLyrics(song.id);
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

    const formattedDate = dateToString(releaseDate);

    const handleOpenFriendsListeting = () => {
        modalModel.events.open({
            title: translate('friends_listening', { listen: song.name }),
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
                    <Subtext style={{ fontSize: '0.9rem' }}>
                        {translate('released', { released: formattedDate })}
                    </Subtext>
                    {song.hasLyrics && (
                        <Button
                            className="ghost default"
                            $height="30px"
                            style={{ fontSize: '0.8rem', fontWeight: '300' }}
                            onClick={() =>
                                modalModel.events.open({
                                    title: translate('lyrics'),
                                    content: <Lyrics song={song} />,
                                })
                            }
                        >
                            <IconQuote size={16} />
                            {translate('lyrics')}
                            <IconChevronRight size={14} />
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
                        {translate('friends_listening', { listen: '' })}{' '}
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

                <ShareButton entity={song} />
            </Buttons>
        </SongInfoStyled>
    );
};
