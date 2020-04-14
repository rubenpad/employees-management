import styled from 'styled-components';
import theme from '../../styles/theme';
import { above } from '../../styles/index';

export const ListContainer = styled.div`
  width: 100%;
  padding: ${theme.spaces[3]};

  ${above.medium`
    box-shadow: 0 0 ${theme.spaces[2]} rgba(0, 0, 0, 0.3);
  `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: autofill;

  h2 {
    width: 100%;
    font-size: ${theme.fontSize[5]};
    text-transform: uppercase;
    user-select: none;
  }

  ul {
    margin-top: ${theme.spaces[3]};
  }
`;
