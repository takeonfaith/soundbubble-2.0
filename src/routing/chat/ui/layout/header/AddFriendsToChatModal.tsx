import { styled } from 'styled-components';
import { chatModel } from '../../../../../entities/chat/model';
import { TCache, TChat } from '../../../../../entities/chat/model/types';
import { userModel } from '../../../../../entities/user/model';
import { TUser } from '../../../../../entities/user/model/types';
import { UserItem } from '../../../../../entities/user/ui';
import { AddEntitiesUI } from '../../../../../features/addEntitiesUI';
import { BadgeStyled } from '../../../../../features/shareModal/styles';
import { DefaultButton } from '../../../../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../../../../shared/components/checkIcon';
import { useUnit } from 'effector-react';
import { Button } from '../../../../../shared/components/button';
import { modalModel } from '../../../../../layout/modal/model';
import { editChatFx } from '../../../../../entities/chat/model/chat-editing';

const AddFriendsToChatModalStyled = styled.div`
    padding: 10px 20px;
    height: 100%;
`;

type Props = {
    chat: TChat;
    cache: TCache;
};

export const AddFriendsToChatModal = ({ chat }: Props) => {
    const [friends] = userModel.useFriends();
    const isEditing = useUnit(editChatFx.pending);

    const handleAddToChat = (addedFriends: TUser[]) => {
        return () => {
            chatModel.events.editChat({
                chat,
                update: {
                    participants: [
                        ...chat.participants,
                        ...addedFriends.map((f) => f.uid),
                    ],
                },
                onSuccess: () => {
                    modalModel.events.close();
                },
            });
        };
    };

    return (
        <AddFriendsToChatModalStyled>
            <AddEntitiesUI
                entities={friends}
                initiallyAddedItems={[]}
                inputPlaceholder={'Search for friends...'}
                renderItem={(user, checked, onClick) => {
                    const initiallyChecked = chat.participants.includes(
                        user.uid
                    );

                    return (
                        <UserItem
                            orientation="horizontal"
                            user={user}
                            key={user.uid}
                            as="button"
                            onClick={onClick}
                            showLastSeen
                            disabled={initiallyChecked}
                        >
                            {!initiallyChecked && (
                                <Button $width="50px">
                                    <CheckIcon
                                        checked={checked}
                                        type={'plus'}
                                    />
                                </Button>
                            )}
                        </UserItem>
                    );
                }}
                renderButton={(addedFriends) => {
                    return (
                        <>
                            <DefaultButton
                                appearance="primary"
                                onClick={handleAddToChat(addedFriends)}
                                loading={isEditing}
                            >
                                Add to chat
                                {addedFriends.length > 1 && (
                                    <BadgeStyled>
                                        {addedFriends.length}
                                    </BadgeStyled>
                                )}
                            </DefaultButton>
                        </>
                    );
                }}
            />
        </AddFriendsToChatModalStyled>
    );
};
