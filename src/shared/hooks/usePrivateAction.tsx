import { LoginModal } from 'features/loginModal';
import { modalModel } from 'layout/modal/model';
import { userModel } from '../../entities/user/model';

export const usePrivateAction = () => {
    const [{ data }] = userModel.useUser();

    const openLoginModal =
        <T extends (params: unknown[]) => unknown>(fn?: T) =>
        () => {
            modalModel.events.open({
                title: 'Log in',
                content: <LoginModal actionAfterLogin={fn} />,
            });
        };

    const loggedIn = <T extends (params: unknown[]) => unknown>(fn: T) => {
        if (data === null) {
            return openLoginModal(fn);
        }

        return fn;
    };

    return { loggedIn, openLoginModal };
};
