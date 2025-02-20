import {
    IconLanguage,
    IconLogout,
    IconPalette,
    IconPencil,
    IconSettings2,
    IconUserOff,
} from '@tabler/icons-react';
import { useState } from 'react';
import styled from 'styled-components';
import { EditPhotoModal } from '../../../features/editPhotoModal';
import { EmailInput } from '../../../features/emailInput';
import { EditOverlayStyled } from '../../../layout/header/styles';
import { modalModel } from '../../../layout/modal/model';
import { Button } from '../../../shared/components/button';
import { Divider } from '../../../shared/components/divider';
import { Flex } from '../../../shared/components/flex';
import { Input } from '../../../shared/components/input';
import { Select, TSelectItem } from '../../../shared/components/select';
import { Subtext } from '../../../shared/components/subtext';
import { TTheme } from '../../../shared/constants/theme';
import { userModel } from '../../user/model';
import { UserCover } from '../../user/ui/UserCover';
import { ThemeSwitch } from './ThemeSwitch';
import { TimeRange } from './TimeRange';
import { LANGUAGES } from '../../../shared/constants/languages';
import i18n from '../../../i18n';
import { TLocales } from '../../../locales';

const SettingsMenu = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 20px;
    width: 300px;
    height: 100%;
    gap: 4px;
    z-index: 100;
`;

const SettingsContent = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border-radius: 8px;
    margin: 0px;
    padding: 20px;
    padding-top: 28px;

    h3 {
        margin-bottom: 20px;
        font-weight: 400;
    }

    h4 {
        font-weight: 400;
    }
`;

const SettingsMenuItem = styled(Button)<{ $color: keyof TTheme['scheme'] }>`
    justify-content: flex-start;
    padding: 0 12px;
    gap: 12px;
    font-weight: 300;
    width: 100%;

    svg {
        color: ${({ $color, theme }) => theme.scheme[$color].main};
    }
`;

const AccountSettings = () => {
    const [currentUser] = userModel.useUser();

    if (!currentUser) return null;

    const handleEditPhoto = () => {
        // Open edit photo modal
        modalModel.events.open({
            title: 'Edit Photo',
            content: (
                <EditPhotoModal
                    onSave={() => null}
                    imageColors={currentUser?.imageColors}
                    photo={currentUser?.photoURL}
                />
            ),
        });
    };

    return (
        <Flex ai="flex-start" width="300px" d="column" gap={10}>
            <UserCover
                colors={currentUser?.imageColors}
                size="100px"
                src={currentUser?.photoURL}
                isAuthor={false}
            >
                <EditOverlayStyled onClick={handleEditPhoto}>
                    <IconPencil size={30} color="#fff" />
                </EditOverlayStyled>
            </UserCover>
            <Input
                placeholder="Enter your name"
                label="Name"
                value={currentUser?.displayName}
            />
            <EmailInput
                value={currentUser?.displayName}
                onChange={() => null}
                required={false}
                error={undefined}
            />
            <h4>Password</h4>
            <Divider />
            <Button className="outline">
                <IconLogout size={20} />
                Logout
            </Button>
            <Divider />
            <h4>Delete account</h4>
            <Subtext>
                All your data will be deleted without any possibility of
                recovery
            </Subtext>
            <Button className="outline danger">
                <IconUserOff size={20} />
                Delete account
            </Button>
        </Flex>
    );
};

const LanguageSettings = () => {
    const [selected, setSelected] = useState<TSelectItem>(
        LANGUAGES[i18n.language as TLocales]
    );

    const handleChangeLanguage = (selected: TSelectItem) => {
        setSelected(selected);
        const code = Object.keys(LANGUAGES).find(
            (key) => LANGUAGES[key as TLocales].title === selected.title
        );

        i18n.changeLanguage(code).then(() => {
            window.location.reload();
        });
    };

    return (
        <Flex d="column" gap={10}>
            <Select
                items={Object.keys(LANGUAGES).map(
                    (key) => LANGUAGES[key as TLocales]
                )}
                placeholder="Select language"
                icon={<IconLanguage />}
                selected={selected?.title}
                label="Language"
                onSelect={handleChangeLanguage}
            />
        </Flex>
    );
};

const AccountTheme = () => {
    return (
        <Flex width="100%" d="column" gap={10}>
            <ThemeSwitch />
            <TimeRange />
        </Flex>
    );
};

export const Settings = () => {
    const [currentUser] = userModel.useUser();
    const [currentSetting, setCurrentSetting] = useState(0);

    const menu: {
        title: string;
        icon: React.ReactNode;
        content: React.ReactNode;
        color: keyof TTheme['scheme'];
    }[] = [
        {
            title: 'Account',
            icon: (
                <UserCover
                    src={currentUser?.photoURL}
                    size={'20px'}
                    colors={currentUser?.imageColors}
                    isAuthor={false}
                />
            ),
            color: 'blue',
            content: <AccountSettings />,
        },
        {
            title: 'Language',
            icon: <IconLanguage size={20} />,
            content: <LanguageSettings />,
            color: 'green',
        },
        {
            title: 'Theme',
            icon: <IconPalette size={20} />,
            content: <AccountTheme />,
            color: 'pink',
        },
    ];

    return (
        <Flex height="100%" ai="flex-start" gap={10} width="100%">
            <SettingsMenu>
                {menu.map((m, index) => {
                    return (
                        <SettingsMenuItem
                            onClick={() => setCurrentSetting(index)}
                            $color={m.color}
                        >
                            {m.icon}
                            <div>{m.title}</div>
                        </SettingsMenuItem>
                    );
                })}
            </SettingsMenu>
            <SettingsContent>
                <h3>{menu[currentSetting].title}</h3>
                {menu[currentSetting].content}
            </SettingsContent>
        </Flex>
    );
};
