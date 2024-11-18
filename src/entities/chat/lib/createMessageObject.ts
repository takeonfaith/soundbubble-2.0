import { SendStatus, TMessage } from '../model/types';

export const createMessageObject = (
    props: Partial<TMessage> & {
        id: string;
        sender: string;
        participants: string[];
    }
): TMessage => {
    const { participants, ...message } = props;
    return {
        message: '',
        sentTime: new Date().getTime(),
        attachedAlbums: [],
        attachedSongs: [],
        attachedAuthors: [],
        inResponseToMessage: null,
        status: SendStatus.pending,
        unreadBy: participants.filter((p) => p !== props.sender),
        isRead: false,
        ...message,
    };
};
