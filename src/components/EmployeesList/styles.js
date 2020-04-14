import styled from 'styled-components';
import { above } from '../../styles/index';
import theme from '../../styles/theme';

export const Container = styled.div`
  padding: ${theme.spaces[4]};

  ${above.medium`
    grid-column: 2 / 3;
     grid-row: 2 / 3;
  `}
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${above.medium`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Button = styled.a`
  padding: ${theme.spaces[2]} ${theme.spaces[4]};
  background: ${theme.colors.primary};
  color: ${theme.colors.dark};
  border-radius: ${theme.spaces[1]};
  text-align: center;

  ${above.medium`
    margin: 0;
  `}
`;

export const Search = styled.input`
  width: 100%;
  margin-bottom: ${theme.spaces[2]};
  padding: ${theme.spaces[2]} ${theme.spaces[2]};
  border-radius: ${theme.spaces[1]};
  outline: 0;
  border: 1px solid ${theme.colors.alter};

  ${above.medium`
    width: 60%;
    margin: 0;
  `}
`;
