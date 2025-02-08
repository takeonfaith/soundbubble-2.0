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
            description: 'Close modal',
        },
        Space: {
            action: (event) => {
                event.preventDefault();
                songModel.controls.togglePlayPause();
            },
            name: 'Space',
            description: 'Play/pause song',
        },
        ArrowRight: {
            action: () => {
                songModel.playback.addCurrentTime(15);
            },
            name: <IconArrowRight />,
            description: 'Add 15 seconds to the playback',
        },
        ArrowLeft: {
            action: () => {
                songModel.playback.addCurrentTime(-15);
            },
            name: <IconArrowLeft />,
            description: 'Subtract 15 seconds from the playback',
        },
        ArrowUp: {
            action: () => {
                songModel.volume.increase(0.1);
            },
            name: <IconArrowUp />,
            description: 'Increase volume',
        },
        ArrowDown: {
            action: () => {
                songModel.volume.increase(-0.1);
            },
            name: <IconArrowDown />,
            description: 'Decrease volume',
        },
        KeyM: {
            action: () => {
                songModel.volume.toggle();
            },
            name: 'm',
            description: 'Toggle mute',
        },
        KeyN: {
            action: loggedIn((e) => {
                e.preventDefault();
                if (modals.length === 0) {
                    modalModel.events.open({
                        title: 'Create playlist',
                        content: <CreatePlaylistModal />,
                    });
                }
            }),
            name: 'n',
            description: 'Create playlist',
        },
        KeyF: {
            action: () => {
                if (modals.length === 0) {
                    songModel.fullscreenPlayer.open();
                }
            },
            name: 'f',
            description: 'Toggle full screen',
        },
        KeyC: {
            action: () => {
                sidebarApi.toggle();
            },
            name: 'c',
            description: 'Collapse/open menu',
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
            description: 'Toggle search bar',
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
            description: 'Previous track ',
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
            description: 'Next track ',
        },

        KeyT: {
            action: () => {
                toggleTheme();
            },
            name: 't',
            description: 'Toggle theme',
        },
        'Meta+Comma': {
            action: (event) => {
                if (modals.length === 0) {
                    event.preventDefault();
                    modalModel.events.open({
                        title: 'Settings',
                        content: <Settings />,
                    });
                }
            },
            name: (
                <>
                    <IconCommand />,
                </>
            ),
            description: 'Open settings',
        },
        Digits: {
            name: '0-9',
            action: (event) => {
                const num = +event.key;
                songModel.playback.setPercent(num / 10);
            },
            description: 'Jump from 0% to 90% of a playback',
        },
    };

    return hotkeys;
};
