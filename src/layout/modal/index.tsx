import { CloseButton } from "@components/closeButton";
import {
  ModalBackground,
  ModalStyled,
  ModalTitle,
  ModalContent,
} from "./style";
import { modalModel } from "./model";

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
