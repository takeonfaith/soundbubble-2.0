import {
    IconArrowLeft,
    IconDiscountCheckFilled,
    IconDotsVertical,
    IconEdit,
    IconHeadphones,
    IconInfoCircle,
    IconShare3,
    IconTrash,
    IconUserPlus,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import { TQueueStore } from '../../entities/song/model/types';
import { useToggleUserLike } from '../../entities/user/hooks/useToggleUserLike';
import { TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { UserStatus } from '../../entities/user/ui/UserStatus';
import { LikeButton } from '../../features/likeButton';
import { ShareModal } from '../../features/shareModal';
import { modalModel } from '../../layout/modal/model';
import { popupModel } from '../../layout/popup/model';
import { Button } from '../../shared/components/button';
import { DefaultContextMenuStyled } from '../../shared/components/defaultContextMenu';
import { Divider } from '../../shared/components/divider';
import { Flex } from '../../shared/components/flex';
import {
    PageTopStyled,
    TopLeftCorner,
    TopRightCorner,
} from '../../shared/components/pageTop/styles';
import { formatBigNumber } from '../../shared/funcs/formatBigNumber';
import { BottomButtons } from './BottomButtons';
import { UserInfo } from '../../entities/user/ui/UserInfo';

type Props = {
    author: TUser | null;
    queueInfo: TQueueStore;
};

export const AuthorPageTop = ({ author, queueInfo }: Props) => {
    const navigate = useNavigate();
    const theme = useTheme();
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

    const handleClickShare = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: `Share ${displayName} with friends`,
            content: <ShareModal entity={author} />,
        });
    };

    const handleInfo = () => {
        popupModel.events.close();
        modalModel.events.open({
            title: '',
            content: <UserInfo user={author} />,
        });
    };

    const handleOpenMore = (e: Evt<'btn'>) => {
        e.stopPropagation();

        popupModel.events.open({
            e,
            height: 208,
            content: (
                <DefaultContextMenuStyled>
                    <Button>
                        <IconEdit />
                        Edit
                    </Button>
                    <Divider />
                    <Button onClick={handleClickShare}>
                        <IconShare3 />
                        Share
                    </Button>
                    <Button onClick={handleInfo}>
                        <IconInfoCircle />
                        Info
                    </Button>
                    <Divider />
                    <Button color={theme.scheme.red.text}>
                        <IconTrash />
                        Delete
                    </Button>
                </DefaultContextMenuStyled>
            ),
        });
    };

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
                    <Flex gap={4}>
                        {formatBigNumber(numberOfListenersPerMonth)}
                        <IconHeadphones size={16} />
                    </Flex>
                    <Flex gap={4}>
                        {formatBigNumber(subscribers)}
                        <IconUserPlus size={16} />
                    </Flex>
                </Flex>
            </Flex>
            <TopLeftCorner>
                <Button
                    $height="40px"
                    $width="40px"
                    onClick={() => navigate(-1)}
                >
                    <IconArrowLeft size={20} />
                </Button>
            </TopLeftCorner>
            <TopRightCorner>
                <LikeButton
                    entity={author}
                    isLiked={isLiked}
                    likeColor={undefined}
                    height="40px"
                    width="40px"
                    loading={performingAction}
                    onClick={handleToggleLike}
                />
                <Button $height="40px" $width="40px" onClick={handleOpenMore}>
                    <IconDotsVertical size={20} />
                </Button>
            </TopRightCorner>
            {/* <TopBackground>
			  		<img src={Wave} />
		  		</TopBackground> */}
            <BottomButtons
                buttonColor={imageColors[1]}
                isAdmin={false}
                isPageOwner={false}
                queueInfo={queueInfo}
            />
        </PageTopStyled>
    );
};
