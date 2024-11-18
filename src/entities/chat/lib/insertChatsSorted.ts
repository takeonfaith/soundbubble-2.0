import { TChat } from '../model/types';

export function insertChatsSorted(chats: TChat[], newChats: TChat[]): TChat[] {
    const mergedArray: TChat[] = [];
    let i = 0,
        j = 0;

    while (i < chats.length && j < newChats.length) {
        if (
            (chats[i]?.lastMessage?.sentTime ?? 0) >
            (newChats[j]?.lastMessage?.sentTime ?? 0)
        ) {
            mergedArray.push(chats[i]);
            i++;
        } else {
            mergedArray.push(newChats[j]);
            j++;
        }
    }

    // Append any remaining items from chats
    while (i < chats.length) {
        mergedArray.push(chats[i]);
        i++;
    }

    // Append any remaining items from newChats
    while (j < newChats.length) {
        mergedArray.push(newChats[j]);
        j++;
    }

    return mergedArray;
}
