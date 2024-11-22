import { userModel } from '../../entities/user/model';
import { UserPage } from '../user';

export const MePage = () => {
    const [currentUser, loading] = userModel.useUser();

    return <UserPage data={currentUser} loadingUser={loading} />;
};
