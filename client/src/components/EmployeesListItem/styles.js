import styled from 'styled-components';
import { responsive, colors } from '../../styles/index';

export const ItemContainer = styled.div`
  width: 100%;
  margin: 12px 0;
  padding: 16px;
  background: ${colors.white};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const ItemContent = styled.div`
  display: grid;
  grid-template-rows: autofill;

  ${responsive.medium`
    grid-template-columns: 20% 60% 20%;
    align-items: center;
  `}

  img {
    width: 100px;
    height: 100px;
    justify-self: center;
  }
`;

export const Information = styled.div`
  margin: 16px;
  display: grid;
  grid-template-rows: autofill;
  grid-gap: 8px;
  text-align: center;

  ${responsive.medium`
    text-align: left;
  `}
`;

export const Action = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 50%);

  a,
  button {
    margin: 8px 0;
    border-radius: 4px;
    text-align: center;
  }

  a {
    padding: 12px 16px;
    background: ${colors.white};
    border: 1px solid ${colors.dark};
    font-weight: bold;

    :hover {
      background: ${colors.dark};
      color: ${colors.light};
      border: 1px solid ${colors.dark};
    }
  }

  button {
    background: ${colors.error};
    color: ${colors.dark};
    cursor: pointer;
    transition: all 0.5s ease;
    font-weight: bold;
    letter-spacing: 1px;

    :hover {
      background: ${colors.error};
    }
  }
`;
