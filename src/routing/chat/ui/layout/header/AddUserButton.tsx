import { IconPlus } from '@tabler/icons-react';
import styled from 'styled-components';
import { Button } from '../../../../../shared/components/button';
import { modalModel } from '../../../../../layout/modal/model';
import { AddFriendsToChatModal } from './AddFriendsToChatModal';
import { TCache, TChat } from '../../../../../entities/chat/model/types';

const AddUserButtonStyled = styled(Button)`
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 6px;
    font-weight: 300;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    background: ${({ theme }) => theme.scheme.blue.transparent};
    color: ${({ theme }) => theme.scheme.blue.action};
`;

type Props = {
    chat: TChat;
    cache: TCache;
};

export const AddUserButton = ({ chat, cache }: Props) => {
    const handleAddFriends = () => {
        modalModel.events.open({
            title: 'Add friends',
            content: <AddFriendsToChatModal chat={chat} cache={cache} />,
				sizeY: 'l',
        });
    };

    return (
        <AddUserButtonStyled onClick={handleAddFriends}>
            <IconWrapper>
                <IconPlus />
            </IconWrapper>
            <span>Add members</span>
        </AddUserButtonStyled>
    );
};
