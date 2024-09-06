export type TToastType = 'success' | 'error' | 'info';
export type TToast = {
    message: string;
    duration: number;
    isShow: boolean;
    showTimer?: boolean;
    action?: {
        text: string;
        icon?: React.ReactNode;
        onClick: () => void;
    };
    type: TToastType;
};
