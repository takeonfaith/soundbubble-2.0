import {
    IconCheck,
    IconMessage2,
    IconUserCheck,
    IconUserPlus,
    IconUserX,
} from '@tabler/icons-react';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { userModel } from '../../entities/user/model';
import { UserCover } from '../../entities/user/ui/UserCover';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Subtext } from '../../shared/components/subtext';
import { UserTopStyled, UserInfo, UserInfoName, UserButtons } from './styles';
import { confirmModel } from '../../layout/confirm/model';
import { useTheme } from 'styled-components';

export const UserTop = () => {
    const [{ user: currentPageUser }] = userModel.useUserPage();
    const [{ data }] = userModel.useUser();
    const theme = useTheme();
    const friends = data?.friends ?? [];
    const friend = friends.find(
        (friend) => friend.uid === currentPageUser?.uid
    );

    const getFriendButtonContent = () => {
        if (friend?.status === 'added')
            return {
                text: (
                    <>
                        <IconUserCheck size={18} />
                        Added
                    </>
                ),
                onClick: () => {
                    confirmModel.events.open({
                        text: 'You sure you want to remove this friend from your friend list?',
                        subtext: 'You can add them again if you want',
                        onAccept: () => null,
                        icon: <IconUserX />,
                        iconColor: theme.scheme.red.action,
                    });
                },
            };

        if (friend?.status === 'awaiting') {
            return {
                text: (
                    <>
                        <IconUserX size={18} />
                        Cancel request
                    </>
                ),
                onClick: () => {
                    confirmModel.events.open({
                        text: 'You sure you want to cancel friends request?',
                        onAccept: () => null,
                        icon: <IconUserX />,
                        iconColor: theme.scheme.red.action,
                    });
                },
            };
        }

        if (friend?.status === 'requested') {
            return {
                text: (
                    <>
                        <IconCheck size={18} />
                        Accept Friend request
                    </>
                ),
            };
        }

        return {
            text: (
                <>
                    <IconUserPlus size={18} />
                    Add to friends
                </>
            ),
        };
    };

    const friendButton = getFriendButtonContent();

    return (
        <UserTopStyled color={currentPageUser?.imageColors[0] ?? '#696969'}>
            <UserCover
                size="150px"
                src={currentPageUser?.photoURL}
                colors={currentPageUser?.imageColors}
                isAuthor={false}
            />
            <UserInfo>
                <UserInfoName>
                    <h2>{currentPageUser?.displayName ?? 'User'}</h2>
                    <Subtext style={{ fontSize: '0.9rem' }}>
                        {getLastSeen(currentPageUser?.online).status}
                    </Subtext>
                </UserInfoName>
                <UserButtons>
                    <DefaultButton width="100%" onClick={friendButton.onClick}>
                        {friendButton.text}
                    </DefaultButton>
                    {friend?.status === 'added' && (
                        <DefaultButton width="100%">
                            <IconMessage2 size={18} />
                            Message
                        </DefaultButton>
                    )}
                </UserButtons>
            </UserInfo>
        </UserTopStyled>
    );
};
