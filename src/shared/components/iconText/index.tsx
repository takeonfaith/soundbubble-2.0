import React from 'react';
import { IconTextStyled, Icon, Text } from './styles';

type Props = {
    icon: React.ReactNode;
    text: React.ReactNode;
};

export const IconText = ({ icon, text }: Props) => {
    return (
        <IconTextStyled>
            {icon && <Icon>{icon}</Icon>}
            <Text>{text}</Text>
        </IconTextStyled>
    );
};
