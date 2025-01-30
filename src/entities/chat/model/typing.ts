import { createEffect, createEvent, createStore, sample } from 'effector';
import { Database } from '../../../database';
import { $user } from '../../user/model/user';
import { $currentChatId } from './chats';

type UpdateTypingProps = { userId: string; chatId: string; isTyping: boolean };

const updateIsTypingFx = createEffect<UpdateTypingProps, void, Error>();

export const updateIsTyping = createEvent<boolean>();

sample({
    clock: updateIsTyping,
    source: { user: $user, chatId: $currentChatId },
    filter: ({ user, chatId }) => !!user && !!chatId,
    fn: ({ user, chatId }, isTyping) => ({
        userId: user!.uid,
        chatId: chatId!,
        isTyping,
    }),
    target: updateIsTypingFx,
});

export const $amITyping = createStore(false);

sample({
    clock: updateIsTyping,
    target: $amITyping,
});

updateIsTypingFx.use(async ({ userId, chatId, isTyping }) => {
    await Database.Chats.updateIsTyping(userId, chatId, isTyping);
});
