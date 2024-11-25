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
    $friends,
    logout,
    setUser,
    addOwnPlaylistToLibrary,
    userGate,
    acceptFriendRequest,
    getUserPage,
    loadSimilarAuthors,
    loadUserData,
    rejectFriendRequest,
    resetUserPage,
    toggleAuthorLiked,
    updateFriends,
    $addedPlaylists,
    loadAddedAuthorsFx,
    loadAddedPlaylistsFx,
    loadFriendsFx,
    loadLibraryFx,
    loadOwnPlaylistsFx,
    loadUserPageFx,
    $userPage,
    loadUserDataFx,
    toggleSongLiked,
    friendRequest,
    toggleOtherPlaylistLiked,
    $friendRequests,
} from './user';
import { login, loginFx } from './login';
import { deleteAccount } from './delete-account';

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
        useUnit([$friends, $friendRequests, loadFriendsFx.pending]),
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
        friendRequest,
        loadUserData,
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
