import { useGate, useUnit } from 'effector-react';
import {
    getAuthorPageById,
    loadSimilarAuthors,
    resetUserPage,
    authorPage,
} from './author-page';
import { createAuthor } from './create-author';
import { deleteAccount } from './delete-account';
import { editUser } from './edit-user';
import {
    $awaiting,
    $friendRequests,
    $friends,
    acceptFriendRequest,
    cancelFriendRequest,
    deleteFromFriends,
    friendRequest,
    rejectFriendRequest,
    subscribeToFriendsFx,
    updateFriends,
} from './friends';
import { login, loginFx } from './login';
import { resetPassword } from './reset-password';
import { signUp } from './sign-up';
import './update-online';
import {
    $addedAuthors,
    $addedPlaylists,
    $library,
    $ownPlaylists,
    $searchHistory,
    $user,
    addOwnPlaylistToLibrary,
    loadAddedAuthorsFx,
    loadAddedPlaylistsFx,
    loadLibraryFx,
    loadOwnPlaylistsFx,
    loadUserData,
    loadUserDataFx,
    logout,
    setUser,
    toggleAuthorLiked,
    toggleOtherPlaylistLiked,
    toggleSongLiked,
    userGate,
} from './user';
import { getUserPageById, userPage } from './user-page';

export const userModel = {
    useUser: () => useUnit([$user, loadUserDataFx.pending, loginFx.pending]),
    useSongLibrary: () => useUnit([$library, loadLibraryFx.pending]),
    useOwnPlaylists: () => useUnit([$ownPlaylists, loadOwnPlaylistsFx.pending]),
    useAddedPlaylists: () =>
        useUnit([$addedPlaylists, loadAddedPlaylistsFx.pending]),
    useAddedAuthors: () => useUnit([$addedAuthors, loadAddedAuthorsFx.pending]),
    useSearchHistory: () => useUnit($searchHistory),
    authorPage,
    userPage,
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
        getUserPageById,
        getAuthorPageById,
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
        resetPassword,
    },
    gates: {
        useLoadUser: () => useGate(userGate),
    },
};
