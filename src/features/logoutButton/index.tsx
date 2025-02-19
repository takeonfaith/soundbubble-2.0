import { IconLogout } from '@tabler/icons-react';
import { userModel } from '../../entities/user/model';
import { translate } from '../../i18n';
import { confirmModel } from '../../layout/confirm/model';
import { Button } from '../../shared/components/button';

export const LogoutButton = () => {
    const handleLogout = () => {
        confirmModel.events.open({
            text: translate('logout_warning_title'),
            onAccept: () => {
                userModel.events.logout();
            },
            icon: <IconLogout />,
            iconColor: 'red',
        });
    };

    return (
        <Button onClick={handleLogout}>
            <IconLogout />
            {translate('logout')}
        </Button>
    );
};
