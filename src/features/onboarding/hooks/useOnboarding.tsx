import { useEffect } from 'react';
import { userModel } from '../../../entities/user/model';
import { modalModel } from '../../../layout/modal/model';
import { FirstScreen } from '../ui/FirstScreen';
import { ONBOARDING_KEY } from '../constants';

export const useOnboarding = () => {
    const [currentUser] = userModel.useUser();
    const shouldShow =
        !!currentUser &&
        !(JSON.parse(
            localStorage.getItem(ONBOARDING_KEY) ?? 'false'
        ) as boolean);

    useEffect(() => {
        if (shouldShow) {
            modalModel.events.open({
                title: '',
                content: <FirstScreen />,
            });
        }
    }, [currentUser, shouldShow]);
};
