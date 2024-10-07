import {
    IconDiscountCheckFilled,
    IconHeadphones,
    IconUserPlus,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { createLoadQueueObject } from '../../entities/song/lib/createQueueObject';
import { TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { ControlButtons } from '../../features/controlButtons';
import { BeautifulBackground } from '../../shared/components/beautifulBackground';
import { Flex } from '../../shared/components/flex';
import { Subtext } from '../../shared/components/subtext';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { ButtonsStyled } from '../author/styles';

const TopAutorCardStyled = styled(Link)`
    width: 100%;
    padding: 30px 30px;
    color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    transition: 0.2s filter;
    margin-bottom: 20px;

    .bottom-buttons {
        margin-bottom: 0px;
    }

    &:hover {
        filter: brightness(0.9);
    }

    @media (max-width: 768px) {
        padding: 16px;

        .bottom-buttons {
            width: 100%;
            padding: 0;
        }

        .general-cover {
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 80px;
            min-width: 80px;
        }
    }
`;

const LeftSide = styled(Flex)`
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const TopAuthorCardBackgroundStyled = styled(BeautifulBackground)`
    animation: none;
    background-size: 100% 300%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 8px;
        background-image: linear-gradient(#0000007d, #0000006e);
    }
`;

const AuthorName = styled.div`
    font-size: 24px;
    font-weight: 400;
    color: #fff;
`;

const CountStyled = styled.div`
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
        width: 16px;
        height: 16px;
        opacity: 0.7;
    }
`;

export const TopAuthorCard = ({ author }: { author: TUser }) => {
    const queue = createLoadQueueObject({
        name: author.displayName,
        imageUrl: author.photoURL,
        url: `/author/${author.uid}`,
        songIds: author.ownSongs,
        id: author.uid,
    });

    return (
        <TopAutorCardStyled to={`/author/${author.uid}`}>
            <Flex
                width="100%"
                jc="space-between"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <LeftSide
                    width="250px"
                    d="column"
                    height="100%"
                    jc="space-between"
                    ai="flex-start"
                    gap={30}
                >
                    <Flex d="column" gap={14}>
                        <Flex width="100%" d="column" ai="flex-start">
                            <Subtext style={{ color: '#fff' }}>
                                Top Result
                            </Subtext>
                            <Flex gap={10}>
                                <AuthorName>{author?.displayName}</AuthorName>
                                {author.isVerified && (
                                    <IconDiscountCheckFilled />
                                )}
                            </Flex>
                        </Flex>
                        <Flex width="100%" gap={30}>
                            <Flex gap={4}>
                                <CountStyled>
                                    {formatBigNumber(
                                        author?.numberOfListenersPerMonth
                                    )}
                                    <IconHeadphones />
                                </CountStyled>
                                ∙
                                <CountStyled>
                                    {author?.subscribers}
                                    <IconUserPlus />
                                </CountStyled>
                            </Flex>
                        </Flex>
                    </Flex>
                    <ButtonsStyled className='bottom-buttons'>
                        <ControlButtons
                            queue={queue}
                            buttonColor={author.imageColors[0]}
                        />
                    </ButtonsStyled>
                </LeftSide>
                <UserCover
                    isAuthor={author?.isAdmin}
                    colors={author.imageColors}
                    src={author?.photoURL}
                    size="150px"
                />
            </Flex>

            <TopAuthorCardBackgroundStyled $colors={author?.imageColors} />
        </TopAutorCardStyled>
    );
};
