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

const AddFriendsToChatModalStyled = styled.div`
    padding: 10px 20px;
    height: 100%;
`;

type Props = {
    chat: TChat;
    cache: TCache;
};

export const AddFriendsToChatModal = ({ chat, cache }: Props) => {
    const [friends] = userModel.useFriends();
    const [, isAddingFriends] = chatModel.useCurrentChat();

    const handleAddToChat = (addedFriends: TUser[]) => {
        return () => {};
    };

    return (
        <AddFriendsToChatModalStyled>
            <AddEntitiesUI
                entities={friends}
                initiallyAddedItems={chat.participants.map(
                    (p) => cache[p] as TUser
                )}
                inputPlaceholder={'Search for friends...'}
                renderItem={(user, checked, onClick, initiallyChecked) => {
                    return (
                        <UserItem
                            orientation="horizontal"
                            user={user}
                            key={user.uid}
                            as="button"
                            onClick={onClick}
                        >
                            <CheckIcon
                                checked={checked}
                                type={!initiallyChecked ? 'checkbox' : 'minus'}
                            />
                        </UserItem>
                    );
                }}
                renderButton={(addedFriends) => {
                    return (
                        <>
                            <DefaultButton
                                appearance="primary"
                                onClick={handleAddToChat(addedFriends)}
                                loading={isAddingFriends}
                            >
                                Add friends
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
