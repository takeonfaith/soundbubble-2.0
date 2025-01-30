import { styled } from 'styled-components';
import { THEMES } from '../../../app/theme/constants';
import { Flex } from '../../../shared/components/flex';
import { settingsModel } from '../model';

const ThemeSwitchStyled = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    gap: 10px;

    & .text {
        font-size: 0.8rem;
    }
`;

const ThemeBlock = styled.div`
    width: 100%;
    height: 74px;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    outline: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 10px;
    position: relative;

    &.current {
        outline: 2px solid ${({ theme }) => theme.scheme.blue.action};
    }

    & .circle {
        width: 12px;
        height: 12px;
        border-radius: 20px;
    }

    & .btn {
        width: 30px;
        height: 10px;
        border-radius: 4px;
    }

    & .line {
        width: 70px;
        height: 6px;
        border-radius: 20px;
    }

    &.dark {
        background: #1c1c1c;

        & .circle {
            background: ${THEMES.dark.colors.lightHover};
        }

        & .btn {
            background: ${THEMES.dark.scheme.blue.action};
        }

        & .line {
            background: ${THEMES.dark.colors.lightHover};
        }
    }

    &.light {
        background: #fff;

        & .circle {
            background: ${THEMES.light.colors.skeleton};
        }

        & .btn {
            background: ${THEMES.light.scheme.blue.action};
        }

        & .line {
            background: ${THEMES.light.colors.skeleton};
        }
    }

    &.auto {
        background: #fff;

        & .circle {
            background: ${THEMES.light.colors.skeleton};
        }

        & .btn {
            background: ${THEMES.light.scheme.blue.action};
        }

        & .line {
            background: ${THEMES.light.colors.skeleton};
        }

        &::before {
            content: '';
            display: block;
            position: absolute;
            height: 100%;
            width: 50%;
            right: 0;
            top: 0;
            backdrop-filter: invert(0.9);
            border-radius: 0 8px 8px 0;
        }
    }

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        transform: scale(0.99);
    }
`;

export const ThemeSwitch = () => {
    const [themeValue] = settingsModel.useSettings();

    const value =
        themeValue.settings.items.appearance.children.theme.items.darkMode
            .value;

    return (
        <ThemeSwitchStyled>
            <Flex d="column" gap={8} width="100%">
                <ThemeBlock
                    className={`light ${value === 'light' ? 'current' : ''}`}
                    onClick={() => {
                        settingsModel.events.updateSettings({
                            path: 'settings.items.appearance.children.theme.items.darkMode.value',
                            value: 'light',
                        });
                    }}
                >
                    <Flex gap={8}>
                        <div className="circle" />
                        <div className="line" />
                    </Flex>
                    <Flex gap={8}>
                        <div className="circle" />
                        <div className="line" />
                    </Flex>
                    <div className="btn"></div>
                </ThemeBlock>
                <div className="text">Light</div>
            </Flex>
            <Flex d="column" gap={8} width="100%">
                <ThemeBlock
                    className={`dark ${value === 'dark' ? 'current' : ''}`}
                    onClick={() => {
                        settingsModel.events.updateSettings({
                            path: 'settings.items.appearance.children.theme.items.darkMode.value',
                            value: 'dark',
                        });
                    }}
                >
                    <Flex gap={8}>
                        <div className="circle" />
                        <div className="line" />
                    </Flex>
                    <Flex gap={8}>
                        <div className="circle" />
                        <div className="line" />
                    </Flex>
                    <div className="btn"></div>
                </ThemeBlock>
                <div className="text">Dark</div>
            </Flex>

            <Flex d="column" gap={8} width="100%">
                <ThemeBlock
                    className={`auto ${value === 'auto' ? 'current' : ''}`}
                    onClick={() => {
                        settingsModel.events.updateSettings({
                            path: 'settings.items.appearance.children.theme.items.darkMode.value',
                            value: 'auto',
                        });
                    }}
                >
                    <Flex gap={8}>
                        <div className="circle" />
                        <div className="line" />
                    </Flex>
                    <Flex gap={8}>
                        <div className="circle" />
                        <div className="line" />
                    </Flex>
                    <div className="btn"></div>
                </ThemeBlock>
                <div className="text">Auto</div>
            </Flex>
        </ThemeSwitchStyled>
    );
};
