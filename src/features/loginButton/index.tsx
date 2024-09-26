import { IconLogin } from '@tabler/icons-react';
import { userModel } from '../../entities/user/model';
import { DefaultButton } from '../../shared/components/button/DefaultButton';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';

export const LoginButton = () => {
    const { openLoginModal } = usePrivateAction();
    const [currentUser, loading] = userModel.useUser();

    if (currentUser) return null;

    return (
        <DefaultButton
            loading={loading}
            width="100px"
            onClick={openLoginModal()}
            appearance="primary"
        >
            Login
            <IconLogin size={18} />
        </DefaultButton>
    );
};
