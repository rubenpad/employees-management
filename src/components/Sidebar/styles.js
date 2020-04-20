import styled from 'styled-components';
import { responsive } from '../../styles/index';

export const Container = styled.aside`
  padding: 16px;

  ${responsive.medium`
    grid-column: 1 / 2;
    grid-row: 2 / 3;

    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  `}
`;
