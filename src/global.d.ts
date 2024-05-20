declare global {
    type Obj<Val = unknown, Key = string> = Record<Key, Val>;
    type NonNullable<T> = T extends null | undefined ? never : T;
    type Evt<T extends 'btn' | 'div'> = T extends 'btn'
        ? React.MouseEvent<HTMLButtonElement, MouseEvent>
        : T extends 'div'
        ? React.MouseEvent<HTMLDivElement, MouseEvent>
        : never;

    interface Window {
        // for safari compatibility
        webkitAudioContext: typeof AudioContext;
    }
}

export {};
