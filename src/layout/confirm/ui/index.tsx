import { DefaultButton } from '../../../shared/components/button/DefaultButton';
import { CloseButton } from '../../../shared/components/closeButton';
import { Flex } from '../../../shared/components/flex';
import { Subtext } from '../../../shared/components/subtext';
import { ModalBackground } from '../../modal/styles';
import { confirmModel } from '../model';
import { ConfirmButtons, ConfirmIcon, ConfirmStyled } from './styles';

export const Confirm = () => {
    const { isOpen, text, subtext, onAccept, onReject, icon, iconColor } =
        confirmModel.useConfirm();

    const handleClose = () => {
        confirmModel.events.close();
    };

    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ConfirmStyled>
                <CloseButton onClick={handleClose} />
                {icon && <ConfirmIcon color={iconColor}>{icon}</ConfirmIcon>}
                <Flex d="column" gap={10}>
                    <h3>{text || 'Are you sure you want to proceed?'}</h3>
                    {subtext && (
                        <Subtext style={{ fontSize: '1rem' }}>
                            {subtext}
                        </Subtext>
                    )}
                </Flex>
                <ConfirmButtons>
                    <DefaultButton onClick={onReject ?? handleClose}>
                        No
                    </DefaultButton>
                    <DefaultButton onClick={onAccept} appearance="primary">
                        Yes
                    </DefaultButton>
                </ConfirmButtons>
            </ConfirmStyled>
        </ModalBackground>
    );
};
