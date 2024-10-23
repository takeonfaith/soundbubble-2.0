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

const CreateChatModalStyled = styled.div`
    padding: 10px 20px;
`;

export const CreateChatModal = () => {
    const [friends] = userModel.useFriends();
    const [groupTitle, setGroupTitle] = useState('');

    const handleCreateChat = (selectedFriends: TUser[]) => {
        return () => {
            if (selectedFriends.length > 1) {
                if (groupTitle.trim().length === 0) {
                    toastModel.events.show({
                        message: 'Please enter a group title',
                        type: 'error',
                    });
                }
            }
        };
    };

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
                        >
                            Create {addedFriends.length > 1 ? 'group' : 'chat'}
                            {addedFriends.length > 1 && (
                                <BadgeStyled>{addedFriends.length}</BadgeStyled>
                            )}
                        </DefaultButton>
                    </>
                )}
                initiallyAddedItems={[]}
            />
        </CreateChatModalStyled>
    );
};
