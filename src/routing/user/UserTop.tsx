import {
    IconCheck,
    IconUserCheck,
    IconUserPlus,
    IconUserX,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { userModel } from '../../entities/user/model';
import {
    cancelFriendRequestFx,
    deleteFromFriendsFx,
    friendRequestFx,
} from '../../entities/user/model/friends';
import { TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { OpenChatButton } from '../../features/openChatButton';
import { confirmModel } from '../../layout/confirm/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Subtext } from '../../shared/components/subtext';
import { UserButtons, UserInfo, UserInfoName, UserTopStyled } from './styles';
import { translate } from '../../i18n';

type Props = {
    user: TUser | null;
};

export const UserTop = ({ user }: Props) => {
    const [currentUser] = userModel.useUser();
    const [friends, friendRequests, awaiting] = userModel.useFriends();
    const friend = friends.find((friend) => friend.uid === user?.uid);
    const isOwner = user?.uid === currentUser?.uid;
    const [isRequesting, isCancelingFriendRequest, isDeletingFromFriends] =
        useUnit([
            friendRequestFx.pending,
            cancelFriendRequestFx.pending,
            deleteFromFriendsFx.pending,
        ]);
    const isLoadingFriendButton =
        isRequesting || isCancelingFriendRequest || isDeletingFromFriends;

    if (!user) return null;

    const getFriendButtonContent = () => {
        if (friend)
            return {
                text: (
                    <>
                        <IconUserCheck size={18} />
                        {translate('added_to_friends')}
                    </>
                ),
                onClick: () => {
                    confirmModel.events.open({
                        text: 'You sure you want to remove this friend from your friend list?',
                        subtext: 'You can add them again if you want',
                        onAccept: () => {
                            userModel.events.deleteFromFriends(user);
                        },
                        icon: <IconUserX />,
                        iconColor: 'red',
                    });
                },
            };

        if (friendRequests.find((u) => u.uid === user?.uid)) {
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
                        onAccept: () => {
                            userModel.events.cancelFriendRequest({
                                friendId: user.uid,
                            });
                        },
                        icon: <IconUserX />,
                        iconColor: 'red',
                    });
                },
            };
        }

        if (awaiting.find((u) => u.uid === user?.uid)) {
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
                    {translate('add_to_friends')}
                </>
            ),
            onClick: () => {
                if (user) {
                    userModel.events.friendRequest({ friend: user });
                }
            },
        };
    };

    const friendButton = getFriendButtonContent();

    return (
        <UserTopStyled color={user?.imageColors[0] ?? '#696969'}>
            <UserCover
                size="150px"
                src={user?.photoURL}
                colors={user?.imageColors}
                isAuthor={false}
            />
            <UserInfo>
                <UserInfoName>
                    <h2>{user?.displayName ?? 'User'}</h2>
                    <Subtext style={{ fontSize: '0.9rem' }}>
                        {getLastSeen(user?.online).status}
                    </Subtext>
                </UserInfoName>
                <UserButtons>
                    {!isOwner && !!currentUser && (
                        <DefaultButton
                            width="100%"
                            onClick={friendButton.onClick}
                            loading={isLoadingFriendButton}
                        >
                            {friendButton.text}
                        </DefaultButton>
                    )}
                    {currentUser && friend && (
                        <OpenChatButton userId={friend.uid} />
                    )}
                </UserButtons>
            </UserInfo>
        </UserTopStyled>
    );
};
