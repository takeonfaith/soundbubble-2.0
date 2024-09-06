import { userModel } from '../../entities/user/model';
import { UserPage } from '../user';

export const MePage = () => {
    const [{ data }] = userModel.useUser();
    console.log(data);

    return <UserPage data={data} />;
};
