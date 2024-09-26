import { ChatBottom } from './ChatBottom';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatDialogStyled } from './styles';

// const MessageItemSkeleton = () => {
// 	return <Flex gap={16} ai="flex-end">
// 		<SkeletonShape minWidth="35px" width="35px" height="35px" radius="100%" />
// 		<SkeletonShape width="fit-content" height="60px" radius="8px 16px 16px 8px">
// 			<Flex gap={4} padding="12px" d="column" ai="flex-start">
// 				<SkeletonShape width="200px" height="12px" />
// 				<SkeletonShape width="80px" height="10px" />
// 			</Flex>
// 		</SkeletonShape >
// 	</Flex>
// }

// const ChatDialogSkeleton = () => {
// 	return <Flex d="column" ai="flex-start" width="100%" height="100%" padding="20px" gap={10}>
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 		<MessageItemSkeleton />
// 	</Flex>
// }

export const ChatDialog = () => {
    return (
        <ChatDialogStyled>
            <ChatHeader />
            <ChatMessages />
            <ChatBottom />
        </ChatDialogStyled>
    );
};
