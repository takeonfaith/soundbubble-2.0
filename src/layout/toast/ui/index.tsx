import { toastModel } from '../model';
import { ToastItem } from './ToastItem';

export const Toast = () => {
    const toasts = toastModel.useToast();

    return (
        <>
            {toasts.map((toast, i) => {
                return <ToastItem toast={toast} index={i} key={toast.id} />;
            })}
        </>
    );
};
