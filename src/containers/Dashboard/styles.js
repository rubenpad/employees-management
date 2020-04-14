import styled from 'styled-components';
import { above } from '../../styles/index';

export const DashboardContainer = styled.div`
  ${above.mediumL`
    display: grid;
    grid-template-columns: 380px auto;
    grid-template-rows: 80px auto;
  `}
`;
