import { IconLogin } from '@tabler/icons-react';
import { userModel } from '../../entities/user/model';
import { translate } from '../../i18n';
import { Button } from '../../shared/components/button';
import { usePrivateAction } from '../../shared/hooks/usePrivateAction';

export const LoginButton = () => {
    const { openLoginModal } = usePrivateAction();
    const [currentUser] = userModel.useUser();

    if (currentUser) return null;

    return (
        <Button
            onClick={openLoginModal()}
            style={{ color: '#fff' }}
            className="primary default"
        >
            {translate('login')}
            <IconLogin size={18} />
        </Button>
    );
};
