import { CloseButton } from "@components/closeButton";
import { modalModel } from "./model";
import {
  ModalBackground,
  ModalContent,
  ModalStyled,
  ModalTitle
} from "./style";

export const Modal = () => {
  const { opened, title, content } = modalModel.useModal();

  if (!opened) return null;

  const handleClose = () => {
    modalModel.events.close();
  };

  return (
    <ModalBackground>
      <ModalStyled>
        <CloseButton onClick={handleClose} />
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
      </ModalStyled>
    </ModalBackground>
  );
};
