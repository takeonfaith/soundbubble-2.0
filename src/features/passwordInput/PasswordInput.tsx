import { IconEye, IconEyeClosed, IconLock } from '@tabler/icons-react';
import { useState } from 'react';
import { Input } from '../../shared/components/input';

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
            label="Password"
            placeholder="Enter password"
            rightIcon={rightIcon}
            onRightIconClick={handleShowPassword}
            type={localType}
            icon={<IconLock />}
            {...props}
        />
    );
};
