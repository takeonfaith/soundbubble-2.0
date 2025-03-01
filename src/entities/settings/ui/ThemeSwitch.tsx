import { styled } from 'styled-components';
import { THEMES } from '../../../app/theme/constants';
import { Flex } from '../../../shared/components/flex';
import { setTheme, useTheme } from '../../../app/theme';
import { ETheme } from '../../../app/theme/types';
import { translate } from '../../../i18n';

const ThemeSwitchStyled = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;

    & .text {
        font-size: 0.8rem;
    }
`;

const ThemeBlock = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    outline: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    position: relative;

    & .sidebar {
        width: 35px;
        height: 100%;
    }

    &.current {
        outline: 2px solid ${({ theme }) => theme.scheme.blue.action};
    }

    & .circle {
        width: 12px;
        height: 12px;
        border-radius: 20px;
    }

    & .btn {
        width: 25px;
        height: 9px;
        border-radius: 2px;
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

        & .sidebar {
            background: ${THEMES.dark.colors.hover};
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

        & .sidebar {
            background: ${THEMES.light.colors.sidebar};
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

        & .sidebar {
            background: ${THEMES.light.colors.sidebar};
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
    const { theme } = useTheme();
    return (
        <ThemeSwitchStyled>
            <Flex d="column" gap={8} width="100%">
                <ThemeBlock
                    className={`light ${
                        theme === ETheme.light ? 'current' : ''
                    }`}
                    onClick={() => {
                        setTheme(ETheme.light);
                    }}
                >
                    <div className="sidebar"></div>
                    <Flex padding="8px" d="column" ai="flex-start" gap={8}>
                        <div className="line" />
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <div className="btn"></div>
                    </Flex>
                </ThemeBlock>
                <div className="text">{translate('light')}</div>
            </Flex>
            <Flex d="column" gap={8} width="100%">
                <ThemeBlock
                    className={`dark ${theme === ETheme.dark ? 'current' : ''}`}
                    onClick={() => {
                        setTheme(ETheme.dark);
                    }}
                >
                    <div className="sidebar"></div>
                    <Flex padding="8px" d="column" ai="flex-start" gap={8}>
                        <div className="line" />
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <div className="btn"></div>
                    </Flex>
                </ThemeBlock>
                <div className="text">{translate('dark')}</div>
            </Flex>

            {/* <Flex d="column" gap={8} width="100%">
                <ThemeBlock
                    className={`auto ${value === 'auto' ? 'current' : ''}`}
                    onClick={() => {
                        // settingsModel.events.updateSettings({
                        //     path: 'settings.items.appearance.children.theme.items.darkMode.value',
                        //     value: 'light',
                        // });
                    }}
                >
                    <div className="sidebar"></div>
                    <Flex padding="8px" d="column" ai="flex-start" gap={8}>
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <Flex gap={8}>
                            <div className="circle" />
                            <div className="line" />
                        </Flex>
                        <div className="btn"></div>
                    </Flex>
                </ThemeBlock>
                <div className="text">Auto</div>
            </Flex> */}
        </ThemeSwitchStyled>
    );
};
