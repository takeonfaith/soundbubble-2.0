import { IconMessageCircleSearch } from '@tabler/icons-react';
import { chatModel } from '../../../../entities/chat/model';
import { PageMessage } from '../../../../shared/components/pageMessage';
import { ChatBottom } from './ChatBottom';
import { ChatMessages } from './ChatMessages';
import { ChatHeader } from './header/ChatHeader';
import { ChatDialogStyled } from './styles';

export const ChatDialog = () => {
    const [currentChat] = chatModel.useCurrentChat();

    if (!currentChat)
        return (
            <PageMessage
                description="Perhaps it was deleted"
                icon={IconMessageCircleSearch}
                title="Chat was not found"
            />
        );

    return (
        <ChatDialogStyled>
            <ChatHeader />
            <ChatMessages />
            <ChatBottom />
        </ChatDialogStyled>
    );
};
