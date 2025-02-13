import { createUserObject } from '../../../user/lib/createUserObject';
import { UserItem } from '../../../user/ui';
import { TAuthor } from '../../model/types';
import { AddToPlaylistsContextMenuStyled } from './styles';

type Props = {
    authors: TAuthor[];
};

export const AuthorsContextMenu = ({ authors }: Props) => {
    return (
        <AddToPlaylistsContextMenuStyled>
            {authors.map((author) => (
                <UserItem
                    user={createUserObject({ ...author, isAuthor: true })}
                    key={author.uid}
                    orientation="horizontal"
                />
            ))}
        </AddToPlaylistsContextMenuStyled>
    );
};
