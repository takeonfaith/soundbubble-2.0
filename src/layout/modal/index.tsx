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
        <ModalTitle>{title}</ModalTitle>
        <CloseButton onClick={handleClose} />
        <ModalContent>{content}</ModalContent>
      </ModalStyled>
    </ModalBackground>
  );
};
