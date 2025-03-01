import { CloseButton } from '@components/closeButton';
import { IconChevronLeft } from '@tabler/icons-react';
import { translate } from '../../../i18n';
import { Button } from '../../../shared/components/button';
import { Flex } from '../../../shared/components/flex';
import { PageStack } from '../../../shared/components/pageStack';
import { modalModel } from '../model';
import { SIZES } from '../model/constants';
import {
    ModalBackground,
    ModalContent,
    ModalHeader,
    ModalStyled,
    ModalTitle,
} from './styles';

export const Modal = () => {
    const [modals, slidingBack] = modalModel.useModal();
    const visibleModal = slidingBack ? modals.at(-2) : modals.at(-1);

    if (!modals.length) return null;

    const handleClose = () => {
        modalModel.events.close();
    };

    return (
        <ModalBackground onClick={handleClose}>
            <ModalStyled
                role="dialog"
                width={`${SIZES[visibleModal?.sizeX ?? 's']}px`}
                height={`${SIZES[visibleModal?.sizeY ?? 's']}px`}
                onClick={(e) => e.stopPropagation()}
            >
                <PageStack
                    pages={modals}
                    slidingBack={slidingBack}
                    getHeader={(title, isNotFirstPage, index) => {
                        return (
                            <ModalHeader>
                                <CloseButton onClick={handleClose} />
                                <Flex width="100%" gap={10}>
                                    {isNotFirstPage && (
                                        <Button
                                            $width="fit-content"
                                            $height="30px"
                                            onClick={() =>
                                                modalModel.events.back()
                                            }
                                            disabled={slidingBack}
                                            className="back-btn"
                                        >
                                            <IconChevronLeft />
                                            <span>
                                                {modals[index - 1].title === ''
                                                    ? translate('back')
                                                    : modals[index - 1].title}
                                            </span>
                                        </Button>
                                    )}
                                    <ModalTitle
                                        className={`${
                                            isNotFirstPage ? 'center' : ''
                                        } `}
                                    >
                                        {title}
                                    </ModalTitle>
                                </Flex>
                            </ModalHeader>
                        );
                    }}
                    getContent={(content) => {
                        return <ModalContent>{content}</ModalContent>;
                    }}
                />
            </ModalStyled>
        </ModalBackground>
    );
};
