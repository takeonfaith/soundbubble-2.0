import {
    IconAlertTriangle,
    IconCircleCheck,
    IconExclamationCircle,
    IconInfoCircle,
} from '@tabler/icons-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { MessageStyled } from './styles';

type MessageType = 'error' | 'warning' | 'info' | 'success';

type Props = {
    children: React.ReactNode;
    type: MessageType;
};

type MessageData = {
    [key in MessageType]: {
        color: 'blue' | 'green' | 'red' | 'orange';
        icon: JSX.Element;
    };
};

const MESSAGE_DATA: MessageData = {
    success: {
        color: 'green',
        icon: <IconCircleCheck />,
    },
    error: {
        color: 'red',
        icon: <IconExclamationCircle />,
    },
    warning: {
        color: 'orange',
        icon: <IconAlertTriangle />,
    },
    info: {
        color: 'blue',
        icon: <IconInfoCircle />,
    },
};

export const Message = ({ type, children }: Props) => {
    const theme = useTheme();
    const col = theme.colors[MESSAGE_DATA[type].color].text;

    return (
        <MessageStyled
            color={col}
            background={theme.colors[MESSAGE_DATA[type].color].transparent}
        >
            {MESSAGE_DATA[type].icon}
            {children}
        </MessageStyled>
    );
};
