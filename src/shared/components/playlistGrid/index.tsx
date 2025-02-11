import React from 'react';
import { PlaylistGridStyled } from './styles';
import { TPlaylist } from '../../../entities/playlist/model/types';
import { PlaylistItem } from '../../../entities/playlist/ui';
import { userModel } from '../../../entities/user/model';

type Props = {
    playlists: Nullable<TPlaylist[]>;
    children?: React.ReactNode;
};

export const PlaylistGrid = ({ playlists, children }: Props) => {
    const [currentUser] = userModel.useUser();
    if (!playlists || !playlists.length) return null;

    return (
        <PlaylistGridStyled>
            {children}
            {playlists.map((playlist) => {
                const isAuthor = currentUser
                    ? playlist.authorIds.includes(currentUser.uid)
                    : false;

                return (
                    <PlaylistItem
                        key={playlist.id}
                        playlist={playlist}
                        isAuthor={isAuthor}
                    />
                );
            })}
        </PlaylistGridStyled>
    );
};
