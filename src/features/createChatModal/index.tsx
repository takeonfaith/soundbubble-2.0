import styled from 'styled-components';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { AddEntitiesUI } from '../addEntitiesUI';
import { CheckIcon } from '../../shared/components/checkIcon';
import { Input } from '../../shared/components/input';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { BadgeStyled } from '../shareModal/styles';
import { Button } from '../../shared/components/button';
import { useState } from 'react';
import { TUser } from '../../entities/user/model/types';
import { toastModel } from '../../layout/toast/model';
import { chatModel } from '../../entities/chat/model';
import { createChatObject } from '../../entities/chat/lib/createChatObject';
import { useNavigate } from 'react-router';
import { useUnit } from 'effector-react';
import { createChatFx } from '../../entities/chat/model/create-chat';
import { modalModel } from '../../layout/modal/model';

const CreateChatModalStyled = styled.div`
    padding: 10px 20px;
    height: 100%;
`;

export const CreateChatModal = () => {
    const [friends] = userModel.useFriends();
    const [currentUser] = userModel.useUser();
    const [groupTitle, setGroupTitle] = useState('');
    const navigate = useNavigate();
    const [isCreatingChat] = useUnit([createChatFx.pending]);

    const handleCreateChat = (selectedFriends: TUser[]) => {
        return () => {
            if (currentUser) {
                if (selectedFriends.length > 1) {
                    if (groupTitle.trim().length === 0) {
                        toastModel.events.add({
                            message: 'Please enter a group title',
                            type: 'error',
                        });
                        return;
                    }
                }

                const participants = [
                    currentUser.uid,
                    ...selectedFriends.map((s) => s.uid),
                ];

                const chat = createChatObject({
                    chatName: groupTitle.trim(),
                    participants,
                });

                chatModel.events.createChat({
                    chat,
                    onSuccess: (chat) => {
                        navigate(`/chats/${chat.id}`);
                        modalModel.events.close();
                    },
                });
            }
        };
    };

    return (
        <CreateChatModalStyled>
            <AddEntitiesUI
                inputPlaceholder="Search for friends..."
                entities={friends}
                gap={4}
                renderItem={(user, checked, onClick) => {
                    return (
                        <UserItem
                            orientation="horizontal"
                            as="div"
                            user={user}
                            key={user.uid}
                            onClick={onClick}
                            showLastSeen
                        >
                            <Button $width="50px">
                                <CheckIcon type="checkbox" checked={checked} />
                            </Button>
                        </UserItem>
                    );
                }}
                renderButton={(addedFriends) => (
                    <>
                        {addedFriends.length > 1 && (
                            <Input
                                placeholder="Group title"
                                value={groupTitle}
                                onChange={(e) =>
                                    setGroupTitle(e.currentTarget.value)
                                }
                            />
                        )}
                        <DefaultButton
                            appearance="primary"
                            onClick={handleCreateChat(addedFriends)}
                            loading={isCreatingChat}
                        >
                            Create {addedFriends.length > 1 ? 'group' : 'chat'}
                            {addedFriends.length > 1 && (
                                <BadgeStyled className="white">
                                    {addedFriends.length}
                                </BadgeStyled>
                            )}
                        </DefaultButton>
                    </>
                )}
                initiallyAddedItems={[]}
            />
        </CreateChatModalStyled>
    );
};
