import { UserCover } from '../../../entities/user/ui/UserCover';
import { CloseButton } from '../../../shared/components/closeButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { Timer } from '../../../shared/components/timer';
import { modalModel } from '../../modal/model';
import { toastModel } from '../model';
import { TOAST_HEIGHT, TOAST_ICONS } from '../model/constants';
import { TToast } from '../model/types';
import { ReasonStyled, ToastButton, ToastStyled } from './styles';

type Props = {
    toast: TToast;
    index: number;
};

export const ToastItem = ({ toast, index }: Props) => {
    const {
        id,
        title,
        message,
        type,
        action,
        duration,
        showTimer,
        reason,
        isShow,
        photo,
        time,
        onClick,
    } = toast;

    const handleOpenReason = () => {
        modalModel.events.open({
            title: 'Failure reason',
            content: <ReasonStyled>{reason}</ReasonStyled>,
            sizeX: 's',
            sizeY: 's',
        });
    };

    const handleHide = () => {
        toastModel.events.hide(id);
    };

    const handleClick = () => {
        if (onClick) {
            handleHide();
            onClick();
        } else return undefined;
    };

    return (
        <ToastStyled
            className={`${!isShow ? 'hide' : ''} ${type} ${
                onClick ? 'clickable' : ''
            }`}
            key={id}
            style={{
                transform: `translateY(${index * TOAST_HEIGHT}px)`,
            }}
            onClick={handleClick}
        >
            {photo !== undefined && (
                <UserCover
                    src={photo}
                    size={'40px'}
                    colors={[]}
                    isAuthor={false}
                />
            )}
            <Flex gap={2} d="column" ai="flex-start">
                {title && (
                    <Flex width="100%" jc="space-between" padding="0 35px 0 0">
                        <h4>{title}</h4>
                        <Subtext
                            style={{ fontSize: '0.6rem', fontWeight: 400 }}
                        >
                            {time}
                        </Subtext>
                    </Flex>
                )}
                <Flex width="100%" gap={10}>
                    {showTimer && (
                        <Timer
                            duration={(duration ?? 0) / 1000}
                            format="seconds"
                            isGoing={isShow}
                            size={8}
                        />
                    )}
                    {!showTimer && (
                        <div className="icon">{TOAST_ICONS[type]}</div>
                    )}

                    <span className={title ? 'hasTitle' : ''}>{message}</span>
                </Flex>
            </Flex>
            {action && (
                <ToastButton
                    $height="25px"
                    style={{ padding: '0 10px' }}
                    $width="fit-content"
                    onClick={() => {
                        handleHide();
                        action?.onClick();
                    }}
                >
                    {action.icon}
                    {action?.text}
                </ToastButton>
            )}
            {reason && (
                <ToastButton
                    $height="25px"
                    style={{ padding: '0 10px' }}
                    $width="fit-content"
                    onClick={handleOpenReason}
                >
                    Reason
                </ToastButton>
            )}
            <CloseButton onClick={handleHide} />
        </ToastStyled>
    );
};
