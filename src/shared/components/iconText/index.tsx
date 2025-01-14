import React from 'react';
import { IconTextStyled, Icon, Text } from './styles';

type Props = {
    icon: React.ReactNode;
    text: React.ReactNode;
};

export const IconText = ({ icon, text }: Props) => {
    return (
        <IconTextStyled className='icon-text'>
            {icon && <Icon className='icon'>{icon}</Icon>}
            <Text className="text">{text}</Text>
        </IconTextStyled>
    );
};
