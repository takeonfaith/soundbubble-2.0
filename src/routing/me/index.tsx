import { userModel } from '../../entities/user/model';
import { AuthorPage } from '../author';

export const MePage = () => {
    const [{ data }] = userModel.useUser();

    return <AuthorPage userData={data} />;
};
