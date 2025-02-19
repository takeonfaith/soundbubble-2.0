import { IconEye, IconEyeClosed, IconLock } from '@tabler/icons-react';
import { useState } from 'react';
import { Input } from '../../shared/components/input';
import { translate } from '../../i18n';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
};

export const PasswordInput = (props: Props) => {
    const [localType, setLocalType] = useState('password');
    const rightIcon =
        localType === 'password' ? <IconEyeClosed /> : <IconEye />;

    const handleShowPassword = () => {
        setLocalType((prev) => (prev === 'password' ? 'text' : 'password'));
    };

    return (
        <Input
            label={translate('password')}
            placeholder={translate('enter_password')}
            rightIcon={rightIcon}
            onRightIconClick={handleShowPassword}
            type={localType}
            icon={<IconLock />}
            {...props}
        />
    );
};
