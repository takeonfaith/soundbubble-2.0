import { IconChevronRight } from '@tabler/icons-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { Settings } from '.';
import { THEMES } from '../../../app/theme/constants';
import { modalModel } from '../../../layout/modal/model';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { TSettingLink, TSettings } from '../model/types';
import { SettingButton, SettingButtonIcon, SettingButtonText } from './styles';
import { DEFAULT_SETTINGS } from '../model/constants';
import { getDeepObjectValue } from '../../../shared/funcs/getDeepObjectValue';

type Props = {
    title: string;
    children: TSettings;
    icon: React.ReactNode;
    color: keyof typeof THEMES.dark;
    path: Paths<typeof DEFAULT_SETTINGS>;
    settings: typeof DEFAULT_SETTINGS;
    currentSetting: TSettingLink;
};

export const SettingLink = ({
    title,
    children,
    icon,
    color,
    path,
    settings,
    currentSetting,
}: Props) => {
    const theme = useTheme();
    const res = Object.values(currentSetting.children ?? {})[0];
    const { type } = currentSetting;

    let resultValue = '';

    if (res?.type === 'section') {
        const firstChild = Object.values(res.items)[0];
        if (type === 'link') {
            if ('value' in firstChild) {
                resultValue =
                    firstChild.value === true
                        ? 'On'
                        : firstChild.value === false
                        ? 'Off'
                        : firstChild.value;
            }
        }
    }

    return (
        <SettingButton
            onClick={() =>
                modalModel.events.open({
                    title,
                    content: (
                        <Settings childrenSettings={children} path={path} />
                    ),
                })
            }
        >
            <Flex gap={20}>
                {icon && (
                    <SettingButtonIcon
                        color={color ? theme.colors[color].main : 'grey'}
                    >
                        {icon}
                    </SettingButtonIcon>
                )}
                <SettingButtonText>{title}</SettingButtonText>
            </Flex>
            <Flex gap={10}>
                <Subtext>{resultValue}</Subtext>
                <IconChevronRight opacity={0.3} size={18} />
            </Flex>
        </SettingButton>
    );
};
