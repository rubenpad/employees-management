import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { responsive, colors } from '../../styles/index';

export const Container = styled.div`
  padding: 16px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

  ${responsive.medium`
    grid-column: 2 / 3;
     grid-row: 2 / 3;
  `}
`;

export const Top = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding-top: 20px;
  display: grid;
  align-items: center;

  ${responsive.medium`
    padding-right: 20px;
    grid-template-columns: 70% 30%;
  `}
`;

export const Link = styled(LinkRouter)`
  display: inline;
  padding: 8px 16px;
  background: ${colors.dark};
  color: ${colors.light};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  justify-self: end;
`;

export const SearchLabel = styled.label`
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    margin-top: 8px;
    padding: 16px 0 16px 12px;
    border-radius: 4px;
    outline: 0;
    border: 0.5px solid ${colors.dark};
  }

  ${responsive.medium`
    margin: 0;
  `}
`;
