import styled from 'styled-components';
import { above } from '../../styles/index';
import theme from '../../styles/theme';

export const Container = styled.div`
  padding: ${theme.spaces[4]};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

  ${above.medium`
    grid-column: 2 / 3;
     grid-row: 2 / 3;
  `}
`;

export const Top = styled.div`
  width: 100%;
  margin-bottom: ${theme.spaces[5]};
  padding-top: ${theme.spaces[5]};
  display: grid;
  align-items: center;
  
  ${above.medium`
    padding-right: ${theme.spaces[5]};
    grid-template-columns: 70% 30%;
  `}
`;

export const Button = styled.a`
  display: none;

  ${above.medium`
    display: inline;
    margin-top: ${theme.spaces[4]};
    padding: ${theme.spaces[2]} ${theme.spaces[4]};
    background: ${theme.colors.dark};
    color: ${theme.colors.light};
    border-radius: ${theme.spaces[1]};
    text-align: center;
    cursor: pointer;
    justify-self: end;
  `}
`;

export const SearchLabel = styled.label`
  width: 100%;
  margin-bottom: ${theme.spaces[3]};
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    margin-top: ${theme.spaces[2]};
    padding: ${theme.spaces[3]} ${theme.spaces[2]};
    border-radius: ${theme.spaces[1]};
    outline: 0;
    border: 0.5px solid ${theme.colors.dark};
  }

  ${above.medium`
    margin: 0;

  `}
`;
