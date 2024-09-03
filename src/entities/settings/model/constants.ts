import {
    IconColorFilter,
    IconKeyframes,
    IconLanguage,
    IconMoon,
    IconSettings,
    IconUserCircle,
} from '@tabler/icons-react';

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
                children: {

                },
            },
            general: {
                key: 'General',
                color: 'blue',
                icon: IconSettings,
                type: 'link',
                children: {},
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
                                icon: IconMoon,
                                type: 'toggle',
                                value: true,
                            },
                            'auto-night-mode': {
                                key: 'Auto-Dark mode',
                                type: 'link',
                                children: {
                                    'auto-night-mode-list': {
                                        type: 'section',
                                        key: 'Auto-Dark mode',
                                        items: {
                                            'auto-night-model-link': {
                                                type: 'select-list',
                                                key: 'Auto-Night mode',
                                                items: [
                                                    { text: 'Disabled' },
                                                    { text: 'System' },
                                                    { text: 'Scheduled' },
                                                    { text: 'Automatic' },
                                                ],
                                                value: 'Disabled',
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
                                subtext: 'Will increase performance if disabled',
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
