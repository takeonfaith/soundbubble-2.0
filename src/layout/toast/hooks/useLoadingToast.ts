import getUID from '../../../shared/funcs/getUID';
import { toastModel } from '../model';

export const useLoadingToast = (
    action: () => Promise<void>,
    successMessage = 'Success'
) => {
    const onClick = async () => {
        const id = getUID();

        toastModel.events.add({
            type: 'loading',
            message: 'Loading...',
            id,
            duration: 50000,
        });
        try {
            await action();
            toastModel.events.add({
                type: 'success',
                message: successMessage,
            });
        } catch (err) {
            toastModel.events.add({
                type: 'error',
                message: 'Something went wrong',
                reason: (err as unknown as Error).message,
            });
        } finally {
            toastModel.events.clear(id);
        }
    };

    return onClick;
};
