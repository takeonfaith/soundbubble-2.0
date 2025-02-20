import { userModel } from '../../entities/user/model';
import { translate } from '../../i18n';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { SignUpModal } from '../signUpModal';

export const SignUpButton = () => {
    const [currentUser] = userModel.useUser();

    const handleOpenSignUp = () => {
        modalModel.events.open({
            title: translate('sign_up'),
            content: <SignUpModal />,
        });
    };

    if (currentUser) return null;

    return (
        <Button onClick={handleOpenSignUp} className="outline default">
            {translate('sign_up')}
        </Button>
    );
};
