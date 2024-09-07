declare global {
    type Obj<Val = unknown, Key = string> = Record<Key, Val>;
    type NonNullable<T> = T extends null | undefined ? never : T;
    type TSize = 's' | 'm' | 'l';
    type Evt<T extends 'btn' | 'div' | 'a' | 'input' | 'textarea' | 'form'> =
        T extends 'btn'
            ? React.MouseEvent<HTMLButtonElement, MouseEvent>
            : T extends 'div'
            ? React.MouseEvent<HTMLDivElement, MouseEvent>
            : T extends 'a'
            ? React.MouseEvent<HTMLAnchorElement, MouseEvent>
            : T extends 'input'
            ? React.ChangeEvent<HTMLInputElement>
            : T extends 'textarea'
            ? React.ChangeEvent<HTMLTextAreaElement>
            : T extends 'form'
            ? React.DragEvent<HTMLFormElement>
            : never;

    export type Paths<T> = T extends Array<infer U>
        ? `${Paths<U>}`
        : T extends object
        ? {
              [K in keyof T & (string | number)]: K extends string
                  ? `${K}` | `${K}.${Paths<T[K]>}`
                  : never;
          }[keyof T & (string | number)]
        : never;

    interface Window {
        // for safari compatibility
        webkitAudioContext: typeof AudioContext;
    }
}

export {};
