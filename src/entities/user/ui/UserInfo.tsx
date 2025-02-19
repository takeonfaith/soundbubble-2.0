import {
    IconHeadphones,
    IconMusic,
    IconUserPlus,
    IconVinyl,
} from '@tabler/icons-react';
import styled from 'styled-components';
import { ShareButton } from '../../../features/shareButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { formatBigNumber } from '../../../shared/funcs/formatBigNumber';
import { hexToRgbA } from '../../../shared/funcs/hexToRgba';
import { UserCover } from '../../user/ui/UserCover';
import { TUser } from '../model/types';

const UserInfoStyled = styled.div<{ shadowColor: string }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: calc(100% - 20px);
    padding: 0 20px;

    .general-cover {
        box-shadow: 0 40px 70px
            ${({ shadowColor }) => `rgba(${hexToRgbA(shadowColor)}, 0.4)`};
    }

    .authors {
        width: fit-content;
        font-size: 0.95rem;

        a {
            font-size: 0.95rem;
        }
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
    user: TUser | null;
};

export const UserInfo = ({ user }: Props) => {
    if (!user) return null;

    const {
        photoURL,
        displayName,
        subscribers,
        numberOfListenersPerMonth,
        imageColors,
        regDate,
    } = user;

    const formattedDate = new Date(regDate.toDate()).toLocaleDateString(
        'en-US',
        {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }
    );

    return (
        <UserInfoStyled shadowColor={imageColors[0] ?? '#e0e0e0'}>
            <UserCover
                isAuthor
                size="200px"
                src={photoURL}
                colors={imageColors}
            />
            <Flex d="column" gap={20} height="100%">
                <Flex d="column" gap={10}>
                    <h2>{displayName}</h2>
                    <Flex
                        gap={10}
                        style={{ opacity: '0.8', fontWeight: '300' }}
                        className="stats"
                    >
                        <Flex gap={4}>
                            {formatBigNumber(numberOfListenersPerMonth)}
                            <IconHeadphones size={16} />
                        </Flex>
                        ·
                        <Flex gap={4}>
                            {formatBigNumber(subscribers)}
                            <IconUserPlus size={16} />
                        </Flex>
                        ·
                        <Flex gap={4}>
                            {user.ownSongs?.length}
                            <IconMusic size={16} />
                        </Flex>
                        ·
                        <Flex gap={4}>
                            {user.ownPlaylists?.length}
                            <IconVinyl size={16} />
                        </Flex>
                    </Flex>
                </Flex>

                <Flex gap={10}>
                    <Subtext style={{ fontSize: '0.95rem' }}>
                        On platform since: {formattedDate}
                    </Subtext>
                </Flex>
            </Flex>
            <Buttons>
                <ShareButton entity={user} />
            </Buttons>
        </UserInfoStyled>
    );
};
