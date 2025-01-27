import { IconMoon, IconSun } from '@tabler/icons-react';
import styled from 'styled-components';
import { toggleTheme, useTheme } from '../../app/theme';
import { settingsModel } from '../../entities/settings/model';
import { Button } from '../../shared/components/button';
import Popover from '../../shared/components/popover';
import { ETheme } from '../../app/theme/types';

const ThemeButtonStyled = styled(Button)`
    min-height: 35px;
    height: 35px;
    min-width: 35px;
`;

const ThemeButtonIconStyled = styled.div`
    width: 100%;
    height: 40px;
    position: relative;

    & svg {
        transform-origin: center center;
        transition: 0.2s;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &.light {
        & svg:nth-child(1) {
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
        }

        & svg:nth-child(2) {
            transform: translate(-50%, -50%) rotate(90deg);
            opacity: 0;
        }
    }

    &.dark {
        & svg:nth-child(1) {
            transform: translate(-50%, -50%) rotate(90deg);
            opacity: 0;
        }

        & svg:nth-child(2) {
            transform: translate(-50%, -50%) rotate(0deg);
            opacity: 1;
        }
    }
`;

export const ThemeButton = () => {
    const { theme } = useTheme();
    const [themeValue] = settingsModel.useSettings();
    const isLight =
        themeValue.settings.items.appearance.children.theme.items.darkMode
            .value;

    const handleTheme = () => {
        settingsModel.events.updateSettings({
            path: 'settings.items.appearance.children.theme.items.darkMode',
            value: isLight === ETheme.dark ? ETheme.light : ETheme.dark,
        });
        toggleTheme();
    };

    return (
        <Popover
            position="bottom"
            content={`Change theme to ${isLight ? 'dark' : 'light'}`}
        >
            <ThemeButtonStyled $width="20px" onClick={handleTheme}>
                <ThemeButtonIconStyled className={`theme ${theme.toString()}`}>
                    <IconSun size={20} />
                    <IconMoon size={20} />
                </ThemeButtonIconStyled>
            </ThemeButtonStyled>
        </Popover>
    );
};
