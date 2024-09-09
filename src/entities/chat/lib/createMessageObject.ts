import getUID from '../../../shared/funcs/getUID';
import { TMessage } from '../model/types';

export const createMessageObject = (
    userId: string,
    props: Partial<TMessage>
): TMessage => {
    return {
        id: getUID(),
        sender: userId,
        message: props.message ?? '',
        sentTime: new Date().getTime(),
        seenBy: [userId],
        attachedAlbums: [],
        attachedSongs: [],
        attachedAuthors: [],
        inResponseToMessage: '',
        status: 'pending',
        ...props,
    };
};
