import { useTheme } from 'styled-components';
import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { CloseButton } from '../../../shared/components/closeButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { ModalBackground } from '../../modal/ui/styles';
import { confirmModel } from '../model';
import { ConfirmButtons, ConfirmIcon, ConfirmStyled } from './styles';
import { translate } from '../../../i18n';

export const Confirm = () => {
    const theme = useTheme();
    const { isOpen, text, subtext, onAccept, onReject, icon, iconColor } =
        confirmModel.useConfirm();

    const handleClose = () => {
        confirmModel.events.close();
    };

    const handleAccept = () => {
        onAccept?.();
        handleClose();
    };

    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ConfirmStyled>
                <CloseButton onClick={handleClose} />
                {icon && (
                    <ConfirmIcon
                        color={iconColor && theme.scheme[iconColor].main}
                    >
                        {icon}
                    </ConfirmIcon>
                )}
                <Flex d="column" gap={10} width="100%">
                    <h3>{text || 'Are you sure you want to proceed?'}</h3>
                    {subtext && (
                        <Subtext style={{ fontSize: '1rem' }}>
                            {subtext}
                        </Subtext>
                    )}
                </Flex>
                <ConfirmButtons>
                    <DefaultButton
                        onClick={onReject ?? handleClose}
                        appearance="outline"
                    >
                        {translate('no')}
                    </DefaultButton>
                    <DefaultButton onClick={handleAccept} appearance="primary">
                        {translate('yes')}
                    </DefaultButton>
                </ConfirmButtons>
            </ConfirmStyled>
        </ModalBackground>
    );
};
