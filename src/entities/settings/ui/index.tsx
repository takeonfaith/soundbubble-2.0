import {
    IconLanguage,
    IconLogout,
    IconPalette,
    IconPencil,
    IconUserMinus,
    IconUserOff,
} from '@tabler/icons-react';
import { useUnit } from 'effector-react';
import { useState } from 'react';
import styled from 'styled-components';
import { EditPhotoModal } from '../../../features/editPhotoModal';
import i18n, { translate } from '../../../i18n';
import { confirmModel } from '../../../layout/confirm/model';
import { EditOverlayStyled } from '../../../layout/header/styles';
import { modalModel } from '../../../layout/modal/model';
import { toastModel } from '../../../layout/toast/model';
import { TLocales } from '../../../locales';
import { Button } from '../../../shared/components/button';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { Divider } from '../../../shared/components/divider';
import { Flex } from '../../../shared/components/flex';
import { Input } from '../../../shared/components/input';
import { Select, TSelectItem } from '../../../shared/components/select';
import { Subtext } from '../../../shared/components/subtext';
import { LANGUAGES } from '../../../shared/constants/languages';
import { TTheme } from '../../../shared/constants/theme';
import { userModel } from '../../user/model';
import { editUserFx } from '../../user/model/edit-user';
import { UserCover } from '../../user/ui/UserCover';
import { ThemeSwitch } from './ThemeSwitch';
import { SettingsStyled } from './styles';
import { MEDIA_QUERIES } from '../../../shared/constants/screenSize';

const SettingsMenu = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 20px;
    width: 300px;
    height: 100%;
    gap: 4px;
    z-index: 100;

    ${MEDIA_QUERIES.isMobile} {
        flex-direction: row;
        height: fit-content;
        padding: 0;
        padding: 20px;
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
    }
`;

const SettingsContent = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border-radius: 8px;
    margin: 0px;
    padding: 20px;
    padding-top: 28px;
    padding-right: 40px;
    position: relative;

    h3 {
        margin-bottom: 20px;
        font-weight: 400;
    }

    h4 {
        font-weight: 400;
    }

    button.primary {
        position: absolute;
        color: #fff;
        width: 120px;
        padding: 0 10px;
        top: 20px;
        right: 40px;
    }

    ${MEDIA_QUERIES.isMobile} {
        padding-right: 20px;
    }
`;

const SettingsMenuItem = styled(Button)<{ $color: keyof TTheme['scheme'] }>`
    justify-content: flex-start;
    padding: 0 12px;
    gap: 12px;
    font-weight: 300;
    width: 100%;
    white-space: nowrap;

    &.current {
        background: ${({ theme }) => theme.scheme.blue.transparent};
    }

    svg {
        color: ${({ $color, theme }) => theme.scheme[$color].main};
    }
`;

const AccountSettings = () => {
    const [currentUser] = userModel.useUser();
    const [newUserName, setNewUserName] = useState(currentUser?.displayName);
    const isEditing = useUnit(editUserFx.pending);

    if (!currentUser) return null;

    const handleEditPhoto = () => {
        // Open edit photo modal
        modalModel.events.open({
            title: translate('edit_photo'),
            content: (
                <EditPhotoModal
                    onSave={(newPhoto, imageColors, setLoading) => {
                        userModel.events.editUser({
                            update: {
                                photoFile: newPhoto,
                                imageColors: imageColors,
                            },
                            onSuccess: () => {
                                modalModel.events.close();
                                setLoading(false);
                            },
                        });
                        // Update user's photo URL
                    }}
                    imageColors={currentUser?.imageColors ?? []}
                    photo={currentUser?.photoURL ?? null}
                />
            ),
        });
    };

    const handleLogout = () => {
        confirmModel.events.open({
            text: translate('logout_warning_title'),
            onAccept: () => {
                userModel.events.logout();
            },
            subtext: '',
            icon: <IconUserMinus />,
            iconColor: 'red',
        });
    };

    const handleDeleteAccount = () => {
        confirmModel.events.open({
            text: translate('delete_account'),
            onAccept: () => {
                userModel.events.deleteAccount();
            },
            subtext: translate('playlist_delete_warning_subtext'),
            icon: <IconUserMinus />,
            iconColor: 'red',
        });
    };

    return (
        <Flex ai="flex-start" width="100%" d="column" gap={10}>
            <UserCover
                colors={currentUser?.imageColors}
                size="100px"
                src={currentUser?.photoURL}
                isAuthor={false}
            >
                <EditOverlayStyled
                    className="visible"
                    onClick={handleEditPhoto}
                >
                    <IconPencil size={30} color="#fff" />
                </EditOverlayStyled>
            </UserCover>
            <Input
                placeholder={translate('enter_user_name')}
                label={translate('user_name')}
                value={newUserName}
                onChange={(e) => setNewUserName(e.currentTarget.value)}
            />
            <Divider />
            <h4>{translate('logout')}</h4>
            <Button onClick={handleLogout} className="outline">
                <IconLogout size={20} />
                {translate('logout')}
            </Button>
            <Divider />
            <h4>{translate('delete_account')}</h4>
            <Subtext>{translate('playlist_delete_warning_subtext')}</Subtext>
            <Button onClick={handleDeleteAccount} className="outline danger">
                <IconUserOff size={20} />
                {translate('delete_account')}
            </Button>
            {newUserName !== currentUser.displayName && (
                <DefaultButton
                    className="primary"
                    loading={isEditing}
                    onClick={() => {
                        if (newUserName?.length !== 0) {
                            userModel.events.editUser({
                                update: {
                                    displayName: newUserName,
                                },
                                onSuccess: () => {},
                            });
                        } else {
                            setNewUserName(currentUser.displayName);
                            toastModel.events.add({
                                type: 'error',
                                message: 'Name should not be empty',
                            });
                        }
                    }}
                >
                    {translate('save_changes')}
                </DefaultButton>
            )}
        </Flex>
    );
};

const LanguageSettings = () => {
    console.log(i18n.language);

    const [selected, setSelected] = useState<TSelectItem>(
        LANGUAGES[i18n.language as TLocales] ?? i18n.languages[0]
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
                label={translate('language')}
                onSelect={handleChangeLanguage}
            />
        </Flex>
    );
};

const AccountTheme = () => {
    return (
        <Flex width="100%" d="column" gap={10}>
            <ThemeSwitch />
            {/* <TimeRange /> */}
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
            title: translate('account'),
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
            title: translate('language'),
            icon: <IconLanguage size={20} />,
            content: <LanguageSettings />,
            color: 'green',
        },
        {
            title: translate('change_theme'),
            icon: <IconPalette size={20} />,
            content: <AccountTheme />,
            color: 'pink',
        },
    ];

    return (
        <SettingsStyled>
            <SettingsMenu>
                {menu.map((m, index) => {
                    return (
                        <SettingsMenuItem
                            onClick={() => setCurrentSetting(index)}
                            $color={m.color}
                            className={
                                currentSetting === index ? 'current' : ''
                            }
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
        </SettingsStyled>
    );
};
