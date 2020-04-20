import styled from 'styled-components';
import { responsive } from '../../styles/index';

export const DashboardContainer = styled.div`
  ${responsive.mediumL`
    display: grid;
    grid-template-columns: 380px auto;
    grid-template-rows: 80px auto;
  `}
`;
