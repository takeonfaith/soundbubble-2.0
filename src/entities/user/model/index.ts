import { useUnit } from 'effector-react';
import {
    authorPage,
    getAuthorPageById,
    loadSimilarAuthors,
    resetUserPage,
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
import { loadUserData, loadUserDataFx, setUser } from './init';
import {
    $addedAuthors,
    loadAddedAuthorsFx,
    toggleAuthorLiked,
} from './library/authors';
import {
    $addedPlaylists,
    $ownPlaylists,
    addOwnPlaylistToLibrary,
    loadAddedPlaylistsFx,
    loadOwnPlaylistsFx,
    toggleOtherPlaylistLiked,
} from './library/playlists';
import { $library, loadLibraryFx, toggleSongLiked } from './library/songs';
import { login, loginFx } from './login';
import { logout } from './logout';
import { resetPassword } from './reset-password';
import { signUp } from './sign-up';
import './update-online';
import { $user } from './user';
import { getUserPageById, userPage } from './user-page';

export const userModel = {
    useUser: () => useUnit([$user, loadUserDataFx.pending, loginFx.pending]),
    useSongLibrary: () => useUnit([$library, loadLibraryFx.pending]),
    useOwnPlaylists: () => useUnit([$ownPlaylists, loadOwnPlaylistsFx.pending]),
    useAddedPlaylists: () =>
        useUnit([$addedPlaylists, loadAddedPlaylistsFx.pending]),
    useAddedAuthors: () => useUnit([$addedAuthors, loadAddedAuthorsFx.pending]),
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
};
