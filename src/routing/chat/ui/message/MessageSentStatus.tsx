import { IconCheck, IconChecks, IconClock } from '@tabler/icons-react';
import { LocalSendStatus } from '../../../../entities/chat/model/types';

type Props = {
    isMine: boolean;
    sendStatus: LocalSendStatus | undefined;
};

export const MessageSentStatus = ({ isMine, sendStatus }: Props) => {
    if (!isMine) return null;

    if (sendStatus === LocalSendStatus.error) return null;

    if (sendStatus === LocalSendStatus.pending) return <IconClock size={16} />;

    if (sendStatus === LocalSendStatus.sent) return <IconCheck size={18} />;

    return <IconChecks size={18} />;
};
