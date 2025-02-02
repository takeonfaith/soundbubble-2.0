import { useEffect, useState } from 'react';
import { userModel } from '../../entities/user/model';
import { Loading } from '../../shared/components/loading';
import { Logo } from '../../shared/components/logo';
import { InitialLoadingStyled } from './styles';
import { Subtext } from '../../shared/components/subtext';

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

        if (currentUser) {
            setShowSlowInternetMessage(false);
            setTimeoutError(false);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        }

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [currentUser]);

    return (
        <InitialLoadingStyled className={loading ? 'loading' : 'loaded'}>
            <Logo short />
            {!timeoutError && showSlowInternetMessage && (
                <Subtext>
                    It seems like You have slow internet connection...
                </Subtext>
            )}
            {timeoutError && (
                <Subtext>
                    Failed to load Soundbubble. Please try again later
                </Subtext>
            )}
            {loading && <Loading />}
        </InitialLoadingStyled>
    );
};
