import styled from 'styled-components';
import { colors } from '../../styles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  max-width: 400px;
  height: 400px;
  padding: 12px;
  background: white;
  border-radius: 4px;
  text-align: center;
  position: relative;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${colors.black};
  font-size: 20px;
  font-weight: bold;
`;
