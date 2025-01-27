import {
    IconColorFilter,
    IconKeyframes,
    IconLanguage,
    IconSettings,
    IconUserCircle,
} from '@tabler/icons-react';
import { ETheme } from '../../../app/theme/types';
import { Logo } from '../../../shared/components/logo';
import { ThemeSwitch } from '../ui/ThemeSwitch';
import { TSettings } from './types';
import { TimeRange } from '../ui/TimeRange';

export const DEFAULT_SETTINGS = {
    settings: {
        type: 'section',
        key: '',
        items: {
            account: {
                key: 'Account',
                color: 'red',
                icon: IconUserCircle,
                type: 'link',
                children: {},
            },
            general: {
                key: 'General',
                color: 'blue',
                icon: IconSettings,
                type: 'link',
                children: {
                    multiButton: {
                        type: 'section',
                        key: 'Multi-Button',
                        items: {
                            multiButton: {
                                key: 'Multi-Button',
                                type: 'toggle',
                                icon: () => Logo({ short: true }),
                                value: true,
                                children: {
                                    multiButton: {
                                        key: 'Multi-Button',
                                        type: 'toggle',
                                        value: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            lang: {
                key: 'Language',
                icon: IconLanguage,
                color: 'green',
                type: 'link',
                children: {
                    language: {
                        type: 'section',
                        key: 'Interface Language',
                        items: {
                            'interface-language': {
                                key: 'Interface language',
                                type: 'select-list',
                                items: [
                                    { text: 'English', subtext: 'English' },
                                    { text: 'Русский', subtext: 'Russian' },
                                ],
                                value: 'English',
                            },
                        },
                    },
                },
            },
            appearance: {
                key: 'Appearance',
                icon: IconColorFilter,
                type: 'link',
                color: 'purple',
                children: {
                    theme: {
                        type: 'section',
                        key: 'Theme',
                        items: {
                            darkMode: {
                                key: 'Dark Mode',
                                type: 'component',
                                component: ThemeSwitch,
                                value: ETheme.dark,
                            },
                            'auto-night-mode': {
                                key: 'Auto-Dark mode',
                                type: 'link',
                                color: 'blue',
                                visible: ({ settings }) =>
                                    settings.items?.appearance?.children.theme
                                        .items.darkMode.value === 'auto',
                                children: {
                                    'auto-night-mode-list': {
                                        type: 'section',
                                        key: 'Auto-Dark mode',
                                        items: {
                                            'auto-night-model-link': {
                                                type: 'select-list',
                                                key: 'Auto-Night mode',
                                                items: [
                                                    {
                                                        text: 'System',
                                                        subtext:
                                                            'The same as in your device',
                                                    },
                                                    {
                                                        text: 'Scheduled',
                                                        subtext:
                                                            'Choose your own prefered time',
                                                    },
                                                ],
                                                value: 'System',
                                            },
                                            'auto-night-time': {
                                                type: 'component',
                                                visible: ({ settings }) =>
                                                    settings.items?.appearance
                                                        ?.children.theme.items[
                                                        'auto-night-mode'
                                                    ].children[
                                                        'auto-night-mode-list'
                                                    ].items[
                                                        'auto-night-model-link'
                                                    ].value === 'Scheduled',
                                                component: TimeRange,
                                                value: '10:00 - 18:00',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    animations: {
                        type: 'section',
                        key: 'Performace',
                        items: {
                            animations: {
                                key: 'Animations',
                                type: 'toggle',
                                icon: IconKeyframes,
                                value: true,
                                subtext:
                                    'Will increase performance if disabled',
                            },
                            gradients: {
                                key: 'Gradients',
                                type: 'toggle',
                                value: true,
                            },
                        },
                    },
                },
            },
        },
    },
} as const;
