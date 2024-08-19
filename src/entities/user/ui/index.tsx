import { IconChevronRight, IconDiscountCheckFilled } from '@tabler/icons-react';
import { memo } from 'react';
import { Flex } from '../../../shared/components/flex';
import { DARK_THEME } from '../../../shared/constants/theme';
import { getLastSeen } from '../lib/getLastSeen';
import { TUser } from '../model/types';
import { TOrientation } from '../types';
import { UserCover } from './UserCover';
import { UserStatus } from './UserStatus';
import { OnlineIndicator, UserItemStyled } from './styles';
import { Button } from '../../../shared/components/button';

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
        const isVertical = orientation === 'vertical';
        const status = getLastSeen(online).status;

        const handleClick = (e: Evt<'a'>) => {
            onClick?.(user, e);
        };

        return (
            <UserItemStyled
                as={as}
                to={`/author/${uid}`}
                className={orientation}
                onClick={handleClick}
            >
                <UserCover
                    colors={imageColors}
                    src={photoURL}
                    size={isVertical ? 'var(--size)' : '38px'}
                    isAuthor={isAuthor}
                >
                    {status === 'online' && !isAuthor && <OnlineIndicator />}
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
                                size={16}
                                style={{ color: DARK_THEME.colors.blue.main }}
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
                                opacity={0.5}
                                strokeWidth={1.7}
                                size={24}
                            />
                        </Button>
                    ))}
            </UserItemStyled>
        );
    }
);

UserItem.displayName = 'UserItem';
