import styled from 'styled-components';
import { colors } from '../../styles/index';

export const Item = styled.li`
  padding: 8px;
  cursor: pointer;
  user-select: none;

  :hover {
    color: ${colors.light};
    background: ${colors.dark};
  }
`;
