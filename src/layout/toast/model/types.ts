export type TToastType =
    | 'success'
    | 'error'
    | 'info'
    | 'chatMessage'
    | 'hint'
    | 'loading';

export type TToast = {
    id: string;
    title?: string;
    message: string;
    time?: string;
    duration: number;
    isShow: boolean;
    showTimer?: boolean;
    /**
     * Action button to the right of the toast text
     */
    action?: {
        text: string;
        icon?: React.ReactNode;
        onClick: () => void;
    };
    onClick?: () => void;
    type: TToastType;
    reason?: string;
    hideTimeout: NodeJS.Timeout;
    photo?: string;
};

export type TExternalToast = Omit<
    TToast,
    'isShow' | 'hideTimeout' | 'id' | 'duration'
> & {
    id?: string;
    duration?: number;
};
