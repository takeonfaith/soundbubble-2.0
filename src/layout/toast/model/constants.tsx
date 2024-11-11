import {
    IconCircleCheckFilled,
    IconExclamationCircle,
    IconInfoCircleFilled,
    IconMessageCircle2Filled
} from '@tabler/icons-react';
import { TToastType } from './types';

export const DEFAULT_TOAST_DURATION = 5000;
export const DEFAULT_TOAST_ANIMATION_DURATION = 250;
export const MAX_TOASTS = 10;
export const TOAST_HEIGHT = 70;
export const TOAST_ICONS: Record<TToastType, React.ReactNode> = {
    success: <IconCircleCheckFilled />,
    error: <IconExclamationCircle />,
    info: <IconInfoCircleFilled />,
    chatMessage: <IconMessageCircle2Filled />,
};
