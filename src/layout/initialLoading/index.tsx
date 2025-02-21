import { IconExclamationCircle, IconReload } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { userModel } from '../../entities/user/model';
import { Button } from '../../shared/components/button';
import { Loading } from '../../shared/components/loading';
import { Logo } from '../../shared/components/logo';
import { PageMessage } from '../../shared/components/pageMessage';
import { Subtext } from '../../shared/components/subtext';
import { InitialLoadingStyled } from './styles';

const TIMEOUTS = {
    slowInternetMessage: 15000,
    fullStop: 25000,
};

export const InitialLoading = () => {
    const [currentUser, loading] = userModel.useUser();
    const [showSlowInternetMessage, setShowSlowInternetMessage] =
        useState(false);
    const [timeoutError, setTimeoutError] = useState(false);

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            if (!currentUser) {
                setShowSlowInternetMessage(true);
            }
        }, TIMEOUTS.slowInternetMessage);

        const timeout2 = setTimeout(() => {
            if (!currentUser) {
                setTimeoutError(true);
            }
        }, TIMEOUTS.fullStop);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            setShowSlowInternetMessage(false);
            setTimeoutError(false);
        };
    }, [currentUser]);

    return (
        <InitialLoadingStyled className={loading ? 'loading' : 'loaded'}>
            {!timeoutError && <Logo short />}
            {!timeoutError && showSlowInternetMessage && (
                <Subtext>
                    It seems like You have slow internet connection...
                </Subtext>
            )}
            {timeoutError && (
                <PageMessage
                    icon={IconExclamationCircle}
                    title={'Connection failed'}
                    description={'Try again later'}
                >
                    <Button className="outline">
                        <IconReload />
                        Reload
                    </Button>
                </PageMessage>
            )}
            {!timeoutError && loading && <Loading />}
        </InitialLoadingStyled>
    );
};
