import {
    IconArrowDown,
    IconArrowLeft,
    IconArrowRight,
    IconArrowUp,
} from '@tabler/icons-react';
import { toggleTheme } from '../../app/theme';
import { songModel } from '../../entities/song/new-model';
import { CreatePlaylistModal } from '../../features/createPlaylistModal';
import { modalModel } from '../../layout/modal/model';
import { popupModel } from '../../layout/popup/model';
import { THotKeys } from './useHotKeys';

export const useGetAppHotKeys = () => {
    const [modals] = modalModel.useModal();
    const { isOpen } = popupModel.usePopup();
    const fullScreen = songModel.useFullScreenPlayer();

    const escapeAction = (event: KeyboardEvent) => {
        console.log('escape action');

        if (modals.length > 0) modalModel.events.close();

        if (isOpen) {
            popupModel.events.close();
        }

        if (fullScreen) {
            songModel.fullscreenPlayer.close();
        }

        if (event.target instanceof HTMLInputElement) {
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
        ' ': {
            action: () => {
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
            description: 'Increase volume',
        },
        m: {
            action: () => {
                songModel.volume.toggle();
            },
            name: 'm',
            description: 'Toggle mute',
        },
        n: {
            action: (e) => {
                if (modals.length === 0) {
                    e.preventDefault();
                    modalModel.events.open({
                        title: 'Create playlist',
                        content: <CreatePlaylistModal />,
                    });
                }
            },
            name: 'n',
            description: 'Create playlist',
        },
        f: {
            action: () => {
                songModel.fullscreenPlayer.open();
            },
            name: 'f',
            description: 'Toggle full screen',
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
        '/': {
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
        t: {
            action: () => {
                toggleTheme();
            },
            name: 't',
            description: 'Toggle theme',
        },
        '0': {
            action: () => {
                songModel.playback.setPercent(0);
            },
            description: 'Jump to the beginning of the song',
        },
        '1': {
            action: () => {
                songModel.playback.setPercent(0.1);
            },
            description: 'Jump to 10% of the song',
        },
        '2': {
            action: () => {
                songModel.playback.setPercent(0.2);
            },
            description: 'Jump to 20% of the song',
        },
        '3': {
            action: () => {
                songModel.playback.setPercent(0.3);
            },
            description: 'Jump to 30% of the song',
        },
        '4': {
            action: () => {
                songModel.playback.setPercent(0.4);
            },
            description: 'Jump to 40% of the song',
        },
        '5': {
            action: () => {
                songModel.playback.setPercent(0.5);
            },
            description: 'Jump to 50% of the song',
        },
        '6': {
            action: () => {
                songModel.playback.setPercent(0.6);
            },
            description: 'Jump to 60% of the song',
        },
        '7': {
            action: () => {
                songModel.playback.setPercent(0.7);
            },
            description: 'Jump to 70% of the song',
        },
        '8': {
            action: () => {
                songModel.playback.setPercent(0.8);
            },
            description: 'Jump to 80% of the song',
        },
        '9': {
            action: () => {
                songModel.playback.setPercent(0.9);
            },
            description: 'Jump to 90% of the song',
        },
    };

    return hotkeys;
};
