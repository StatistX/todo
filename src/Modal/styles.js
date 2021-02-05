import styled from 'styled-components';

import CloseIcon from '../Assets/images/close-icon-round.svg';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalContent = styled('div')`
  height: 200px;
  width: 200px;
  background-color: white;
  position: relative;
  z-index: 2;
`;

export const CloseModal = styled.div`
  display: block;
  position: absolute;
  right: -45px;
  top: 0;
  height: 34px;
  width: 34px;
  background: url(${CloseIcon}) no-repeat center;
  cursor: pointer;
`;