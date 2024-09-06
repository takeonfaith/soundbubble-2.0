import styled from 'styled-components';
import { TSong } from '../model/types';
import { SongCover } from './SongCover';
import { hexToRgbA } from '../../../shared/funcs/hexToRgba';
import { Authors } from '../../../shared/components/authors';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { IconHeadphones } from '@tabler/icons-react';
import { Button } from '../../../shared/components/button';
import { userModel } from '../../user/model';
import { UserCover } from '../../user/ui/UserCover';
import { modalModel } from '../../../layout/modal/model';
import { UserItem } from '../../user/ui';
import { ShareModal } from '../../../features/shareModal';

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
    & .general-cover {
        outline: 2px solid ${({ theme }) => theme.colors.pageBackground};
    }

    & .general-cover:nth-child(1) {
        transform: translateX(-10px);
    }

    & .general-cover:nth-child(2) {
        transform: translateX(-15px);
    }

    & .general-cover:nth-child(3) {
        transform: translateX(-20px);
    }
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

type Props = {
    song: TSong | null;
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
                        onAuthorClick={() => modalModel.events.close()}
                        authors={authors}
                    />
                </Flex>
                <Flex gap={10}>
                    <Subtext>Release: {formattedDate}</Subtext>
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
                            {friendsListening.slice(0, 2).map((friend) => {
                                return (
                                    <UserCover
                                        src={friend.photoURL}
                                        size={'20px'}
                                        colors={friend.imageColors}
                                        isAuthor={false}
                                    />
                                );
                            })}
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
