import { userModel } from '../../entities/user/model';
import { UserPage } from '../user';

export const MePage = () => {
    const [currentUser] = userModel.useUser();

    return <UserPage data={currentUser} />;
};
