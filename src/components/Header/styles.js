import styled from 'styled-components';
import theme from '../../styles/theme';
import { above } from '../../styles/index';

export const HeaderContainer = styled.header`
  padding: ${theme.spaces[8]} ${theme.spaces[16]};
  background: ${theme.colors.dark};

  ${above.mediumL`
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 80px;
`;
