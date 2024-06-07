import { TMessage } from '../../../entities/chat/model/types';

export const prepareMessages = (messages: TMessage[] | undefined) => {
    let currentIndex = 0;
    if (!messages) return [];

    return messages?.reduce((acc, message, i) => {
        const prev = messages[i - 1];
        const isPrevByTheSameSender = prev?.sender === message?.sender;
        const timeDifferenceLessThenTenMinutes =
            new Date(message?.sentTime ?? '').getTime() -
                new Date(prev?.sentTime ?? '').getTime() <
            600_000;

        if (isPrevByTheSameSender && timeDifferenceLessThenTenMinutes) {
            if (acc[currentIndex]) {
                acc[currentIndex].push(message);
            } else {
                acc[currentIndex] = [message];
            }
        } else {
            currentIndex += 1;
            acc[currentIndex] = [message];
        }

        return acc;
    }, [] as TMessage[][]);
};
