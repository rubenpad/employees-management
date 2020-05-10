import styled, { css } from 'styled-components';
import { colors } from '../../styles';

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
