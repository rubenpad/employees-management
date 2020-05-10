import styled from 'styled-components';
import { responsive, colors } from '../../styles/index';

export const HeaderContainer = styled.header`
  padding: 12px;
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

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logout = styled.button`
  margin: 0 12px 0 0;
  padding: 4px 8px;
  background: ${colors.dark};
  border: 1px solid ${colors.white};
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${colors.white};
    color: ${colors.dark};
  }
`;

export const LogoImage = styled.img`
  width: 56px;
`;
