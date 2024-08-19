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
    const [{ data }, loading] = userModel.useUser();
    const [showSlowInternetMessage, setShowSlowInternetMessage] =
        useState(false);
    const [timeoutError, setTimeoutError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (!data) {
                setShowSlowInternetMessage(true);
            }
        }, TIMEOUTS.slowInternetMessage);

        setTimeout(() => {
            if (!data) {
                setTimeoutError(true);
            }
        }, TIMEOUTS.fullStop);
    }, [data]);

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
