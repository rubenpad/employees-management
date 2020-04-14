import styled from 'styled-components';
import theme from '../../styles/theme';
import { above } from '../../styles/index';

export const ItemContainer = styled.div`
  width: 100%;
  margin: ${theme.spaces[3]} 0;
  padding: ${theme.spaces[4]};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.5s all ease;

  :hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;

export const ItemContent = styled.div`
  display: grid;
  grid-template-rows: autofill;

  ${above.medium`
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
  margin: ${theme.spaces[4]};
  display: grid;
  grid-template-rows: autofill;
  grid-gap: ${theme.spaces[2]};
  text-align: center;

  ${above.medium`
    text-align: left;
  `}
`;

export const Action = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 50%);

  a,
  button {
    margin: ${theme.spaces[2]} 0;
    padding: ${theme.spaces[2]} ${theme.spaces[4]};
    border-radius: ${theme.spaces[1]};
    text-align: center;
  }

  a {
    background: ${theme.colors.light};
    border: 1px solid ${theme.colors.dark};

    :hover {
      background: ${theme.colors.dark};
      color: ${theme.colors.light};
      border: 1px solid ${theme.colors.dark};
    }
  }

  button {
    background: ${theme.colors.primary};
    color: ${theme.colors.dark};
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }
  }
`;
