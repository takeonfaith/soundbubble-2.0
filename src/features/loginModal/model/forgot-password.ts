import { Database } from '../../../database';
import { effectorForm } from '../../../shared/effector/form';

export const { useForm } = effectorForm({
    email: {
        init: '',
        required: true,
        type: 'email',
        asyncValidation: async (email) => {
            const isTaken = await Database.Users.checkIfEmailIsTaken(email);
            return !isTaken ? 'Email not found' : '';
        },
    },
});
