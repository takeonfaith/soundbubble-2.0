import { userModel } from '../../entities/user/model';
import { modalModel } from '../../layout/modal/model';
import { Button } from '../../shared/components/button';
import { SignUpModal } from '../signUpModal';

export const SignUpButton = () => {
    const [currentUser] = userModel.useUser();

    const handleOpenSignUp = () => {
        modalModel.events.open({
            title: 'Sign Up',
            content: <SignUpModal />,
        });
    };

    if (currentUser) return null;

    return (
        <Button onClick={handleOpenSignUp} $width="100px" className="outline">
            Sign up
        </Button>
    );
};
