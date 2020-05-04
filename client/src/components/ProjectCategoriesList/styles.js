import styled, { css } from 'styled-components';
import { responsive } from '../../styles/';

export const ListContainer = styled.div`
  width: 100%;
  padding: 16px;
  transition: all 0.3 ease;

  position: sticky;
  top: 5px;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;

  h2 {
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
    user-select: none;
  }

  label {
    user-select: none;
    cursor: pointer;
    font-size: 24px;
    transition: all 0.3s ease-in-out;
    transform: rotate(-90deg);
  }

  input {
    position: absolute;
    right: 0;
    visibility: hidden;

    &:checked + label {
      transform: rotate(90deg);
    }
  }

  ${responsive.medium`
    label, input {
      display: none;
    }
  `}
`;

export const Ul = styled.ul`
  display: none;
  margin-top: 16px;

  ${props =>
    props.open &&
    css`
      display: block;
    `}

  ${responsive.medium`
    display: block;
  `}
`;

export const Item = styled.li`
  padding: 8px;
  cursor: pointer;
  user-select: none;

  input {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
`;
