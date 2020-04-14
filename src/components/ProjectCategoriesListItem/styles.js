import styled from 'styled-components';
import theme from '../../styles/theme';

export const Item = styled.li`
  padding: ${theme.spaces[2]};
  cursor: pointer;
  user-select: none;

  :hover {
    color: ${theme.colors.light};
    background: ${theme.colors.dark};
  }
`;
