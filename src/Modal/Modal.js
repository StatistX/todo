import React from 'react';
import * as styles from './styles';

const Modal = ({ onShowModal }) => {
  return (
    <styles.ModalWrapper onClick={onShowModal}>
      <styles.ModalContent onClick={(e) => e.stopPropagation()}>
        <styles.CloseModal onClick={onShowModal}/>
        Hello
      </styles.ModalContent>
    </styles.ModalWrapper>
  )
};

export default Modal;