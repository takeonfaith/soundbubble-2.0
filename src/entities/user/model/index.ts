import { useGate, useUnit } from 'effector-react';
import { createAuthor } from './create-author';
import { editUser } from './edit-user';
import { signUp } from './sign-up';
import {
    $user,
    $library,
    $ownPlaylists,
    $addedAuthors,
    $searchHistory,
    logout,
    setUser,
    addOwnPlaylistToLibrary,
    userGate,
    getUserPage,
    loadSimilarAuthors,
    loadUserData,
    resetUserPage,
    toggleAuthorLiked,
    $addedPlaylists,
    loadAddedAuthorsFx,
    loadAddedPlaylistsFx,
    loadLibraryFx,
    loadOwnPlaylistsFx,
    loadUserPageFx,
    $userPage,
    loadUserDataFx,
    toggleSongLiked,
    toggleOtherPlaylistLiked,
} from './user';
import { login, loginFx } from './login';
import { deleteAccount } from './delete-account';
import {
    $friends,
    $friendRequests,
    updateFriends,
    friendRequest,
    subscribeToFriendsFx,
    $awaiting,
    cancelFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    deleteFromFriends,
} from './friends';
import './update-online';

export const userModel = {
    useUser: () => useUnit([$user, loadUserDataFx.pending, loginFx.pending]),
    useSongLibrary: () => useUnit([$library, loadLibraryFx.pending]),
    useOwnPlaylists: () => useUnit([$ownPlaylists, loadOwnPlaylistsFx.pending]),
    useAddedPlaylists: () =>
        useUnit([$addedPlaylists, loadAddedPlaylistsFx.pending]),
    useAddedAuthors: () => useUnit([$addedAuthors, loadAddedAuthorsFx.pending]),
    useSearchHistory: () => useUnit($searchHistory),
    useUserPage: () => useUnit([$userPage, loadUserPageFx.pending]),
    useFriends: () =>
        useUnit([
            $friends,
            $friendRequests,
            $awaiting,
            subscribeToFriendsFx.pending,
        ]),
    events: {
        login,
        logout,
        loadSimilarAuthors,
        signUp,
        setUser,
        getUserPage,
        resetUserPage,
        updateFriends,
        addOwnPlaylistToLibrary,
        toggleSongLiked,
        toggleAuthorLiked,
        toggleOtherPlaylistLiked,
        loadUserData,
        friendRequest,
        deleteFromFriends,
        cancelFriendRequest,
        acceptFriendRequest,
        rejectFriendRequest,
        createAuthor,
        editUser,
        deleteAccount,
    },
    gates: {
        useLoadUser: () => useGate(userGate),
    },
};
