import { IconSearch } from '@tabler/icons-react';
import { modalModel } from '../../../layout/modal/model';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { Input } from '../../../shared/components/input';
import { settingsModel } from '../model';
import { DEFAULT_SETTINGS } from '../model/constants';
import { TSettings, TSettingSection } from '../model/types';
import { SettingLink } from './SettingLink';
import { SettingSection } from './SettingSection';
import { SettingSelectList } from './SettingSelectList';
import { SettingToggle } from './SettingToggle';

type Props = {
    childrenSettings?: TSettings;
    path?: '' | Paths<TSettings>;
};

export const SettingsPage = () => {
    return (
        <Button
            onClick={() =>
                modalModel.events.open({
                    title: 'Settings',
                    content: <Settings />,
                })
            }
        >
            settings
        </Button>
    );
};

export const Settings = ({ childrenSettings, path = '' }: Props) => {
    const [settings] = settingsModel.useSettings();

    const renderSettings = childrenSettings ?? settings;

    return (
        <Flex d="column" gap={10} width="100%">
            {!childrenSettings && (
                <Flex width="100%" padding="2px 25px">
                    <Input
                        icon={<IconSearch />}
                        placeholder="Search for settings..."
                    />
                </Flex>
            )}
            <Flex d="column" width="100%">
                {Object.keys(renderSettings).map((setting) => {
                    const currentSetting =
                        renderSettings[setting as keyof typeof renderSettings];
                    const { type, key } = currentSetting;
                    const title = key;
                    const updatePath = `${path}${
                        path === '' ? '' : '.'
                    }${setting}` as Paths<typeof DEFAULT_SETTINGS>;

                    if (type === 'link') {
                        const Icon = currentSetting.icon;

                        return (
                            <SettingLink
                                title={title}
                                children={currentSetting.children}
                                icon={Icon !== undefined ? <Icon /> : null}
                                color={currentSetting.color}
                                // @ts-expect-error dadada
                                path={`${updatePath}.children`}
                                settings={settings}
                                currentSetting={currentSetting}
                            />
                        );
                    }

                    if (type === 'section') {
                        return (
                            <SettingSection
                                title={title}
                                currentSetting={
                                    currentSetting as TSettingSection
                                }
                                path={updatePath}
                            />
                        );
                    }

                    if (type === 'toggle') {
                        return (
                            <SettingToggle
                                title={title}
                                currentSetting={currentSetting}
                                path={updatePath}
                                settings={settings}
                            />
                        );
                    }

                    if (type === 'select-list') {
                        return (
                            <SettingSelectList
                                title={title}
                                currentSetting={currentSetting}
                                path={updatePath}
                                settings={settings}
                            />
                        );
                    }
                })}
            </Flex>
        </Flex>
    );
};
