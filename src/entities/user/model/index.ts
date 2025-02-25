import { useUnit } from 'effector-react';
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
import { $isLoadingUser, loadUserData, setUser } from './init';
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

export const userModel = {
    useUser: () => useUnit([$user, $isLoadingUser, loginFx.pending]),
    useSongLibrary: () => useUnit([$library, loadLibraryFx.pending]),
    useOwnPlaylists: () => useUnit([$ownPlaylists, loadOwnPlaylistsFx.pending]),
    useAddedPlaylists: () =>
        useUnit([$addedPlaylists, loadAddedPlaylistsFx.pending]),
    useAddedAuthors: () => useUnit([$addedAuthors, loadAddedAuthorsFx.pending]),
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
        signUp,
        setUser,
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
