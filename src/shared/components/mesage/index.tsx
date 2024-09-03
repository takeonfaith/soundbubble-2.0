import {
    IconAlertTriangle,
    IconCircleCheck,
    IconExclamationCircle,
    IconInfoCircle,
} from '@tabler/icons-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { MessageStyled } from './styles';
import { THEMES } from '../../../app/theme/constants';

type MessageType = 'error' | 'warning' | 'info' | 'success' | 'tip';

type Props = {
    children: React.ReactNode;
    type: MessageType;
};

type MessageData = {
    [key in MessageType]: {
        color: keyof typeof THEMES.dark.scheme;
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
    tip: {
        color: 'grey',
        icon: <IconInfoCircle />,
    },
};

export const Message = ({ type, children }: Props) => {
    const theme = useTheme();
    const col = theme.scheme[MESSAGE_DATA[type].color].text;

    return (
        <MessageStyled
            color={col}
            background={theme.scheme[MESSAGE_DATA[type].color].transparent}
        >
            {MESSAGE_DATA[type].icon}
            {children}
        </MessageStyled>
    );
};
