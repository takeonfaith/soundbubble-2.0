const IS_DEV = import.meta.env.DEV;
import IconGmail from '../icons/gmail.svg';
import IconYahoo from '../icons/yahoo-square-icon.webp';
import IconYandex from '../icons/yandex.svg';
import IconMailRu from '../icons/mail_ru_logo_icon_147267.webp';
import IconOutlook from '../icons/outlook.svg';
import { Logo } from '../../../shared/components/logo';

export const getEmailProviders = () => {
    const emailProviders = [
        { fullName: 'gmail.com', icon: <img src={IconGmail} loading="lazy" /> },
        { fullName: 'yahoo.com', icon: <img src={IconYahoo} loading="lazy" /> },
        {
            fullName: 'outlook.com',
            icon: <img src={IconOutlook} loading="lazy" alt="" />,
        },
        {
            fullName: 'yandex.ru',
            icon: <img src={IconYandex} loading="lazy" />,
        },
        { fullName: 'mail.ru', icon: <img src={IconMailRu} loading="lazy" /> },
    ];

    if (IS_DEV) {
        emailProviders.unshift({
            fullName: 'temp.temp',
            icon: <Logo short />,
        });
    }

    return emailProviders;
};
