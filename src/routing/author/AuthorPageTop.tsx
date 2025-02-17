import {
    IconArrowLeft,
    IconDiscountCheckFilled,
    IconDotsVertical,
    IconHeadphones,
    IconHeart,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { TQueue } from '../../entities/song/model/types';
import { useToggleUserLike } from '../../entities/user/hooks/useToggleUserLike';
import { TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { UserStatus } from '../../entities/user/ui/UserStatus';
import { ControlButtons } from '../../features/controlButtons';
import { LikeButton } from '../../features/likeButton';
import { Popup } from '../../layout/newpopup';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';
import Popover from '../../shared/components/popover';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { PageTopStyled, TopLeftCorner, TopRightCorner } from '../album/styles';
import { AuthorMoreContext } from './AuthorMoreContext';
import { ButtonsStyled } from './styles';

type Props = {
    author: TUser | null;
    queue: TQueue;
};

export const AuthorPageTop = ({ author, queue }: Props) => {
    const navigate = useNavigate();
    const { handleToggleLike, isLiked, performingAction } =
        useToggleUserLike(author);

    if (!author) return null;

    const {
        displayName,
        imageColors,
        isVerified,
        photoURL,
        numberOfListenersPerMonth,
        subscribers,
    } = author;

    return (
        <PageTopStyled $colors={imageColors}>
            <UserCover
                isAuthor={true}
                colors={imageColors}
                src={photoURL}
                size="200px"
            />
            <Flex gap={8} d="column" ai="center">
                <Flex gap={4} d="column">
                    <Flex gap={6}>
                        <h2>{displayName}</h2>
                        {isVerified && (
                            <IconDiscountCheckFilled color={imageColors?.[1]} />
                        )}
                    </Flex>
                    <div className="subtitle">
                        <UserStatus
                            color={imageColors[1]}
                            isAuthor={true}
                            status={undefined}
                            showLastSeen={false}
                        />
                    </div>
                </Flex>
                <Flex
                    gap={20}
                    style={{ opacity: '0.8', fontWeight: '300' }}
                    className="stats"
                >
                    <Popover
                        content={`${formatBigNumber(
                            numberOfListenersPerMonth
                        )} listeners`}
                        position="top"
                    >
                        <Flex gap={4}>
                            {formatBigNumber(numberOfListenersPerMonth)}
                            <IconHeadphones size={16} />
                        </Flex>
                    </Popover>
                    <Popover
                        content={`${formatBigNumber(subscribers)} likes`}
                        position="top"
                    >
                        <Flex gap={4}>
                            {formatBigNumber(subscribers)}
                            <IconHeart size={16} />
                        </Flex>
                    </Popover>
                </Flex>
            </Flex>
            <TopLeftCorner>
                <Popover content={'Back'}>
                    <Button
                        $height="40px"
                        $width="40px"
                        onClick={() => navigate(-1)}
                    >
                        <IconArrowLeft size={20} />
                    </Button>
                </Popover>
            </TopLeftCorner>
            <TopRightCorner>
                <LikeButton
                    entity={author}
                    isLiked={isLiked}
                    likeColor={'#fff'}
                    height="40px"
                    width="40px"
                    loading={performingAction}
                    onClick={handleToggleLike}
                />
                <Popup content={<AuthorMoreContext author={author} />}>
                    <Button $height="40px" $width="40px">
                        <IconDotsVertical size={20} />
                    </Button>
                </Popup>
            </TopRightCorner>
            {/* <TopBackground>
			  		<img src={Wave} />
		  		</TopBackground> */}
            <ButtonsStyled $color={imageColors[0]}>
                <ControlButtons color={imageColors[0]} queue={queue} />
            </ButtonsStyled>
        </PageTopStyled>
    );
};
