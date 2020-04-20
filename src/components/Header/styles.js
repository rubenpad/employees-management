import styled from 'styled-components';
import { responsive, colors } from '../../styles/index';

export const HeaderContainer = styled.header`
  padding: 16px;
  background: ${colors.dark};

  ${responsive.mediumL`
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
