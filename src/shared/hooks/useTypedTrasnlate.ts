import { useTranslation } from 'react-i18next';
import resources from '../../locales';

export const useTypedTrasnlate = () => {
    const { t } = useTranslation();

    return (
        keys: keyof (typeof resources)['en']['translation'],
        params?: object
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): string => t(keys, params as any) as string;
};
