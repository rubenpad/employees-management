import styled, { css } from 'styled-components';
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
  text-align: left;
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

export const ModalDelete = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    margin: 16px 0 0 0;
  }
`;

export const Error = styled.p`
  margin: 12px 0 0 0;
  color: ${colors.error};
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 0 8px;
  padding: 12px 16px;
  border-radius: 4px;
  background: ${colors.black};
  color: ${colors.white};
  cursor: pointer;
  font-weight: bold;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.danger &&
    css`
      background: ${colors.error};
    `}
`;
