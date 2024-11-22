import {
    IconCheck,
    IconMessage2,
    IconUserCheck,
    IconUserPlus,
    IconUserX,
} from '@tabler/icons-react';
import { getLastSeen } from '../../entities/user/lib/getLastSeen';
import { userModel } from '../../entities/user/model';
import { FriendStatus, TUser } from '../../entities/user/model/types';
import { UserCover } from '../../entities/user/ui/UserCover';
import { confirmModel } from '../../layout/confirm/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { Subtext } from '../../shared/components/subtext';
import { UserButtons, UserInfo, UserInfoName, UserTopStyled } from './styles';
import { Database } from '../../database';
import { useState } from 'react';
import { Loading } from '../../shared/components/loading';
import { useNavigate } from 'react-router';

type Props = {
    user: TUser | null;
};

export const UserTop = ({ user }: Props) => {
    const [currentUser] = userModel.useUser();
    const friends = currentUser?.friends ?? [];
    const friend = friends.find((friend) => friend.uid === user?.uid);
    const isOwner = user?.uid === currentUser?.uid;
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getFriendButtonContent = () => {
        if (friend?.status === FriendStatus.added)
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
                        iconColor: 'red',
                    });
                },
            };

        if (friend?.status === FriendStatus.requested) {
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
                        iconColor: 'red',
                    });
                },
            };
        }

        if (friend?.status === FriendStatus.awaiting) {
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
            onClick: () => {
                if (user) {
                    userModel.events.friendRequest(user?.uid);
                }
            },
        };
    };

    const handleMessage = async () => {
        setLoading(true);
        if (currentUser && user) {
            Database.Chats.getChatByUserIds(currentUser.uid, user.uid).then(
                (chat) => {
                    setLoading(false);
                    if (chat) {
                        navigate(`/chat/${chat.id}`);
                    }
                }
            );
        }
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
                        >
                            {friendButton.text}
                        </DefaultButton>
                    )}
                    {currentUser && friend?.status === 'added' && (
                        <DefaultButton width="100%" onClick={handleMessage}>
                            {loading ? <Loading /> : <IconMessage2 size={18} />}
                            Message
                        </DefaultButton>
                    )}
                </UserButtons>
            </UserInfo>
        </UserTopStyled>
    );
};
