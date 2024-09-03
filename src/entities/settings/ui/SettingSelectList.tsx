import { IconCheck } from '@tabler/icons-react';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { getDeepObjectValue } from '../../../shared/funcs/getDeepObjectValue';
import { settingsModel } from '../model';
import { DEFAULT_SETTINGS } from '../model/constants';
import { TSettingSelectList } from '../model/types';
import { SelectListButton, SettingButtonText } from './styles';

type Props = {
    title: string;
    currentSetting: TSettingSelectList;
    path: string;
    settings: typeof DEFAULT_SETTINGS;
};

export const SettingSelectList = ({
    settings,
    currentSetting,
    path,
}: Props) => {
    return (
        <>
            {currentSetting.items.map(({ text, subtext }) => {
                console.log(
                    `${path}.value`,
                    getDeepObjectValue(
                        settings,
                        `${path}.value` as Paths<typeof DEFAULT_SETTINGS>
                    )
                );

                const selected =
                    text ===
                    getDeepObjectValue(
                        settings,
                        `${path}.value` as Paths<typeof DEFAULT_SETTINGS>
                    );

                return (
                    <SelectListButton
                        $width="100%"
                        key={text}
                        onClick={() => {
                            settingsModel.events.updateSettings({
                                path: `${path}.value` as Paths<
                                    typeof DEFAULT_SETTINGS
                                >,
                                value: text,
                            });
                        }}
                    >
                        <Flex d="column" ai="flex-start">
                            <SettingButtonText>{text}</SettingButtonText>
                            <Subtext>{subtext}</Subtext>
                        </Flex>
                        {selected && <IconCheck className="check-icon" />}
                    </SelectListButton>
                );
            })}
        </>
    );
};
