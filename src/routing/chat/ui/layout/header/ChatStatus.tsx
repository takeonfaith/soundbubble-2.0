import { TUser } from '../../../../../entities/user/model/types';
import { UserStatus } from '../../../../../entities/user/ui/UserStatus';
import { Subtext } from '../../../../../shared/components/subtext';
import { ChatTypingIndicator } from '../ChatTypingIndicator';

type Props = {
    isGroupChat: boolean;
    typing: TUser[];
    membersOnline: number;
    participants: string[] | undefined;
    statuses: string[];
};

export const ChatStatus = ({
    membersOnline,
    typing,
    isGroupChat,
    participants,
    statuses,
}: Props) => {
    return (
        <ChatTypingIndicator typing={typing} isGroupChat={isGroupChat}>
            {isGroupChat ? (
                <Subtext>
                    {participants?.length
                        ? `${participants.length} members`
                        : null}
                    {membersOnline !== 0 && `, ${membersOnline} online`}
                </Subtext>
            ) : (
                <UserStatus
                    isAuthor={false}
                    showLastSeen
                    status={statuses[0]}
                />
            )}
        </ChatTypingIndicator>
    );
};
