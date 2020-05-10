import React from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalBox, ModalContent, CloseButton } from './styles';

const Modal = ({ children, modalMode, closeModal }) => {
  if (!modalMode) return null;

  return createPortal(
    <Overlay>
      <ModalBox>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalBox>
    </Overlay>,
    document.getElementById('modal')
  );
};

export default Modal;
