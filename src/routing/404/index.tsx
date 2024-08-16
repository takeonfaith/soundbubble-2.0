import { IconError404 } from '@tabler/icons-react';
import { PageMessage } from '../../shared/components/pageMessage';

export const Page404 = () => {
    return (
        <PageMessage
            icon={IconError404}
            title="Page not found"
            description="Please try another time"
        />
    );
};
