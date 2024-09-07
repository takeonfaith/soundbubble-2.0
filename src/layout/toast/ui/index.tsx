import { userModel } from '../../../entities/user/model';
import { CloseButton } from '../../../shared/components/closeButton';
import { Flex } from '../../../shared/components/flex';
import { Timer } from '../../../shared/components/timer';
import { modalModel } from '../../modal/model';
import { toastModel } from '../model';
import { TOAST_ICONS } from '../model/constants';
import { ToastButton, ToastStyled, ReasonStyled } from './styles';

export const Toast = () => {
    const { message, isShow, type, action, duration, showTimer, reason } =
        toastModel.useToast();
    const [{ data }] = userModel.useUser();

    const handleOpenReason = () => {
        modalModel.events.open({
            title: 'Failure reason',
            content: <ReasonStyled>{reason}</ReasonStyled>,
            sizeX: 's',
            sizeY: 's',
        });
    };

    return (
        <ToastStyled className={`${isShow ? 'show' : ''} ${type}`}>
            <Flex width="100%" gap={10}>
                {showTimer && (
                    <Timer
                        duration={(duration ?? 0) / 1000}
                        format="seconds"
                        isGoing={isShow}
                        size={8}
                    />
                )}
                {!showTimer && <div className="icon">{TOAST_ICONS[type]}</div>}
                {message}
            </Flex>
            {action && (
                <ToastButton
                    $height="25px"
                    style={{ padding: '0 10px' }}
                    $width="fit-content"
                    onClick={() => {
                        toastModel.events.hide();
                        action?.onClick();
                    }}
                >
                    {action.icon}
                    {action?.text}
                </ToastButton>
            )}
            {data?.isAdmin && reason && (
                <ToastButton
                    $height="25px"
                    style={{ padding: '0 10px' }}
                    $width="fit-content"
                    onClick={handleOpenReason}
                >
                    Reason
                </ToastButton>
            )}
            <CloseButton onClick={() => toastModel.events.hide()} />
        </ToastStyled>
    );
};
