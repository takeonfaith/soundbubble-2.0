import { createEffect, createEvent, createStore, sample } from 'effector';
import { Unsubscribe } from 'firebase/firestore';
import { Database } from '../../../database';
import { createEffectWithToast } from '../../../shared/effector/createEffectWithToast';
import { setUser } from './init';
import { FriendStatus, TUser } from './types';
import { $user } from './user';

// const createSubscriptionEffect = () => {
//     const effect = createEffect();
//     let unsubscribe: Unsubscribe | null = null;
// };

export let unsubscribeFromFriends: Unsubscribe | null = null;

type FriendQueryProps = {
    userId: string;
    friend: TUser;
};

export const updateFriendsFn = (
    users: TUser[],
    friendStatuses: { uid: string; status: FriendStatus }[]
) => {
    const { addedFriends, friendRequests, awaiting } = users.reduce(
        (acc, user) => {
            const userStatus = friendStatuses.find(
                (s) => s.uid === user.uid
            )?.status;
            if (userStatus === FriendStatus.added) {
                acc.addedFriends.push(user);
            }

            if (userStatus === FriendStatus.requested) {
                acc.friendRequests.push(user);
            }

            if (userStatus === FriendStatus.awaiting) {
                acc.awaiting.push(user);
            }

            return acc;
        },
        {
            addedFriends: [] as TUser[],
            friendRequests: [] as TUser[],
            awaiting: [] as TUser[],
        }
    );

    updateFriends(addedFriends);
    updateFriendRequests(friendRequests);
    updateAwaiting(awaiting);
};

export const acceptFriendRequestFx = createEffectWithToast<
    FriendQueryProps,
    TUser
>('Friend request accepted', 'Failed to accept friend request');

export const rejectFriendRequestFx = createEffectWithToast<
    FriendQueryProps,
    void
>('Friend request rejected', 'Failed to reject friend request');

export const deleteFromFriendsFx = createEffectWithToast<
    FriendQueryProps,
    string
>('Deleted from friends', 'Failed to delete from friends');

export const subscribeToFriendsFx = createEffect<TUser, void>();

export const subscribeToFriendListFx = createEffect<TUser, void>();

export const friendRequestFx = createEffectWithToast<
    { userId: string; friend: TUser; onSuccess?: () => void },
    TUser
>('Friendship request sent', 'Failed to send friend request');

export const cancelFriendRequestFx = createEffectWithToast<
    { userId: string; friendId: string; onSuccess?: () => void },
    string
>('Friend request canceled', 'Failed to cancel friend request');

export const friendRequest = createEvent<{
    friend: TUser;
    onSuccess?: () => void;
}>();
export const cancelFriendRequest = createEvent<{
    friendId: string;
    onSuccess?: () => void;
}>();

export const acceptFriendRequest = createEvent<TUser>();
export const rejectFriendRequest = createEvent<TUser>();
export const deleteFromFriends = createEvent<TUser>();

export const updateFriends = createEvent<TUser[]>();
export const updateFriendRequests = createEvent<TUser[]>();
export const updateAwaiting = createEvent<TUser[]>();

export const $friends = createStore<TUser[]>([]);
export const $friendRequests = createStore<TUser[]>([]);
export const $awaiting = createStore<TUser[]>([]);

sample({
    clock: setUser,
    target: [subscribeToFriendListFx, subscribeToFriendsFx],
});

sample({
    clock: friendRequest,
    source: { user: $user },
    filter: ({ user }) => !!user,
    fn: ({ user }, { friend, onSuccess }) => ({
        userId: user?.uid as string,
        friend,
        onSuccess,
    }),
    target: friendRequestFx,
});

sample({
    clock: friendRequestFx.doneData,
    source: $friendRequests,
    fn: (friends, potential) => [...friends, potential],
    target: $friendRequests,
});

sample({
    clock: updateFriends,
    fn: (friends) => friends,
    target: $friends,
});

sample({
    clock: updateFriendRequests,
    fn: (friends) => friends,
    target: $friendRequests,
});

sample({
    clock: updateAwaiting,
    fn: (friends) => friends,
    target: $awaiting,
});

sample({
    clock: cancelFriendRequest,
    source: $user,
    filter: Boolean,
    fn: (user, { friendId, onSuccess }) => ({
        userId: user.uid,
        friendId,
        onSuccess,
    }),
    target: cancelFriendRequestFx,
});

sample({
    clock: cancelFriendRequestFx.doneData,
    source: $friendRequests,
    fn: (requests, friendId) => requests.filter((f) => f.uid !== friendId),
    target: $friendRequests,
});

sample({
    clock: cancelFriendRequestFx.doneData,
    source: $user,
    filter: Boolean,
    fn: (user, friendId) => ({
        ...user,
        friends: user?.friends?.filter((f) => f.uid !== friendId),
    }),
    target: $user,
});

sample({
    clock: acceptFriendRequest,
    source: $user,
    filter: Boolean,
    fn: (user, friend) => ({ userId: user!.uid, friend }),
    target: acceptFriendRequestFx,
});

sample({
    clock: rejectFriendRequest,
    source: $user,
    filter: Boolean,
    fn: (user, friend) => ({ userId: user!.uid, friend }),
    target: rejectFriendRequestFx,
});

sample({
    clock: deleteFromFriends,
    source: $user,
    filter: Boolean,
    fn: (user, friend) => ({ userId: user.uid, friend }),
    target: deleteFromFriendsFx,
});

subscribeToFriendListFx.use(async (user) => {
    await Database.Users.listenToUsersChanges(
        [user.uid],
        async (updatedUser) => {
            if (updatedUser[0].friends !== undefined) {
                const friends = await Database.Users.getUsersByUids(
                    updatedUser[0].friends?.map((f) => f.uid)
                );
                updateFriendsFn(friends, updatedUser[0].friends);
            }
        }
    );
});

subscribeToFriendsFx.use(async (user: TUser) => {
    try {
        const friendIds = user?.friends ?? [];
        const friends = friendIds.map((friend) => friend.uid) ?? [];

        unsubscribeFromFriends = await Database.Users.listenToUsersChanges(
            friends,
            (users) => {
                return updateFriendsFn(users, friendIds);
            }
        );
    } catch (error) {
        throw new Error('Failed to load user friends');
    }
});

friendRequestFx.use(async ({ userId, friend, onSuccess }) => {
    await Database.Users.friendRequest(userId, friend.uid);
    onSuccess?.();
    return friend;
});

cancelFriendRequestFx.use(async ({ userId, friendId, onSuccess }) => {
    await Database.Users.cancelFriendRequest(userId, friendId);
    onSuccess?.();
    return friendId;
});

acceptFriendRequestFx.use(async ({ userId, friend }) => {
    await Database.Users.acceptFriendRequest(userId, friend.uid);
    return friend;
});

rejectFriendRequestFx.use(async ({ userId, friend }) => {
    await Database.Users.rejectFriendRequest(userId, friend.uid);
});

deleteFromFriendsFx.use(async ({ userId, friend }) => {
    await Database.Users.deleteFromFriends(userId, friend.uid);
    return friend.uid;
});
