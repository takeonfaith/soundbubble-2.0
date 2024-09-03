import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { SwitchToggle } from '../../../shared/components/switchToggle';
import { getDeepObjectValue } from '../../../shared/funcs/getDeepObjectValue';
import { settingsModel } from '../model';
import { DEFAULT_SETTINGS } from '../model/constants';
import { TSettingToggle } from '../model/types';
import { SelectListButton, SettingButtonText } from './styles';

type Props = {
    title: string;
    currentSetting: TSettingToggle;
    path: string;
    settings: typeof DEFAULT_SETTINGS;
};

export const SettingToggle = ({
    title,
    currentSetting,
    path,
    settings,
}: Props) => {
    const Icon = currentSetting.icon;
    const realPath = `${path}.value`;
    const value = getDeepObjectValue(settings, realPath);

    return (
        <SelectListButton
            onClick={() =>
                settingsModel.events.updateSettings({
                    path: realPath,
                    value: !value,
                })
            }
        >
            <Flex gap={10}>
                {Icon && <Icon className="left-icon" />}
                <Flex d="column" ai="flex-start">
                    <SettingButtonText>{title}</SettingButtonText>
                    {currentSetting.subtext && (
                        <Subtext>{currentSetting.subtext}</Subtext>
                    )}
                </Flex>
            </Flex>
            <SwitchToggle checked={value} onChange={() => null} size="s" />
        </SelectListButton>
    );
};
