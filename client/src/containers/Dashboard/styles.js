import styled from 'styled-components';
import { responsive } from '../../styles/index';

export const DashboardContainer = styled.div`
  ${responsive.mediumL`
    display: grid;
    grid-template-columns: 320px auto;
  `}
`;
