/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginModal } from 'features/loginModal';
import { modalModel } from 'layout/modal/model';
import { userModel } from '../../entities/user/model';

export const usePrivateAction = () => {
    const [{ data }] = userModel.useUser();

    const openLoginModal =
        <T extends (params: any[]) => unknown>(fn?: T) =>
        () => {
            modalModel.events.open({
                title: '',
                content: (
                    <LoginModal
                        actionAfterLogin={fn}
                        title={fn ? 'Log in to your account first' : undefined}
                    />
                ),
                sizeY: 's',
                sizeX: 'l',
            });
        };

    const loggedIn = <T extends (params: any) => unknown>(fn: T) => {
        if (data === null) {
            return openLoginModal(fn);
        }

        return fn;
    };

    return { loggedIn, openLoginModal };
};
