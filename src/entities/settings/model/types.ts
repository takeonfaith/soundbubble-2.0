import { TablerIconsProps } from '@tabler/icons-react';
import { THEMES } from '../../../app/theme/constants';

type TSettingGeneral = {
    icon?: (props: TablerIconsProps) => JSX.Element;
    key: string;
};

export type TSettingLink = TSettingGeneral & {
    type: 'link';
    color?: keyof (typeof THEMES.dark)['colors'];
    children: TSettings;
};

export type TSettingSection = TSettingGeneral & {
    type: 'section';
    items: TSettings;
};

export type TSettingToggle = TSettingGeneral & {
    value: boolean;
    type: 'toggle';
    children?: TSettings;
    subtext?: string;
};

export type TSettingSelect = TSettingGeneral & {
    value: string;
    items: string[];
    type: 'select';
};

export type TSettingSelectList = TSettingGeneral & {
    value: string;
    items: { text: string; subtext?: string }[];
    type: 'select-list';
};

export type TSettings = {
    [key: string]:
        | TSettingSection
        | TSettingLink
        | TSettingToggle
        | TSettingSelect
        | TSettingSelectList;
};
