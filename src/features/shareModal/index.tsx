/* eslint-disable @typescript-eslint/no-unused-vars */
import { chatModel } from '../../entities/chat/model';
import { ChatItem } from '../../entities/chat/ui/ChatItem';
import { TEntity } from '../../entities/search/model/types';
import { ChatsSkeleton } from '../../routing/chat/ChatsSkeleton';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { CheckIcon } from '../../shared/components/checkIcon';
import { Flex } from '../../shared/components/flex';
import { Input } from '../../shared/components/input';
import { SkeletonPageAnimation } from '../../shared/components/skeleton/SkeletonPageAnimation';
import { AddEntitiesUI } from '../addEntitiesUI';
import { BadgeStyled } from './styles';

type Props = {
    entity: TEntity | null;
};

// eslint-disable-next-line no-empty-pattern
export const ShareModal = ({}: Props) => {
    const { chats, chatData, loadingChats } = chatModel.useChats();

    const handleShare = (_addedChats: string[]) => {
        // chatModel.events.sendMessage({})
    };

    chatModel.useLoadChats();

    return (
        <Flex d="column" width="100%" height="100%" padding="0 25px">
            <SkeletonPageAnimation
                loading={loadingChats}
                skeleton={<ChatsSkeleton />}
            >
                <AddEntitiesUI
                    inputPlaceholder="Search for friends..."
                    entities={chats}
                    renderItem={(chat, checked, onClick) => {
                        return (
                            <ChatItem
                                size="s"
                                chat={chat}
                                key={chat.id}
                                chatData={chatData}
                                onClick={onClick}
                                lastMessage={undefined}
                                unreadCount={0}
                                isSelected={false}
                            >
                                <CheckIcon checked={checked} />
                            </ChatItem>
                        );
                    }}
                    renderButton={(addedChats) => (
                        <>
                            <Input placeholder="Your Message" />
                            <DefaultButton
                                appearance="primary"
                                onClick={() => handleShare(addedChats)}
                            >
                                Send
                                <BadgeStyled>{addedChats.length}</BadgeStyled>
                            </DefaultButton>
                        </>
                    )}
                />
            </SkeletonPageAnimation>
        </Flex>
    );
};
