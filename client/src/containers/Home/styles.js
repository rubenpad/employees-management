import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { responsive, colors } from '../../styles/index';

export const HomeContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  text-align: center;
`;

export const Menu = styled.div`
  grid-row: 2 / 3;
  justify-self: center;
  width: 100%;
  max-width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 24px;
  }

  ${responsive.medium`
    flex-direction: row;

    h1 {
      margin: 0;
    }
  `}
`;

export const Link = styled(LinkRouter)`
  align-self: center;
  width: 50%;
  margin: 12px 0;
  padding: 12px 16px;
  background: ${colors.primary};
  border-radius: 4px;
  font-size: 16px;

  ${responsive.medium`
    margin: 0 12px;
  `}
`;
