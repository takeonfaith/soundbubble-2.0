import { TMessage } from '../../../entities/chat/model/types';
import { TIME_IN_MS } from '../../../shared/constants/time';

export const prepareMessages = (messages: TMessage[] | undefined) => {
    let currentIndex = 0;
    if (!messages) return [];

    return messages?.reduce((acc, message, i) => {
        const prev = messages[i - 1];
        const isPrevByTheSameSender = prev?.sender === message?.sender;
        const timeDifferenceLessThenTenMinutes =
            new Date(message?.sentTime ?? '').getTime() -
                new Date(prev?.sentTime ?? '').getTime() <
            10 * TIME_IN_MS.minute;

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
