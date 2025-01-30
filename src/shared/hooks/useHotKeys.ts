import { useEffect, useCallback } from 'react';

type TKeys =
    | 'Escape'
    | 'Space'
    | 'ArrowLeft'
    | 'Shift+ArrowLeft'
    | 'Shift+ArrowRight'
    | 'ArrowRight'
    | 'ArrowUp'
    | 'ArrowDown'
    | 'Meta+Comma'
    | 'KeyM'
    | 'KeyN'
    | 'KeyT'
    | 'KeyF'
    | 'Slash'
    | 'Digits';

export type THotKeys = Partial<{
    [keyCombo in TKeys]: {
        action: ((event: KeyboardEvent) => void) | null;
        preventDefault?: boolean;
        name?: React.ReactNode;
        description?: string;
    };
}>;

const useHotkeys = (hotkeys: THotKeys) => {
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            const target = event.target;
            const isDigit = event.code.includes('Digit');
            const keyCode = isDigit ? 'Digits' : event.code;
            const excludeOfTyping = ['Escape'];
            const forbiddenWhileClick = [' ', 'Enter'];

            const isTyping =
                target &&
                'nodeName' in target &&
                'isContentEditable' in target &&
                (target.nodeName === 'INPUT' ||
                    target.nodeName === 'TEXTAREA' ||
                    target.isContentEditable);

            const isClickable =
                target && 'nodeName' in target && target.nodeName === 'BUTTON';

            if (isClickable && forbiddenWhileClick.includes(event.key)) {
                return;
            }

            if (isTyping && !excludeOfTyping.includes(event.key)) {
                return; // Ignore hotkeys if the user is typing
            }

            // Identify if a modifier key + main key combination exists
            const keyCombo = `${event.metaKey ? 'Meta+' : ''}${
                event.ctrlKey ? 'Control+' : ''
            }${event.shiftKey ? 'Shift+' : ''}${
                event.altKey ? 'Alt+' : ''
            }${keyCode}` as keyof THotKeys;

            // Example: If `Cmd + P` is pressed, the keyCombo will be `Meta+P`.

            const handler = hotkeys[keyCombo];
            if (handler?.action) {
                if (handler.preventDefault) event.preventDefault(); // Optional: prevent default browser behavior
                console.log(handler);

                handler.action(event); // Execute the hotkey action
            }
        },
        [hotkeys]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);
};

export default useHotkeys;
