import {
    IconArrowDown,
    IconArrowLeft,
    IconArrowRight,
    IconArrowUp,
    IconCommand,
} from '@tabler/icons-react';
import { toggleTheme } from '../../app/theme';
import { Settings } from '../../entities/settings/ui';
import { songModel } from '../../entities/song/new-model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { confirmModel } from '../../layout/confirm/model';
import { modalModel } from '../../layout/modal/model';
import { popupModel } from '../../layout/popup/model';
import { sidebarApi } from '../../layout/sidebar/model';
import { THotKeys } from './useHotKeys';
import { usePrivateAction } from './usePrivateAction';
import { translate } from '../../i18n';

export const useGetAppHotKeys = () => {
    const [modals] = modalModel.useModal();
    const { isOpen } = popupModel.usePopup();
    const fullScreen = songModel.useFullScreenPlayer();
    const { loggedIn } = usePrivateAction();
    const { isOpen: isConfirmOpen } = confirmModel.useConfirm();

    const escapeAction = (event: KeyboardEvent) => {
        if (modals.length > 0) {
            event.preventDefault();
            modalModel.events.close();
        }

        if (isOpen) {
            event.preventDefault();
            popupModel.events.close();
        }

        if (isConfirmOpen) {
            event.preventDefault();
            confirmModel.events.close();
        }

        if (fullScreen) {
            event.preventDefault();
            songModel.fullscreenPlayer.close();
        }

        if (event.target instanceof HTMLInputElement) {
            event.preventDefault();
            event.target.blur();
        }

        return null;
    };

    const hotkeys: THotKeys = {
        Escape: {
            action: escapeAction,
            name: 'Esc',
            description: translate('close_modal'),
        },
        Space: {
            action: (event) => {
                event.preventDefault();
                songModel.controls.togglePlayPause();
            },
            name: 'Space',
            description: translate('play_pause'),
        },
        ArrowRight: {
            action: () => {
                songModel.playback.addCurrentTime(15);
            },
            name: <IconArrowRight />,
            description: translate('add_to_playback'),
        },
        ArrowLeft: {
            action: () => {
                songModel.playback.addCurrentTime(-15);
            },
            name: <IconArrowLeft />,
            description: translate('substract_from_playback'),
        },
        ArrowUp: {
            action: () => {
                songModel.volume.increase({ val: 0.1, indicator: true });
            },
            name: <IconArrowUp />,
            description: translate('increase_volume'),
        },
        ArrowDown: {
            action: () => {
                songModel.volume.increase({ val: -0.1, indicator: true });
            },
            name: <IconArrowDown />,
            description: translate('decrease_volume'),
        },
        KeyM: {
            action: () => {
                songModel.volume.toggle();
            },
            name: 'm',
            description: translate('mute'),
        },
        KeyN: {
            action: loggedIn((e) => {
                e.preventDefault();
                if (modals.length === 0) {
                    modalModel.events.open({
                        title: translate('create_playlist'),
                        content: <CreatePlaylistModal />,
                    });
                }
            }),
            name: 'n',
            description: translate('create_playlist'),
        },
        KeyF: {
            action: () => {
                if (modals.length === 0) {
                    songModel.fullscreenPlayer.open();
                }
            },
            name: 'f',
            description: translate('toggle_fullscreen'),
        },
        KeyC: {
            action: () => {
                sidebarApi.toggle();
            },
            name: 'c',
            description: translate('open_close_menu'),
        },
        Slash: {
            action: (event) => {
                const searchInput: HTMLInputElement | null =
                    document.querySelector('.global-search');
                if (searchInput) {
                    event.preventDefault();
                    searchInput.focus();
                }
            },
            name: '/',
            description: translate('toggle_search'),
        },
        'Shift+ArrowLeft': {
            action: () => {
                songModel.queue.previous();
            },
            name: (
                <>
                    Shift
                    <IconArrowLeft />
                </>
            ),
            description: translate('play_previous'),
        },
        'Shift+ArrowRight': {
            action: () => {
                songModel.queue.next('from_next_button');
            },
            name: (
                <>
                    Shift
                    <IconArrowRight />
                </>
            ),
            description: translate('play_next'),
        },

        KeyT: {
            action: () => {
                toggleTheme();
            },
            name: 't',
            description: translate('change_theme'),
        },
        'Meta+Comma': {
            action: (event) => {
                if (modals.length === 0) {
                    event.preventDefault();
                    modalModel.events.open({
                        title: 'Settings',
                        content: <Settings />,
                        sizeX: 'm',
                        sizeY: 'm',
                    });
                }
            },
            name: (
                <>
                    <IconCommand />,
                </>
            ),
            description: translate('open_settings'),
        },
        Digits: {
            name: '0-9',
            action: (event) => {
                const num = +event.key;
                songModel.playback.setPercent(num / 10);
            },
            description: translate('playback_jump'),
        },
    };

    return hotkeys;
};
