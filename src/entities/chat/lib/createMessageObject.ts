import getUID from '../../../shared/funcs/getUID';
import { SendStatus, TMessage } from '../model/types';

export const createMessageObject = (
    props: Partial<TMessage> & {
        sender: string;
        participants: string[];
    }
): TMessage => {
    const { participants, ...message } = props;
    return {
        id: getUID(),
        message: '',
        sentTime: new Date().getTime(),
        attachedAlbums: [],
        attachedSongs: [],
        attachedAuthors: [],
        inResponseToMessage: null,
        status: SendStatus.pending,
        unreadBy: participants.filter((p) => p !== props.sender),
        ...message,
    };
};
