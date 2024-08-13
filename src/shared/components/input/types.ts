export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    label?: string;
    error?: string;
    onRightIconClick?: () => void;
};
