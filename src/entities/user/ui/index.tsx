import { IconChevronRight, IconDiscountCheckFilled } from '@tabler/icons-react';
import { memo } from 'react';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { getLastSeen } from '../lib/getLastSeen';
import { TUser } from '../model/types';
import { TOrientation } from '../types';
import { UserCover } from './UserCover';
import { UserStatus } from './UserStatus';
import { OnlineIndicator, UserItemStyled } from './styles';
import { useTheme } from 'styled-components';
import { LikeButton } from '../../../features/likeButton';
import { useToggleUserLike } from '../hooks/useToggleUserLike';

type Props = {
    user: TUser | null | undefined;
    orientation?: TOrientation;
    onClick?: (user: TUser, e: Evt<'a'>) => void;
    children?: React.ReactNode;
    as?: string;
    showLastSeen?: boolean;
};

export const UserItem = memo(
    ({
        user,
        onClick,
        children,
        as,
        showLastSeen,
        orientation = 'vertical',
    }: Props) => {
        const theme = useTheme();
        const { handleToggleLike, isLiked } = useToggleUserLike(user);

        if (!user) return null;

        const {
            uid,
            imageColors,
            photoURL,
            isAuthor,
            displayName,
            isVerified,
            online,
        } = user;
        const isVertical =
            orientation === 'vertical' || orientation === 'vertical-small';
        const status = getLastSeen(online).status;
        const link = isAuthor ? `/author/${uid}` : `/user/${uid}`;

        const handleClick = (e: Evt<'a'>) => {
            console.log(e);

            e.stopPropagation();
            onClick?.(user, e);
        };

        console.log(isVerified, displayName);

        return (
            <UserItemStyled
                as={as}
                to={link}
                className={orientation}
                onClick={handleClick}
            >
                {orientation === 'vertical' && isAuthor && (
                    <LikeButton
                        entity={user}
                        likeColor={imageColors?.[0] ?? 'grey'}
                        isLiked={isLiked}
                        onClick={handleToggleLike}
                        className="plane"
                    />
                )}
                <UserCover
                    colors={imageColors}
                    src={photoURL}
                    size={isVertical ? 'var(--size)' : '38px'}
                    isAuthor={isAuthor}
                >
                    {status === 'online' && !isAuthor && (
                        <OnlineIndicator className={orientation} />
                    )}
                </UserCover>
                <Flex
                    d="column"
                    gap={isVertical ? 4 : 1}
                    width="100%"
                    ai={isVertical ? 'center' : 'flex-start'}
                >
                    <Flex
                        jc={isVertical ? 'center' : 'flex-start'}
                        gap={8}
                        width="100%"
                    >
                        <h4>{displayName}</h4>
                        {isVerified && (
                            <IconDiscountCheckFilled
                                style={{ color: theme.scheme.blue.main }}
                                className="verified-icon"
                            />
                        )}
                    </Flex>
                    {orientation === 'horizontal' && (
                        <UserStatus
                            status={status}
                            isAuthor={isAuthor}
                            showLastSeen={showLastSeen}
                        />
                    )}
                </Flex>
                {children ??
                    (orientation === 'horizontal' && (
                        <Button $width="45px">
                            <IconChevronRight
                                opacity={0.3}
                                strokeWidth={1.7}
                                size={22}
                            />
                        </Button>
                    ))}
            </UserItemStyled>
        );
    }
);

UserItem.displayName = 'UserItem';
