import styled from 'styled-components';
import { userModel } from '../../entities/user/model';
import { UserItem } from '../../entities/user/ui';
import { AddEntitiesUI } from '../addEntitiesUI';
import { CheckIcon } from '../../shared/components/checkIcon';
import { Input } from '../../shared/components/input';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { BadgeStyled } from '../shareModal/styles';

const CreateChatModalStyled = styled.div`
    padding: 10px 25px;
`;

export const CreateChatModal = () => {
    const [friends] = userModel.useFriends();

    const handleCreateChat = () => {};

    return (
        <CreateChatModalStyled>
            <AddEntitiesUI
                inputPlaceholder="Search for friends..."
                entities={friends}
                renderItem={(user, checked, onClick) => {
                    return (
                        <UserItem
                            orientation="horizontal"
                            as="div"
                            user={user}
                            key={user.uid}
                            onClick={onClick}
                        >
                            <CheckIcon checked={checked} />
                        </UserItem>
                    );
                }}
                renderButton={(addedFriends) => (
                    <>
                        {addedFriends.length > 1 && (
                            <Input placeholder="Chat Title" />
                        )}
                        <DefaultButton
                            appearance="primary"
                            onClick={handleCreateChat}
                        >
                            Create {addedFriends.length > 1 ? 'group' : 'chat'}
                            <BadgeStyled>{addedFriends.length}</BadgeStyled>
                        </DefaultButton>
                    </>
                )}
            />
        </CreateChatModalStyled>
    );
};
