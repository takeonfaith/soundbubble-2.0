import { modalModel } from '../../../layout/modal/model';
import { useEffectOnce } from '../../../shared/hooks/useEffectOnce';
import { FirstScreen } from '../ui/FirstScreen';

const ONBOARDING_KEY = 'onboarding';

export const useOnboarding = () => {
    const shouldShow = JSON.parse(
        localStorage.getItem(ONBOARDING_KEY) ?? 'true'
    ) as boolean;

    useEffectOnce(() => {
        if (shouldShow) {
            modalModel.events.open({
                title: '',
                content: <FirstScreen />,
            });
        }
    }, [shouldShow]);
};
