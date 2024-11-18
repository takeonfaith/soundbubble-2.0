import { CSSProperties } from 'react';

export type GeneralCoverProps = {
    src: string | undefined;
    colors: string[] | undefined;
    fallbackIcon: React.ReactNode;
    borderRadius?: string;
    children?: React.ReactNode;
    size: string | undefined;
    onClick?: () => void;
    style?: CSSProperties;
};
