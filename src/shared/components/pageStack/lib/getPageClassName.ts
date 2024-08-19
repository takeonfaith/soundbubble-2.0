import { TModal } from '../../../../layout/modal/model/types';

export const getPageClassName = (
    index: number,
    slidingBack: boolean,
    modals: TModal[]
) => {
    if (index < modals.length - 2) return 'vanish';

    if (slidingBack && index === modals.length - 1) return 'back';

    if (!slidingBack && index === modals.length - 2 && index !== 0)
        return 'slide back-prev';

    if (!slidingBack && index === modals.length - 2 && index === 0)
        return 'back-prev';

    if (index !== 0) return 'slide';

    return '';
};
