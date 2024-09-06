import {
    IconCircleCheckFilled,
    IconExclamationCircle,
    IconInfoCircleFilled,
} from '@tabler/icons-react';
import { TToastType } from './types';

export const DEFAULT_TOAST_DURATION = 5000;
export const TOAST_ICONS: Record<TToastType, React.ReactNode> = {
    success: <IconCircleCheckFilled />,
    error: <IconExclamationCircle />,
    info: <IconInfoCircleFilled />,
};
