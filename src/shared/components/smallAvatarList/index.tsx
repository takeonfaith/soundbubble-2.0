import { TAuthor } from '../../../entities/song/model/types';
import { TUser } from '../../../entities/user/model/types';
import { UserCover } from '../../../entities/user/ui/UserCover';
import { SmallAvatarListStyled } from './styles';

type Props = {
    users: (TUser | TAuthor)[] | undefined;
    children?: React.ReactNode;
};

export const SmallAvatarList = ({ users, children }: Props) => {
    if (!users) return null;

    return (
        <SmallAvatarListStyled>
            {users?.slice(0, 2).map((user) => {
                return (
                    <UserCover
                        src={user.photoURL}
                        size={'20px'}
                        colors={'imageColors' in user ? user.imageColors : []}
                        isAuthor={false}
                    />
                );
            })}
            {children}
        </SmallAvatarListStyled>
    );
};
