import React from 'react';
import { Flex } from '../../../shared/components/flex';
import { Input } from '../../../shared/components/input';
import { settingsModel } from '../model';

export const TimeRange = () => {
    const [{ settings }] = settingsModel.useSettings();
    const [start, finish] =
        settings.items?.appearance?.children.theme.items[
            'auto-night-mode'
        ].children['auto-night-mode-list'].items['auto-night-time'].value.split(
            ' - '
        );
    console.log(start, finish);

    return (
        <Flex padding="10px" jc="flex-end" width="100%">
            <Flex width="fit-content" gap={10}>
                <Input type="time" placeholder="start" value={start} />
                <Input type="time" placeholder="finish" value={finish} />
            </Flex>
        </Flex>
    );
};
