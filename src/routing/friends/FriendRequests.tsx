import { IconCheck, IconX } from '@tabler/icons-react';
import { useTheme } from 'styled-components';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { confirmModel } from '../../layout/confirm/model';
import { Button } from '../../shared/components/button';
import { Flex } from '../../shared/components/flex';

export const FriendRequests = () => {
    const theme = useTheme();

    const [, friendRequests] = userModel.useFriends();

    if (!friendRequests.length) return null;

    return (
        <>
            <h3
                style={{
                    fontWeight: '300',
                    marginBottom: '6px',
                }}
            >
                Friend requests
            </h3>
            {friendRequests.map((user) => {
                return (
                    <UserItem user={user} orientation="horizontal">
                        <Flex gap={4}>
                            <Button
                                $width="35px"
                                $height="35px"
                                className="outline"
                                onClick={(e) => {
                                    e.preventDefault();

                                    confirmModel.events.open({
                                        icon: <IconCheck />,
                                        iconColor: 'green',
                                        text: 'Are you sure you want to accept this friend request?',
                                        onAccept: () => {
                                            userModel.events.acceptFriendRequest(
                                                user.uid
                                            );
                                        },
                                    });
                                }}
                                style={{
                                    color: theme.scheme.green.main,
                                }}
                            >
                                <IconCheck size={18} />
                            </Button>
                            <Button
                                $width="35px"
                                $height="35px"
                                className="outline"
                                style={{
                                    color: theme.scheme.red.main,
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    confirmModel.events.open({
                                        icon: <IconX />,
                                        iconColor: 'red',
                                        text: 'Are you sure you want to reject this friend request?',
                                        onAccept: () => {
                                            userModel.events.rejectFriendRequest(
                                                user.uid
                                            );
                                        },
                                    });
                                }}
                            >
                                <IconX size={18} />
                            </Button>
                        </Flex>
                    </UserItem>
                );
            })}
        </>
    );
};
