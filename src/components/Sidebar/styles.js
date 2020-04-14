import styled from 'styled-components';
import theme from '../../styles/theme';
import { above } from '../../styles/index';

export const Container = styled.aside`
  padding: ${theme.spaces[4]};
  align-self: center;

  ${above.medium`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  `}
`;
