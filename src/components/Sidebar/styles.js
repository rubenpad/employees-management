import styled from 'styled-components';
import theme from '../../styles/theme';
import { above } from '../../styles/index';

export const Container = styled.aside`
  padding: ${theme.spaces[5]} ${theme.spaces[4]};

  ${above.medium`
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  `}
`;
